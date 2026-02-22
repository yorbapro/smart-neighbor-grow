import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 3600000;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetAt) rateLimitMap.delete(key);
    }
  }
  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

const WelcomeEmailSchema = z.object({
  email: z.string().trim().email().max(255),
  businessName: z.string().trim().min(1).max(100),
  industry: z.string().trim().min(1).max(100),
});

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;' };
  return text.replace(/[&<>"'/]/g, char => map[char]);
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
  if (!checkRateLimit(clientIp)) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Please try again in 1 hour." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) throw new Error("RESEND_API_KEY is not configured");

    const resend = new Resend(resendKey);
    const body = await req.json();
    const validation = WelcomeEmailSchema.safeParse(body);

    if (!validation.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: validation.error.issues.map(i => i.message) }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { email, businessName, industry } = validation.data;
    const safeName = escapeHtml(businessName);
    const safeIndustry = escapeHtml(industry);

    const plainText = `Hi ${businessName},

Welcome to BrightLaunchIQ! Your 14-day launch guarantee is now active.

Here's what happens next:

1. Complete your onboarding questionnaire: https://brightlaunchiq.com/onboarding
2. We'll schedule your 60-minute strategy session.
3. Our team builds your custom sales engine.
4. You start receiving booked meetings.

If we don't have you receiving meetings within 14 days, we work for free until we do.

Need help? Just reply to this email or call 1-877-879-5552.

Anthony
BrightLaunchIQ
success@BrightLaunchIQ.com | 1-877-879-5552`;

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#ffffff;">
<div style="max-width:580px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;line-height:1.7;color:#333333;">

<p>Hi ${safeName},</p>

<p>Welcome to BrightLaunchIQ! Your 14-day launch guarantee is now active.</p>

<p>Here's what happens next:</p>

<p style="margin:4px 0;padding-left:12px;">1. Complete your onboarding questionnaire — <a href="https://brightlaunchiq.com/onboarding" style="color:#333333;">click here</a></p>
<p style="margin:4px 0;padding-left:12px;">2. We'll schedule your 60-minute strategy session.</p>
<p style="margin:4px 0;padding-left:12px;">3. Our team builds your custom ${safeIndustry} sales engine.</p>
<p style="margin:4px 0;padding-left:12px;">4. You start receiving booked meetings.</p>

<p>If we don't have you receiving meetings within 14 days, we work for free until we do.</p>

<p>Need help? Just reply to this email or call <a href="tel:1-877-879-5552" style="color:#333333;">1-877-879-5552</a>.</p>

<p>Anthony<br>BrightLaunchIQ<br>
<span style="color:#888888;font-size:13px;">success@BrightLaunchIQ.com | 1-877-879-5552</span></p>

<p style="color:#aaaaaa;font-size:11px;margin-top:32px;border-top:1px solid #eeeeee;padding-top:16px;">
BrightLaunchIQ · Sacramento, CA 95814<br>
Reply "unsubscribe" to stop receiving emails.
</p>

</div>
</body></html>`;

    const emailResponse = await resend.emails.send({
      from: "Anthony from BrightLaunchIQ <onboarding@account.brightlaunchiq.com>",
      reply_to: "success@BrightLaunchIQ.com",
      to: [email],
      subject: `Welcome — here's your first step`,
      headers: {
        "List-Unsubscribe": "<mailto:unsubscribe@account.brightlaunchiq.com?subject=unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
      text: plainText,
      html,
    });

    console.log("Welcome email sent successfully:", emailResponse);
    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error in send-welcome-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "An error occurred while sending the welcome email." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
