import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Check, 
  ArrowRight, 
  Zap, 
  Bell, 
  BarChart3,
  Phone,
  Target,
  TrendingUp,
  Users,
  MessageSquare,
  Shield,
  Clock,
  LineChart
} from "lucide-react";

const IQFlow = () => {
  useEffect(() => {
    document.title = "IQ Flow™ - Managed Revenue Intelligence | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "IQ Flow™ tracks every potential customer and flags hot leads for quick action. Managed Revenue Intelligence that scores, tracks, and alerts you instantly on every opportunity.");
    }

    window.scrollTo(0, 0);

    // Structured data for product
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "IQ Flow™",
      "description": "Managed Revenue Intelligence - Always-on orchestration layer managing your entire mid-funnel with precision",
      "brand": {
        "@type": "Brand",
        "name": "BrightLaunchIQ"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const capabilities = [
    {
      icon: Target,
      title: "Autonomous Lead Triage",
      description: "Instant scoring and intelligent routing ensures hot leads receive immediate attention at the perfect moment."
    },
    {
      icon: MessageSquare,
      title: "Conversation Intelligence",
      description: "Every call analyzed for deal risks, objections, and Next Best Action summaries delivered to reps in real-time."
    },
    {
      icon: LineChart,
      title: "Deal-to-Boardroom Automation",
      description: "Executive-ready reports generated automatically, providing C-suite visibility without manual data compilation."
    },
    {
      icon: Bell,
      title: "Hot Lead Mobile Alerts",
      description: "Instant notifications when a prospect shows buying signals—never miss a sales moment."
    },
    {
      icon: BarChart3,
      title: "Pipeline Visibility Dashboard",
      description: "Real-time view of your entire sales pipeline with AI-powered forecasting and trend analysis."
    },
    {
      icon: Shield,
      title: "CRM Integration",
      description: "Seamless bi-directional sync with Salesforce, HubSpot, and other major CRM platforms."
    }
  ];

  const features = [
    {
      title: "Real-Time Lead Scoring",
      description: "AI agents analyze behavior signals, engagement patterns, and demographic data to score leads instantly.",
      stat: "85%",
      statLabel: "Prediction Accuracy"
    },
    {
      title: "Speed-to-Resolution",
      description: "Automatic triggers initiate immediate outreach via SMS or Voice AI when lead scores spike.",
      stat: "<60s",
      statLabel: "Response Time"
    },
    {
      title: "Weekly Forecast Slides",
      description: "AI-generated executive presentations replace 2-3 junior analyst roles with automated insights.",
      stat: "3hrs",
      statLabel: "Weekly Time Saved"
    }
  ];

  const benefits = [
    "Track every potential customer automatically",
    "Score leads based on buying readiness",
    "Alert your team the second a hot lead needs attention",
    "Smart follow-up sequences that adapt to prospect behavior",
    "Pipeline visibility dashboard for real-time insights",
    "Conversation intelligence analyzes every sales call"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Brain className="w-5 h-5" />
              <span className="font-semibold">Revenue Intelligence</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              IQ Flow™
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Managed Revenue Intelligence
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Track, score, and alert you instantly on every hot lead. Your business's AI brain for pipeline management that never sleeps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started with IQ Flow™
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:1-800-LAUNCH-IQ">
                  <Phone className="mr-2 w-5 h-5" />
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                The Problem
              </h3>
              <ul className="space-y-4">
                {[
                  "Leads slip through the cracks due to slow follow-up",
                  "Sales reps waste time on unqualified prospects",
                  "No visibility into which deals are at risk",
                  "Manual forecasting consumes analyst time",
                  "Competitors respond faster and win the sale"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-destructive font-bold text-xs">✕</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-accent/5 border border-accent/20">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                The IQ Flow™ Solution
              </h3>
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {feature.stat}
                </div>
                <div className="text-secondary-foreground/80 text-sm mb-4">{feature.statLabel}</div>
                <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-secondary-foreground/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Autonomous Operations That Scale
            </h2>
            <p className="text-lg text-muted-foreground">
              IQ Flow™ manages your entire mid-funnel with AI-powered precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Always-On Revenue Brain
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Data Ingestion",
                  description: "IQ Flow™ connects to your CRM, email, and communication tools to capture every customer interaction."
                },
                {
                  step: "2",
                  title: "AI Analysis",
                  description: "Machine learning models analyze behavior patterns, engagement signals, and historical data to score leads in real-time."
                },
                {
                  step: "3",
                  title: "Smart Routing",
                  description: "Hot leads are instantly routed to the right rep with context, while automated sequences nurture others."
                },
                {
                  step: "4",
                  title: "Continuous Optimization",
                  description: "The system learns from outcomes to improve scoring accuracy and recommendation quality over time."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start p-6 rounded-2xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Human-in-the-Loop */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Human-in-the-Loop
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                AI Speed. Human Wisdom.
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Our expert consultants set the rules and supervise results to ensure every customer interaction feels personal and real.
              </p>
              
              <ul className="space-y-4">
                {[
                  "AI processes thousands of data points instantly",
                  "Human experts review every strategy",
                  "Bounded autonomy keeps you in control",
                  "Your brand voice stays authentic",
                  "Community values are respected"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card/10 backdrop-blur rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="font-display text-xl font-bold">ROI Focus</span>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                We only implement tools that help you grow revenue or save time—your results matter most.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-primary/10">
                  <div className="font-display text-2xl font-bold text-primary mb-1">70%</div>
                  <div className="text-xs text-secondary-foreground/70">Tasks Automated</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-primary/10">
                  <div className="font-display text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-secondary-foreground/70">Always Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stop Losing Leads to Slow Follow-Up
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              IQ Flow™ ensures no opportunity falls through the cracks. See how managed revenue intelligence can transform your sales pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Start with IQ Flow™
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products/launchpad-360">See LaunchPad 360™</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IQFlow;
