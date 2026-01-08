import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface AuditRequest {
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
    const { businessName, industry, city, state, website, services }: AuditRequest = await req.json();
    
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
      // Remove any markdown code blocks if present
      const cleanedContent = content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      auditResult = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse audit results");
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
