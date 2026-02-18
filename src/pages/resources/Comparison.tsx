import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Minus } from "lucide-react";

const Comparison = () => {
  useSEO({
    title: "AI Lead Generation vs Traditional Marketing | BrightLaunchIQ",
    description: "Compare AI lead generation to traditional marketing methods. See the cost, speed, and ROI differences between AI sales automation and manual prospecting.",
    canonical: "https://brightlaunchiq.com/resources/comparison",
    keywords: "AI vs traditional marketing, AI lead generation comparison, sales automation ROI, AI SDR vs human SDR",
    speakable: ["h1", ".comparison-intro"],
  });

  const comparisonData = [
    {
      category: "Speed & Availability",
      features: [
        { name: "Response Time", ai: "Under 60 seconds", traditional: "24-48 hours", winner: "ai" },
        { name: "Operating Hours", ai: "24/7/365", traditional: "40 hrs/week", winner: "ai" },
        { name: "Lead Follow-up", ai: "Instant & automated", traditional: "Manual, often delayed", winner: "ai" },
        { name: "After-Hours Coverage", ai: "Full coverage", traditional: "None or voicemail", winner: "ai" },
      ],
    },
    {
      category: "Cost & Efficiency",
      features: [
        { name: "Monthly Cost", ai: "Fraction of a hire", traditional: "$6,000+/month (SDR salary)", winner: "ai" },
        { name: "Daily Cost", ai: "Pennies on the dollar", traditional: "$220+/day", winner: "ai" },
        { name: "Leads Processed", ai: "Unlimited", traditional: "50-100/day max", winner: "ai" },
        { name: "Setup Time", ai: "30 days", traditional: "3-6 months to hire & train", winner: "ai" },
        { name: "Scaling Cost", ai: "Minimal increase", traditional: "Linear (hire more people)", winner: "ai" },
      ],
    },
    {
      category: "Quality & Personalization",
      features: [
        { name: "Message Personalization", ai: "High (data-driven)", traditional: "Varies by individual", winner: "tie" },
        { name: "Brand Consistency", ai: "100% consistent", traditional: "Varies", winner: "ai" },
        { name: "Complex Negotiations", ai: "Human handoff", traditional: "Full capability", winner: "traditional" },
        { name: "Relationship Building", ai: "Supported by AI", traditional: "Human strength", winner: "traditional" },
        { name: "Error Rate", ai: "Near zero", traditional: "Human error possible", winner: "ai" },
      ],
    },
    {
      category: "Data & Intelligence",
      features: [
        { name: "Lead Scoring", ai: "Real-time AI scoring", traditional: "Manual or basic", winner: "ai" },
        { name: "Intent Detection", ai: "Automatic signals", traditional: "Gut feel", winner: "ai" },
        { name: "Performance Analytics", ai: "Comprehensive dashboards", traditional: "Limited reporting", winner: "ai" },
        { name: "A/B Testing", ai: "Continuous optimization", traditional: "Rare", winner: "ai" },
        { name: "CRM Integration", ai: "Automated sync", traditional: "Manual entry", winner: "ai" },
      ],
    },
  ];

  const roiCalculation = {
    traditional: {
      items: [
        { label: "SDR Salary", value: "$65,000/year" },
        { label: "Benefits & Overhead", value: "$15,000/year" },
        { label: "Tools & Software", value: "$3,600/year" },
        { label: "Training & Ramp Time", value: "$8,000/year" },
      ],
      total: "$91,600/year",
    },
    ai: {
      items: [
        { label: "LaunchPad 360™ Setup", value: "$1,500 one-time" },
        { label: "Monthly Subscription", value: "$6,000/year" },
        { label: "Additional Tools", value: "Included" },
        { label: "Training Time", value: "30 days" },
      ],
      total: "$7,500/year",
    },
  };

  // Add comparison schema
  useEffect(() => {
    const existingSchema = document.getElementById("comparison-schema");
    if (existingSchema) existingSchema.remove();

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "comparison-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI Lead Generation vs Traditional Marketing Comparison",
      "description": "Comprehensive comparison of AI-powered lead generation versus traditional marketing and sales methods.",
      "author": {
        "@type": "Organization",
        "name": "BrightLaunchIQ",
      },
      "publisher": {
        "@type": "Organization",
        "name": "BrightLaunchIQ",
      },
      "datePublished": "2026-01-01",
      "dateModified": "2026-01-09",
    });
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById("comparison-schema");
      if (el) el.remove();
    };
  }, []);

  const getWinnerIcon = (winner: string) => {
    if (winner === "ai") return <Check className="w-5 h-5 text-primary" />;
    if (winner === "traditional") return <Check className="w-5 h-5 text-muted-foreground" />;
    return <Minus className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" className="pt-24">
        <div className="container">
          <Breadcrumb />
        </div>

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Make an Informed Decision
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                AI Lead Generation vs Traditional Marketing
              </h1>
              <p className="comparison-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                An honest comparison of AI-powered sales automation versus traditional marketing and sales methods. See the real differences in cost, speed, and results.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Tables */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
              {comparisonData.map((section) => (
                <div key={section.category}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    {section.category}
                  </h2>
                  <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <div className="grid grid-cols-4 bg-muted p-4 text-sm font-semibold">
                      <div>Feature</div>
                      <div className="text-primary">AI-Powered</div>
                      <div>Traditional</div>
                      <div className="text-center">Winner</div>
                    </div>
                    {section.features.map((feature, index) => (
                      <div
                        key={feature.name}
                        className={`grid grid-cols-4 p-4 items-center ${
                          index % 2 === 0 ? "bg-background" : "bg-muted/30"
                        }`}
                      >
                        <div className="font-medium text-foreground">{feature.name}</div>
                        <div className="text-primary">{feature.ai}</div>
                        <div className="text-muted-foreground">{feature.traditional}</div>
                        <div className="flex justify-center">{getWinnerIcon(feature.winner)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Comparison */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  The ROI Comparison
                </h2>
                <p className="text-muted-foreground">
                  Annual cost comparison: AI sales automation vs hiring a human SDR
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Traditional */}
                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Traditional: Hire an SDR
                  </h3>
                  <div className="space-y-3 mb-6">
                    {roiCalculation.traditional.items.map((item) => (
                      <div key={item.label} className="flex justify-between">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Annual Cost</span>
                      <span className="font-display text-2xl font-bold text-destructive">
                        {roiCalculation.traditional.total}
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI */}
                <div className="bg-primary/5 rounded-2xl p-6 border-2 border-primary">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      AI: LaunchPad 360™
                    </h3>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      Recommended
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    {roiCalculation.ai.items.map((item) => (
                      <div key={item.label} className="flex justify-between">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-primary/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total First Year Cost</span>
                      <span className="font-display text-2xl font-bold text-primary">
                        {roiCalculation.ai.total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-block bg-secondary rounded-xl p-6 text-secondary-foreground">
                  <p className="text-lg mb-2">
                    <span className="font-display font-bold text-primary text-3xl">$84,100</span>
                  </p>
                  <p className="text-secondary-foreground/80">
                    Annual savings with AI-powered lead generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to Choose */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
                When to Choose Each Approach
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Choose AI Lead Generation When:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "You need 24/7 lead response coverage",
                      "You want to scale without hiring",
                      "Speed to lead is critical in your industry",
                      "You have limited marketing budget",
                      "You want consistent, measurable results",
                      "Your sales process is repeatable",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Traditional May Be Better When:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Every deal requires complex negotiation",
                      "Your product requires hands-on demos",
                      "You only have a handful of prospects",
                      "Relationships drive 100% of sales",
                      "Your sales cycle is 12+ months",
                      "You have unlimited budget for talent",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-subtle rounded-xl text-center">
                <p className="text-lg text-foreground mb-2">
                  <strong>Best of Both Worlds:</strong> Human-Guided AI
                </p>
                <p className="text-muted-foreground">
                  BrightLaunchIQ combines AI speed and scale with human expertise and oversight—so you never sacrifice quality for efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Ready to See the Difference?
              </h2>
              <p className="text-secondary-foreground/80 mb-8">
                Get a free AEO audit and discover how AI can transform your lead generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/aeo-audit">
                    Get Your Free Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/resources/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Comparison;