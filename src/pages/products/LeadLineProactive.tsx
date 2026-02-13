import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { PROACTIVE_TIERS } from "@/lib/products";
import {
  Megaphone,
  Check,
  ArrowRight,
  Phone,
  MessageSquare,
  BarChart3,
  Target,
  Clock,
  TrendingUp,
  RefreshCw,
  Zap,
  Users,
  ShieldCheck,
} from "lucide-react";

const LeadLineProactive = () => {
  useEffect(() => {
    document.title = "LeadLine AI Proactive — AI Outbound Sales Engine | BrightLaunchIQ";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "LeadLine AI Proactive is an automated outbound revenue engine. AI-powered follow-up, reactivation campaigns, and outbound calling that drives measurable revenue for local businesses."
      );
    }

    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent =
      "AI outbound sales, AI follow-up, automated sales calls, AI SDR, outbound AI engine, automated lead follow-up, AI sales agent, outbound calling automation, missed call callback AI";
    if (existingKeywords) {
      existingKeywords.setAttribute("content", keywordsContent);
    } else {
      const keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      keywordsMeta.content = keywordsContent;
      document.head.appendChild(keywordsMeta);
    }

    window.scrollTo(0, 0);

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => script.remove());

    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "LeadLine AI Proactive",
      description:
        "AI-powered outbound sales engine that automates follow-up, reactivation campaigns, and outbound calling to drive measurable revenue for local and service businesses.",
      brand: {
        "@type": "Organization",
        name: "BrightLaunchIQ",
      },
      category: "AI Sales Automation Software",
    });
    document.head.appendChild(productScript);

    return () => {
      const el = document.getElementById("product-schema");
      if (el) el.remove();
    };
  }, []);

  const capabilities = [
    {
      icon: Megaphone,
      title: "Cold & Warm Outbound Campaigns",
      description:
        "AI-driven outbound sequences that engage cold prospects and warm leads with personalized, natural conversations at scale.",
    },
    {
      icon: Phone,
      title: "Missed-Call Callbacks",
      description:
        "Automatically call back every missed call within seconds, turning lost opportunities into booked appointments.",
    },
    {
      icon: MessageSquare,
      title: "Sales Conversation Engine",
      description:
        "AI conducts intelligent sales conversations, handles objections, and drives prospects toward booking or purchasing.",
    },
    {
      icon: Target,
      title: "Objection Handling AI",
      description:
        "Trained on your industry's most common objections, the AI responds naturally to keep conversations moving forward.",
    },
    {
      icon: BarChart3,
      title: "Revenue Tracking & CRM Automation",
      description:
        "Every conversation is logged, scored, and synced to your CRM. Track revenue impact in real time.",
    },
    {
      icon: RefreshCw,
      title: "Lead Reactivation Campaigns",
      description:
        "Automatically re-engage dormant leads from your database, turning old contacts into new revenue opportunities.",
    },
  ];

  const metrics = [
    { value: "500+", label: "Outbound Calls/Month", icon: Phone },
    { value: "24/7", label: "Follow-Up Engine", icon: Clock },
    { value: "3x", label: "Pipeline Velocity", icon: TrendingUp },
    { value: "100%", label: "Callback Coverage", icon: RefreshCw },
  ];

  const steps = [
    {
      step: "1",
      title: "Strategy & Training",
      description:
        "We build your outbound playbook and train the AI on your business, objections, and ideal customers.",
    },
    {
      step: "2",
      title: "Campaign Configuration",
      description:
        "Set up cold outreach, warm follow-up, and reactivation sequences across phone and SMS.",
    },
    {
      step: "3",
      title: "CRM & Revenue Integration",
      description:
        "Connect to your CRM for automatic logging, pipeline tracking, and revenue attribution.",
    },
    {
      step: "4",
      title: "Launch & Optimize",
      description:
        "Go live, monitor performance, and continuously optimize for higher conversion rates.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Megaphone className="w-5 h-5" />
              <span className="font-semibold">AI Outbound Sales Engine</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Stop Leaving Revenue in Your CRM.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              LeadLine AI Proactive follows up with every lead, reactivates dormant contacts, and drives outbound sales conversations — automatically.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              An AI-powered outbound system that replaces manual follow-up with intelligent, revenue-driving conversations at scale. No more unworked leads. No more stale pipelines.
            </p>

             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="hero" size="lg" asChild>
                 <Link to="/get-started?product=proactiveScale">
                   Book a Strategy Call
                   <ArrowRight className="ml-2 w-5 h-5" />
                 </Link>
               </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-secondary-foreground/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leads Don't Convert Themselves.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most businesses generate leads — but never follow up fast enough. Missed callbacks, stale CRM records, and inconsistent outreach cost you thousands every month.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                "Leads sit untouched for hours — or days",
                "Missed calls never get returned",
                "Follow-up sequences are inconsistent",
                "Your CRM is full of unworked opportunities",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Core Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What LeadLine AI Proactive Handles Automatically
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {capabilities.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple. Strategic. Installed Fast.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Outbound Pricing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Outbound Engine
            </h2>
            <p className="text-lg text-muted-foreground">
              Scale outbound revenue without hiring SDRs or sales reps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PROACTIVE_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  tier.highlighted
                    ? "border-primary bg-gradient-to-br from-primary/5 to-primary/2 shadow-lg scale-105"
                    : "border-border bg-card hover:shadow-card-hover"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
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
                      ${tier.monthlyPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">/month</div>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div>{tier.usageMinutes}</div>
                      <div>{tier.usageCalls}</div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                   <Button className="w-full" variant={tier.highlighted ? "hero" : "outline"} asChild>
                     <Link to={`/get-started?product=${tier.id}`}>
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

      {/* Who It's For */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built for Revenue-Driven Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                LeadLine AI Proactive is built for operators who know leads exist — but need a system to work them.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Users, text: "Service businesses with unworked CRM leads" },
                { icon: TrendingUp, text: "Companies scaling beyond manual follow-up" },
                { icon: Phone, text: "Teams that miss callbacks and lose deals" },
                { icon: ShieldCheck, text: "Operators ready to automate outbound revenue" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Install Your AI Outbound Sales Engine
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Stop leaving revenue in your CRM. Let AI follow up, re-engage, and drive sales automatically.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button variant="hero" size="xl" asChild className="group">
               <Link to="/get-started?product=proactiveScale">
                 Schedule Strategy Call
                 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
               </Link>
             </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/pricing">Compare Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrustBadges />
      <Footer />
    </div>
  );
};

export default LeadLineProactive;
