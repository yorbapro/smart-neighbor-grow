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
  primary_pain_point: string; // primaryGoal (Q5)
  after_hours_needs: string;  // missedCallTiming (Q4)
  appointment_booking: string; // customerValue (Q1)
  call_volume: string;        // missedCallsPerDay (Q2)
  missed_call_frequency: string; // competitorPercent (Q3)
  ai_receptionist_awareness: string; // "Annual Loss: $X"
  timeline: string;
  email_consent: boolean;
  report_sent_at: string | null;
  created_at: string;
}

// Extract annual loss dollar amount from stored string "Annual Loss: $XX,XXX"
function extractAnnualLoss(lead: QuizLead): string {
  const match = lead.ai_receptionist_awareness?.match(/\$[\d,]+/);
  return match ? match[0] : "$50,000+";
}

// Map timing answer to readable text
function getTimingText(timing: string): string {
  const map: Record<string, string> = {
    "During peak business hours when my team is busy": "during peak hours",
    "After hours and on weekends": "after hours and on weekends",
    "Both equally": "during peak hours and after hours",
  };
  return map[timing] || timing?.toLowerCase() || "during busy times";
}

// Map goal answer to readable text
function getGoalText(goal: string): string {
  const map: Record<string, string> = {
    "Capture every lead and maximize revenue": "capture every lead and maximize revenue",
    "Improve customer service and professionalism": "improve customer service and professionalism",
    "Reduce the burden on my existing staff": "reduce the burden on your existing staff",
    "All of the above": "capture every lead, improve service, and free up your team",
  };
  return map[goal] || goal?.toLowerCase() || "grow your business";
}

const FOLLOWUP_SCHEDULE = [
  { day: 2, templateFn: buildDay2Email },
  { day: 4, templateFn: buildDay4Email },
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

    const sent = { day2: 0, day4: 0, day7: 0 };

    for (const lead of (leads || []) as QuizLead[]) {
      const createdAt = new Date(lead.created_at);
      const daysSince = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));

      const segmentParts = lead.score_segment.split("|");
      const lastFollowup = segmentParts.length > 1 ? parseInt(segmentParts[1].replace("f", "")) : 0;

      let followupIndex = -1;
      if (lastFollowup === 0 && daysSince >= 2) followupIndex = 0;
      else if (lastFollowup === 1 && daysSince >= 4) followupIndex = 1;
      else if (lastFollowup === 2 && daysSince >= 7) followupIndex = 2;

      if (followupIndex === -1) continue;

      const schedule = FOLLOWUP_SCHEDULE[followupIndex];
      const { subject, text } = schedule.templateFn(lead);

      try {
        // Plain-text only for Gmail Primary inbox deliverability
        await resend.emails.send({
          from: "BrightLaunchIQ <results@brightlaunchiq.com>",
          reply_to: "results@brightlaunchiq.com",
          to: [lead.email],
          subject,
          text,
          headers: {
            "List-Unsubscribe": "<mailto:results@brightlaunchiq.com?subject=unsubscribe>",
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
          },
        });

        const newSegment = `${segmentParts[0]}|f${followupIndex + 1}`;
        await supabase
          .from("ai_receptionist_quiz_responses")
          .update({ score_segment: newSegment })
          .eq("id", lead.id);

        if (followupIndex === 0) sent.day2++;
        else if (followupIndex === 1) sent.day4++;
        else sent.day7++;

        console.log(`Sent day ${schedule.day} follow-up to ${lead.email}`);
      } catch (emailErr) {
        console.error(`Failed to send to ${lead.email}:`, emailErr);
      }
    }

    console.log(`Quiz follow-ups complete: ${JSON.stringify(sent)}`);

    return new Response(
      JSON.stringify({ success: true, sent, total: sent.day2 + sent.day4 + sent.day7 }),
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

// ==================== Email Templates ====================

// Email 2: The Real Cost of a Missed Call (Day 2)
function buildDay2Email(lead: QuizLead): { subject: string; text: string } {
  const annualLoss = extractAnnualLoss(lead);
  const goalText = getGoalText(lead.primary_pain_point);

  const subject = `It's more than just ${annualLoss}, ${lead.first_name}`;

  const text = `Hi ${lead.first_name},

Yesterday, we calculated that ${lead.business_name} is losing an estimated ${annualLoss} annually to missed calls. But the true cost is even higher.

It's not just about the immediate lost revenue. It's about the long-term impact:

- Damaged Reputation: Every missed call is a poor customer experience. 85% of people who can't reach you won't call back — they'll call your competitor, and you'll be remembered as the business that didn't answer.
- Wasted Marketing Spend: How much do you spend on Google Ads, SEO, or social media to make the phone ring? Every missed call is like setting that marketing budget on fire.
- Stunted Growth: You can't grow if you're leaking customers. Plugging the hole in your phone funnel is the single fastest way to accelerate growth.

Your primary goal was to ${goalText}. An AI Receptionist doesn't just recover lost revenue; it builds a more professional, reliable, and scalable foundation for your entire business.

Don't let another lead slip through the cracks.

Book a quick 15-minute call with one of our experts: https://brightlaunchiq.com/contact

Best,

The Team at BrightLaunchIQ
1-877-879-5552 | success@BrightLaunchIQ.com`;

  return { subject, text };
}

// Email 3: How a Similar Business Captured Extra Revenue (Day 4)
function buildDay4Email(lead: QuizLead): { subject: string; text: string } {
  const annualLoss = extractAnnualLoss(lead);
  const timingText = getTimingText(lead.after_hours_needs);

  const subject = `How a business like yours solved their missed call problem`;

  const text = `Hi ${lead.first_name},

A few months ago, a business owner just like you was in the exact same position. They were missing calls during peak hours and after closing, and losing customers to competitors who were quicker to answer the phone.

They were leaving an estimated $50,000 on the table every year.

After implementing the BrightLaunchIQ AI Receptionist, they not only recovered that lost revenue but also:

- Increased appointment bookings by 35% by offering 24/7 scheduling.
- Freed up their staff from the constant interruption of the phone, allowing them to focus on the customers in front of them.
- Improved their Google reviews, with customers frequently mentioning the professional and efficient phone service.

You told us your biggest challenge was missing calls ${timingText}. This is exactly what our AI Receptionist is built to solve, instantly and affordably.

Imagine what you could do with an extra ${annualLoss} in your business this year.

Ready to see how it works for you?

Start your journey and buy now: https://brightlaunchiq.com/ai-receptionist/get-started

Or simply reply to this email with any questions you have.

Best,

The Team at BrightLaunchIQ
1-877-879-5552 | success@BrightLaunchIQ.com`;

  return { subject, text };
}

// Email 4: Your Final Decision (Day 7)
function buildDay7Email(lead: QuizLead): { subject: string; text: string } {
  const annualLoss = extractAnnualLoss(lead);

  const subject = `A simple choice for ${lead.business_name}`;

  const text = `Hi ${lead.first_name},

Over the past week, we've talked about the ${annualLoss} you're losing to missed calls and how businesses just like yours are solving the problem.

Ultimately, it comes down to a simple choice:

Option A: Continue with the status quo, knowing that a significant portion of your potential customers are going directly to your competitors every single day.

Option B: Implement a proven solution that captures 100% of your leads, enhances your professionalism, and provides an immediate return on investment.

We understand you might have questions. The most common one we hear is, "Will my customers know it's an AI?" The answer is that most don't. Our AI is designed for natural, helpful conversation. But don't take our word for it.

Hear it for yourself: Call our live AI Receptionist now at 1-877-879-5552.

If you're ready to stop losing money and start maximizing every opportunity, we're here to help.

Buy Now and Start Recovering Your Lost Revenue: https://brightlaunchiq.com/ai-receptionist/get-started

This is your last email from this sequence. We're here if you need us.

Best,

The Team at BrightLaunchIQ
1-877-879-5552 | success@BrightLaunchIQ.com`;

  return { subject, text };
}
