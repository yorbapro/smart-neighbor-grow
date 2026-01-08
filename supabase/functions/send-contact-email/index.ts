import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, subject, message }: ContactEmailRequest = await req.json();

    // Send notification email to the team
    const teamEmailResponse = await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@resend.dev>",
      to: ["success@BrightLaunchIQ.com"],
      reply_to: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <h2 style="color: #111827; margin-top: 0;">Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #4F46E5;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #4F46E5;">${phone}</a></td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Company:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${company}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${subject}</td>
              </tr>
            </table>
            
            <h3 style="color: #111827; margin-top: 24px;">Message</h3>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="color: #374151; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="color: #6b7280; font-size: 12px; margin-top: 24px;">
              This message was sent from the BrightLaunchIQ contact form.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@resend.dev>",
      to: [email],
      subject: "We received your message - BrightLaunchIQ",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for reaching out, ${name}!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              We've received your message and our team will get back to you within 24 hours.
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              In the meantime, you might be interested in:
            </p>
            
            <ul style="color: #374151; font-size: 16px; line-height: 1.8;">
              <li><a href="https://brightlaunchiq.com/products/launchpad-360" style="color: #4F46E5;">Learn about LaunchPad 360™</a> - Our complete AI sales engine</li>
              <li><a href="https://brightlaunchiq.com/pricing" style="color: #4F46E5;">View our pricing</a> - Transparent, simple pricing</li>
              <li><a href="https://brightlaunchiq.com/get-started" style="color: #4F46E5;">Schedule a revenue audit</a> - Free consultation with our experts</li>
            </ul>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Need faster help? Call us at <a href="tel:1-800-LAUNCH-IQ" style="color: #4F46E5;">1-800-LAUNCH-IQ</a>.
            </p>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 24px;">
              Best regards,<br>
              <strong>The BrightLaunchIQ Team</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;">
            
            <p style="color: #6b7280; font-size: 12px;">
              BrightLaunchIQ - Human-Guided AI Lead Generation<br>
              success@BrightLaunchIQ.com | 1-800-LAUNCH-IQ
            </p>
          </div>
        </div>
      `,
    });

    console.log("Team email sent:", teamEmailResponse);
    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
