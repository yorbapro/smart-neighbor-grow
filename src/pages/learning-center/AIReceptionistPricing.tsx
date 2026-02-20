import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import ROICalculator from "@/components/ROICalculator";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const AIReceptionistPricing = () => {
  useSEO({
    title: "AI Receptionist Pricing: What Does It Cost? | BrightLaunchIQ",
    description: "AI receptionist pricing ranges from $200-$1,500/mo. Compare per-call, per-minute, and flat-fee models to find the best value for your business.",
    canonical: "https://brightlaunchiq.com/learning-center/business-growth/ai-receptionist-pricing",
    keywords: "AI receptionist pricing, AI receptionist cost, virtual receptionist pricing, AI phone answering cost",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "pricing-article-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "AI Receptionist Pricing: What Does It Cost in 2026?",
      "description": "A comprehensive guide to AI receptionist pricing models, cost ranges, and ROI expectations.",
      "url": "https://brightlaunchiq.com/learning-center/business-growth/ai-receptionist-pricing",
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "AI Receptionist Pricing" },
        ],
      },
    });
    document.head.appendChild(script);
    return () => { document.getElementById("pricing-article-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Pricing Guide</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">AI Receptionist Pricing: What Does It Really Cost?</h1>
            <p className="text-lg text-muted-foreground mb-12">Understanding the true cost of an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> starts with knowing the pricing models, what's included, and how ROI typically outweighs the investment within 30 days.</p>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Much Does an AI Receptionist Cost?</h2>
              <p className="text-muted-foreground mb-4"><strong>Most AI receptionist services cost between $200 and $1,500 per month, depending on call volume, features, and integration depth.</strong> That's a fraction of the $3,200+/month cost of a full-time human receptionist when you factor in salary, benefits, and training.</p>
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Are the Common Pricing Models?</h2>
              <p className="text-muted-foreground mb-6"><strong>The three most common models are per-minute, per-call, and flat-fee monthly plans.</strong> Each has trade-offs depending on your call volume and complexity.</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { model: "Per-Minute", range: "$0.50–$1.50/min", best: "Low-volume businesses" },
                  { model: "Per-Call", range: "$2–$8/call", best: "Predictable call patterns" },
                  { model: "Flat Monthly", range: "$200–$1,500/mo", best: "High-volume, full automation" },
                ].map((m) => (
                  <div key={m.model} className="bg-card border border-border rounded-xl p-5">
                    <h3 className="font-display font-bold text-foreground mb-1">{m.model}</h3>
                    <p className="text-primary font-semibold mb-2">{m.range}</p>
                    <p className="text-sm text-muted-foreground">Best for: {m.best}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Should Be Included in Your Plan?</h2>
              <p className="text-muted-foreground mb-4"><strong>A quality AI receptionist plan includes 24/7 call answering, appointment booking, CRM integration, and call transfer capabilities at minimum.</strong></p>
              <ul className="space-y-2">
                {["24/7 live call answering", "Appointment scheduling & calendar sync", "CRM integration (HubSpot, Salesforce, etc.)", "Custom voice & scripts", "Call routing & warm transfers", "Detailed analytics dashboard"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Is an AI Receptionist Worth the Investment?</h2>
              <p className="text-muted-foreground mb-6"><strong>Yes — most businesses see a positive ROI within the first month.</strong> Use the calculator below to estimate your potential return.</p>
              <ROICalculator />
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">BrightLaunchIQ AI Receptionist Pricing</h2>
              <p className="text-muted-foreground mb-4"><strong>BrightLaunchIQ offers three transparent tiers: Core ($497/mo), Growth ($997/mo), and Pro ($1,497/mo).</strong> Each tier includes professional voice training, CRM integration, and a dedicated success manager.</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/pricing">View Full Pricing <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionistPricing;
