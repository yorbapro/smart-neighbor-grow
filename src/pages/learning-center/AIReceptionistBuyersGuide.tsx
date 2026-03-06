import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, CheckCircle } from "lucide-react";

const checklistItems = [
  { id: "availability", label: "24/7 Availability", description: "Does the solution answer calls around the clock, including holidays and weekends?" },
  { id: "booking", label: "Appointment Booking", description: "Can it book appointments directly into your calendar or scheduling software?" },
  { id: "crm", label: "CRM Integration", description: "Does it automatically log call data, lead info, and notes to your CRM?" },
  { id: "transfer", label: "Call Routing & Transfers", description: "Can it transfer urgent calls to the right person based on caller intent?" },
  { id: "customization", label: "Custom Voice & Scripts", description: "Can the voice, tone, and scripts be customized to match your brand?" },
  { id: "pricing", label: "Transparent Pricing", description: "Is pricing flat-rate with no hidden per-call or per-minute fees?" },
  { id: "support", label: "Dedicated Support & Training", description: "Do you get a dedicated success manager and professional voice training?" },
];

const AIReceptionistBuyersGuide = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;

  useSEO({
    title: "AI Receptionist Buyer's Guide: 7 Must-Have Features | BrightLaunchIQ",
    description: "Use this 7-point checklist to evaluate AI receptionist vendors. Compare features, pricing models, and integration capabilities before you buy.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-buyers-guide",
    keywords: "AI receptionist buyer's guide, how to choose AI receptionist, AI receptionist checklist, AI phone answering evaluation",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "buyers-guide-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Guide",
        "name": "AI Receptionist Buyer's Guide",
        "description": "A comprehensive checklist for evaluating and choosing the right AI receptionist for your business.",
        "url": "https://brightlaunchiq.com/learning-center/business-growth/ai-receptionist-buyers-guide",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "AI Receptionist Selection Checklist",
        "numberOfItems": 7,
        "itemListElement": checklistItems.map((item, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": item.label,
          "description": item.description,
        })),
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("buyers-guide-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Buyer's Guide</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">AI Receptionist Buyer's Guide: 7 Must-Have Features</h1>
            <p className="text-lg text-muted-foreground mb-12">Not all <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionists</Link> are created equal. Use this guide to evaluate vendors and choose the right solution for your business.</p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Should You Look for in an AI Receptionist?</h2>
              <p className="text-muted-foreground mb-4"><strong>The 7 critical evaluation factors are: 24/7 availability, appointment booking, CRM integration, call routing, customization, transparent pricing, and dedicated support.</strong> Any vendor missing more than one of these should be reconsidered.</p>
            </section>

            {/* Interactive Checklist */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Your AI Receptionist Selection Checklist</h2>
              <p className="text-muted-foreground mb-6"><strong>Check off each factor as you evaluate vendors.</strong> A qualified AI receptionist should meet all 7 criteria.</p>

              <div className="bg-card border border-border rounded-xl p-6 space-y-1">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-muted-foreground">{checkedCount} of {checklistItems.length} checked</p>
                  <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${(checkedCount / checklistItems.length) * 100}%` }} />
                  </div>
                </div>
                {checklistItems.map((item) => (
                  <label
                    key={item.id}
                    className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-colors ${checked[item.id] ? "bg-primary/5 border border-primary/20" : "bg-background border border-transparent hover:bg-muted/50"}`}
                    htmlFor={item.id}
                  >
                    <Checkbox
                      id={item.id}
                      checked={!!checked[item.id]}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${checked[item.id] ? "text-primary" : "text-foreground"}`}>{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {checked[item.id] && <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />}
                  </label>
                ))}

                {checkedCount === checklistItems.length && (
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg text-center">
                    <p className="font-bold text-primary mb-2">✅ All 7 factors checked!</p>
                    <p className="text-sm text-muted-foreground">BrightLaunchIQ meets every criterion on this list.</p>
                  </div>
                )}
              </div>

              <div className="mt-6 text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/get-started">See the BrightLaunchIQ Difference — Start Free Trial <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Questions Should You Ask During a Demo?</h2>
              <p className="text-muted-foreground mb-4"><strong>Ask these 5 questions to separate real AI from glorified voicemail:</strong></p>
              <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
                <li>"Can I hear a live demo call right now?"</li>
                <li>"How does your AI handle calls it can't resolve?"</li>
                <li>"What CRM and calendar integrations are included?"</li>
                <li>"Are there per-call or per-minute fees on top of the monthly rate?"</li>
                <li>"How long does setup take, and do I get a dedicated success manager?"</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Much Should You Expect to Pay?</h2>
              <p className="text-muted-foreground mb-4"><strong>Quality AI receptionist services range from $300 to $1,500 per month.</strong> Beware of per-minute pricing that can balloon costs unpredictably. Flat-rate plans with transparent pricing are the safest choice.</p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-receptionist/pricing">Compare BrightLaunchIQ Plans <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionistBuyersGuide;
