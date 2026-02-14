import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, DollarSign, Users, Megaphone, Globe, Wrench, Zap } from "lucide-react";
import { LEADLINE_TIERS, PROACTIVE_TIERS, LAUNCHPAD_TIERS } from "@/lib/products";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - AI Revenue Infrastructure | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "AI-powered revenue infrastructure pricing. LeadLine AI inbound & outbound systems. LaunchPad 360™ complete growth engine. Scale without hiring.");
    }

    window.scrollTo(0, 0);

    // Schema
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const pricingSchema = document.createElement("script");
    pricingSchema.type = "application/ld+json";
    pricingSchema.id = "pricing-schema";
    pricingSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BrightLaunchIQ Pricing",
      "description": "AI-powered revenue infrastructure pricing.",
      "url": "https://brightlaunchiq.com/pricing"
    });
    document.head.appendChild(pricingSchema);

    return () => {
      const el = document.getElementById("pricing-schema");
      if (el) el.remove();
    };
  }, []);

  const comparisons = [
    { role: "Receptionist", cost: "$45,000–$65,000/yr", icon: Users },
    { role: "SDR / Sales Rep", cost: "$60,000+ plus commissions", icon: Megaphone },
    { role: "SEO Agency", cost: "$2,000+/mo", icon: Globe },
    { role: "Web Team + CRM Consultant", cost: "$3,000+/mo", icon: Wrench },
  ];

  const PricingCard = ({ tier, isProactive = false }: any) => (
    <div className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
      tier.highlighted
        ? "border-primary bg-gradient-to-br from-primary/5 to-primary/2 shadow-lg scale-105"
        : "border-border bg-card hover:shadow-card-hover"
    }`}>
      {tier.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
      )}
      
      <div className="p-6">
        {tier.highlighted && (
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
            Most Popular
          </div>
        )}
        
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          {tier.tierName}
        </h3>
        <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>
        
        <div className="border-t border-border pt-6 mb-6">
          <div className="text-4xl font-display font-bold text-foreground mb-1">
            ${tier.monthlyPrice}
          </div>
          <div className="text-sm text-muted-foreground">/month</div>
        </div>
        
        <ul className="space-y-3 mb-6">
          {tier.features.map((feature: string) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-1 text-xs text-muted-foreground mb-8 pt-4 border-t border-border">
          <div>{tier.usageMinutes}</div>
          <div>{tier.usageCalls}</div>
        </div>
        
        <Button className="w-full" variant={tier.highlighted ? "hero" : "outline"} asChild>
          <Link to="/get-started">
            {tier.cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content">
        <div className="container pt-24">
          <Breadcrumb />
        </div>
      
        {/* Hero */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Choose Your Growth Engine
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Start with inbound automation — or install the complete revenue system.
              </p>
            </div>
          </div>
        </section>

        {/* Hiring vs BrightLaunchIQ Comparison */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Stop Hiring. Start Automating.
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {comparisons.map((item) => (
                  <div
                    key={item.role}
                    className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.role}</p>
                      <p className="text-sm text-muted-foreground">{item.cost}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative p-8 rounded-2xl bg-secondary text-secondary-foreground text-center">
                <p className="text-lg text-secondary-foreground/80 mb-4">
                  BrightLaunchIQ replaces fragmented tools and payroll with
                </p>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                  one integrated AI-powered growth system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LeadLine AI Inbound */}
        <section className="py-20 md:py-28 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                LeadLine AI
              </h2>
              <p className="text-lg text-muted-foreground">
                Your 24/7 AI Receptionist — Inbound Call Answering & Lead Capture
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {LEADLINE_TIERS.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        {/* LeadLine AI Proactive */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                LeadLine AI Proactive
              </h2>
              <p className="text-lg text-muted-foreground">
                Automated Outbound Revenue Engine — Follow-Up & Sales Automation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PROACTIVE_TIERS.map((tier) => (
                <PricingCard key={tier.id} tier={tier} isProactive={true} />
              ))}
            </div>
          </div>
        </section>

        {/* LaunchPad 360 */}
        <section className="py-20 md:py-28 bg-foreground text-background">
          <div className="container">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-4">
                <Zap className="w-4 h-4" />
                <span className="font-semibold text-sm">Flagship System</span>
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                LaunchPad 360™
              </h2>
              <p className="text-lg text-background/80">
                The Complete AI-Powered Growth Infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {LAUNCHPAD_TIERS.map((tier) => (
                <div key={tier.id} className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  tier.highlighted
                    ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 shadow-2xl scale-105"
                    : "border-white/10 bg-background/5 backdrop-blur-sm"
                }`}>
                  {tier.highlighted && (
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>
                  )}
                  
                  <div className="p-8">
                    {tier.highlighted && (
                      <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {tier.tierName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>
                    
                    <div className="border-t border-white/10 pt-6 mb-6">
                      <div className="text-4xl font-display font-bold text-foreground mb-1">
                        ${tier.monthlyPrice}
                      </div>
                      <div className="text-sm text-muted-foreground">/month</div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-1 text-xs text-muted-foreground mb-8 pt-4 border-t border-white/10">
                      <div>{tier.usageMinutes}</div>
                      <div>{tier.usageCalls}</div>
                    </div>
                    
                    <Button className="w-full" variant={tier.highlighted ? "hero" : "outline"} asChild>
                      <Link to={tier.isApplication ? "/contact" : "/get-started"}>
                        {tier.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "What happens if I exceed my usage limits?",
                    a: "We'll notify you and work with you to upgrade your plan or add overage capacity. Your service never gets cut off."
                  },
                  {
                    q: "Can I upgrade or downgrade anytime?",
                    a: "Yes. Changes take effect on your next billing cycle with no penalties."
                  },
                  {
                    q: "How fast is implementation?",
                    a: "LeadLine AI tiers deploy in 7-14 days. LaunchPad 360™ is 30-day implementation. We handle all setup and integration."
                  },
                  {
                    q: "Do you work with my CRM?",
                    a: "Yes. We integrate with Salesforce, HubSpot, Pipedrive, and most modern CRM platforms. If you use a custom system, we can build the integration."
                  },
                  {
                    q: "Is this compliant with TCPA and data privacy laws?",
                    a: "Yes. We comply with TCPA, GDPR, CCPA, and all applicable regulations. Your data is encrypted and stored securely."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Ready to Install Your Revenue System?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-started">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:1-877-879-5552">
                    Book Strategy Call
                  </a>
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
