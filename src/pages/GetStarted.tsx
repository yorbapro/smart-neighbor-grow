import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/checkout/LeadCaptureForm";
import TailoredReport from "@/components/checkout/TailoredReport";
import CheckoutStep from "@/components/checkout/CheckoutStep";
import ProductSelector from "@/components/checkout/ProductSelector";
import { ProductTier } from "@/lib/products";

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
  const [step, setStep] = useState<"product" | "capture" | "report" | "checkout">("product");
  const [selectedProduct, setSelectedProduct] = useState<ProductTier>("launchPad360");
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Get Started - Schedule Your Revenue Audit | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Start your AI sales automation journey. Schedule a free 15-minute revenue audit and get a personalized growth roadmap for your business.");
    }

    // Add keywords meta
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "get started, revenue audit, AI sales demo, schedule consultation, business growth, lead generation setup";
    if (existingKeywords) {
      existingKeywords.setAttribute("content", keywordsContent);
    } else {
      const keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      keywordsMeta.content = keywordsContent;
      document.head.appendChild(keywordsMeta);
    }

    window.scrollTo(0, 0);
  }, []);

  const handleProductSelect = (product: ProductTier) => {
    setSelectedProduct(product);
  };

  const handleProceedFromProduct = () => {
    setStep("capture");
  };

  const handleLeadCapture = (data: LeadData) => {
    setLeadData(data);
    setStep("report");
  };

  const handleProceedToCheckout = () => {
    setStep("checkout");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container max-w-5xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 flex-wrap">
            {["Choose Plan", "Business Info", "Your Report", "Checkout"].map((label, index) => {
              const stepIndex = index;
              const currentIndex = step === "product" ? 0 : step === "capture" ? 1 : step === "report" ? 2 : 3;
              const isActive = stepIndex === currentIndex;
              const isComplete = stepIndex < currentIndex;
              
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
                  {index < 3 && (
                    <div className="w-4 md:w-8 h-0.5 bg-border mx-1 md:mx-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          {step === "product" && (
            <div className="space-y-6">
              <ProductSelector
                selectedProduct={selectedProduct}
                onSelectProduct={handleProductSelect}
              />
              <div className="flex justify-center">
                <button
                  onClick={handleProceedFromProduct}
                  className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Continue with {selectedProduct === "localLift" ? "LocalLift™" : selectedProduct === "leadLine" ? "LeadLine™" : "LaunchPad 360™"}
                </button>
              </div>
            </div>
          )}
          
          {step === "capture" && (
            <div className="max-w-4xl mx-auto">
              <LeadCaptureForm onSubmit={handleLeadCapture} />
            </div>
          )}
          
          {step === "report" && leadData && (
            <TailoredReport 
              leadData={leadData} 
              onProceed={handleProceedToCheckout}
              onBack={() => setStep("capture")}
            />
          )}
          
          {step === "checkout" && leadData && (
            <CheckoutStep 
              leadData={leadData}
              selectedProduct={selectedProduct}
              onBack={() => setStep("report")}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
