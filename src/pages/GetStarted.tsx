import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSelector from "@/components/checkout/ProductSelector";
import CheckoutStep from "@/components/checkout/CheckoutStep";
import { ProductTier } from "@/lib/products";
import { Button } from "@/components/ui/button";

export type LeadData = {
  businessName: string;
  industry: string;
  email: string;
  phone: string;
  monthlyRevenue: string;
  currentLeadSource: string;
  biggestChallenge: string;
};

const GetStarted = () => {
  const [step, setStep] = useState<"product" | "checkout">("product");
  const [selectedProduct, setSelectedProduct] = useState<ProductTier>("leadlineCore");
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

  const getProductLabel = (id: ProductTier): string => {
    const labels: Record<ProductTier, string> = {
      leadlineCore: "AI Receptionist Core",
      leadlineGrowth: "AI Receptionist Growth",
      leadlinePro: "AI Receptionist Pro",
      proactiveLaunch: "Proactive Launch",
      proactiveScale: "Proactive Scale",
      proactiveDominate: "Proactive Dominate",
      lp360Growth: "LaunchPad 360™ Growth",
      lp360Scale: "LaunchPad 360™ Scale",
      lp360Dominate: "LaunchPad 360™ Dominate",
    };
    return labels[id] || id;
  };

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
        <div className="container max-w-5xl">
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

          {/* Step 1: Choose Plan */}
          {step === "product" && (
            <div className="space-y-6">
              <ProductSelector
                selectedProduct={selectedProduct}
                onSelectProduct={(product) => setSelectedProduct(product)}
                showProactive={selectedProduct.startsWith("proactive")}
              />
              <div className="flex justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => { setStep("checkout"); window.scrollTo(0, 0); }}
                >
                  Continue with {getProductLabel(selectedProduct)}
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
    </div>
  );
};

export default GetStarted;
