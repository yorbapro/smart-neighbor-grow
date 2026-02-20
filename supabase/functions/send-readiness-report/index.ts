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

    if (!data.email || !data.firstName || !data.score === undefined) {
      throw new Error("Missing required fields");
    }

    const insightsHtml = data.insights
      .map((i) => `<li style="margin-bottom:8px;color:#4a5568;">${i}</li>`)
      .join("");

    const recommendationsHtml = data.recommendations
      .map((r) => `<li style="margin-bottom:8px;color:#4a5568;">${r}</li>`)
      .join("");

    const scoreColor = data.score >= 80 ? "#22c55e" : data.score >= 60 ? "#3b82f6" : data.score >= 40 ? "#f59e0b" : "#94a3b8";

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <h1 style="font-size:24px;color:#1a202c;margin:0;">Your AI Receptionist Readiness Report</h1>
      <p style="color:#718096;font-size:14px;margin-top:8px;">Prepared for ${data.businessName}</p>
    </div>

    <div style="text-align:center;margin-bottom:32px;padding:32px;background:#f7fafc;border-radius:16px;">
      <p style="font-size:14px;color:#718096;margin:0 0 8px;">Your AI Receptionist Readiness Score</p>
      <div style="font-size:64px;font-weight:bold;color:${scoreColor};margin:0;">${data.score}<span style="font-size:24px;color:#a0aec0;">/100</span></div>
      <p style="font-size:16px;font-weight:600;color:#2d3748;margin:12px 0 0;">${data.segment}</p>
    </div>

    <div style="margin-bottom:24px;">
      <h2 style="font-size:18px;color:#1a202c;margin-bottom:12px;">${data.headline}</h2>
      <ul style="padding-left:20px;line-height:1.7;">${insightsHtml}</ul>
    </div>

    <div style="margin-bottom:32px;padding:24px;background:#ebf8ff;border-radius:12px;">
      <h3 style="font-size:16px;color:#1a202c;margin:0 0 12px;">How BrightLaunchIQ AI Receptionist Can Help</h3>
      <ul style="padding-left:20px;line-height:1.7;">${recommendationsHtml}</ul>
    </div>

    <div style="text-align:center;margin-bottom:32px;">
      <a href="tel:1-877-879-5552" style="display:inline-block;padding:14px 32px;background:#1a7f37;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">
        Call Our Live AI Receptionist: 1-877-879-5552
      </a>
      <p style="margin-top:12px;">
        <a href="https://brightlaunchiq.com/contact" style="color:#2563eb;text-decoration:underline;font-size:14px;">Book a Personalized AI Receptionist Demo</a>
      </p>
      <p style="margin-top:8px;">
        <a href="https://brightlaunchiq.com/pricing" style="color:#2563eb;text-decoration:underline;font-size:14px;">View AI Receptionist Pricing & Plans</a>
      </p>
    </div>

    <hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0;" />
    
    <div style="text-align:center;color:#a0aec0;font-size:12px;line-height:1.6;">
      <p>BrightLaunchIQ — AI Receptionist for Small Business</p>
      <p>1-877-879-5552 | success@BrightLaunchIQ.com</p>
      <p style="margin-top:8px;">
        <a href="https://brightlaunchiq.com/privacy" style="color:#a0aec0;">Privacy Policy</a> |
        <a href="https://brightlaunchiq.com/terms" style="color:#a0aec0;">Terms of Service</a>
      </p>
      <p style="margin-top:8px;">If you no longer wish to receive emails, reply with "unsubscribe."</p>
    </div>
  </div>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: "BrightLaunchIQ <success@account.brightlaunchiq.com>",
      to: [data.email],
      subject: `Your AI Receptionist Readiness Score: ${data.score}/100 for ${data.businessName}`,
      reply_to: "success@BrightLaunchIQ.com",
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
