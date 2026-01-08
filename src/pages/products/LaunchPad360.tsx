import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Check, 
  ArrowRight, 
  Zap, 
  Users, 
  Target, 
  Calendar,
  Phone,
  Mail,
  MessageSquare,
  Linkedin,
  Clock,
  BarChart3,
  Shield,
  Brain,
  Bell,
  LineChart
} from "lucide-react";

const LaunchPad360 = () => {
  useEffect(() => {
    document.title = "LaunchPad 360™ - Complete AI Sales Engine | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LaunchPad 360™ delivers a complete AI sales engine in 30 days. Multi-channel outreach, lead scoring, pipeline intelligence, and conversation analytics—all in one system.");
    }

    window.scrollTo(0, 0);

    // Structured data for product
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LaunchPad 360™",
      "description": "Complete AI Sales Engine - 30-day done-for-you setup that transforms AI potential into live lead generation with built-in revenue intelligence",
      "brand": {
        "@type": "Brand",
        "name": "BrightLaunchIQ"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "1500",
        "priceValidUntil": "2026-12-31"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const deliverables = [
    {
      icon: Target,
      title: "ICP Signal Discovery",
      description: "AI agents continuously scan web data, social triggers, and technographics to build dynamic prospect lists of now-ready buyers."
    },
    {
      icon: Users,
      title: "500+ Targeted Local Leads",
      description: "Your AI Researcher identifies your ideal customers and delivers a curated list of high-intent prospects in your market."
    },
    {
      icon: BarChart3,
      title: "Unified CRM Setup",
      description: "Automated bi-directional syncing achieves 100% data hygiene between all lead sources and your CRM without manual entry."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Deployment",
      description: "Topic Agents auto-generate hyper-personalized email and LinkedIn sequences based on real-time market intelligence."
    },
    {
      icon: Shield,
      title: "Email Deliverability Protection",
      description: "We warm your email domains and implement best practices to ensure your messages land in inboxes, not spam folders."
    },
    {
      icon: Calendar,
      title: "Strategic Calibration Session",
      description: "One-hour Decision Boundary session defines legal guardrails and brand voice, with final QC on first 10 templates."
    }
  ];

  const intelligenceFeatures = [
    {
      icon: Brain,
      title: "Autonomous Lead Triage",
      description: "Instant scoring and intelligent routing ensures hot leads receive immediate attention at the perfect moment."
    },
    {
      icon: Bell,
      title: "Hot Lead Mobile Alerts",
      description: "Instant notifications when a prospect shows buying signals—never miss a sales moment."
    },
    {
      icon: LineChart,
      title: "Pipeline Visibility Dashboard",
      description: "Real-time view of your entire sales pipeline with AI-powered forecasting and trend analysis."
    },
    {
      icon: MessageSquare,
      title: "Conversation Intelligence",
      description: "Every call analyzed for deal risks, objections, and Next Best Action summaries delivered to reps in real-time."
    }
  ];

  const channels = [
    { icon: Phone, name: "Calls" },
    { icon: MessageSquare, name: "Voicemail" },
    { icon: Mail, name: "SMS" },
    { icon: Mail, name: "Email" },
    { icon: Linkedin, name: "LinkedIn" },
    { icon: Users, name: "Facebook" }
  ];

  const timeline = [
    { day: "Days 1-5", title: "Discovery & Setup", description: "ICP definition, CRM integration, and data infrastructure build" },
    { day: "Days 6-15", title: "AI Training & Content", description: "Custom AI agent training, email templates, and sequence creation" },
    { day: "Days 16-25", title: "Testing & Calibration", description: "Multi-channel testing, deliverability warming, and quality assurance" },
    { day: "Days 26-30", title: "Launch & Optimize", description: "Full system go-live, initial campaigns, and performance tuning" }
  ];

  const metrics = [
    { value: "30", label: "Days to Launch", suffix: "" },
    { value: "500", label: "Leads Delivered", suffix: "+" },
    { value: "6", label: "Outreach Channels", suffix: "" },
    { value: "<60s", label: "Response Time", suffix: "" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Automated GTM Engine</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LaunchPad 360™
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Complete AI Sales Engine
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team builds your complete New Business Launch Plan in just 30 days—with built-in revenue intelligence that scores leads, tracks your pipeline, and alerts you instantly on hot opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Start Your 30-Day Launch
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

      {/* Key Metrics */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-secondary-foreground/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Deliverables
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-lg text-muted-foreground">
              A complete, done-for-you GTM system that transforms AI hype into live lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((item) => (
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

      {/* Revenue Intelligence */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Built-In Revenue Intelligence
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Always-On Revenue Brain
            </h2>
            <p className="text-lg text-muted-foreground">
              Track every prospect, score buying readiness, and get alerted the second a hot lead needs attention—all included with LaunchPad 360™.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {intelligenceFeatures.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-background border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Multi-Channel Outreach
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reach Prospects Everywhere They Are
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-powered hyper-personalized outreach across all major channels—calls, voicemail, SMS, email, LinkedIn, and Facebook Messenger.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {channels.map((channel) => (
              <div key={channel.name} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
                  <channel.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-Day Timeline */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Implementation Timeline
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Zero to Live in 30 Days
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven methodology gets your entire GTM system operational in just one month.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <div key={phase.day} className="relative">
                <div className="p-6 rounded-2xl bg-card border border-border h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <span className="text-sm font-semibold text-primary">{phase.day}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                What Sets Us Apart
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Human-Guided AI for Real Results
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Our expert consultants guide and supervise every AI system, so your customer touchpoints always feel real and never robotic.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Respond in under 60 seconds—50% of sales go to first responders",
                  "Automate 70% of daily sales tasks so your team focuses on closing",
                  "Hyper-individualized AI outreach that feels personal",
                  "Automated inbox triage—only hot leads forwarded to your team",
                  "Human expert oversight ensures brand voice consistency"
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
                <Clock className="w-8 h-8 text-primary" />
                <span className="font-display text-xl font-bold">Speed-to-Lead Guarantee</span>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                Our AI responds to new leads in under 60 seconds. Research shows that 50% of sales go to the business that responds first.
              </p>
              <div className="text-center p-6 rounded-xl bg-primary/10">
                <div className="font-display text-4xl font-bold text-primary mb-2">
                  &lt;60s
                </div>
                <div className="text-sm text-secondary-foreground/70">
                  Average Response Time
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
              Ready to Launch Your Growth?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find out how much more your team could achieve. Our human experts will review your current sales process and show you exactly where AI can help you win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Schedule Your Revenue Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#faq">Read Our FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchPad360;
