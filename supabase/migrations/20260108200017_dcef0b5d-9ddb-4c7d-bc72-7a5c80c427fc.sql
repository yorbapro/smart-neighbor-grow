-- Create table for AEO audit leads
CREATE TABLE public.aeo_audit_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  business_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  website TEXT,
  services TEXT NOT NULL,
  overall_score INTEGER,
  potential_score INTEGER,
  audit_result JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.aeo_audit_leads ENABLE ROW LEVEL SECURITY;

-- Allow inserts from edge functions (service role) - no public access needed
CREATE POLICY "Allow service role full access"
ON public.aeo_audit_leads
FOR ALL
USING (true)
WITH CHECK (true);

-- Add index for email lookups
CREATE INDEX idx_aeo_audit_leads_email ON public.aeo_audit_leads(email);
CREATE INDEX idx_aeo_audit_leads_created_at ON public.aeo_audit_leads(created_at DESC);