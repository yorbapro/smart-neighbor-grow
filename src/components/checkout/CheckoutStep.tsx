import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Shield, CreditCard, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { LeadData } from "@/pages/GetStarted";

interface CheckoutStepProps {
  leadData: LeadData;
  onBack: () => void;
}

const CheckoutStep = ({ leadData, onBack }: CheckoutStepProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { 
          email: leadData.email,
          businessName: leadData.businessName,
          industry: leadData.industry,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, "_blank");
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error: any) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout. Please try again or contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Order Summary */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">
          Order Summary
        </h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-3 border-b border-border">
            <div>
              <p className="font-semibold text-foreground">LaunchPad 360™ Setup</p>
              <p className="text-sm text-muted-foreground">One-time infrastructure build</p>
            </div>
            <span className="font-bold text-foreground">$1,500</span>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-border">
            <div>
              <p className="font-semibold text-foreground">LaunchPad 360™ Monthly</p>
              <p className="text-sm text-muted-foreground">Starts 14 days after onboarding</p>
            </div>
            <span className="font-bold text-foreground">$500/mo</span>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">Due Today</span>
            <span className="font-display text-2xl font-bold text-primary">$1,500</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Then $500/month starting 14 days after your strategy session
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">What's Included:</h3>
          {[
            "Custom AI infrastructure build",
            "500+ targeted local leads",
            "Multi-channel outreach (calls, SMS, email, LinkedIn)",
            "60-minute strategy session",
            "Automated inbox triage",
            "Monthly success audits",
            "14-Day Speed to Lead Guarantee",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-accent flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Section */}
      <div className="space-y-6">
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">
            Complete Your Order
          </h2>
          <p className="text-muted-foreground mb-6">
            Secure checkout powered by Stripe
          </p>

          <div className="bg-secondary/30 rounded-xl p-4 mb-6">
            <p className="text-sm text-foreground">
              <strong>Billing to:</strong> {leadData.email}
            </p>
            <p className="text-sm text-muted-foreground">
              {leadData.businessName} • {leadData.industry}
            </p>
          </div>

          <Button
            variant="hero"
            size="lg"
            className="w-full mb-4"
            onClick={handleCheckout}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="mr-2" size={20} />
                Pay $1,500 Now
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Shield className="w-4 h-4" />
            <span>256-bit SSL encrypted • PCI compliant</span>
          </div>

          <Button variant="outline" onClick={onBack} className="w-full">
            <ArrowLeft className="mr-2" size={16} />
            Back to Report
          </Button>
        </div>

        {/* Trust Elements */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Our Guarantees</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-foreground">14-Day Speed to Lead</p>
                <p className="text-sm text-muted-foreground">
                  From zero to automated meetings in 14 days, or we work free.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-foreground">No Long-Term Contracts</p>
                <p className="text-sm text-muted-foreground">
                  Cancel anytime with 5 days notice before billing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-foreground">You Own Your Data</p>
                <p className="text-sm text-muted-foreground">
                  All leads, workflows, and infrastructure belong to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          By proceeding, you agree to our{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Subscription Terms & Cancellation Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckoutStep;
