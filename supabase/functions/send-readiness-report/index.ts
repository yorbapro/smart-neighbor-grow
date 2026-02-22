import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ReportRequest = await req.json();

    if (!data.email || !data.firstName || data.score === undefined) {
      throw new Error("Missing required fields");
    }

    const insightsList = data.insights.map((i) => `- ${i}`).join("\n");
    const recsList = data.recommendations.map((r) => `- ${r}`).join("\n");

    const plainText = `Hi ${data.firstName},

Thanks for taking the AI Receptionist Readiness Assessment for ${data.businessName}.

Your score: ${data.score}/100 (${data.segment})

${data.headline}

Key insights:
${insightsList}

What we recommend:
${recsList}

Want to hear our AI receptionist in action? Call 1-877-879-5552 — it's live right now.

If you have any questions, just reply to this email.

Anthony
BrightLaunchIQ
1-877-879-5552 | success@BrightLaunchIQ.com`;

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#ffffff;">
<div style="max-width:580px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;line-height:1.7;color:#333333;">

<p>Hi ${data.firstName},</p>

<p>Thanks for taking the AI Receptionist Readiness Assessment for ${data.businessName}.</p>

<p><strong>Your score: ${data.score}/100 (${data.segment})</strong></p>

<p>${data.headline}</p>

<p><strong>Key insights:</strong></p>
${data.insights.map((i) => `<p style="margin:4px 0;padding-left:12px;">— ${i}</p>`).join("")}

<p style="margin-top:16px;"><strong>What we recommend:</strong></p>
${data.recommendations.map((r) => `<p style="margin:4px 0;padding-left:12px;">— ${r}</p>`).join("")}

<p style="margin:24px 0;"><a href="https://brightlaunchiq.com/get-started" style="display:inline-block;padding:12px 24px;background-color:#333333;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:15px;">Get Started with BrightLaunchIQ →</a></p>

<p>Want to hear our AI receptionist in action? Call <a href="tel:1-877-879-5552" style="color:#333333;">1-877-879-5552</a> — it's live right now.</p>

<p>If you have any questions, just reply to this email.</p>

<p>Anthony<br>BrightLaunchIQ<br>
<span style="color:#888888;font-size:13px;">1-877-879-5552 | success@BrightLaunchIQ.com</span></p>

<p style="color:#aaaaaa;font-size:11px;margin-top:32px;border-top:1px solid #eeeeee;padding-top:16px;">
BrightLaunchIQ · Sacramento, CA 95814<br>
Reply "unsubscribe" to stop receiving emails.
</p>

</div>
</body></html>`;

    const { error } = await resend.emails.send({
      from: "Anthony from BrightLaunchIQ <success@account.brightlaunchiq.com>",
      to: [data.email],
      subject: `Your readiness score for ${data.businessName}`,
      reply_to: "success@BrightLaunchIQ.com",
      text: plainText,
      html,
      headers: {
        "List-Unsubscribe": "<mailto:success@BrightLaunchIQ.com?subject=unsubscribe>",
      },
    });

    if (error) {
      console.error("Resend error:", error);
      throw error;
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
