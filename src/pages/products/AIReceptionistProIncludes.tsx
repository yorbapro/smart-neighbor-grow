import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import useSEO from "@/hooks/useSEO";
import { useEffect } from "react";
import {
  Phone, Check, ArrowRight, Zap, Bot, Calendar, Shield, BarChart3,
  Users, Headphones, Lock, Rocket, TrendingUp, Settings, MessageSquare,
  Plug, Building2, Mic, Crown,
} from "lucide-react";

const includedSections = [
  {
    icon: Zap,
    title: "Everything in Growth",
    description: "All Core + Growth capabilities — 24/7 answering, calendar booking, CRM integration, analytics, and automated follow-up.",
    items: [
      "24/7 AI call answering & lead capture",
      "Custom voice persona & script design",
      "Appointment booking & calendar sync",
      "CRM integration & workflow automation",
      "Analytics dashboard & ROI reporting",
      "Automated SMS/email follow-up",
    ],
    highlight: false,
  },
  {
    icon: Building2,
    title: "Multi-Location Call Routing",
    description: "Route calls intelligently across multiple offices, departments, or territories — one AI receptionist, unlimited reach.",
    items: [
      "Location-based call routing",
      "Department-specific handling",
      "Territory & ZIP code routing",
      "Per-location greetings & scripts",
      "Cross-location overflow handling",
      "Centralized reporting across locations",
    ],
    highlight: true,
  },
  {
    icon: Mic,
    title: "Custom AI Voice Cloning",
    description: "Go beyond standard voices — create a unique, branded voice that represents your company's identity on every call.",
    items: [
      "Custom voice profile creation",
      "Brand-aligned tone & cadence",
      "Pronunciation fine-tuning",
      "Multi-voice support (department-specific)",
      "Voice consistency across all interactions",
    ],
    highlight: true,
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Executive Reporting",
    description: "Comprehensive dashboards with revenue attribution, trend analysis, and executive-ready performance reports.",
    items: [
      "Revenue attribution modeling",
      "Multi-location performance comparison",
      "Trend analysis & forecasting",
      "Executive summary reports",
      "Custom KPI tracking",
      "Exportable reports & API access",
    ],
    highlight: true,
  },
  {
    icon: Crown,
    title: "Priority Support & Optimization",
    description: "Dedicated support with faster response times, proactive optimization cycles, and a named account contact.",
    items: [
      "Priority support queue",
      "Dedicated account contact",
      "Proactive optimization cycles",
      "Quarterly business reviews",
      "Priority feature requests",
      "Custom integration development",
    ],
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Enterprise Onboarding & Setup",
    description: "Your $5,000 setup fee covers advanced reporting, multi-location configuration, custom voice, and priority tuning.",
    items: [
      "Everything in Growth setup, plus:",
      "Multi-location routing configuration",
      "Custom voice profile creation",
      "Advanced analytics setup",
      "Priority optimization cycle",
      "Executive reporting configuration",
    ],
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Advanced Optimization",
    description: "Continuous improvement with cross-location analysis, revenue modeling, and strategic quarterly reviews.",
    items: [
      "All Growth optimization services",
      "Cross-location performance tuning",
      "Revenue attribution refinement",
      "Strategic quarterly reviews",
      "Custom playbook development",
    ],
    highlight: false,
  },
];

const proFaqItems = [
  {
    question: "What does an enterprise AI receptionist include?",
    answer: "BrightLaunchIQ's Pro plan includes everything in Growth plus multi-location call routing, custom AI voice cloning, advanced analytics with revenue attribution, executive reporting, priority support with a dedicated account contact, and 2,500 minutes per month — all for $1,497/month.",
  },
  {
    question: "Can an AI receptionist handle multiple office locations?",
    answer: "Yes. BrightLaunchIQ's Pro plan includes multi-location call routing with location-based routing, department-specific handling, territory and ZIP code routing, per-location greetings, cross-location overflow, and centralized reporting across all locations.",
  },
  {
    question: "How much does an enterprise AI phone system cost?",
    answer: "BrightLaunchIQ's AI Receptionist Pro plan is $1,497/month with a one-time $5,000 setup fee covering multi-location configuration, custom voice creation, advanced analytics setup, and executive reporting — plus up to 2,500 minutes and 1,200 calls per month.",
  },
  {
    question: "Can I get a custom AI voice for my business phone system?",
    answer: "Yes. BrightLaunchIQ's Pro plan includes custom AI voice cloning — a unique, branded voice profile with brand-aligned tone and cadence, pronunciation fine-tuning, multi-voice support for different departments, and voice consistency across all interactions.",
  },
  {
    question: "What kind of reporting does an enterprise AI receptionist provide?",
    answer: "The Pro plan provides revenue attribution modeling, multi-location performance comparison, trend analysis and forecasting, executive summary reports, custom KPI tracking, and exportable reports with API access.",
  },
  {
    question: "Does an enterprise AI receptionist come with dedicated support?",
    answer: "Yes. BrightLaunchIQ's Pro plan includes a priority support queue, dedicated account contact, proactive optimization cycles, quarterly business reviews, priority feature requests, and custom integration development.",
  },
];

const AIReceptionistProIncludes = () => {
  useSEO({
    title: "What's Included — BrightLaunchIQ AI Receptionist Pro Plan",
    description: "See everything included in the BrightLaunchIQ AI Receptionist Pro plan at $1,497/month — multi-location routing, custom AI voice, advanced analytics, priority support, and everything in Growth.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/pro/whats-included",
    keywords: "AI receptionist Pro plan, enterprise AI phone system, multi-location AI receptionist, custom AI voice, BrightLaunchIQ Pro, AI call answering enterprise",
  });

  useEffect(() => {
    const existingFaq = document.getElementById("faq-schema-pro-includes");
    if (existingFaq) existingFaq.remove();

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema-pro-includes";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": proFaqItems.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
    document.head.appendChild(faqScript);

    return () => {
      const el = document.getElementById("faq-schema-pro-includes");
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-sm">Pro Plan — $1,497/month</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              What's Included in
              <br />
              <span className="text-red-400">AI Receptionist Pro</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Enterprise-grade AI phone infrastructure — multi-location routing, custom voice, advanced analytics, and priority support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Replace My Front Desk <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/ai-receptionist/pro/features">View Full Feature List</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Included sections */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Complete Enterprise Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything from Growth, plus the enterprise capabilities that scale with your organization.
              </p>
            </div>

            <div className="space-y-8">
              {includedSections.map((section) => (
                <div
                  key={section.title}
                  className={`group rounded-2xl border p-8 transition-all duration-300 ${
                    section.highlight
                      ? "border-red-500/30 bg-red-500/5 hover:border-red-500/50 hover:shadow-card-hover"
                      : "border-border bg-card hover:border-red-500/20 hover:shadow-card-hover"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${section.highlight ? "bg-red-500/15" : "bg-red-500/10"}`}>
                        <section.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-lg font-bold text-foreground">{section.title}</h3>
                          {section.highlight && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full">Pro</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 hidden md:block">{section.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">{section.description}</p>
                    <ul className="md:w-2/3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl font-display font-bold text-red-500">2,500</p>
                <p className="text-sm text-muted-foreground">Minutes per month</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl font-display font-bold text-red-500">1,200</p>
                <p className="text-sm text-muted-foreground">Calls per month</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-primary mb-1">Need a custom configuration?</p>
            <p className="text-sm text-muted-foreground mb-4">Contact us for tailored enterprise solutions beyond Pro.</p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for Enterprise-Grade AI Reception?
            </h2>
            <p className="text-lg text-white/70 mb-8">Multi-location, custom voice, and priority support — built for scale.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Replace My Front Desk <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionistProIncludes;