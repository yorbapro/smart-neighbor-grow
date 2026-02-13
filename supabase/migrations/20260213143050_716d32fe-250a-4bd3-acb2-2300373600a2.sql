
-- Create onboarding submissions table
CREATE TABLE public.onboarding_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  business_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  
  -- ICP (Ideal Customer Profile)
  target_industries TEXT NOT NULL,
  target_company_size TEXT NOT NULL,
  target_locations TEXT NOT NULL,
  target_job_titles TEXT NOT NULL,
  
  -- Competitors
  competitors TEXT,
  differentiators TEXT,
  
  -- Sales Goals
  monthly_meeting_goal INTEGER,
  revenue_target TEXT,
  sales_cycle_length TEXT,
  
  -- Current Tools & Process
  current_crm TEXT,
  current_outreach_tools TEXT,
  current_lead_sources TEXT,
  
  -- Timeline & Preferences
  launch_urgency TEXT NOT NULL DEFAULT 'standard',
  preferred_channels TEXT[],
  additional_notes TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new'
);

-- Enable RLS
ALTER TABLE public.onboarding_submissions ENABLE ROW LEVEL SECURITY;

-- Allow public inserts (post-purchase customers submit without auth)
CREATE POLICY "Allow public onboarding submissions"
  ON public.onboarding_submissions
  FOR INSERT
  WITH CHECK (true);

-- Admins can view all submissions
CREATE POLICY "Admins can view onboarding submissions"
  ON public.onboarding_submissions
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update submissions
CREATE POLICY "Admins can update onboarding submissions"
  ON public.onboarding_submissions
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));
