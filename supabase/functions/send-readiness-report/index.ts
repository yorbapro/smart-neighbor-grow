import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { emailFooterText } from "../_shared/email-footer.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ReportRequest {
  firstName: string;
  lastName: string;
  email: string;
  businessName: string;
  score: number;
  segment: string;
  headline: string;
  insights: string[];
  recommendations: string[];
  answers: Record<string, string>;
}

/** Strip HTML tags to produce plain text */
function htmlToPlainText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/?(ul|ol)[^>]*>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Replace {{variable}} placeholders in a string */
function replaceVars(template: string, vars: Record<string, string>): string {
  let result = template;
  for (const [key, value] of Object.entries(vars)) {
    result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), value);
  }
  return result;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReportRequest = await req.json();

    if (!data.email || !data.firstName || data.score === undefined) {
      throw new Error("Missing required fields");
    }

    // Extract dynamic fields from answers
    const customerValue = data.answers?.customerValue || "your average";
    const missedCalls = data.answers?.missedCallsPerDay || "several";
    const annualLossMatch = data.recommendations?.[0]?.match(/\$[\d,]+/);
    const annualLoss = annualLossMatch ? annualLossMatch[0] : `$${(data.score * 1000).toLocaleString()}`;

    // Try to load template from database
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    let subject = `Your Missed Call Results for ${data.businessName}`;
    let plainText = '';

    const templateVars: Record<string, string> = {
      first_name: data.firstName,
      last_name: data.lastName,
      business_name: data.businessName,
      annual_loss: annualLoss,
      missed_calls: String(missedCalls),
      customer_value: String(customerValue),
      score: String(data.score),
      segment: data.segment,
    };

    let templateLoaded = false;

    if (supabaseUrl && supabaseServiceKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { data: template } = await supabase
          .from("email_templates")
          .select("subject, body_html")
          .eq("template_key", "quiz_initial")
          .single();

        if (template) {
          subject = replaceVars(template.subject, templateVars);
          plainText = htmlToPlainText(replaceVars(template.body_html, templateVars));
          templateLoaded = true;
          console.log("Loaded quiz_initial template from database");
        }
      } catch (dbErr) {
        console.warn("Failed to load template from DB, using fallback:", dbErr);
      }
    }

    // Fallback to hardcoded content
    if (!templateLoaded) {
      plainText = `Hi ${data.firstName},

Here are the results from your Missed Call Revenue Calculator.

Based on the numbers you entered, ${data.businessName} may be losing an estimated ${annualLoss} per year from missed calls.

Here's what drove that number:

- You miss an average of ${missedCalls} calls per day
- Your average customer value is ${customerValue}
- 50% of missed callers typically contact a competitor immediately

When you're ready to review your options, feel free to call our Live AI Receptionist at 1-877-879-5552, or you can schedule a 15-minute call with a human here: https://brightlaunchiq.com/contact

— The BrightLaunchIQ Team` + emailFooterText();
    }

    const { error } = await resend.emails.send({
      from: "BrightLaunchIQ <results@brightlaunchiq.com>",
      to: [data.email],
      subject,
      reply_to: "results@brightlaunchiq.com",
      text: plainText,
      headers: {
        "List-Unsubscribe": "<mailto:results@brightlaunchiq.com?subject=unsubscribe>",
      },
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
    }

    // Send internal notification to team
    try {
      await resend.emails.send({
        from: "BrightLaunchIQ <results@brightlaunchiq.com>",
        to: ["success@BrightLaunchIQ.com", "brightlaunchiq@gmail.com"],
        subject: `New Readiness Assessment Lead: ${data.businessName}`,
        text: `New Readiness Assessment lead submitted:\n\nName: ${data.firstName} ${data.lastName}\nBusiness: ${data.businessName}\nEmail: ${data.email}\nScore: ${data.score}\nSegment: ${data.segment}\nEstimated Annual Loss: ${annualLoss}`,
      });
    } catch (notifyError) {
      console.error("Failed to send notification:", notifyError);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending readiness report:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
