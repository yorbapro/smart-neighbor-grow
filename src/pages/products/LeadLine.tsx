import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DataProtectionModal from "@/components/DataProtectionModal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
  Heart,
  Lock,
  Eye,
  Ban,
  ShieldCheck,
  Mic
} from "lucide-react";

const LeadLine = () => {
  const [demoConsent, setDemoConsent] = useState(false);
  useEffect(() => {
    document.title = "AI Receptionist & AI Voice Agent for Small Business | LeadLine™ by BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LeadLine™ is the #1 AI receptionist and AI voice agent for small businesses. Answer every call 24/7, qualify leads instantly, and book appointments automatically. Set up your AI receptionist in days, not months. $399/mo.");
    }

    // Add keywords meta for AI receptionist targeting
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "AI receptionist, AI voice agent, virtual receptionist AI, AI phone answering service, AI call answering, automated receptionist, AI voice assistant for business, 24/7 AI receptionist, small business AI receptionist, how to set up AI receptionist, AI receptionist cost, best AI receptionist 2025, AI receptionist for contractors, AI receptionist for law firms, AI receptionist for healthcare";
    if (existingKeywords) {
      existingKeywords.setAttribute("content", keywordsContent);
    } else {
      const keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      keywordsMeta.content = keywordsContent;
      document.head.appendChild(keywordsMeta);
    }

    window.scrollTo(0, 0);

    // Remove existing schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Product Schema optimized for AI receptionist
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LeadLine™ AI Receptionist",
      "alternateName": ["LeadLine AI Voice Agent", "LeadLine Virtual Receptionist"],
      "description": "LeadLine™ is an AI receptionist and AI voice agent that answers every business call 24/7. This AI-powered virtual receptionist qualifies leads, books appointments, and never misses a call—all for $399/month.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "category": "AI Receptionist Software",
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Response Time", "value": "Under 3 seconds" },
        { "@type": "PropertyValue", "name": "Availability", "value": "24/7/365" },
        { "@type": "PropertyValue", "name": "Setup Time", "value": "7-14 days" }
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "399",
        "priceValidUntil": "2027-12-31",
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

    // Service Schema optimized for AI receptionist and voice agent
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.id = "service-schema";
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Receptionist Service",
      "alternateName": ["AI Voice Agent", "Virtual Receptionist AI", "Automated Phone Answering"],
      "serviceType": "AI Receptionist and Voice Agent for Small Business",
      "provider": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "description": "LeadLine™ is a complete AI receptionist solution that answers calls 24/7, qualifies leads, and books appointments automatically. Set up your AI voice agent in days—no technical expertise required. Perfect for contractors, law firms, healthcare practices, and service businesses.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Receptionist Features",
        "itemListElement": [
          { "@type": "Service", "name": "24/7 AI Call Answering" },
          { "@type": "Service", "name": "AI Lead Qualification" },
          { "@type": "Service", "name": "Automated Appointment Booking" },
          { "@type": "Service", "name": "Intelligent Call Routing" },
          { "@type": "Service", "name": "Voicemail Transcription" },
          { "@type": "Service", "name": "CRM Integration" }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    // HowTo Schema for "how to set up an AI receptionist"
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.id = "howto-schema";
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Set Up an AI Receptionist for Your Business",
      "description": "Learn how to set up an AI receptionist or AI voice agent for your small business. LeadLine™ can be deployed in 7-14 days with no technical expertise required.",
      "totalTime": "P14D",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "1899"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Schedule a Strategy Call",
          "text": "Book a 15-minute call with our team to discuss your business needs, call volume, and customer service goals for your AI receptionist."
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Customize Your AI Voice Agent",
          "text": "We configure your AI receptionist with custom scripts, your business hours, appointment availability, and lead qualification questions."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Integrate with Your Systems",
          "text": "Connect LeadLine™ to your CRM, calendar, and phone system. We handle all technical setup—no IT expertise needed."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Test and Launch",
          "text": "Review test calls, approve your AI receptionist's responses, and go live. Your 24/7 AI voice agent is now answering calls."
        }
      ]
    });
    document.head.appendChild(howToScript);

    // FAQ Schema optimized for AI receptionist queries
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI receptionist is an artificial intelligence system that answers phone calls, qualifies leads, and books appointments automatically—just like a human receptionist, but available 24/7/365. LeadLine™ is an AI receptionist that answers calls within 1-2 rings, handles complex conversations naturally, and costs just $13.30/day compared to $3,000+/month for a human receptionist."
          }
        },
        {
          "@type": "Question",
          "name": "How do I set up an AI voice agent for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setting up an AI voice agent like LeadLine™ takes 7-14 days. First, schedule a strategy call to discuss your needs. We then customize the AI with your business scripts, integrate it with your CRM and calendar, and launch. No technical expertise is required—BrightLaunchIQ handles all setup. The $1,500 one-time setup fee covers everything."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an AI receptionist cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LeadLine™ AI receptionist costs $1,500 one-time setup plus $399/month ongoing—that's just $13.30/day for 24/7 call answering. Compare that to a human receptionist at $3,000+/month (only 40 hours/week) or an answering service at $1-2 per call. AI receptionists pay for themselves by capturing leads you'd otherwise miss after-hours."
          }
        },
        {
          "@type": "Question",
          "name": "Can an AI receptionist book appointments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! LeadLine™ integrates with your calendar (Google Calendar, Outlook, Calendly) to check real-time availability and book appointments during the call. The AI sends confirmation emails and SMS reminders automatically. No more phone tag or missed scheduling opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "Does an AI voice agent sound robotic?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Modern AI voice agents like LeadLine™ use advanced conversational AI that sounds natural and professional. Most callers can't tell they're speaking with AI. The system handles interruptions, follow-up questions, and complex conversations with context awareness—far beyond simple IVR phone trees."
          }
        },
        {
          "@type": "Question",
          "name": "What businesses benefit most from an AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI receptionists are ideal for service businesses, contractors (HVAC, plumbing, electrical), law firms, healthcare practices, real estate agents, and any business where missing a call means losing a customer. If you receive 20+ calls/week and can't always answer, an AI receptionist captures revenue you're currently losing."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      ['product-schema', 'service-schema', 'howto-schema', 'faq-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Instant Call Answering",
      description: "Your AI receptionist answers inbound calls within 1-2 rings—24/7/365. Calls back form leads within seconds, before they reach a competitor."
    },
    {
      icon: Bot,
      title: "Intelligent Lead Qualification",
      description: "This AI voice agent asks the right questions to understand needs, budget, and timeline. Scores leads and routes hot prospects directly to your team."
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "Your AI receptionist checks real-time calendar availability and books appointments during the call. Sends confirmations and reminders automatically."
    },
    {
      icon: MessageSquare,
      title: "Natural Conversations",
      description: "Advanced conversational AI that handles complex questions, follows up naturally, and maintains context—callers won't know they're talking to an AI voice agent."
    },
    {
      icon: Headphones,
      title: "24/7 Availability",
      description: "Never miss a call—day, night, weekends, or holidays. Your AI receptionist is always on duty, always professional, always capturing leads."
    },
    {
      icon: BarChart3,
      title: "Call Analytics & Insights",
      description: "Every call transcribed and analyzed. Track lead sources, common questions, and conversion patterns to optimize your AI voice agent's performance."
    }
  ];

  const useCases = [
    {
      icon: Users,
      title: "Contractors & Home Services",
      description: "HVAC, plumbing, electrical—your AI receptionist qualifies leads and books estimates while you're on the job. Never miss an emergency call."
    },
    {
      icon: Shield,
      title: "Law Firms & Professional Services",
      description: "Screen potential clients with your AI voice agent. Capture intake information and schedule consultations automatically—even after hours."
    },
    {
      icon: Heart,
      title: "Healthcare & Wellness",
      description: "Medical practices, dentists, therapists—your AI receptionist handles appointment requests, answers FAQs, and routes urgent calls 24/7."
    }
  ];

  const metrics = [
    { value: "<3s", label: "Answer Time", suffix: "" },
    { value: "24/7", label: "AI Receptionist", suffix: "" },
    { value: "95%", label: "Caller Satisfaction", suffix: "" },
    { value: "3x", label: "More Appointments", suffix: "" }
  ];

  const comparisonItems = [
    { feature: "Availability", traditional: "Business hours only", leadline: "24/7/365 AI Receptionist" },
    { feature: "Answer speed", traditional: "3-4 rings (if available)", leadline: "1-2 rings, always" },
    { feature: "Cost per month", traditional: "$3,000+ (human)", leadline: "$399/month AI" },
    { feature: "Appointment booking", traditional: "Manual, callbacks", leadline: "Real-time, automatic" },
    { feature: "Lead qualification", traditional: "Inconsistent", leadline: "AI-standardized scoring" },
    { feature: "After-hours calls", traditional: "Voicemail (60% lost)", leadline: "Live AI voice agent" }
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
              <span className="font-semibold">AI Receptionist & Voice Agent</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LeadLine™ AI Receptionist
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Your 24/7 AI Voice Agent That Never Misses a Call
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              LeadLine™ is the AI receptionist built for small businesses. Answer every call instantly, qualify leads intelligently, and book appointments automatically—while you focus on closing deals. Set up in days, not months.
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  asChild={demoConsent}
                  disabled={!demoConsent}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {demoConsent ? (
                    <a 
                      href="https://agent.retellai.com/preview/agent_19d43cf736300711221e30a6b0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Talk to Our AI Receptionist (Live Demo)
                    </a>
                  ) : (
                    <span>
                      <Phone className="mr-2 w-5 h-5" />
                      Talk to Our AI Receptionist (Live Demo)
                    </span>
                  )}
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/get-started">
                    Get Your AI Voice Agent
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2 max-w-lg">
                <Checkbox
                  id="demo-consent"
                  checked={demoConsent}
                  onCheckedChange={(checked) => setDemoConsent(checked === true)}
                  className="mt-0.5"
                />
                <label htmlFor="demo-consent" className="text-sm text-muted-foreground cursor-pointer leading-snug">
                  I agree to receive a one-time AI demo call and understand this call may be recorded for quality assurance.
                </label>
              </div>

              <p className="text-xs text-muted-foreground/70 max-w-md text-center">
                We only use your number for this one-time demo. We never sell your data, and we do not initiate automated follow-up calls unless you specifically request a consultation.
              </p>

              <DataProtectionModal />
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
                <h3 className="font-display text-2xl font-bold">The AI Receptionist Solution</h3>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                LeadLine™ is an AI voice agent that answers every call instantly, engages callers naturally, qualifies leads, and books appointments—24/7/365. Your virtual receptionist that never takes a break.
              </p>
              <div className="flex items-center justify-center gap-8 py-4">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">$13.30</p>
                  <p className="text-sm text-secondary-foreground/70">per day AI receptionist</p>
                </div>
                <div className="text-secondary-foreground/30 text-3xl">vs</div>
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-destructive">$3,000+</p>
                  <p className="text-sm text-secondary-foreground/70">per month human</p>
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
              AI Receptionist Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your AI Voice Agent, Always On Duty
            </h2>
            <p className="text-lg text-muted-foreground">
              LeadLine™ is the AI receptionist that handles calls with the professionalism of your best team member—at a fraction of the cost.
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

      {/* Human-in-the-Loop Guarantee */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Your Guarantee
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                🤝 AI With Oversight — Never Unsupervised
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                LeadLine™ never operates in a vacuum. Every call generates an immediate report to your inbox. You have 100% visibility and can override, monitor, or step in at any second.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Bell, title: "Real-time call notifications", desc: "Get instant alerts for every call — know what's happening as it happens." },
                { icon: Ban, title: "Blacklist protection", desc: "Prevent specific numbers from being contacted. Full control over who the AI reaches." },
                { icon: Shield, title: "Guardrails against off-script behavior", desc: "Strict prompt engineering ensures the AI stays on-message, every time." },
                { icon: Mic, title: "Custom tone calibration", desc: "We calibrate tone, pacing, and language to match your brand voice perfectly." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Icons Row */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Lock, label: "End-to-End Encryption", desc: "All data encrypted in transit and at rest" },
              { icon: ShieldCheck, label: "Secure Cloud Storage", desc: "SOC 2 compliant infrastructure" },
              { icon: Ban, label: "Zero-Training Policy", desc: "Your data never trains public models" },
              { icon: Eye, label: "Compliance-Ready", desc: "GDPR, CCPA, and HIPAA-ready" },
            ].map((item) => (
              <div key={item.label} className="text-center p-5 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White-Label Brand Protection */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              🎙 Designed to Protect Your Brand Reputation
            </h2>
            <p className="text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
              LeadLine™ is not a "robo-caller." We calibrate tone, pacing, and latency to sound like a professional assistant aligned with your brand voice. Your customers experience seamless service — not experimental AI.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Structured Conversations", desc: "Every interaction follows carefully designed conversation flows — no random tangents." },
                { title: "Hallucination Mitigation", desc: "Strict prompt guardrails and knowledge boundaries prevent the AI from making things up." },
                { title: "Monitored Scripts", desc: "All scripts are controlled, versioned, and monitored by our expert team." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-secondary-foreground/5 border border-primary/10">
                  <h3 className="font-display font-bold text-secondary-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-secondary-foreground/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Receptionist Testimonials */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Real Results
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Business Owners Say About Their AI Receptionist
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from contractors, law firms, and healthcare practices using LeadLine™ to never miss a call again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contractor Testimonial */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "Before LeadLine™, we missed 40% of our calls because we were on job sites. Now our AI receptionist answers every call instantly—even at 6 AM when emergency calls come in. We've booked 3x more estimates this quarter."
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">Mike Rodriguez</p>
                <p className="text-sm text-muted-foreground">Owner, Rodriguez HVAC & Plumbing</p>
                <p className="text-xs text-primary mt-1">Sacramento, CA</p>
              </div>
            </div>

            {/* Law Firm Testimonial */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "Our AI voice agent screens intake calls while we're in court. It asks the right qualifying questions, captures case details, and schedules consultations. Clients love that they get a response immediately, and we love that we're not paying $3,000/month for a receptionist."
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">Jennifer Walsh, Esq.</p>
                <p className="text-sm text-muted-foreground">Partner, Walsh & Associates Law</p>
                <p className="text-xs text-primary mt-1">Henderson, NV</p>
              </div>
            </div>

            {/* Healthcare Testimonial */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4">
                "Patients call at all hours with appointment requests. LeadLine™ handles everything—checking our calendar, booking slots, sending confirmations. Our no-show rate dropped 40% because the AI sends reminders. It's like having a receptionist who never takes a break."
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-display font-bold text-foreground">Dr. Sarah Chen, DDS</p>
                <p className="text-sm text-muted-foreground">Owner, Bright Smile Dental</p>
                <p className="text-xs text-primary mt-1">Fresno, CA</p>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-8 bg-card border border-border rounded-xl px-8 py-6">
              <div>
                <p className="font-display text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground">Caller Satisfaction</p>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-primary">3x</p>
                <p className="text-sm text-muted-foreground">More Appointments</p>
              </div>
              <div className="hidden sm:block w-px bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-primary">$2,600</p>
                <p className="text-sm text-muted-foreground">Monthly Savings</p>
              </div>
            </div>
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
