import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";
import DOMPurify from "https://esm.sh/isomorphic-dompurify@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Sanitization config for email-safe HTML
const SANITIZE_CONFIG = {
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li',
    'h1', 'h2', 'h3', 'h4', 'div', 'span', 'table', 'tr',
    'td', 'th', 'tbody', 'thead', 'hr', 'img'
  ],
  ALLOWED_ATTR: ['href', 'style', 'class', 'src', 'alt', 'width', 'height'],
  ALLOW_DATA_ATTR: false,
  FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'base'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
};

interface Lead {
  id: string;
  email: string;
  business_name: string;
  overall_score: number;
  potential_score: number;
  created_at: string;
  followup_1_sent_at: string | null;
  followup_2_sent_at: string | null;
  followup_3_sent_at: string | null;
  converted: boolean;
}

interface EmailTemplate {
  template_key: string;
  subject: string;
  body_html: string;
}

const FOLLOWUP_DAYS = {
  first: 1,
  second: 3,
  third: 7,
};

const TEMPLATE_KEYS = {
  first: "followup_day_1",
  second: "followup_day_3",
  third: "followup_day_7",
};

// HTML escape function to prevent XSS
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  return text.replace(/[&<>"'/]/g, char => map[char]);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting follow-up email job...");
    
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const cronSecret = Deno.env.get("CRON_SECRET");

    if (!supabaseUrl || !supabaseServiceKey || !supabaseAnonKey) {
      throw new Error("Missing Supabase credentials");
    }

    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    // Authentication check: Allow either admin JWT or CRON_SECRET
    const authHeader = req.headers.get("Authorization");
    let isAuthorized = false;

    // Option 1: Check for CRON_SECRET (for scheduled jobs)
    if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
      console.log("Authorized via CRON_SECRET");
      isAuthorized = true;
    }

    // Option 2: Check for admin JWT (for manual triggers from admin panel)
    if (!isAuthorized && authHeader?.startsWith("Bearer ")) {
      const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
        global: { headers: { Authorization: authHeader } },
      });

      const token = authHeader.replace("Bearer ", "");
      const { data: claimsData, error: claimsError } = await supabaseClient.auth.getClaims(token);
      
      if (!claimsError && claimsData?.claims?.sub) {
        const userId = claimsData.claims.sub;
        // Check if user has admin role
        const { data: isAdmin } = await supabaseClient.rpc("has_role", {
          _user_id: userId,
          _role: "admin",
        });

        if (isAdmin) {
          console.log("Authorized via admin JWT");
          isAuthorized = true;
        }
      }
    }

    if (!isAuthorized) {
      console.error("Unauthorized access attempt");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);
    const now = new Date();

    // Fetch email templates
    const { data: templates, error: templateError } = await supabase
      .from("email_templates")
      .select("template_key, subject, body_html");

    if (templateError) {
      console.error("Error fetching templates:", templateError);
      throw new Error("Failed to fetch email templates");
    }

    const templateMap: Record<string, EmailTemplate> = {};
    for (const template of templates || []) {
      templateMap[template.template_key] = template;
    }

    // Fetch leads that haven't converted and need follow-ups
    const { data: leads, error: fetchError } = await supabase
      .from("aeo_audit_leads")
      .select("*")
      .eq("converted", false);

    if (fetchError) {
      throw new Error(`Failed to fetch leads: ${fetchError.message}`);
    }

    console.log(`Found ${leads?.length || 0} unconverted leads`);

    let sent = { first: 0, second: 0, third: 0 };

    for (const lead of leads || []) {
      const createdAt = new Date(lead.created_at);
      const daysSinceCreation = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

      // Determine which follow-up to send
      let followupType: "first" | "second" | "third" | null = null;
      let updateColumn: string | null = null;

      if (!lead.followup_1_sent_at && daysSinceCreation >= FOLLOWUP_DAYS.first) {
        followupType = "first";
        updateColumn = "followup_1_sent_at";
      } else if (lead.followup_1_sent_at && !lead.followup_2_sent_at && daysSinceCreation >= FOLLOWUP_DAYS.second) {
        followupType = "second";
        updateColumn = "followup_2_sent_at";
      } else if (lead.followup_2_sent_at && !lead.followup_3_sent_at && daysSinceCreation >= FOLLOWUP_DAYS.third) {
        followupType = "third";
        updateColumn = "followup_3_sent_at";
      }

      if (!followupType || !updateColumn) continue;

      // Get template for this follow-up type
      const templateKey = TEMPLATE_KEYS[followupType];
      const template = templateMap[templateKey];

      if (!template) {
        console.error(`Template not found: ${templateKey}`);
        continue;
      }

      // Replace variables in template with escaped values
      const variables: Record<string, string> = {
        business_name: escapeHtml(lead.business_name || ''),
        overall_score: escapeHtml(String(lead.overall_score || 0)),
        potential_score: escapeHtml(String(lead.potential_score || 0)),
        score_improvement: escapeHtml(String((lead.potential_score || 0) - (lead.overall_score || 0))),
        email: escapeHtml(lead.email || ''),
      };

      let subject = template.subject;
      // Sanitize the template HTML server-side before variable replacement
      let bodyHtml = DOMPurify.sanitize(template.body_html, SANITIZE_CONFIG);

      for (const [key, value] of Object.entries(variables)) {
        const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
        subject = subject.replace(regex, value);
        bodyHtml = bodyHtml.replace(regex, value);
      }

      try {
        await resend.emails.send({
          from: "Anthony from BrightLaunchIQ <onboarding@account.brightlaunchiq.com>",
          reply_to: "success@BrightLaunchIQ.com",
          to: [lead.email],
          subject,
          headers: {
            "List-Unsubscribe": "<mailto:unsubscribe@account.brightlaunchiq.com?subject=unsubscribe>",
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
          text: `Hi ${lead.business_name},\n\nYour AEO visibility score is ${lead.overall_score}/100 with a potential of ${lead.potential_score}/100.\n\nWant to improve it? Just reply to this email or visit https://brightlaunchiq.com/get-started\n\nAnthony\nBrightLaunchIQ\nSacramento, CA 95814\nReply "unsubscribe" to stop receiving emails.`,
          html: bodyHtml,
        });

        // Update the lead with the sent timestamp
        await supabase
          .from("aeo_audit_leads")
          .update({ [updateColumn]: now.toISOString() })
          .eq("id", lead.id);

        sent[followupType]++;
        console.log(`Sent ${followupType} follow-up to ${lead.email}`);
      } catch (emailError) {
        console.error(`Failed to send email to ${lead.email}:`, emailError);
      }
    }

    console.log(`Follow-up job complete. Sent: ${sent.first} first, ${sent.second} second, ${sent.third} third`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        sent,
        total: sent.first + sent.second + sent.third
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Follow-up job error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
