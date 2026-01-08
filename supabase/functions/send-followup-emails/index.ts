import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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

const FOLLOWUP_DAYS = {
  first: 1,
  second: 3,
  third: 7,
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Starting follow-up email job...");
    
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase credentials");
    }

    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);
    const now = new Date();

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

      // Generate email content based on follow-up type
      const emailContent = generateEmailContent(lead, followupType);

      try {
        await resend.emails.send({
          from: "BrightLaunchIQ <onboarding@resend.dev>",
          to: [lead.email],
          subject: emailContent.subject,
          html: emailContent.html,
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

function generateEmailContent(lead: Lead, type: "first" | "second" | "third") {
  const baseStyles = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  `;

  const buttonStyle = `
    display: inline-block;
    background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    margin: 20px 0;
  `;

  if (type === "first") {
    return {
      subject: `Quick question about your AEO score (${lead.overall_score}/100)`,
      html: `
        <div style="${baseStyles}">
          <h2 style="color: #1a1a2e;">Hi there,</h2>
          <p>Yesterday you checked your AI search visibility for <strong>${lead.business_name}</strong> and scored <strong>${lead.overall_score}/100</strong>.</p>
          <p>I noticed there's significant room for improvement—your potential score is <strong>${lead.potential_score}/100</strong>.</p>
          <p>Quick question: <em>Is improving your visibility on ChatGPT, Gemini, and voice search a priority for you right now?</em></p>
          <p>If so, I'd love to show you exactly how we can boost your score in the next 30 days.</p>
          <a href="https://brightlaunchiq.com/get-started" style="${buttonStyle}">Let's Talk</a>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Best,<br>
            The BrightLaunchIQ Team
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px;">
            You received this because you requested an AEO audit for ${lead.business_name}.
          </p>
        </div>
      `,
    };
  }

  if (type === "second") {
    return {
      subject: `Your competitors might be ahead—here's why`,
      html: `
        <div style="${baseStyles}">
          <h2 style="color: #1a1a2e;">Quick update for ${lead.business_name}</h2>
          <p>A few days ago, you discovered your AI search score was <strong>${lead.overall_score}/100</strong>.</p>
          <p>Here's what's happening while you're reading this:</p>
          <ul style="color: #444; line-height: 1.8;">
            <li>AI assistants like ChatGPT and Gemini are answering customer questions about your industry</li>
            <li>Voice searches for local services are happening every second</li>
            <li>Businesses optimizing for AI search are getting those referrals</li>
          </ul>
          <p>The good news? With a potential score of <strong>${lead.potential_score}/100</strong>, you can catch up fast.</p>
          <p>Our LocalLift™ service is designed specifically for businesses like yours.</p>
          <a href="https://brightlaunchiq.com/products/locallift" style="${buttonStyle}">See How LocalLift™ Works</a>
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Best,<br>
            The BrightLaunchIQ Team
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #999; font-size: 12px;">
            You received this because you requested an AEO audit for ${lead.business_name}.
          </p>
        </div>
      `,
    };
  }

  // Third follow-up
  return {
    subject: `Last chance: Boost your AI visibility from ${lead.overall_score} to ${lead.potential_score}`,
    html: `
      <div style="${baseStyles}">
        <h2 style="color: #1a1a2e;">Final check-in for ${lead.business_name}</h2>
        <p>It's been a week since you discovered your AEO score was <strong>${lead.overall_score}/100</strong>.</p>
        <p>I wanted to reach out one more time because I genuinely believe there's an opportunity here.</p>
        <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0;">
          <p style="margin: 0 0 10px; font-weight: bold; color: #1a1a2e;">Your AEO snapshot:</p>
          <p style="margin: 5px 0; color: #666;">Current Score: <strong style="color: #ef4444;">${lead.overall_score}/100</strong></p>
          <p style="margin: 5px 0; color: #666;">Potential Score: <strong style="color: #10b981;">${lead.potential_score}/100</strong></p>
          <p style="margin: 5px 0; color: #666;">Improvement: <strong style="color: #8b5cf6;">+${lead.potential_score - lead.overall_score} points</strong></p>
        </div>
        <p>If you're ready to start dominating AI search results, we're here to help.</p>
        <p>If not, no worries—this will be my last email. I wish you all the best with ${lead.business_name}!</p>
        <a href="https://brightlaunchiq.com/get-started" style="${buttonStyle}">Start My AEO Optimization</a>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          Cheers,<br>
          The BrightLaunchIQ Team
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #999; font-size: 12px;">
          You received this because you requested an AEO audit for ${lead.business_name}. This is our final follow-up.
        </p>
      </div>
    `,
  };
}
