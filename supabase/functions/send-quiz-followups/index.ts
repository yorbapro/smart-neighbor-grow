import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface QuizLead {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  business_name: string;
  business_type: string;
  calculated_score: number;
  score_segment: string;
  primary_pain_point: string;
  after_hours_needs: string;
  appointment_booking: string;
  call_volume: string;
  missed_call_frequency: string;
  timeline: string;
  email_consent: boolean;
  report_sent_at: string | null;
  created_at: string;
}

const FOLLOWUP_SCHEDULE = [
  { day: 1, field: "followup_day" as const, templateFn: buildDay1Email },
  { day: 3, field: "followup_day" as const, templateFn: buildDay3Email },
  { day: 7, field: "followup_day" as const, templateFn: buildDay7Email },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const resendApiKey = Deno.env.get("RESEND_API_KEY")!;
    const cronSecret = Deno.env.get("CRON_SECRET");

    // Auth: CRON_SECRET or admin JWT
    const authHeader = req.headers.get("Authorization");
    let isAuthorized = false;

    if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
      isAuthorized = true;
    }

    if (!isAuthorized && authHeader?.startsWith("Bearer ")) {
      const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;
      const client = createClient(supabaseUrl, anonKey, {
        global: { headers: { Authorization: authHeader } },
      });
      const { data: userData } = await client.auth.getUser();
      if (userData?.user?.id) {
        const { data: isAdmin } = await client.rpc("has_role", {
          _user_id: userData.user.id,
          _role: "admin",
        });
        if (isAdmin) isAuthorized = true;
      }
    }

    if (!isAuthorized) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);
    const now = new Date();

    // Fetch quiz leads with consent who received their initial report
    const { data: leads, error: fetchError } = await supabase
      .from("ai_receptionist_quiz_responses")
      .select("*")
      .eq("email_consent", true)
      .not("report_sent_at", "is", null);

    if (fetchError) throw new Error(`Failed to fetch leads: ${fetchError.message}`);

    console.log(`Found ${leads?.length || 0} quiz leads with consent`);

    const sent = { day1: 0, day3: 0, day7: 0 };

    for (const lead of (leads || []) as QuizLead[]) {
      const createdAt = new Date(lead.created_at);
      const daysSince = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

      // Determine which follow-up to send using score_segment metadata
      // We store follow-up state in score_segment suffix: "High Priority|f1" means followup 1 sent
      const segmentParts = lead.score_segment.split("|");
      const lastFollowup = segmentParts.length > 1 ? parseInt(segmentParts[1].replace("f", "")) : 0;

      let followupIndex = -1;
      if (lastFollowup === 0 && daysSince >= 1) followupIndex = 0;
      else if (lastFollowup === 1 && daysSince >= 3) followupIndex = 1;
      else if (lastFollowup === 2 && daysSince >= 7) followupIndex = 2;

      if (followupIndex === -1) continue;

      const schedule = FOLLOWUP_SCHEDULE[followupIndex];
      const emailHtml = schedule.templateFn(lead);
      const subject = getSubject(followupIndex, lead);

      try {
        await resend.emails.send({
          from: "BrightLaunchIQ <success@account.brightlaunchiq.com>",
          reply_to: "success@BrightLaunchIQ.com",
          to: [lead.email],
          subject,
          html: emailHtml,
          text: `Hi ${lead.first_name}, following up on your AI Receptionist Readiness Score of ${lead.calculated_score}/100. Call 1-877-879-5552 to experience our AI receptionist. BrightLaunchIQ | Sacramento, CA 95814`,
          headers: {
            "List-Unsubscribe": "<mailto:success@BrightLaunchIQ.com?subject=unsubscribe>",
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        });

        // Track follow-up state
        const newSegment = `${segmentParts[0]}|f${followupIndex + 1}`;
        await supabase
          .from("ai_receptionist_quiz_responses")
          .update({ score_segment: newSegment })
          .eq("id", lead.id);

        if (followupIndex === 0) sent.day1++;
        else if (followupIndex === 1) sent.day3++;
        else sent.day7++;

        console.log(`Sent day ${schedule.day} follow-up to ${lead.email}`);
      } catch (emailErr) {
        console.error(`Failed to send to ${lead.email}:`, emailErr);
      }
    }

    console.log(`Quiz follow-ups complete: ${JSON.stringify(sent)}`);

    return new Response(
      JSON.stringify({ success: true, sent, total: sent.day1 + sent.day3 + sent.day7 }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Quiz follow-up error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

function getSubject(index: number, lead: QuizLead): string {
  const subjects = [
    `${lead.first_name}, your AI receptionist could be live this week`,
    `${lead.first_name}, see how ${lead.business_name} can stop missing calls`,
    `Last chance: ${lead.first_name}, your AI receptionist readiness score expires soon`,
  ];
  return subjects[index];
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function emailWrapper(content: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;padding:40px 24px;">
${content}
<hr style="border:none;border-top:1px solid #e2e8f0;margin:32px 0;" />
<div style="text-align:center;color:#a0aec0;font-size:12px;line-height:1.6;">
  <p>BrightLaunchIQ — AI Receptionist for Small Business</p>
  <p>1-877-879-5552 | success@BrightLaunchIQ.com</p>
  <p style="margin-top:8px;"><a href="https://brightlaunchiq.com/privacy" style="color:#a0aec0;">Privacy Policy</a> | <a href="https://brightlaunchiq.com/terms" style="color:#a0aec0;">Terms of Service</a></p>
  <p style="margin-top:8px;">If you no longer wish to receive emails, reply with "unsubscribe."</p>
</div>
</div></body></html>`;
}

function buildDay1Email(lead: QuizLead): string {
  const name = escapeHtml(lead.first_name);
  const biz = escapeHtml(lead.business_name);
  const painMap: Record<string, string> = {
    "Missing calls during busy times": "you're losing leads during your busiest hours",
    "After-hours calls going to voicemail": "after-hours callers are hitting voicemail instead of booking",
    "Staff overwhelmed with call volume": "your team is stretched thin answering phones",
    "Inconsistent call quality": "call quality varies depending on who picks up",
    "Difficulty scheduling appointments": "scheduling is eating up your team's time",
    "High cost of current solution": "you're overpaying for call coverage",
  };
  const painInsight = painMap[lead.primary_pain_point] || "you could be capturing more revenue from every call";

  return emailWrapper(`
    <h1 style="font-size:22px;color:#1a202c;margin:0 0 16px;">Hi ${name},</h1>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:16px;">
      Yesterday you took our AI Receptionist Readiness Assessment and scored <strong>${lead.calculated_score}/100</strong> for ${biz}. That tells us ${painInsight}.
    </p>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:24px;">
      The good news? Most businesses like yours are fully set up with an AI receptionist in just a few days — no technical skills needed.
    </p>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:24px;">
      Want to hear what it sounds like? Call our live demo line right now:
    </p>
    <div style="text-align:center;margin-bottom:24px;">
      <a href="tel:1-877-879-5552" style="display:inline-block;padding:14px 32px;background:#1a7f37;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">
        Call AI Receptionist Demo: 1-877-879-5552
      </a>
    </div>
    <p style="color:#718096;font-size:14px;">— The BrightLaunchIQ Team</p>
  `);
}

function buildDay3Email(lead: QuizLead): string {
  const name = escapeHtml(lead.first_name);
  const biz = escapeHtml(lead.business_name);

  return emailWrapper(`
    <h1 style="font-size:22px;color:#1a202c;margin:0 0 16px;">Hi ${name},</h1>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:16px;">
      Quick question: how many calls did ${biz} miss since you took the assessment 3 days ago?
    </p>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:16px;">
      If the answer is "even one" — that's revenue you left on the table. Here's what an AI receptionist would have done with each of those calls:
    </p>
    <ul style="padding-left:20px;color:#4a5568;font-size:15px;line-height:1.8;margin-bottom:24px;">
      <li>Answered within 2 seconds — no hold music, no voicemail</li>
      <li>Qualified the lead with your custom intake questions</li>
      <li>Booked the appointment directly to your calendar</li>
      <li>Sent the caller a confirmation via SMS</li>
      <li>Routed urgent calls to your cell phone instantly</li>
    </ul>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:24px;">
      Don't take our word for it — experience it yourself:
    </p>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="tel:1-877-879-5552" style="display:inline-block;padding:14px 32px;background:#1a7f37;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">
        Call Our Live AI Receptionist
      </a>
    </div>
    <div style="text-align:center;margin-bottom:24px;">
      <a href="https://brightlaunchiq.com/pricing" style="color:#2563eb;text-decoration:underline;font-size:14px;">View AI Receptionist Pricing</a>
    </div>
    <p style="color:#718096;font-size:14px;">— The BrightLaunchIQ Team</p>
  `);
}

function buildDay7Email(lead: QuizLead): string {
  const name = escapeHtml(lead.first_name);
  const biz = escapeHtml(lead.business_name);
  const scoreColor = lead.calculated_score >= 80 ? "#22c55e" : lead.calculated_score >= 60 ? "#3b82f6" : "#f59e0b";

  return emailWrapper(`
    <h1 style="font-size:22px;color:#1a202c;margin:0 0 16px;">Hi ${name},</h1>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:16px;">
      It's been a week since your AI Receptionist Readiness Assessment. Your score of <span style="color:${scoreColor};font-weight:700;">${lead.calculated_score}/100</span> for ${biz} told us something important: you have a real opportunity to capture more revenue from your existing call volume.
    </p>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:16px;">
      Here's what businesses like yours typically see in the first 30 days with an AI receptionist:
    </p>
    <ul style="padding-left:20px;color:#4a5568;font-size:15px;line-height:1.8;margin-bottom:24px;">
      <li><strong>100% of calls answered</strong> — zero missed opportunities</li>
      <li><strong>35% more appointments booked</strong> — including after-hours callers</li>
      <li><strong>$3,000–$8,000+ in recovered revenue</strong> — from calls that used to go to voicemail</li>
    </ul>
    <p style="color:#4a5568;font-size:15px;line-height:1.7;margin-bottom:24px;">
      Ready to stop leaving money on the table? Let's get ${biz} set up:
    </p>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="https://brightlaunchiq.com/contact" style="display:inline-block;padding:14px 32px;background:#1a7f37;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">
        Book Your AI Receptionist Demo
      </a>
    </div>
    <div style="text-align:center;margin-bottom:16px;">
      <a href="tel:1-877-879-5552" style="color:#2563eb;text-decoration:underline;font-size:14px;">Or call our live AI receptionist: 1-877-879-5552</a>
    </div>
    <div style="text-align:center;margin-bottom:24px;">
      <a href="https://brightlaunchiq.com/pricing" style="color:#2563eb;text-decoration:underline;font-size:14px;">View AI Receptionist Pricing & Plans</a>
    </div>
    <p style="color:#718096;font-size:14px;">— The BrightLaunchIQ Team</p>
  `);
}
