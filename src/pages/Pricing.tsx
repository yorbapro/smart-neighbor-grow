import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, DollarSign, Phone, Shield, Star, HelpCircle, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LEADLINE_TIERS } from "@/lib/products";

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

const Pricing = () => {
  useEffect(() => {
    document.title = "AI Receptionist Pricing | BrightLaunchIQ";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Simple AI Receptionist pricing. Core, Growth, and Pro plans. Less than one part-time employee. 24/7.");
    }

    // Set canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brightlaunchiq.com/pricing");

    window.scrollTo(0, 0);

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const pricingSchema = document.createElement("script");
    pricingSchema.type = "application/ld+json";
    pricingSchema.id = "pricing-schema";
    pricingSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BrightLaunchIQ AI Receptionist Pricing",
      "description": "Simple pricing for 24/7 AI Receptionist. Less than hiring a part-time employee.",
      "url": "https://brightlaunchiq.com/pricing"
    });
    document.head.appendChild(pricingSchema);

    return () => {
      const el = document.getElementById("pricing-schema");
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    { q: "How long does setup take?", a: "Most businesses are live within a few days. We handle all training, configuration, and integration — no technical skills needed on your end." },
    { q: "Can it transfer live calls?", a: "Yes. You set the routing rules. Urgent calls, VIPs, or specific request types are instantly transferred to a live person." },
    { q: "Can it book into my calendar?", a: "Yes. BrightLaunchIQ integrates with popular calendar tools for real-time appointment booking with no double-bookings." },
    { q: "Does it sound human?", a: "Yes. The AI uses natural language processing to hold fluid, human-like conversations. Most callers assume they're speaking with a live receptionist." },
    { q: "What happens if I cancel?", a: "No penalties. You can cancel anytime and your service will continue through the end of your billing period." },
    { q: "What if I want to upgrade?", a: "Upgrade anytime! Any setup fee you've already paid is credited toward the new tier's setup fee. You only pay the difference." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content">
        <div className="container pt-24">
          <Breadcrumb />
        </div>

        {/* HERO */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-hero-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Simple Pricing.
                <br />
                <span className="text-gradient">Immediate ROI.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
                Less than the cost of one part-time employee. Available 24/7.
              </p>
              <p className="text-sm text-white/50">
                No long-term contracts. Cancel anytime. Setup fees credited on upgrades.
              </p>
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
                BrightLaunchIQ AI Receptionist
              </h2>
              <p className="text-lg text-secondary-foreground/70 mb-4">
                Choose the plan that fits your business — every tier includes a one-time setup fee for custom configuration.
              </p>
              <p className="text-sm text-muted-foreground">
                Upgrading? Your previous setup fee is credited toward the new tier.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {LEADLINE_TIERS.map((tier) => {
                const colors = tierColors[tier.tierName] || tierColors.Core;
                const psychology = tierPsychology[tier.tierName];
                const isCore = tier.tierName === "Core";

                return (
                  <div
                    key={tier.id}
                    className={`relative rounded-2xl p-8 transition-colors border ${colors.border} bg-secondary-foreground/5 hover:border-primary/30`}
                  >
                    {isCore && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full whitespace-nowrap">
                        Recommended Starting Point
                      </div>
                    )}

                    {/* Tier badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold mb-4 ${colors.badge}`}>
                      {tier.tierName}
                    </div>

                    {/* Tier name — primary */}
                    <h3 className={`font-display text-3xl md:text-4xl font-bold mb-2 ${colors.accent}`}>
                      {tier.tierName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{tier.tagline}</p>

                    {/* Monthly price — primary */}
                    <div className="mb-2">
                      <span className="text-4xl font-display font-bold text-secondary-foreground">
                        ${tier.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-secondary-foreground/60 text-sm">/month</span>
                    </div>

                    {/* Setup fee — secondary */}
                    {tier.setupFee && (
                      <div className="mb-6 px-3 py-2 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10">
                        <p className="text-sm text-secondary-foreground/70">
                          One-time setup: <span className="font-semibold text-secondary-foreground">${tier.setupFee.toLocaleString()}</span>
                        </p>
                      </div>
                    )}

                    {/* Key features */}
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 0 && tier.tierName !== "Core" ? colors.accent : "text-primary"}`} />
                          <span className={`text-sm ${i === 0 && tier.tierName !== "Core" ? `font-semibold ${colors.accent}` : "text-secondary-foreground/80"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* See all features + What's Included links */}
                    <div className="mb-6 flex flex-col gap-1">
                      <Link
                        to={`/ai-receptionist/${tier.tierName.toLowerCase()}/features`}
                        className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                      >
                        See all {tier.tierName} features <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        to={`/ai-receptionist/${tier.tierName.toLowerCase()}/whats-included`}
                        className="text-sm font-medium text-muted-foreground hover:text-primary hover:underline inline-flex items-center gap-1"
                      >
                        What's included <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
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
                              <span className="text-xs text-secondary-foreground/60">{sf}</span>
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
                      <p className="text-sm font-semibold text-secondary-foreground/70">{tier.usageMinutes}</p>
                      <p className="text-xs text-muted-foreground">{tier.usageCalls}</p>
                    </div>

                    <Button
                      variant={isCore ? "hero" : "outline"}
                      size="lg"
                      asChild
                      className={`w-full ${!isCore ? "border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10" : ""}`}
                    >
                      <Link to="/get-started">
                        {tier.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Upgrade credit callout */}
            <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm font-semibold text-primary mb-1">
                Upgrade Anytime — Your Setup Fee Travels With You
              </p>
              <p className="text-sm text-muted-foreground">
                Already on Core and want to move to Growth? Your $1,500 setup fee is applied as a credit — you only pay the $1,000 difference. Moving from Growth to Pro? Your $2,500 is credited toward the $5,000 setup.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-secondary-foreground/50">
                Need a custom plan? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for tailored solutions.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE POSITIONING — ROI Case */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <DollarSign className="w-4 h-4" />
                  The ROI Case
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  One Missed Job Can
                  <span className="text-gradient"> Pay for This.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  If your average job is $500–$2,000+, capturing just one or two additional jobs per month can more than cover your AI Receptionist investment.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  "Capture after-hours calls",
                  "Eliminate voicemail drop-off",
                  "Reduce staff interruptions",
                  "Book more appointments automatically",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI COMPARISON */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Compare the Math
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Full-Time Receptionist</h3>
                  <p className="text-3xl font-display font-bold text-destructive mb-2">$45,000+/year</p>
                  <p className="text-sm text-muted-foreground">Plus taxes, benefits, training, turnover, sick days, and limited hours.</p>
                </div>
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">BrightLaunchIQ AI Receptionist</h3>
                  <p className="text-3xl font-display font-bold text-primary mb-2">From $497/month</p>
                  <p className="text-sm text-muted-foreground">24/7 coverage. No overhead. No turnover. Predictable monthly rate.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl font-display font-bold text-foreground">
                  Automation scales. <span className="text-primary">Payroll doesn't.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: Shield, text: "AES-256 Encryption" },
                { icon: Phone, text: "24/7 Uptime" },
                { icon: Star, text: "No Contracts" },
                { icon: Check, text: "Cancel Anytime" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <HelpCircle className="w-4 h-4" />
                FAQs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
                Common Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="group bg-secondary-foreground/5 rounded-2xl border border-primary/10 px-6 overflow-hidden transition-all duration-300 data-[state=open]:bg-secondary-foreground/10 data-[state=open]:border-primary/20"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-secondary-foreground hover:text-primary py-6 text-lg [&[data-state=open]>svg]:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 leading-relaxed text-base text-secondary-foreground/80">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Stop
                <br />
                <span className="text-gradient">Missing Calls?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/get-started">
                    Start Free Trial
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">Schedule a Demo</Link>
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

export default Pricing;
