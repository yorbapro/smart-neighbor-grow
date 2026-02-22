import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSelector from "@/components/checkout/ProductSelector";
import CheckoutStep from "@/components/checkout/CheckoutStep";
import { ProductTier } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export type LeadData = {
  businessName: string;
  industry: string;
  email: string;
  phone: string;
  monthlyRevenue: string;
  currentLeadSource: string;
  biggestChallenge: string;
};

const captureSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  businessName: z.string().trim().min(1, "Business name is required").max(100),
});

const GetStarted = () => {
  const [step, setStep] = useState<"product" | "capture" | "checkout">("product");
  const [selectedProduct, setSelectedProduct] = useState<ProductTier>("leadlineCore");
  const [captureData, setCaptureData] = useState({ name: "", email: "", businessName: "" });
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

  const handleProductSelect = (product: ProductTier) => {
    setSelectedProduct(product);
  };

  const handleProceedFromProduct = () => {
    setStep("capture");
    window.scrollTo(0, 0);
  };

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

  const handleCapture = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = captureSchema.safeParse(captureData);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }
    setStep("checkout");
    window.scrollTo(0, 0);
  };

  // Build the LeadData shape that CheckoutStep expects
  const leadData: LeadData = {
    businessName: captureData.businessName,
    industry: "",
    email: captureData.email,
    phone: "",
    monthlyRevenue: "",
    currentLeadSource: "",
    biggestChallenge: "",
  };

  const stepLabels = ["Choose Plan", "Your Info", "Checkout"];
  const currentIndex = step === "product" ? 0 : step === "capture" ? 1 : 2;

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
                onSelectProduct={handleProductSelect}
                showProactive={selectedProduct.startsWith("proactive")}
              />
              <div className="flex justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleProceedFromProduct}
                >
                  Continue with {getProductLabel(selectedProduct)}
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Quick Info Capture */}
          {step === "capture" && (
            <div className="max-w-md mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground text-center mb-2">
                  Almost There
                </h2>
                <p className="text-muted-foreground text-center mb-6">
                  Enter your info so we can set up your {getProductLabel(selectedProduct)} account.
                </p>

                <form onSubmit={handleCapture} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={captureData.name}
                      onChange={(e) => setCaptureData({ ...captureData, name: e.target.value })}
                      placeholder="Jane Smith"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={captureData.email}
                      onChange={(e) => setCaptureData({ ...captureData, email: e.target.value })}
                      placeholder="jane@company.com"
                      required
                      maxLength={255}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={captureData.businessName}
                      onChange={(e) => setCaptureData({ ...captureData, businessName: e.target.value })}
                      placeholder="Acme Plumbing"
                      required
                      maxLength={100}
                    />
                  </div>

                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    Continue to Checkout
                  </Button>
                </form>

                <Button
                  variant="ghost"
                  className="w-full mt-3"
                  onClick={() => { setStep("product"); window.scrollTo(0, 0); }}
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Plans
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Checkout */}
          {step === "checkout" && (
            <CheckoutStep
              leadData={leadData}
              selectedProduct={selectedProduct}
              onBack={() => { setStep("capture"); window.scrollTo(0, 0); }}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
