import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Shield, CreditCard, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { LeadData } from "@/pages/GetStarted";
import { ProductTier, LEADLINE_TIERS, PROACTIVE_TIERS, LAUNCHPAD_TIERS, ProductConfig } from "@/lib/products";

const getProductConfig = (tier: ProductTier): ProductConfig | undefined => {
  return [...LEADLINE_TIERS, ...PROACTIVE_TIERS, ...LAUNCHPAD_TIERS].find(p => p.id === tier);
};

interface CheckoutStepProps {
  leadData: LeadData;
  selectedProduct: ProductTier;
  onBack: () => void;
}

const CheckoutStep = ({ leadData, selectedProduct, onBack }: CheckoutStepProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const product = getProductConfig(selectedProduct);

  if (!product) return null;

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { 
          email: leadData.email,
          businessName: leadData.businessName,
          industry: leadData.industry,
          product: selectedProduct,
        },
      });

      if (error) throw error;

      if (data?.url) {
        sessionStorage.setItem("checkoutLeadData", JSON.stringify(leadData));
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
              <p className="font-semibold text-foreground">{product.name} — {product.tierName}</p>
              <p className="text-sm text-muted-foreground">{product.tagline}</p>
            </div>
            <span className="font-bold text-foreground">${product.monthlyPrice.toLocaleString()}/mo</span>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-foreground">Monthly Investment</span>
            <span className="font-display text-2xl font-bold text-primary">${product.monthlyPrice.toLocaleString()}/mo</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {product.usageMinutes}
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">What's Included:</h3>
          {product.features.map((feature) => (
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
                Proceed to Payment
              </>
            )}
          </Button>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Shield className="w-4 h-4" />
            <span>256-bit SSL encrypted • PCI compliant</span>
          </div>

          <Button variant="outline" onClick={onBack} className="w-full">
            <ArrowLeft className="mr-2" size={16} />
            Back
          </Button>
        </div>

        {/* Trust Elements */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Our Guarantees</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Fast Implementation</p>
                <p className="text-sm text-muted-foreground">
                  From zero to live in days, not months.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Cancel Anytime</p>
                <p className="text-sm text-muted-foreground">
                  No long-term contracts. Cancel before your next billing date.
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
