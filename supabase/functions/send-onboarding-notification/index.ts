import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const NotificationSchema = z.object({
  email: z.string().email().max(255),
  businessName: z.string().min(1).max(100),
  industry: z.string().max(100).optional().or(z.literal("")),
  launchUrgency: z.string().max(50).optional().or(z.literal("")),
});

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" };
  return text.replace(/[&<>"'/]/g, (char) => map[char]);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) throw new Error("RESEND_API_KEY not configured");

    const body = await req.json();
    const validation = NotificationSchema.safeParse(body);

    if (!validation.success) {
      return new Response(
        JSON.stringify({ error: "Invalid input", details: validation.error.issues.map((i) => i.message) }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email, businessName, industry, launchUrgency } = validation.data;
    const safe = {
      email: escapeHtml(email),
      businessName: escapeHtml(businessName),
      industry: escapeHtml(industry || "Not specified"),
      urgency: escapeHtml(launchUrgency || "standard"),
    };

    const urgencyLabel =
      safe.urgency === "asap" ? "ASAP" : safe.urgency === "planning" ? "Planning" : "Standard (14-day)";

    const resend = new Resend(resendKey);

    // Internal notification — formatting is fine here since it goes to your team
    await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@account.brightlaunchiq.com>",
      to: ["success@BrightLaunchIQ.com"],
      subject: `New Onboarding: ${safe.businessName} [${urgencyLabel}]`,
      text: `New onboarding submitted.\n\nBusiness: ${businessName}\nEmail: ${email}\nIndustry: ${industry || "Not specified"}\nUrgency: ${urgencyLabel}\n\nSchedule their strategy session.`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;">
<h2>New Onboarding Submitted</h2>
<p><strong>Business:</strong> ${safe.businessName}</p>
<p><strong>Email:</strong> ${safe.email}</p>
<p><strong>Industry:</strong> ${safe.industry}</p>
<p><strong>Urgency:</strong> ${urgencyLabel}</p>
<hr>
<p style="color:#888;">Schedule their strategy session ASAP.</p>
</div>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Onboarding notification error:", msg);
    return new Response(
      JSON.stringify({ error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
