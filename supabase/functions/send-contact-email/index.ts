import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
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

const ContactEmailSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().max(20).optional().or(z.literal('')),
  company: z.string().max(100).optional().or(z.literal('')),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(10).max(2000),
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
    const body = await req.json();
    const validation = ContactEmailSchema.safeParse(body);
    if (!validation.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input.", details: validation.error.issues.map(i => i.message) }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, phone, company, subject, message } = validation.data;
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeCompany = company ? escapeHtml(company) : '';
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Internal notification (can stay formatted — it's going to your own inbox)
    await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@account.brightlaunchiq.com>",
      to: ["success@BrightLaunchIQ.com"],
      reply_to: email,
      subject: `Contact: ${safeSubject}`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;">
<h2>New Contact Form</h2>
<p><strong>Name:</strong> ${safeName}</p>
<p><strong>Email:</strong> ${safeEmail}</p>
${safePhone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
${safeCompany ? `<p><strong>Company:</strong> ${safeCompany}</p>` : ''}
<p><strong>Subject:</strong> ${safeSubject}</p>
<hr>
<p style="white-space:pre-wrap;">${safeMessage}</p>
</div>`,
    });

    // User confirmation — plain-text style for Primary inbox
    const userPlainText = `Hi ${name},

Thanks for reaching out. We got your message and will get back to you within 24 hours.

Need faster help? Call 1-877-879-5552.

Anthony
BrightLaunchIQ
success@BrightLaunchIQ.com`;

    const userHtml = `<!DOCTYPE html><html><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#ffffff;">
<div style="max-width:580px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;line-height:1.7;color:#333333;">

<p>Hi ${safeName},</p>

<p>Thanks for reaching out. We got your message and will get back to you within 24 hours.</p>

<p>Need faster help? Call <a href="tel:1-877-879-5552" style="color:#333333;">1-877-879-5552</a>.</p>

<p>Anthony<br>BrightLaunchIQ<br>
<span style="color:#888888;font-size:13px;">success@BrightLaunchIQ.com</span></p>

<p style="color:#aaaaaa;font-size:11px;margin-top:32px;border-top:1px solid #eeeeee;padding-top:16px;">
BrightLaunchIQ · Sacramento, CA 95814<br>
Reply "unsubscribe" to stop receiving emails.
</p>

</div>
</body></html>`;

    await resend.emails.send({
      from: "Anthony from BrightLaunchIQ <onboarding@account.brightlaunchiq.com>",
      reply_to: "success@BrightLaunchIQ.com",
      to: [email],
      subject: "We got your message",
      headers: {
        "List-Unsubscribe": "<mailto:unsubscribe@account.brightlaunchiq.com?subject=unsubscribe>",
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
      text: userPlainText,
      html: userHtml,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error in send-contact-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "An error occurred while sending your message." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
