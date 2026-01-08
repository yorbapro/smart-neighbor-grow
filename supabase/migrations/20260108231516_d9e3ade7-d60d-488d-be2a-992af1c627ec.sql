-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for admin management
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents infinite recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Admins can view all roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add follow-up tracking to aeo_audit_leads
ALTER TABLE public.aeo_audit_leads
ADD COLUMN followup_1_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN followup_2_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN followup_3_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN converted BOOLEAN DEFAULT false,
ADD COLUMN converted_at TIMESTAMP WITH TIME ZONE;

-- Index for follow-up queries
CREATE INDEX idx_aeo_audit_leads_followup ON public.aeo_audit_leads(created_at, followup_1_sent_at, followup_2_sent_at, followup_3_sent_at);

-- Update the leads policy to only allow admin access
DROP POLICY IF EXISTS "Allow service role full access" ON public.aeo_audit_leads;

CREATE POLICY "Admins can view all leads"
ON public.aeo_audit_leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update leads"
ON public.aeo_audit_leads
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Service role can insert leads"
ON public.aeo_audit_leads
FOR INSERT
WITH CHECK (true);