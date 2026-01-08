-- Create table for lead notes
CREATE TABLE public.lead_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES public.aeo_audit_leads(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.lead_notes ENABLE ROW LEVEL SECURITY;

-- Only admins can manage notes
CREATE POLICY "Admins can manage lead notes"
ON public.lead_notes
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create table for email templates
CREATE TABLE public.email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_key TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.email_templates ENABLE ROW LEVEL SECURITY;

-- Admins can view and update templates
CREATE POLICY "Admins can manage email templates"
ON public.email_templates
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Allow service role to read templates (for edge functions)
CREATE POLICY "Service role can read templates"
ON public.email_templates
FOR SELECT
USING (true);

-- Insert default email templates
INSERT INTO public.email_templates (template_key, name, subject, description, body_html) VALUES
(
  'followup_day_1',
  'Day 1 Follow-up',
  'Quick question about your AEO score ({{overall_score}}/100)',
  'Sent 1 day after audit. Personal check-in about their score.',
  '<div style="font-family: -apple-system, BlinkMacSystemFont, ''Segoe UI'', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a1a2e;">Hi there,</h2>
  <p>Yesterday you checked your AI search visibility for <strong>{{business_name}}</strong> and scored <strong>{{overall_score}}/100</strong>.</p>
  <p>I noticed there''s significant room for improvement—your potential score is <strong>{{potential_score}}/100</strong>.</p>
  <p>Quick question: <em>Is improving your visibility on ChatGPT, Gemini, and voice search a priority for you right now?</em></p>
  <p>If so, I''d love to show you exactly how we can boost your score in the next 30 days.</p>
  <a href="https://brightlaunchiq.com/get-started" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0;">Let''s Talk</a>
  <p style="color: #666; font-size: 14px; margin-top: 30px;">Best,<br>The BrightLaunchIQ Team</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
  <p style="color: #999; font-size: 12px;">You received this because you requested an AEO audit for {{business_name}}.</p>
</div>'
),
(
  'followup_day_3',
  'Day 3 Follow-up',
  'Your competitors might be ahead—here''s why',
  'Sent 3 days after audit. Competitor/urgency messaging.',
  '<div style="font-family: -apple-system, BlinkMacSystemFont, ''Segoe UI'', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a1a2e;">Quick update for {{business_name}}</h2>
  <p>A few days ago, you discovered your AI search score was <strong>{{overall_score}}/100</strong>.</p>
  <p>Here''s what''s happening while you''re reading this:</p>
  <ul style="color: #444; line-height: 1.8;">
    <li>AI assistants like ChatGPT and Gemini are answering customer questions about your industry</li>
    <li>Voice searches for local services are happening every second</li>
    <li>Businesses optimizing for AI search are getting those referrals</li>
  </ul>
  <p>The good news? With a potential score of <strong>{{potential_score}}/100</strong>, you can catch up fast.</p>
  <p>Our LocalLift™ service is designed specifically for businesses like yours.</p>
  <a href="https://brightlaunchiq.com/products/locallift" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0;">See How LocalLift™ Works</a>
  <p style="color: #666; font-size: 14px; margin-top: 30px;">Best,<br>The BrightLaunchIQ Team</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
  <p style="color: #999; font-size: 12px;">You received this because you requested an AEO audit for {{business_name}}.</p>
</div>'
),
(
  'followup_day_7',
  'Day 7 Follow-up',
  'Last chance: Boost your AI visibility from {{overall_score}} to {{potential_score}}',
  'Sent 7 days after audit. Final follow-up with score summary.',
  '<div style="font-family: -apple-system, BlinkMacSystemFont, ''Segoe UI'', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a1a2e;">Final check-in for {{business_name}}</h2>
  <p>It''s been a week since you discovered your AEO score was <strong>{{overall_score}}/100</strong>.</p>
  <p>I wanted to reach out one more time because I genuinely believe there''s an opportunity here.</p>
  <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; margin: 20px 0;">
    <p style="margin: 0 0 10px; font-weight: bold; color: #1a1a2e;">Your AEO snapshot:</p>
    <p style="margin: 5px 0; color: #666;">Current Score: <strong style="color: #ef4444;">{{overall_score}}/100</strong></p>
    <p style="margin: 5px 0; color: #666;">Potential Score: <strong style="color: #10b981;">{{potential_score}}/100</strong></p>
    <p style="margin: 5px 0; color: #666;">Improvement: <strong style="color: #8b5cf6;">+{{score_improvement}} points</strong></p>
  </div>
  <p>If you''re ready to start dominating AI search results, we''re here to help.</p>
  <p>If not, no worries—this will be my last email. I wish you all the best with {{business_name}}!</p>
  <a href="https://brightlaunchiq.com/get-started" style="display: inline-block; background: linear-gradient(135deg, #0ea5e9, #8b5cf6); color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; margin: 20px 0;">Start My AEO Optimization</a>
  <p style="color: #666; font-size: 14px; margin-top: 30px;">Cheers,<br>The BrightLaunchIQ Team</p>
  <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
  <p style="color: #999; font-size: 12px;">You received this because you requested an AEO audit for {{business_name}}. This is our final follow-up.</p>
</div>'
);

-- Add index for lead notes
CREATE INDEX idx_lead_notes_lead_id ON public.lead_notes(lead_id);
CREATE INDEX idx_lead_notes_created_at ON public.lead_notes(created_at DESC);