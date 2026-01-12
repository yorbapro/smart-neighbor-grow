-- Drop the overly permissive policy that exposes email templates publicly
-- Edge functions use service_role key which bypasses RLS, so this policy is unnecessary
DROP POLICY IF EXISTS "Service role can read templates" ON public.email_templates;