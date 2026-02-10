import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
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
  LineChart,
  Heart
} from "lucide-react";

const LaunchPad360 = () => {
  useEffect(() => {
    document.title = "LaunchPad 360™ - Human-Guided AI Sales Engine | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LaunchPad 360™ delivers a complete human-guided AI sales engine in 30 days. Expert-supervised multi-channel outreach, lead scoring, and pipeline intelligence—all with the human touch.");
    }

    window.scrollTo(0, 0);

    // Remove existing schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Product Schema
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LaunchPad 360™",
      "description": "Complete human-guided AI sales engine with multi-channel outreach, lead scoring, pipeline intelligence, and conversation analytics. Expert-supervised AI responds to leads in under 60 seconds.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "category": "AI Sales Automation Software",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "500",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "500",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      }
    });
    document.head.appendChild(productScript);

    // Service Schema for GEO
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.id = "service-schema";
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Sales Automation",
      "serviceType": "AI SDR - Automated Sales Development",
      "provider": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "description": "Human-guided AI sales development that combines automation with expert oversight. Multi-channel outreach across calls, SMS, email, LinkedIn. Complete done-for-you setup in 30 days.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "LaunchPad 360™ Features",
        "itemListElement": [
          { "@type": "Service", "name": "AI Lead Generation" },
          { "@type": "Service", "name": "Multi-Channel Outreach" },
          { "@type": "Service", "name": "Lead Scoring & Prioritization" },
          { "@type": "Service", "name": "Pipeline Intelligence Dashboard" },
          { "@type": "Service", "name": "Conversation Analytics" },
          { "@type": "Service", "name": "CRM Integration" }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    // FAQ Schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AI SDR (Sales Development Representative)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI SDR is an automated sales development system that handles prospecting, outreach, and lead qualification using artificial intelligence. LaunchPad 360™ is a human-guided AI SDR that combines automation with expert oversight—so your outreach feels personal, not robotic."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can LaunchPad 360™ respond to leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LaunchPad 360™ responds to new leads in under 60 seconds. Research shows 50% of sales go to the first business that responds. Our speed-to-lead guarantee ensures you never miss a hot prospect."
          }
        },
        {
          "@type": "Question",
          "name": "Is the AI fully automated or supervised by humans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LaunchPad 360™ uses human-guided AI with 'bounded autonomy.' The AI handles repetitive tasks like lead identification, initial outreach, and qualification. Human experts set the rules, monitor results, and ensure every interaction matches your brand voice."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // HowTo Schema for 30-Day Implementation Timeline (AEO/Voice Search)
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.id = "howto-schema";
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Launch an AI Sales Engine in 30 Days",
      "description": "A complete guide to implementing LaunchPad 360™, our human-guided AI sales system, from discovery to full go-live in just 30 days.",
      "totalTime": "P30D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "1500"
      },
      "step": [
        {
          "@type": "HowToStep",
          "name": "Discovery & Setup",
          "text": "Define your Ideal Customer Profile (ICP), integrate your CRM, and build the data infrastructure foundation.",
          "position": 1,
          "url": "https://brightlaunchiq.com/products/launchpad-360#timeline"
        },
        {
          "@type": "HowToStep",
          "name": "AI Training & Content",
          "text": "Train custom AI agents on your brand voice, create personalized email templates, and design multi-channel outreach sequences.",
          "position": 2,
          "url": "https://brightlaunchiq.com/products/launchpad-360#timeline"
        },
        {
          "@type": "HowToStep",
          "name": "Testing & Calibration",
          "text": "Conduct multi-channel testing, warm email domains for deliverability, and perform quality assurance on all automation.",
          "position": 3,
          "url": "https://brightlaunchiq.com/products/launchpad-360#timeline"
        },
        {
          "@type": "HowToStep",
          "name": "Launch & Optimize",
          "text": "Go live with full system deployment, launch initial campaigns, and tune performance based on real-time analytics.",
          "position": 4,
          "url": "https://brightlaunchiq.com/products/launchpad-360#timeline"
        }
      ]
    });
    document.head.appendChild(howToScript);

    return () => {
      ['product-schema', 'service-schema', 'faq-schema', 'howto-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  const deliverables = [
    {
      icon: Target,
      title: "ICP Signal Discovery",
      description: "AI agents continuously scan web data, social triggers, and technographics to build dynamic prospect lists—supervised by our human experts."
    },
    {
      icon: Users,
      title: "500+ Targeted Local Leads",
      description: "Your AI Researcher identifies ideal customers and delivers a curated list of high-intent prospects in your market, verified by our team."
    },
    {
      icon: BarChart3,
      title: "Unified CRM Setup",
      description: "Automated bi-directional syncing achieves 100% data hygiene between all lead sources and your CRM without manual entry."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Deployment",
      description: "Hyper-personalized email, SMS, and LinkedIn sequences based on real-time market intelligence—with human oversight on messaging."
    },
    {
      icon: Shield,
      title: "Email Deliverability Protection",
      description: "We warm your email domains and implement best practices to ensure messages land in inboxes, not spam folders."
    },
    {
      icon: Calendar,
      title: "Strategic Calibration Session",
      description: "One-hour Decision Boundary session defines guardrails and brand voice, with expert QC on first 10 templates."
    }
  ];

  const intelligenceFeatures = [
    {
      icon: Brain,
      title: "Autonomous Lead Triage",
      description: "Instant scoring and intelligent routing ensures hot leads receive immediate attention—with human verification for high-value opportunities."
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
      description: "Every call analyzed for deal risks, objections, and Next Best Action summaries delivered in real-time."
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
      <Breadcrumb />
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Human-Guided AI Sales Engine</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LaunchPad 360™
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Your Complete AI Sales Team—Supervised by Experts
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Our team builds your complete AI sales engine in just 30 days. Human experts guide every step—so your outreach feels personal, your leads are verified, and your brand voice stays consistent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Start Your 30-Day Launch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
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

      {/* Human-Guided Approach */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                The Human Touch in AI
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI Plus Experts: The Best of Both Worlds
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe small business owners deserve world-class sales automation, without sacrificing what makes their company special. Our hybrid AI and expert team brings sales you can count on.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert consultants guide every AI system",
                  "Human oversight ensures authentic customer interactions",
                  "Your brand voice stays consistent—never robotic",
                  "Real people verify high-value opportunities",
                  "AI handles the grind, you focus on closing"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl font-bold">Made for Local Business</h3>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                Our tools are made for small local businesses—so you get the strength of a big company without hiring a huge staff.
              </p>
              <div className="flex items-center justify-center gap-8 py-4">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">$16.60</p>
                  <p className="text-sm text-secondary-foreground/70">per day</p>
                </div>
                <div className="text-secondary-foreground/30 text-3xl">vs</div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-destructive">$80k+</p>
                  <p className="text-sm text-secondary-foreground/70">per year hire</p>
                </div>
              </div>
            </div>
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
              A complete, done-for-you GTM system that transforms AI potential into live lead generation—with human expertise at every step.
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
      <section className="py-20 md:py-28 bg-gradient-subtle">
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
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow">
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

      {/* Multi-Channel */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Multi-Channel Outreach
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Reach Prospects Everywhere They Are
            </h2>
            <p className="text-lg text-muted-foreground">
              AI-powered hyper-personalized outreach across all major channels—with human experts ensuring every message matches your brand.
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
      <section className="py-20 md:py-28 bg-card">
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
                <div className="p-6 rounded-2xl bg-background border border-border h-full">
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

      {/* Speed to Lead */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Speed-to-Lead Guarantee
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Respond in Under 60 Seconds
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8">
                Research shows 50% of sales go to the business that responds first. Our AI responds instantly while our human team ensures quality.
              </p>
              
              <ul className="space-y-4">
                {[
                  "50% of sales go to first responders",
                  "Average business takes 47 hours to respond",
                  "We respond in under 60 seconds, 24/7",
                  "30-day guarantee: if we don't deliver, we work free",
                  "Human expert verification on high-value leads"
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
                <span className="font-display text-xl font-bold">The 14-Day Guarantee</span>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                We move your business from "Zero" to "Automated Meetings" in 14 days. If we don't significantly increase your pipeline velocity within 30 days, we work for free until we do.
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
              Get a free AI Visibility Audit to see how your business appears to AI search engines, or schedule a call with our team to discuss your growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/aeo-audit">
                  Free AI Visibility Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/faq">Read Our FAQ</Link>
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
