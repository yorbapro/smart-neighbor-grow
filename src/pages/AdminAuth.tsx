import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const authSchema = z.object({
  email: z.string().trim().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AdminAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Admin Login | BrightLaunchIQ";
    
    // Check if already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // Check if user is admin
        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", session.user.id)
          .eq("role", "admin")
          .maybeSingle();
        
        if (roles) {
          navigate("/admin/leads");
        }
      }
    };
    
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        // Defer the admin check
        setTimeout(async () => {
          const { data: roles } = await supabase
            .from("user_roles")
            .select("role")
            .eq("user_id", session.user.id)
            .eq("role", "admin")
            .maybeSingle();
          
          if (roles) {
            navigate("/admin/leads");
          } else {
            toast.error("You don't have admin access");
            await supabase.auth.signOut();
          }
        }, 0);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = authSchema.safeParse(formData);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin/leads`,
          },
        });
        
        if (error) throw error;
        toast.success("Account created! An admin must grant you access.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
        
        if (error) throw error;
        // The onAuthStateChange will handle the redirect
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      if (err.message?.includes("User already registered")) {
        toast.error("This email is already registered. Please sign in.");
      } else if (err.message?.includes("Invalid login credentials")) {
        toast.error("Invalid email or password.");
      } else {
        toast.error(err.message || "Authentication failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h1 className="font-display text-2xl font-bold text-foreground text-center mb-2">
                Admin {isSignUp ? "Sign Up" : "Login"}
              </h1>
              <p className="text-muted-foreground text-center mb-6">
                {isSignUp ? "Create an admin account" : "Access the leads dashboard"}
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="admin@company.com"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      {isSignUp ? "Creating Account..." : "Signing In..."}
                    </>
                  ) : (
                    isSignUp ? "Create Account" : "Sign In"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  disabled={isLoading}
                >
                  {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminAuth;
