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

    // Plain-text only — no HTML — to land in Gmail Primary inbox

    const { error } = await resend.emails.send({
      from: "Anthony from BrightLaunchIQ <success@account.brightlaunchiq.com>",
      to: [data.email],
      subject: `Your readiness score for ${data.businessName}`,
      reply_to: "success@BrightLaunchIQ.com",
      text: plainText,
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
