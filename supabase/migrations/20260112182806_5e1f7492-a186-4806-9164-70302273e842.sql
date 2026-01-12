-- Fix aeo_audit_leads RLS policies - recreate as PERMISSIVE to properly grant admin-only access
DROP POLICY IF EXISTS "Admins can view all leads" ON public.aeo_audit_leads;
DROP POLICY IF EXISTS "Admins can update leads" ON public.aeo_audit_leads;
DROP POLICY IF EXISTS "Service role can insert leads" ON public.aeo_audit_leads;

-- Create proper PERMISSIVE policies for admin access
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

-- Allow inserts from edge functions (service role bypasses RLS anyway, but this is for anon key inserts from frontend)
CREATE POLICY "Allow public lead submissions"
ON public.aeo_audit_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Fix lead_notes RLS policies
DROP POLICY IF EXISTS "Admins can manage lead notes" ON public.lead_notes;

CREATE POLICY "Admins can view lead notes"
ON public.lead_notes
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert lead notes"
ON public.lead_notes
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update lead notes"
ON public.lead_notes
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete lead notes"
ON public.lead_notes
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));