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

      const strengthsList = auditResult.strengths.map((s: string) =>
        `<li style="margin-bottom: 8px; color: #059669;">✓ ${s}</li>`
      ).join('');

      const weaknessesList = auditResult.weaknesses.map((w: string) =>
        `<li style="margin-bottom: 8px; color: #dc2626;">✗ ${w}</li>`
      ).join('');

      const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Complete AEO Audit Results</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; background: #f9fafb;">
  <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 24px;">
      <div style="display: inline-block; background: linear-gradient(135deg, #f97316, #ea580c); width: 56px; height: 56px; border-radius: 14px; line-height: 56px; color: white; font-weight: bold; font-size: 24px;">B</div>
      <h1 style="margin: 16px 0 8px; color: #1e3a5f; font-size: 28px;">Your Complete AEO Audit</h1>
      <p style="color: #666; margin: 0; font-size: 16px;">AI Search Visibility Report for <strong>${businessName}</strong></p>
      <p style="color: #999; margin: 4px 0 0; font-size: 14px;">${city}, ${state} • ${industry}</p>
    </div>

    <!-- Main Score -->
    <div style="text-align: center; background: linear-gradient(135deg, #1e3a5f, #2d4a6f); border-radius: 16px; padding: 32px; margin-bottom: 24px; color: white;">
      <div style="font-size: 72px; font-weight: bold; line-height: 1;">${auditResult.overallScore}</div>
      <div style="font-size: 18px; opacity: 0.8;">out of 100</div>
      <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.2);">
        <span style="font-size: 14px; opacity: 0.7;">Your potential with optimization:</span>
        <span style="display: block; font-size: 32px; font-weight: bold; color: #f97316; margin-top: 4px;">${auditResult.potentialScore}/100</span>
      </div>
    </div>

    <!-- The Problem Statement -->
    <div style="background: #fef3c7; border-left: 4px solid #f97316; padding: 20px; margin-bottom: 24px; border-radius: 0 8px 8px 0;">
      <h3 style="color: #92400e; margin: 0 0 8px; font-size: 16px;">⚠️ Why This Matters</h3>
      <p style="color: #78350f; margin: 0; font-size: 14px; line-height: 1.6;">
        <strong>40% of local searches</strong> now go through AI assistants like ChatGPT, Gemini, and voice search. If your business isn't optimized for these platforms, you're invisible to a growing segment of potential customers searching for "${services}" in ${city}.
      </p>
    </div>

    <!-- Platform Breakdown -->
    <h2 style="color: #1e3a5f; font-size: 20px; margin: 28px 0 16px; border-bottom: 2px solid #f97316; padding-bottom: 8px;">📊 Platform-by-Platform Breakdown</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <thead>
        <tr style="background: #f1f5f9;">
          <th style="padding: 14px; text-align: left; border-bottom: 2px solid #e2e8f0; color: #1e3a5f;">Platform</th>
          <th style="padding: 14px; text-align: center; border-bottom: 2px solid #e2e8f0; color: #1e3a5f;">Score</th>
          <th style="padding: 14px; text-align: left; border-bottom: 2px solid #e2e8f0; color: #1e3a5f;">Status</th>
        </tr>
      </thead>
      <tbody>
        ${platformRows}
      </tbody>
    </table>

    <!-- Strengths & Weaknesses -->
    <div style="display: flex; gap: 16px; margin-bottom: 24px;">
      <div style="flex: 1; background: #ecfdf5; border-radius: 12px; padding: 20px;">
        <h3 style="color: #065f46; margin: 0 0 12px; font-size: 16px;">💪 Your Strengths</h3>
        <ul style="margin: 0; padding-left: 0; list-style: none; font-size: 14px;">
          ${strengthsList}
        </ul>
      </div>
    </div>
    <div style="background: #fef2f2; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <h3 style="color: #991b1b; margin: 0 0 12px; font-size: 16px;">🚨 Critical Gaps Costing You Leads</h3>
      <ul style="margin: 0; padding-left: 0; list-style: none; font-size: 14px;">
        ${weaknessesList}
      </ul>
    </div>

    <!-- Competitor Insight -->
    <div style="background: #f0f9ff; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <h3 style="color: #0c4a6e; margin: 0 0 8px; font-size: 16px;">🔍 Competitor Intelligence</h3>
      <p style="color: #0369a1; margin: 0; font-size: 14px; line-height: 1.6;">${auditResult.competitorInsight}</p>
    </div>

    <!-- Priority Recommendations -->
    <h2 style="color: #1e3a5f; font-size: 20px; margin: 28px 0 16px; border-bottom: 2px solid #f97316; padding-bottom: 8px;">🎯 Your Action Plan</h2>
    <p style="color: #666; margin: 0 0 16px; font-size: 14px;">Implement these recommendations to reach your potential score of <strong>${auditResult.potentialScore}/100</strong>:</p>
    <ol style="padding-left: 20px; margin-bottom: 24px;">
      ${auditResult.recommendations.map((r: any, i: number) =>
        `<li style="margin-bottom: 16px; font-size: 14px;">
          <span style="display: inline-block; padding: 3px 10px; border-radius: 4px; font-size: 11px; font-weight: bold; background: ${r.priority === 'high' ? '#fee2e2' : '#fef3c7'}; color: ${r.priority === 'high' ? '#dc2626' : '#d97706'}; text-transform: uppercase; margin-right: 8px;">${r.priority}</span>
          <strong style="color: #1e3a5f;">${r.action}</strong>
          <br><span style="color: #666;">→ ${r.impact}</span>
        </li>`
      ).join('')}
    </ol>

    <!-- The Math / ROI Section -->
    <div style="background: linear-gradient(135deg, #fdf4ff, #faf5ff); border: 2px solid #d8b4fe; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <h3 style="color: #7e22ce; margin: 0 0 12px; font-size: 18px; text-align: center;">💰 The Math of Success</h3>
      <p style="color: #6b21a8; margin: 0 0 16px; font-size: 14px; text-align: center; line-height: 1.6;">
        What if you could get a <strong>Digital Teammate</strong> working 24/7 to capture leads from AI search engines, respond instantly to inquiries, and book appointments—all for less than <strong>$16.60/day</strong>?
      </p>
      <div style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
        <span style="background: white; padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #7e22ce;">✓ No sick days</span>
        <span style="background: white; padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #7e22ce;">✓ No training costs</span>
        <span style="background: white; padding: 8px 16px; border-radius: 20px; font-size: 13px; color: #7e22ce;">✓ 24/7 availability</span>
      </div>
    </div>

    <!-- Two CTAs -->
    <h2 style="color: #1e3a5f; font-size: 20px; margin: 28px 0 16px; text-align: center;">Ready to Dominate AI Search?</h2>
    
    <!-- LaunchPad 360 CTA -->
    <div style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); border-radius: 12px; padding: 24px; margin-bottom: 16px; text-align: center;">
      <h3 style="color: white; margin: 0 0 8px; font-size: 18px;">🚀 LaunchPad 360™</h3>
      <p style="color: rgba(255,255,255,0.8); margin: 0 0 16px; font-size: 14px;">
        Full Agentic Go-To-Market: Automated outreach across calls, SMS, email & LinkedIn with AI-powered lead scoring and follow-up.
      </p>
      <a href="https://brightlaunchiq.com/products/launchpad-360" style="display: inline-block; background: #f97316; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">Explore LaunchPad 360™ →</a>
    </div>

    <!-- LocalLift CTA -->
    <div style="background: linear-gradient(135deg, #f97316, #ea580c); border-radius: 12px; padding: 24px; margin-bottom: 24px; text-align: center;">
      <h3 style="color: white; margin: 0 0 8px; font-size: 18px;">📍 LocalLift™</h3>
      <p style="color: rgba(255,255,255,0.9); margin: 0 0 16px; font-size: 14px;">
        Local dominance through AEO optimization, stellar content creation, and reputation management across 100+ directories.
      </p>
      <a href="https://brightlaunchiq.com/products/local-lift" style="display: inline-block; background: white; color: #ea580c; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px;">Discover LocalLift™ →</a>
    </div>

    <!-- Get Started CTA -->
    <div style="text-align: center; background: #f8fafc; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <p style="color: #1e3a5f; margin: 0 0 16px; font-size: 16px; font-weight: 600;">
        Not sure which is right for you? Let's talk.
      </p>
      <a href="https://brightlaunchiq.com/get-started" style="display: inline-block; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 16px 40px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 18px; box-shadow: 0 4px 14px rgba(16,185,129,0.4);">Get Started Today →</a>
      <p style="color: #666; margin: 16px 0 0; font-size: 13px;">
        🔒 14-Day Speed to Lead Guarantee
      </p>
    </div>

    <!-- Footer -->
    <div style="text-align: center; color: #999; font-size: 12px; margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee;">
      <p style="margin: 0 0 8px;"><strong style="color: #1e3a5f;">BrightLaunchIQ</strong> • Human-Guided AI for Local Business Growth</p>
      <p style="margin: 0;">You received this email because you requested an AEO audit at brightlaunchiq.com</p>
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
