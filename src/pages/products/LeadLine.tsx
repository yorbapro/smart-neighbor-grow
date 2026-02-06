import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Check, 
  ArrowRight, 
  Zap, 
  Clock,
  Calendar,
  MessageSquare,
  Bot,
  Headphones,
  Shield,
  BarChart3,
  Users,
  Bell,
  Heart
} from "lucide-react";

const LeadLine = () => {
  useEffect(() => {
    document.title = "LeadLine™ - 24/7 AI Voice Engagement | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LeadLine™ is an AI-powered voice assistant that answers calls and qualifies leads within seconds. 24/7 instant lead response, appointment booking, and intelligent call routing.");
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
      "name": "LeadLine™",
      "description": "AI-powered voice assistant that answers calls and qualifies leads within seconds. 24/7 instant lead response with intelligent appointment booking.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "category": "AI Voice Assistant Software",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "399",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "399",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "32",
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
      "name": "AI Voice Assistant",
      "serviceType": "Automated Call Answering and Lead Qualification",
      "provider": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "description": "24/7 AI voice assistant that answers inbound calls, qualifies leads, and books appointments automatically. Never miss a call again.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "LeadLine™ Features",
        "itemListElement": [
          { "@type": "Service", "name": "24/7 Call Answering" },
          { "@type": "Service", "name": "AI Lead Qualification" },
          { "@type": "Service", "name": "Appointment Booking" },
          { "@type": "Service", "name": "Call Routing" },
          { "@type": "Service", "name": "Voicemail to Text" }
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
          "name": "How fast does LeadLine™ answer calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LeadLine™ answers calls instantly—within 1-2 rings. For form submissions, it can call leads back within seconds of submission, ensuring you're always first to respond."
          }
        },
        {
          "@type": "Question",
          "name": "Can LeadLine™ book appointments on my calendar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! LeadLine™ integrates with your calendar to check availability and book appointments in real-time during the call. No more back-and-forth scheduling."
          }
        },
        {
          "@type": "Question",
          "name": "Does LeadLine™ sound like a robot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LeadLine™ uses advanced conversational AI with natural-sounding voices. Most callers can't tell they're talking to an AI. The system handles complex conversations, follows up on questions, and maintains context throughout the call."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      ['product-schema', 'service-schema', 'faq-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Lead Response",
      description: "Answers inbound calls within 1-2 rings. Calls back form leads within seconds of submission—before they can reach a competitor."
    },
    {
      icon: Bot,
      title: "Intelligent Lead Qualification",
      description: "AI asks the right questions to understand needs, budget, and timeline. Scores leads and routes hot prospects directly to your team."
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "Checks your real-time calendar availability and books appointments during the call. Sends confirmations and reminders automatically."
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Advanced conversational AI that handles complex questions, follows up naturally, and maintains context throughout the entire call."
    },
    {
      icon: Headphones,
      title: "24/7 Availability",
      description: "Never miss a call—day, night, weekends, or holidays. Your AI receptionist is always on duty, always professional."
    },
    {
      icon: BarChart3,
      title: "Call Analytics & Insights",
      description: "Every call transcribed and analyzed. Track lead sources, common questions, and conversion patterns to optimize your funnel."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Service Businesses",
      description: "HVAC, plumbing, electrical, and home services—qualify leads and book estimates while you're on the job."
    },
    {
      icon: Shield,
      title: "Professional Services",
      description: "Law firms, consultants, and agencies—screen potential clients and schedule consultations automatically."
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Medical practices, dentists, and therapists—handle appointment requests and patient inquiries 24/7."
    }
  ];

  const metrics = [
    { value: "<3s", label: "Answer Time", suffix: "" },
    { value: "24/7", label: "Availability", suffix: "" },
    { value: "95%", label: "Caller Satisfaction", suffix: "" },
    { value: "3x", label: "More Appointments", suffix: "" }
  ];

  const comparisonItems = [
    { feature: "Availability", traditional: "Business hours only", leadline: "24/7/365" },
    { feature: "Answer speed", traditional: "3-4 rings (if available)", leadline: "1-2 rings, always" },
    { feature: "Cost per month", traditional: "$3,000+ (receptionist)", leadline: "$399/month" },
    { feature: "Appointment booking", traditional: "Manual, callbacks", leadline: "Real-time, automatic" },
    { feature: "Lead qualification", traditional: "Inconsistent", leadline: "Standardized, intelligent" },
    { feature: "After-hours calls", traditional: "Voicemail (60% abandoned)", leadline: "Live AI engagement" }
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
              <span className="font-semibold">AI Voice Engagement</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LeadLine™
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Instant Lead Response. 24/7 AI Voice Engagement.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Never miss another call or lead. LeadLine™ answers every call instantly, qualifies leads intelligently, and books appointments automatically—while you focus on closing deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a 
                  href="https://agent.retellai.com/preview/agent_19d43cf736300711221e30a6b0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Experience LeadLine™ (Live Demo)
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/get-started">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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

      {/* Problem Statement */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                The Problem
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Every Missed Call Is a Missed Opportunity
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Research shows that 85% of callers who don't reach you the first time won't call back. They'll call your competitor instead. And 50% of leads go to the first business that responds.
              </p>
              <ul className="space-y-4">
                {[
                  "Missed calls while you're with customers",
                  "After-hours leads going to voicemail",
                  "Slow follow-up on web form submissions",
                  "Inconsistent lead qualification",
                  "Expensive receptionists or call centers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl font-bold">The LeadLine™ Solution</h3>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                An AI voice assistant that answers every call instantly, engages callers naturally, qualifies leads, and books appointments—24/7/365.
              </p>
              <div className="flex items-center justify-center gap-8 py-4">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">$13.30</p>
                  <p className="text-sm text-secondary-foreground/70">per day</p>
                </div>
                <div className="text-secondary-foreground/30 text-3xl">vs</div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-destructive">$3,000+</p>
                  <p className="text-sm text-secondary-foreground/70">per month receptionist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your AI Receptionist, Always On Duty
            </h2>
            <p className="text-lg text-muted-foreground">
              LeadLine™ handles calls with the professionalism of your best team member—at a fraction of the cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              The Comparison
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Traditional vs. LeadLine™
            </h2>
            <p className="text-lg text-muted-foreground">
              See why smart businesses choose AI-powered call handling.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-secondary text-secondary-foreground">
                <div className="p-4 font-semibold">Feature</div>
                <div className="p-4 font-semibold text-center border-l border-primary/20">Traditional</div>
                <div className="p-4 font-semibold text-center border-l border-primary/20 bg-primary/10">
                  <span className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    LeadLine™
                  </span>
                </div>
              </div>

              {/* Table Body */}
              {comparisonItems.map((item, index) => (
                <div 
                  key={item.feature} 
                  className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-muted/30" : "bg-card"}`}
                >
                  <div className="p-4 font-medium text-foreground">{item.feature}</div>
                  <div className="p-4 text-center text-muted-foreground border-l border-border">
                    {item.traditional}
                  </div>
                  <div className="p-4 text-center font-semibold text-primary border-l border-border bg-primary/5">
                    {item.leadline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Perfect For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Busy Businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              LeadLine™ is ideal for any business where phone leads matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {useCases.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Simple Pricing
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Never Miss a Lead Again
            </h2>
            
            <div className="bg-secondary-foreground/5 rounded-2xl p-8 border border-primary/20 mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="font-display text-5xl font-bold text-primary">$1,500</span>
                <span className="text-secondary-foreground/70">one-time setup</span>
              </div>
              <p className="text-secondary-foreground/70 mb-4">
                then <span className="font-semibold text-primary">$399/month</span> ongoing
              </p>
              <p className="text-sm text-secondary-foreground/60 mb-6">
                Just $13.30/day for 24/7 AI-powered call answering
              </p>
              
              <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
                {[
                  "24/7 AI call answering",
                  "Lead qualification & scoring",
                  "Real-time appointment booking",
                  "Call transcription & analytics",
                  "CRM integration",
                  "Custom voice & scripts"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-secondary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-started">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  asChild
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a 
                    href="https://agent.retellai.com/preview/agent_19d43cf736300711221e30a6b0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Try Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-sm text-secondary-foreground/60">
              30-day satisfaction guarantee. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Live Demo CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Bell className="w-5 h-5" />
              <span className="font-semibold">Try It Now</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience LeadLine™ in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Click below to have a live conversation with our AI voice assistant. Experience firsthand how LeadLine™ handles calls for your business.
            </p>

            <Button 
              size="xl" 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-button-accent hover:shadow-glow-accent"
            >
              <a 
                href="https://agent.retellai.com/preview/agent_19d43cf736300711221e30a6b0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 w-6 h-6" />
                Experience LeadLine™ (Live Demo)
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadLine;
