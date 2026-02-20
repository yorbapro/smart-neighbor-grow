
-- Quiz responses table
CREATE TABLE public.ai_receptionist_quiz_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_name TEXT NOT NULL,
  business_type TEXT NOT NULL,
  call_volume TEXT NOT NULL,
  missed_call_frequency TEXT NOT NULL,
  after_hours_needs TEXT NOT NULL,
  appointment_booking TEXT NOT NULL,
  current_call_handling TEXT NOT NULL,
  primary_pain_point TEXT NOT NULL,
  ai_receptionist_awareness TEXT NOT NULL,
  timeline TEXT NOT NULL,
  calculated_score INTEGER NOT NULL DEFAULT 0,
  score_segment TEXT NOT NULL DEFAULT 'Exploratory',
  email_consent BOOLEAN NOT NULL DEFAULT false,
  report_sent_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ai_receptionist_quiz_responses ENABLE ROW LEVEL SECURITY;

-- Allow public submissions (quiz is public-facing)
CREATE POLICY "Allow public quiz submissions"
ON public.ai_receptionist_quiz_responses
FOR INSERT
WITH CHECK (true);

-- Admins can view all quiz responses
CREATE POLICY "Admins can view quiz responses"
ON public.ai_receptionist_quiz_responses
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update quiz responses
CREATE POLICY "Admins can update quiz responses"
ON public.ai_receptionist_quiz_responses
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));
