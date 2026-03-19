import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

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

    // Extract dynamic fields from answers
    const customerValue = data.answers?.customerValue || "your average";
    const missedCalls = data.answers?.missedCallsPerDay || "several";
    const competitorPercent = data.answers?.competitorPercent || "85%";
    const missedCallTiming = data.answers?.missedCallTiming || "during busy times";
    const annualLossMatch = data.recommendations?.[0]?.match(/\$[\d,]+/);
    const annualLoss = annualLossMatch ? annualLossMatch[0] : `$${(data.score * 1000).toLocaleString()}`;

    // Timing description for email
    const timingMap: Record<string, string> = {
      "During peak business hours when my team is busy": "during peak hours",
      "After hours and on weekends": "after hours and on weekends",
      "Both equally": "during peak hours and after hours",
    };
    const timingText = timingMap[missedCallTiming] || missedCallTiming.toLowerCase();

    const plainText = `Hi ${data.firstName},

Here are the results from your Missed Call Revenue Calculator.

Based on the numbers you entered, ${data.businessName} may be losing an estimated ${annualLoss} per year from missed calls.

Here's what drove that number:

- You miss an average of ${missedCalls} calls per day
- Your average customer value is ${customerValue}
- 50% of missed callers typically contact a competitor immediately

When you're ready to review your options, feel free to call our Live AI Receptionist at 1-877-879-5552, or you can book a 15-minute call here: https://brightlaunchiq.com/contact

— The BrightLaunchIQ Team
results@brightlaunchiq.com`;

    const { error } = await resend.emails.send({
      from: "BrightLaunchIQ <results@brightlaunchiq.com>",
      to: [data.email],
      subject: `Your Missed Call Results for ${data.businessName}`,
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
