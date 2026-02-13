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
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
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
      safe.urgency === "asap"
        ? "🔴 ASAP"
        : safe.urgency === "planning"
          ? "🟡 Planning"
          : "🟢 Standard (14-day)";

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@account.brightlaunchiq.com>",
      to: ["success@BrightLaunchIQ.com"],
      subject: `New Onboarding: ${safe.businessName} [${urgencyLabel}]`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🎉 New Onboarding Submitted</h1>
          </div>
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 140px;"><strong>Business:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${safe.businessName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${safe.email}" style="color: #f59e0b;">${safe.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Industry:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${safe.industry}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Urgency:</strong></td>
                <td style="padding: 8px 0; color: #111827; font-weight: bold;">${urgencyLabel}</td>
              </tr>
            </table>
            <p style="color: #6b7280; font-size: 13px; margin-top: 24px;">
              View full details in the admin panel. Schedule their strategy session ASAP.
            </p>
          </div>
        </div>
      `,
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
