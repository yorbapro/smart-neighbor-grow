import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogOut, LayoutDashboard, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Dashboard | BrightLaunchIQ";

    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading…</div>
      </div>
    );
  }

  const firstName = user?.user_metadata?.full_name?.split(" ")[0]
    || user?.user_metadata?.name?.split(" ")[0]
    || user?.email?.split("@")[0]
    || "there";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                Hey, {firstName} 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Welcome to your BrightLaunchIQ dashboard.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="mr-2 w-4 h-4" />
              Sign Out
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">
                Get Started
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                See how our AI receptionist can help your business capture more leads and save time.
              </p>
              <Button variant="hero" size="sm" asChild>
                <Link to="/get-started">
                  Start Setup <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-lg font-semibold text-foreground mb-2">
                Talk to Our Team
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                Have questions? Schedule a call or reach out to discuss your needs.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6">
            <h2 className="font-display text-lg font-semibold text-foreground mb-2">
              Account Details
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-muted-foreground">Email:</span>{" "}
                <span className="text-foreground">{user?.email}</span>
              </p>
              <p>
                <span className="text-muted-foreground">Account created:</span>{" "}
                <span className="text-foreground">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "—"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
