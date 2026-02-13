import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Mail, Phone, Lock, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const emailSentRef = useRef(false);

  useEffect(() => {
    document.title = "Payment Successful | BrightLaunchIQ";
    window.scrollTo(0, 0);

    // Send welcome email after successful payment
    const sendWelcomeEmail = async () => {
      if (emailSentRef.current) return;
      emailSentRef.current = true;

      // Get stored lead data from sessionStorage
      const storedData = sessionStorage.getItem("checkoutLeadData");
      if (!storedData) {
        console.log("No lead data found for welcome email");
        return;
      }

      try {
        const leadData = JSON.parse(storedData);
        await supabase.functions.invoke("send-welcome-email", {
          body: {
            email: leadData.email,
            businessName: leadData.businessName,
            industry: leadData.industry,
          },
        });
        console.log("Welcome email sent successfully");
        sessionStorage.removeItem("checkoutLeadData");
      } catch (error) {
        console.error("Failed to send welcome email:", error);
      }
    };

    sendWelcomeEmail();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-accent" />
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Welcome to BrightLaunchIQ!
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Your payment has been processed successfully. Your 14-day launch countdown begins now.
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 mb-8 text-left">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              What Happens Next
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Check Your Email</h3>
                  <p className="text-muted-foreground text-sm">
                    You'll receive a welcome email with your onboarding questionnaire within 5 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Schedule Your Strategy Session</h3>
                  <p className="text-muted-foreground text-sm">
                    Book your 60-minute strategy call with our team to approve your AI-generated lead list and outreach voice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">We Build Your Engine</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team builds your custom sales infrastructure, warming your outreach domains and preparing your lead pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
            <p className="text-foreground font-semibold mb-2">
              Your 14-Day Guarantee Is Active
            </p>
            <p className="text-muted-foreground text-sm">
              If we don't have you receiving automated meeting requests within 14 days, 
              we work for free until we do.
            </p>
          </div>

          {/* Security Reassurance */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-primary" />
              <p className="text-foreground font-semibold">Your Data Is Protected</p>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your payment was processed securely via Stripe. Your business data is encrypted with AES-256 
              and never used to train AI models.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">AES-256 Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/10">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">Zero-Training Policy</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:success@BrightLaunchIQ.com">Contact Support</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
