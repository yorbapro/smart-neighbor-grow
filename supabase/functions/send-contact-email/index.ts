import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: 3 requests per hour per IP to prevent email spam
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  // Clean up expired entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      if (now > value.resetAt) {
        rateLimitMap.delete(key);
      }
    }
  }
  
  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

// Zod schema for input validation
const ContactEmailSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().max(20, "Phone must be less than 20 characters").optional().or(z.literal('')),
  company: z.string().max(100, "Company must be less than 100 characters").optional().or(z.literal('')),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

// HTML escape function to prevent XSS
const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  };
  return text.replace(/[&<>"'/]/g, char => map[char]);
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Rate limiting check
  const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
                   req.headers.get('x-real-ip') || 
                   'unknown';
  
  if (!checkRateLimit(clientIp)) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded. Please try again in 1 hour." }),
      { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    
    // Validate input with Zod
    const validation = ContactEmailSchema.safeParse(body);
    if (!validation.success) {
      console.warn("Contact form validation failed:", validation.error.issues);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input. Please check your form data and try again.",
          details: validation.error.issues.map(i => i.message)
        }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    const { name, email, phone, company, subject, message } = validation.data;

    // Escape all user-provided data
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : '';
    const safeCompany = company ? escapeHtml(company) : '';
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // Send notification email to the team
    const teamEmailResponse = await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@resend.dev>",
      to: ["success@BrightLaunchIQ.com"],
      reply_to: email,
      subject: `New Contact Form: ${safeSubject}`,
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
                <td style="padding: 8px 0; color: #111827;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${safeEmail}" style="color: #4F46E5;">${safeEmail}</a></td>
              </tr>
              ${safePhone ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${safePhone}" style="color: #4F46E5;">${safePhone}</a></td>
              </tr>
              ` : ''}
              ${safeCompany ? `
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Company:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${safeCompany}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${safeSubject}</td>
              </tr>
            </table>
            
            <h3 style="color: #111827; margin-top: 24px;">Message</h3>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb;">
              <p style="color: #374151; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
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
            <h1 style="color: white; margin: 0; font-size: 24px;">Thanks for reaching out, ${safeName}!</h1>
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
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error in send-contact-email function:", errorMessage);
    return new Response(
      JSON.stringify({ error: "An error occurred while sending your message. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);