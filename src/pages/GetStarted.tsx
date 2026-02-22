import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckoutStep from "@/components/checkout/CheckoutStep";
import WhatsIncludedSheet from "@/components/checkout/WhatsIncludedSheet";
import { ProductTier } from "@/lib/products";
import { LEADLINE_TIERS } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Wrench } from "lucide-react";

export type LeadData = {
  businessName: string;
  industry: string;
  email: string;
  phone: string;
  monthlyRevenue: string;
  currentLeadSource: string;
  biggestChallenge: string;
};

const tierColors: Record<string, { badge: string; border: string; accent: string }> = {
  Core: { badge: "bg-emerald-500", border: "border-border", accent: "text-emerald-500" },
  Growth: { badge: "bg-blue-500", border: "border-primary", accent: "text-blue-500" },
  Pro: { badge: "bg-red-500", border: "border-red-500", accent: "text-red-500" },
};

const tierPsychology: Record<string, string> = {
  Core: "Serious but accessible — everything you need to stop missing calls today.",
  Growth: "Operationally deeper — calendar, CRM, and automation working together.",
  Pro: "Enterprise-grade infrastructure — multi-location, custom voice, priority optimization.",
};

const GetStarted = () => {
  const [step, setStep] = useState<"product" | "checkout">("product");
  const [selectedProduct, setSelectedProduct] = useState<ProductTier>("leadlineCore");
  const [sheetTier, setSheetTier] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam) {
      setSelectedProduct(productParam as ProductTier);
    }

    document.title = "Get Started — Choose Your AI Receptionist Plan | BrightLaunchIQ";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Choose your AI Receptionist plan and get started in minutes. Core, Growth, and Pro tiers available.");
    }

    window.scrollTo(0, 0);
  }, [searchParams]);

  const leadData: LeadData = {
    businessName: "",
    industry: "",
    email: "",
    phone: "",
    monthlyRevenue: "",
    currentLeadSource: "",
    biggestChallenge: "",
  };

  const stepLabels = ["Choose Plan", "Checkout"];
  const currentIndex = step === "product" ? 0 : 1;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-6xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {stepLabels.map((label, index) => {
              const isActive = index === currentIndex;
              const isComplete = index < currentIndex;
              return (
                <div key={label} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : isComplete
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isComplete ? "✓" : index + 1}
                  </div>
                  <span
                    className={`text-sm font-medium hidden sm:inline ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  {index < stepLabels.length - 1 && (
                    <div className="w-4 md:w-8 h-0.5 bg-border mx-1 md:mx-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step 1: Choose Plan — Pricing-style cards */}
          {step === "product" && (
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Choose Your AI Receptionist Plan
                </h2>
                <p className="text-lg text-muted-foreground mb-2">
                  Every tier includes a one-time setup fee for custom configuration.
                </p>
                <p className="text-sm text-muted-foreground">
                  Upgrading? Your previous setup fee is credited toward the new tier.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {LEADLINE_TIERS.map((tier) => {
                  const colors = tierColors[tier.tierName] || tierColors.Core;
                  const psychology = tierPsychology[tier.tierName];
                  const isCore = tier.tierName === "Core";
                  const isSelected = selectedProduct === tier.id;

                  return (
                    <div
                      key={tier.id}
                      className={`relative rounded-2xl p-8 transition-all border cursor-pointer ${
                        isSelected
                          ? "border-primary ring-2 ring-primary/20 bg-primary/5"
                          : `${colors.border} bg-secondary-foreground/5 hover:border-primary/30`
                      }`}
                      onClick={() => setSelectedProduct(tier.id)}
                    >
                      {isCore && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                          Recommended Starting Point
                        </div>
                      )}

                      {/* Selected indicator */}
                      {isSelected && (
                        <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}

                      {/* Tier badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 ${colors.badge}`}>
                        {tier.tierName}
                      </div>

                      {/* Tier name */}
                      <h3 className={`font-display text-3xl md:text-4xl font-bold mb-2 ${colors.accent}`}>
                        {tier.tierName}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{tier.tagline}</p>

                      {/* Monthly price */}
                      <div className="mb-2">
                        <span className="text-4xl font-display font-bold text-foreground">
                          ${tier.monthlyPrice.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </div>

                      {/* Setup fee */}
                      {tier.setupFee && (
                        <div className="mb-6 px-3 py-2 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10">
                          <p className="text-sm text-muted-foreground">
                            One-time setup: <span className="font-semibold text-foreground">${tier.setupFee.toLocaleString()}</span>
                          </p>
                        </div>
                      )}

                      {/* Key features */}
                      <ul className="space-y-3 mb-6">
                        {tier.features.map((feature, i) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 0 && tier.tierName !== "Core" ? colors.accent : "text-primary"}`} />
                            <span className={`text-sm ${i === 0 && tier.tierName !== "Core" ? `font-semibold ${colors.accent}` : "text-muted-foreground"}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* See features + What's Included */}
                      <div className="mb-6 flex flex-col gap-1">
                        <Link
                          to={`/ai-receptionist/${tier.tierName.toLowerCase()}/features`}
                          className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          See all {tier.tierName} features <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline inline-flex items-center gap-1 text-left"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSheetTier(tier.tierName);
                          }}
                        >
                          What's included <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Setup justification */}
                      {tier.setupFeatures && tier.setupFeatures.length > 0 && (
                        <div className="mb-6 pt-4 border-t border-secondary-foreground/10">
                          <div className="flex items-center gap-2 mb-3">
                            <Wrench className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">What Setup Includes</span>
                          </div>
                          <ul className="space-y-2">
                            {tier.setupFeatures.map((sf) => (
                              <li key={sf} className="flex items-start gap-2">
                                <Check className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-muted-foreground">{sf}</span>
                              </li>
                            ))}
                          </ul>
                          {psychology && (
                            <p className="mt-3 text-xs italic text-muted-foreground">{psychology}</p>
                          )}
                        </div>
                      )}

                      {/* Usage info */}
                      <div className="mb-6 pt-4 border-t border-secondary-foreground/10">
                        <p className="text-sm font-semibold text-muted-foreground">{tier.usageMinutes}</p>
                        <p className="text-xs text-muted-foreground">{tier.usageCalls}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Upgrade credit callout */}
              <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <p className="text-sm font-semibold text-primary mb-1">
                  Upgrade Anytime — Your Setup Fee Travels With You
                </p>
                <p className="text-sm text-muted-foreground">
                  Already on Core and want to move to Growth? Your $1,500 setup fee is applied as a credit — you only pay the $1,000 difference.
                </p>
              </div>

              {/* Continue button */}
              <div className="flex justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => { setStep("checkout"); window.scrollTo(0, 0); }}
                >
                  Continue with {LEADLINE_TIERS.find(t => t.id === selectedProduct)?.tierName || "Selected Plan"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Checkout */}
          {step === "checkout" && (
            <CheckoutStep
              leadData={leadData}
              selectedProduct={selectedProduct}
              onBack={() => { setStep("product"); window.scrollTo(0, 0); }}
            />
          )}
        </div>
      </main>
      <Footer />

      {/* What's Included flyout */}
      <WhatsIncludedSheet
        open={!!sheetTier}
        onOpenChange={(open) => { if (!open) setSheetTier(null); }}
        tierName={sheetTier || "Core"}
      />
    </div>
  );
};

export default GetStarted;
