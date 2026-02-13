import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: 10 requests per hour per IP (higher limit for post-purchase flow)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 10;
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
const WelcomeEmailSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  businessName: z.string().trim().min(1, "Business name is required").max(100, "Business name must be less than 100 characters"),
  industry: z.string().trim().min(1, "Industry is required").max(100, "Industry must be less than 100 characters"),
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
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(resendKey);
    const body = await req.json();

    // Validate input with Zod
    const validation = WelcomeEmailSchema.safeParse(body);
    if (!validation.success) {
      console.warn("Welcome email validation failed:", validation.error.issues);
      return new Response(
        JSON.stringify({ 
          error: "Invalid input",
          details: validation.error.issues.map(i => i.message)
        }),
        { 
          status: 400, 
          headers: { "Content-Type": "application/json", ...corsHeaders } 
        }
      );
    }

    const { email, businessName, industry } = validation.data;

    // Escape user-provided data
    const safeBusinessName = escapeHtml(businessName);
    const safeIndustry = escapeHtml(industry);

    const emailResponse = await resend.emails.send({
      from: "BrightLaunchIQ <onboarding@brightlaunchiq.com>",
      to: [email],
      subject: "Welcome to BrightLaunchIQ - Your 14-Day Launch Begins Now! 🚀",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 40px 30px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome to BrightLaunchIQ!</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your 14-Day Launch Countdown Has Begun</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 40px 30px;">
      <p style="font-size: 18px; margin-bottom: 20px;">Hi ${safeBusinessName},</p>
      
      <p style="margin-bottom: 20px;">Thank you for choosing BrightLaunchIQ as your AI sales automation partner. We're excited to help you capture the leads you've been missing and grow your ${safeIndustry}.</p>
      
      <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 30px 0; border-radius: 0 8px 8px 0;">
        <h2 style="color: #92400e; margin: 0 0 10px 0; font-size: 18px;">🎯 Your 14-Day Guarantee Is Active</h2>
        <p style="color: #78350f; margin: 0;">If we don't have you receiving automated meeting requests within 14 days, we work for free until we do.</p>
      </div>
      
      <h2 style="color: #1a1a2e; font-size: 20px; margin: 30px 0 20px 0;">What Happens Next:</h2>
      
      <div style="margin-bottom: 20px;">
        <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
          <div style="background-color: #f59e0b; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
          <div>
            <strong style="color: #1a1a2e;">Complete Your Onboarding Questionnaire</strong>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Click the button below to tell us about your ideal customers, competitors, and sales goals.</p>
          </div>
        </div>
        
        <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
          <div style="background-color: #f59e0b; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
          <div>
            <strong style="color: #1a1a2e;">Schedule Your Strategy Session</strong>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Book your 60-minute call with our team to review your AI-generated lead list and outreach voice.</p>
          </div>
        </div>
        
        <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
          <div style="background-color: #f59e0b; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
          <div>
            <strong style="color: #1a1a2e;">We Build Your Engine</strong>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Our team creates your custom sales infrastructure and warms your outreach domains.</p>
          </div>
        </div>
        
        <div style="display: flex; align-items: flex-start;">
          <div style="background-color: #10b981; color: white; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; flex-shrink: 0;">✓</div>
          <div>
            <strong style="color: #1a1a2e;">Start Receiving Meetings</strong>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Within 14 days, your digital teammate will be booking qualified meetings for you.</p>
          </div>
        </div>
      </div>
      
      <div style="text-align: center; margin: 40px 0;">
        <a href="https://brightlaunchiq.com/onboarding" style="display: inline-block; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 16px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">Complete Your Questionnaire →</a>
      </div>
      
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-top: 30px;">
        <h3 style="color: #1a1a2e; margin: 0 0 10px 0; font-size: 16px;">Need Help?</h3>
        <p style="color: #6b7280; margin: 0;">
          📞 Call us: <a href="tel:1-877-879-5552" style="color: #f59e0b;">1-877-879-5552</a><br>
          📧 Email: <a href="mailto:success@BrightLaunchIQ.com" style="color: #f59e0b;">success@BrightLaunchIQ.com</a>
        </p>
      </div>

      <!-- Security Section -->
      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; padding: 20px; border-radius: 8px; margin-top: 20px;">
        <h3 style="color: #166534; margin: 0 0 12px 0; font-size: 16px;">🔐 Your Data Is Protected</h3>
        <p style="color: #15803d; margin: 0 0 12px 0; font-size: 14px;">
          Your payment was processed securely via Stripe. Here's how we protect your business:
        </p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #166534; font-size: 13px;">🔒 <strong>AES-256 Encryption</strong> — bank-grade data protection</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #166534; font-size: 13px;">🚫 <strong>Zero-Training Policy</strong> — your data never trains AI models</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #166534; font-size: 13px;">🛡️ <strong>SOC 2 Compliant</strong> — enterprise-grade infrastructure</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #166534; font-size: 13px;">👁️ <strong>GDPR & CCPA Ready</strong> — global privacy compliance</td>
          </tr>
        </table>
        <p style="color: #15803d; margin: 12px 0 0 0; font-size: 13px;">
          Learn more: <a href="https://brightlaunchiq.com/trust-security" style="color: #f59e0b; font-weight: bold;">Our Security Practices →</a>
        </p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #1a1a2e; padding: 30px; text-align: center;">
      <p style="color: #9ca3af; margin: 0 0 10px 0; font-size: 14px;">
        BrightLaunchIQ | Human-Guided AI Sales Automation
      </p>
      <p style="color: #6b7280; margin: 0; font-size: 12px;">
        Sacramento • Stockton • Fresno • Bakersfield
      </p>
    </div>
    
  </div>
</body>
</html>
      `,
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
      JSON.stringify({ error: "An error occurred while sending the welcome email. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);