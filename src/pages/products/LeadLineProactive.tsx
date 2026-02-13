import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Check,
  ArrowRight,
  Zap,
  Phone,
  MessageSquare,
  BarChart3,
  Shield,
  Target,
  Clock,
  Users,
  TrendingUp,
  RefreshCw,
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
      "name": "LeadLine AI Proactive",
      "description":
        "AI-powered outbound sales engine that automates follow-up, reactivation campaigns, and outbound calling to drive measurable revenue for local and service businesses.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ",
      },
      "category": "AI Sales Automation Software",
    });
    document.head.appendChild(productScript);

    return () => {
      const el = document.getElementById("product-schema");
      if (el) el.remove();
    };
  }, []);

  const features = [
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
    { step: "1", title: "Strategy & Training", description: "We build your outbound playbook and train the AI on your business, objections, and ideal customers." },
    { step: "2", title: "Campaign Configuration", description: "Set up cold outreach, warm follow-up, and reactivation sequences across phone and SMS." },
    { step: "3", title: "CRM & Revenue Integration", description: "Connect to your CRM for automatic logging, pipeline tracking, and revenue attribution." },
    { step: "4", title: "Launch & Optimize", description: "Go live, monitor performance, and continuously optimize for higher conversion rates." },
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
              LeadLine AI Proactive
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Automated Follow-Up & Outbound Revenue Engine
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Stop leaving revenue on the table. LeadLine AI Proactive follows up with every lead, reactivates dormant contacts, and drives outbound sales conversations — automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
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
            <p className="text-lg text-muted-foreground">
              Most businesses generate leads — but never follow up fast enough. Missed callbacks, stale CRM records, and inconsistent outreach cost you thousands every month. LeadLine AI Proactive fixes the follow-up gap.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
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
            {features.map((feature) => (
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
          <Button variant="hero" size="xl" asChild className="group">
            <Link to="/get-started">
              Schedule Strategy Call
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <TrustBadges />
      <Footer />
    </div>
  );
};

export default LeadLineProactive;
