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
  { day: 1, templateFn: buildDay1Email },
  { day: 3, templateFn: buildDay3Email },
  { day: 7, templateFn: buildDay7Email },
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

      const segmentParts = lead.score_segment.split("|");
      const lastFollowup = segmentParts.length > 1 ? parseInt(segmentParts[1].replace("f", "")) : 0;

      let followupIndex = -1;
      if (lastFollowup === 0 && daysSince >= 1) followupIndex = 0;
      else if (lastFollowup === 1 && daysSince >= 3) followupIndex = 1;
      else if (lastFollowup === 2 && daysSince >= 7) followupIndex = 2;

      if (followupIndex === -1) continue;

      const schedule = FOLLOWUP_SCHEDULE[followupIndex];
      const { subject, text, html } = schedule.templateFn(lead);

      try {
        await resend.emails.send({
          from: "Anthony from BrightLaunchIQ <success@account.brightlaunchiq.com>",
          reply_to: "success@BrightLaunchIQ.com",
          to: [lead.email],
          subject,
          text,
          html,
          headers: {
            "List-Unsubscribe": "<mailto:success@BrightLaunchIQ.com?subject=unsubscribe>",
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        });

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

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function plainWrapper(body: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background-color:#ffffff;">
<div style="max-width:580px;margin:0 auto;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:15px;line-height:1.7;color:#333333;">
${body}
<p style="color:#aaaaaa;font-size:11px;margin-top:32px;border-top:1px solid #eeeeee;padding-top:16px;">
BrightLaunchIQ · Sacramento, CA 95814<br>
Reply "unsubscribe" to stop receiving emails.
</p>
</div></body></html>`;
}

function buildDay1Email(lead: QuizLead): { subject: string; text: string; html: string } {
  const name = escapeHtml(lead.first_name);
  const biz = escapeHtml(lead.business_name);

  const painMap: Record<string, string> = {
    "Missing calls during busy times": "you mentioned losing leads during busy hours",
    "After-hours calls going to voicemail": "after-hours callers are hitting voicemail",
    "Staff overwhelmed with call volume": "your team is stretched thin on phones",
    "Inconsistent call quality": "call quality varies by who picks up",
    "Difficulty scheduling appointments": "scheduling is eating your team's time",
    "High cost of current solution": "you're overpaying for call coverage",
  };
  const painInsight = painMap[lead.primary_pain_point] || "you could be capturing more revenue from calls";

  const subject = `${lead.first_name}, quick follow-up on your assessment`;

  const text = `Hi ${lead.first_name},

Yesterday you scored ${lead.calculated_score}/100 on the AI Receptionist Assessment for ${lead.business_name}. Since ${painInsight}, I wanted to share something:

Most businesses like yours get fully set up in a few days — no tech skills needed.

Want to hear what it sounds like? Call 1-877-879-5552. It's our live AI receptionist.

Just reply if you have questions.

Anthony
BrightLaunchIQ`;

  const html = plainWrapper(`
<p>Hi ${name},</p>
<p>Yesterday you scored <strong>${lead.calculated_score}/100</strong> on the AI Receptionist Assessment for ${biz}. Since ${escapeHtml(painInsight)}, I wanted to share something:</p>
<p>Most businesses like yours get fully set up in a few days — no tech skills needed.</p>
<p style="margin:20px 0;"><a href="https://brightlaunchiq.com/get-started" style="display:inline-block;padding:12px 24px;background-color:#333333;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:15px;">Get Started Now →</a></p>
<p>Want to hear what it sounds like? Call <a href="tel:1-877-879-5552" style="color:#333333;">1-877-879-5552</a>. It's our live AI receptionist.</p>
<p>Just reply if you have questions.</p>
<p>Anthony<br>BrightLaunchIQ</p>
  `);

  return { subject, text, html };
}

function buildDay3Email(lead: QuizLead): { subject: string; text: string; html: string } {
  const name = escapeHtml(lead.first_name);
  const biz = escapeHtml(lead.business_name);

  const subject = `How many calls did ${lead.business_name} miss this week?`;

  const text = `Hi ${lead.first_name},

Quick question — how many calls did ${lead.business_name} miss since your assessment 3 days ago?

If the answer is "even one," that's revenue left on the table. An AI receptionist would have:

- Answered in 2 seconds
- Asked your custom intake questions
- Booked the appointment to your calendar
- Sent a confirmation text to the caller

You can try it right now: call 1-877-879-5552.

Anthony
BrightLaunchIQ`;

  const html = plainWrapper(`
<p>Hi ${name},</p>
<p>Quick question — how many calls did ${biz} miss since your assessment 3 days ago?</p>
<p>If the answer is "even one," that's revenue left on the table. An AI receptionist would have:</p>
<p style="margin:4px 0;padding-left:12px;">— Answered in 2 seconds</p>
<p style="margin:4px 0;padding-left:12px;">— Asked your custom intake questions</p>
<p style="margin:4px 0;padding-left:12px;">— Booked the appointment to your calendar</p>
<p style="margin:4px 0;padding-left:12px;">— Sent a confirmation text to the caller</p>
<p style="margin:20px 0;"><a href="https://brightlaunchiq.com/get-started" style="display:inline-block;padding:12px 24px;background-color:#333333;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:15px;">Choose a Plan & Get Started →</a></p>
<p>You can also try it right now: call <a href="tel:1-877-879-5552" style="color:#333333;">1-877-879-5552</a>.</p>
<p>Anthony<br>BrightLaunchIQ</p>
  `);

  return { subject, text, html };
}

function buildDay7Email(lead: QuizLead): { subject: string; text: string; html: string } {
  const name = escapeHtml(lead.first_name);
  const biz = escapeHtml(lead.business_name);

  const subject = `${lead.first_name}, one last thought about ${lead.business_name}`;

  const text = `Hi ${lead.first_name},

It's been a week since your assessment. Your score of ${lead.calculated_score}/100 told us ${lead.business_name} has a real opportunity to capture more revenue from existing call volume.

Here's what businesses like yours typically see in 30 days:

- 100% of calls answered — zero missed opportunities
- 35% more appointments booked
- $3,000–$8,000+ in recovered revenue

If you want to see what this looks like for ${lead.business_name}, just reply to this email. Happy to walk you through it.

Anthony
BrightLaunchIQ
1-877-879-5552`;

  const html = plainWrapper(`
<p>Hi ${name},</p>
<p>It's been a week since your assessment. Your score of <strong>${lead.calculated_score}/100</strong> told us ${biz} has a real opportunity to capture more revenue from existing call volume.</p>
<p>Here's what businesses like yours typically see in 30 days:</p>
<p style="margin:4px 0;padding-left:12px;">— 100% of calls answered — zero missed opportunities</p>
<p style="margin:4px 0;padding-left:12px;">— 35% more appointments booked</p>
<p style="margin:4px 0;padding-left:12px;">— $3,000–$8,000+ in recovered revenue</p>
<p style="margin:20px 0;"><a href="https://brightlaunchiq.com/get-started" style="display:inline-block;padding:12px 24px;background-color:#333333;color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;font-size:15px;">See Plans & Get Started →</a></p>
<p>If you want to see what this looks like for ${biz}, just reply to this email. Happy to walk you through it.</p>
<p>Anthony<br>BrightLaunchIQ<br>
<span style="color:#888888;font-size:13px;">1-877-879-5552</span></p>
  `);

  return { subject, text, html };
}
