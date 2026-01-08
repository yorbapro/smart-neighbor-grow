import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AuditRequest {
  email: string;
  businessName: string;
  industry: string;
  city: string;
  state: string;
  website?: string;
  services: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, businessName, industry, city, state, website, services }: AuditRequest = await req.json();
    
    console.log(`Starting AEO audit for ${businessName} (${email})`);
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert AEO (Answer Engine Optimization) analyst. Your job is to analyze a business's potential visibility on AI search engines like ChatGPT, Google Gemini, Perplexity, and voice assistants.

Generate a realistic but educational AEO audit report. Be specific to the business type and location. The scores should be realistic - most local businesses without AEO optimization score between 20-50 out of 100.

Always provide actionable recommendations specific to their industry and location.`;

    const userPrompt = `Analyze this business for AI search engine visibility:

Business Name: ${businessName}
Industry: ${industry}
Location: ${city}, ${state}
Website: ${website || "Not provided"}
Services: ${services}

Generate an AEO audit with the following structure - return ONLY valid JSON, no markdown:
{
  "overallScore": <number 0-100>,
  "platforms": [
    { "name": "ChatGPT", "score": <number 0-100>, "status": "<poor|fair|good|excellent>" },
    { "name": "Google Gemini", "score": <number 0-100>, "status": "<poor|fair|good|excellent>" },
    { "name": "Perplexity", "score": <number 0-100>, "status": "<poor|fair|good|excellent>" },
    { "name": "Voice Search", "score": <number 0-100>, "status": "<poor|fair|good|excellent>" },
    { "name": "Google Maps AI", "score": <number 0-100>, "status": "<poor|fair|good|excellent>" }
  ],
  "strengths": ["<2-3 specific strengths based on business info>"],
  "weaknesses": ["<3-4 specific gaps in AI visibility>"],
  "recommendations": [
    { "priority": "high", "action": "<specific actionable recommendation>", "impact": "<expected improvement>" },
    { "priority": "high", "action": "<specific actionable recommendation>", "impact": "<expected improvement>" },
    { "priority": "medium", "action": "<specific actionable recommendation>", "impact": "<expected improvement>" },
    { "priority": "medium", "action": "<specific actionable recommendation>", "impact": "<expected improvement>" }
  ],
  "competitorInsight": "<brief insight about how competitors in this industry/location may be performing>",
  "potentialScore": <number - realistic score they could achieve with optimization, typically 70-90>
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Failed to generate audit" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("No content in AI response");
    }

    // Parse the JSON from the response
    let auditResult;
    try {
      const cleanedContent = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      auditResult = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse audit results");
    }

    console.log(`Audit complete for ${businessName}. Score: ${auditResult.overallScore}`);

    // Save lead to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      
      const { error: dbError } = await supabase.from("aeo_audit_leads").insert({
        email,
        business_name: businessName,
        industry,
        city,
        state,
        website: website || null,
        services,
        overall_score: auditResult.overallScore,
        potential_score: auditResult.potentialScore,
        audit_result: auditResult,
      });

      if (dbError) {
        console.error("Failed to save lead:", dbError);
      } else {
        console.log(`Lead saved for ${email}`);
      }
    }

    // Send email with results
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      
      const platformRows = auditResult.platforms.map((p: any) => 
        `<tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">${p.name}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center; font-weight: bold; color: ${p.score >= 50 ? '#10b981' : '#ef4444'};">${p.score}/100</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-transform: capitalize;">${p.status}</td>
        </tr>`
      ).join('');

      const recommendationRows = auditResult.recommendations.map((r: any) =>
        `<li style="margin-bottom: 12px;">
          <span style="display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; background: ${r.priority === 'high' ? '#fee2e2' : '#fef3c7'}; color: ${r.priority === 'high' ? '#dc2626' : '#d97706'}; text-transform: uppercase; margin-right: 8px;">${r.priority}</span>
          <strong>${r.action}</strong>
          <br><span style="color: #666; font-size: 14px;">Expected impact: ${r.impact}</span>
        </li>`
      ).join('');

      const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your AEO Audit Results</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb;">
  <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); width: 48px; height: 48px; border-radius: 12px; line-height: 48px; color: white; font-weight: bold; font-size: 20px;">B</div>
      <h1 style="margin: 16px 0 8px; color: #1a1a2e;">Your AEO Audit Results</h1>
      <p style="color: #666; margin: 0;">AI Search Visibility Report for ${businessName}</p>
    </div>

    <div style="text-align: center; background: linear-gradient(135deg, #f0f9ff, #faf5ff); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <div style="font-size: 64px; font-weight: bold; color: ${auditResult.overallScore >= 50 ? '#10b981' : auditResult.overallScore >= 25 ? '#f59e0b' : '#ef4444'};">${auditResult.overallScore}</div>
      <div style="color: #666;">out of 100</div>
      <div style="margin-top: 12px; font-size: 14px; color: #666;">
        Potential with optimization: <strong style="color: #8b5cf6;">${auditResult.potentialScore}/100</strong>
      </div>
    </div>

    <h2 style="color: #1a1a2e; font-size: 18px; margin: 24px 0 16px;">Platform Breakdown</h2>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #f9fafb;">
          <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">Platform</th>
          <th style="padding: 12px; text-align: center; border-bottom: 2px solid #e5e7eb;">Score</th>
          <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">Status</th>
        </tr>
      </thead>
      <tbody>
        ${platformRows}
      </tbody>
    </table>

    <h2 style="color: #1a1a2e; font-size: 18px; margin: 24px 0 16px;">Priority Recommendations</h2>
    <ul style="padding-left: 0; list-style: none;">
      ${recommendationRows}
    </ul>

    <div style="background: #faf5ff; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center;">
      <h3 style="color: #1a1a2e; margin: 0 0 12px;">Ready to Dominate AI Search?</h3>
      <p style="color: #666; margin: 0 0 16px;">Let BrightLaunchIQ implement these optimizations for you with our LocalLift™ service.</p>
      <a href="https://brightlaunchiq.com/get-started" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Get Started with LocalLift™</a>
    </div>

    <div style="text-align: center; color: #999; font-size: 12px; margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee;">
      <p>BrightLaunchIQ • Empowering Small Businesses with Stellar Content</p>
      <p>You received this email because you requested an AEO audit.</p>
    </div>
  </div>
</body>
</html>`;

      try {
        const emailResponse = await resend.emails.send({
          from: "BrightLaunchIQ <onboarding@resend.dev>",
          to: [email],
          subject: `Your AEO Score: ${auditResult.overallScore}/100 - ${businessName}`,
          html: emailHtml,
        });
        console.log("Email sent:", emailResponse);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't fail the request if email fails
      }
    }

    return new Response(JSON.stringify(auditResult), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("AEO audit error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
