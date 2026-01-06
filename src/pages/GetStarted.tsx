import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureForm from "@/components/checkout/LeadCaptureForm";
import TailoredReport from "@/components/checkout/TailoredReport";
import CheckoutStep from "@/components/checkout/CheckoutStep";

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
  const [step, setStep] = useState<"capture" | "report" | "checkout">("capture");
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const navigate = useNavigate();

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
        <div className="container max-w-4xl">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {["Business Info", "Your Report", "Checkout"].map((label, index) => {
              const stepIndex = index;
              const currentIndex = step === "capture" ? 0 : step === "report" ? 1 : 2;
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
                    className={`text-sm font-medium ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  {index < 2 && (
                    <div className="w-8 md:w-16 h-0.5 bg-border mx-2" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Content */}
          {step === "capture" && (
            <LeadCaptureForm onSubmit={handleLeadCapture} />
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
