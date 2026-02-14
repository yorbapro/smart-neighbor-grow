import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Check, ArrowRight, Zap, Clock, Bot, Calendar, Users, Shield, BarChart3 } from "lucide-react";
import { LEADLINE_TIERS } from "@/lib/products";

const LeadLine = () => {
  useEffect(() => {
    document.title = "LeadLine AI - AI Receptionist & Inbound Call Answering | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LeadLine AI answers every call 24/7, qualifies leads, and books appointments automatically. Your AI receptionist that never sleeps. $497-$1,497/month.");
    }

    window.scrollTo(0, 0);

    // Schema
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LeadLine AI",
      "description": "AI receptionist that answers every call 24/7, qualifies leads, and books appointments automatically.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "497",
        "highPrice": "1497",
        "priceCurrency": "USD"
      }
    });
    document.head.appendChild(productScript);

    return () => {
      const el = document.getElementById("product-schema");
      if (el) el.remove();
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "24/7 Intelligent Call Answering",
      description: "Your AI receptionist answers every inbound call instantly—day, night, weekends, holidays. Never miss a lead."
    },
    {
      icon: Bot,
      title: "Lead Qualification & Scoring",
      description: "AI asks the right questions, understands intent, and scores leads so you focus on hot prospects first."
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "Integrates with your calendar in real-time. Checks availability and books appointments during the call."
    },
    {
      icon: Clock,
      title: "Custom Voice Training",
      description: "Your AI is trained on your business, scripts, FAQs, and booking flow. It sounds professional and knows your business."
    },
    {
      icon: BarChart3,
      title: "Complete Call Analytics",
      description: "Every call transcribed, analyzed, and reported. Track conversion metrics and optimize performance continuously."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security. TCPA compliant. All data encrypted and backed up. GDPR, CCPA ready."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Home Services & Contractors",
      description: "HVAC, plumbing, electrical. Capture emergency calls and service requests 24/7 while your team works."
    },
    {
      icon: Shield,
      title: "Professional Services",
      description: "Law firms, accounting, consulting. Screen leads and schedule consultations even after business hours."
    },
    {
      icon: Phone,
      title: "Sales & Revenue Teams",
      description: "Real estate, insurance, B2B sales. Instant lead response. No more voicemail black holes."
    }
  ];

  const comparisonItems = [
    { feature: "Cost per month", traditional: "$3,000+ (human)", leadline: "$497–$1,497 (AI)" },
    { feature: "Availability", traditional: "40 hrs/week", leadline: "168 hrs/week (24/7)" },
    { feature: "Response time", traditional: "3-4 rings", leadline: "1-2 rings, instant" },
    { feature: "Appointment booking", traditional: "Manual callbacks", leadline: "Real-time, automated" },
    { feature: "Lead qualification", traditional: "Variable quality", leadline: "AI-scored leads" },
    { feature: "After-hours calls", traditional: "Voicemail (lost)", leadline: "Live AI handling" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">AI Receptionist</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Never Miss Another Call. Ever.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              LeadLine AI answers, qualifies, books, and routes every inbound call — 24/7 — without payroll.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your AI front desk that never sleeps. Captures every lead. Handles every question. Manages every callback. Set up in 7-14 days, not months.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" />
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your AI Front Desk That Never Sleeps
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LeadLine AI replaces missed calls with intelligent conversations. It answers instantly, speaks naturally, understands intent, captures information, and routes calls exactly where they need to go.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Pricing. No Surprises.
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the tier that matches your call volume. Upgrade anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {LEADLINE_TIERS.map((tier) => (
              <div key={tier.id} className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
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
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Every Business Type
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Receptionist vs. Traditional Hiring
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className={`flex items-center border-b border-border last:border-b-0 ${idx % 2 === 0 ? "bg-background" : ""}`}>
                  <div className="flex-1 p-4 font-semibold text-foreground">{item.feature}</div>
                  <div className="flex-1 p-4 text-sm text-muted-foreground">{item.traditional}</div>
                  <div className="flex-1 p-4 text-sm font-semibold text-primary">{item.leadline}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Simple. Strategic. Fast.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Strategy Call", desc: "15-min call to discuss your needs, call volume, and CRM setup" },
                { step: "2", title: "AI Customization", desc: "We train your AI with scripts, FAQs, booking flow, and tone" },
                { step: "3", title: "Integration", desc: "Connect to your CRM, calendar, and phone system (we handle it)" },
                { step: "4", title: "Go Live", desc: "Test a few calls, approve, and your AI is answering live" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Install Your AI Front Desk Today
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
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadLine;
