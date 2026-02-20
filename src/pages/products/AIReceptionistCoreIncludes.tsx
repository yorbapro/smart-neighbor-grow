import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import useSEO from "@/hooks/useSEO";
import { useEffect } from "react";
import {
  Phone, Check, ArrowRight, Zap, Bot, Shield, Users,
  Headphones, Lock, Rocket, TrendingUp, Settings, MessageSquare,
} from "lucide-react";

const includedSections = [
  {
    icon: Zap,
    title: "24/7 Intelligent Call Answering",
    description: "Your AI receptionist answers every call instantly — mornings, nights, weekends, holidays. No voicemail. No missed revenue.",
    items: [
      "Instant pickup — zero missed calls",
      "Natural, human-like voice conversations",
      "Custom greeting by business name",
      "Time-aware greetings (morning/afternoon/evening)",
      "Holiday & after-hours messaging",
      "Smart interruption handling",
    ],
  },
  {
    icon: Bot,
    title: "Custom Voice Agent Training",
    description: "We build a voice persona that sounds like your best employee — trained on your services, tone, and industry.",
    items: [
      "Script design tailored to your business",
      "Industry-specific intent modeling",
      "Knowledge base ingestion (website, FAQs, pricing)",
      "Custom AI name & persona development",
      "Objection-handling training",
      "Continuous learning from real calls",
    ],
  },
  {
    icon: Users,
    title: "Lead Capture & Qualification",
    description: "Every caller is captured, qualified, and scored — so you only spend time on leads that convert.",
    items: [
      "Captures name, phone, email, service interest",
      "Urgency & budget pre-qualification",
      "Custom qualification questions",
      "New vs. existing customer detection",
      "Lead quality scoring",
      "High-intent caller flagging",
    ],
  },
  {
    icon: Headphones,
    title: "Intelligent Call Routing",
    description: "Urgent calls reach the right person instantly. Everything else is handled, logged, and forwarded.",
    items: [
      "Conditional routing by intent",
      "Warm & cold transfer options",
      "VIP client recognition",
      "Emergency routing logic",
      "Priority escalation detection",
      "Voicemail fallback",
    ],
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    description: "Enterprise-grade encryption and compliance infrastructure — your callers' data stays protected.",
    items: [
      "AES-256 encrypted data storage",
      "Secure API connections",
      "Role-based access controls",
      "Call recording compliance messaging",
      "Audit logging",
      "Data retention controls",
    ],
  },
  {
    icon: Rocket,
    title: "Onboarding & Setup",
    description: "We handle everything — from strategy to go-live. Your $1,500 setup fee covers a complete, done-for-you launch.",
    items: [
      "Onboarding strategy session",
      "Script development & refinement",
      "Call routing configuration",
      "Test call simulations & QA",
      "7-day optimization review",
      "30-day performance review",
    ],
  },
  {
    icon: TrendingUp,
    title: "Ongoing Optimization",
    description: "Your AI receptionist gets smarter every month with regular script tuning, call audits, and seasonal updates.",
    items: [
      "Monthly script refinement",
      "Call quality audits",
      "AI retraining on real transcripts",
      "Seasonal messaging updates",
      "Lead quality improvements",
      "Booking conversion optimization",
    ],
  },
  {
    icon: MessageSquare,
    title: "Reporting & Notifications",
    description: "Full visibility into every call — transcripts, sentiment analysis, and instant email summaries.",
    items: [
      "Email notifications with full transcript",
      "Call summary & sentiment analysis",
      "Lead capture reports",
      "Call volume tracking",
      "Response quality metrics",
    ],
  },
];

const coreFaqItems = [
  {
    question: "What does an AI receptionist include?",
    answer: "BrightLaunchIQ's AI Receptionist Core plan includes 24/7 intelligent call answering, custom voice persona training, lead capture and qualification, intelligent call routing, security and compliance infrastructure, done-for-you onboarding, ongoing optimization, and full call reporting with transcripts — all for $497/month.",
  },
  {
    question: "How much does an AI phone answering service cost?",
    answer: "BrightLaunchIQ's AI Receptionist starts at $497/month for the Core plan, which includes up to 500 minutes and 250 calls per month. A one-time $1,500 setup fee covers script development, call routing configuration, test simulations, and a 30-day performance review.",
  },
  {
    question: "Can an AI receptionist answer calls 24/7?",
    answer: "Yes. BrightLaunchIQ's AI Receptionist answers every call instantly — mornings, nights, weekends, and holidays — with natural, human-like voice conversations. There's no voicemail and no missed revenue.",
  },
  {
    question: "Does an AI receptionist capture leads?",
    answer: "Absolutely. Every caller is captured with name, phone, email, and service interest. The AI also performs urgency and budget pre-qualification, detects new vs. existing customers, and flags high-intent callers for immediate follow-up.",
  },
  {
    question: "How is an AI receptionist set up?",
    answer: "BrightLaunchIQ handles everything for you. The $1,500 setup fee covers an onboarding strategy session, custom script development, call routing configuration, test call simulations, a 7-day optimization review, and a 30-day performance review.",
  },
  {
    question: "Is an AI receptionist secure?",
    answer: "Yes. BrightLaunchIQ uses AES-256 encrypted data storage, secure API connections, role-based access controls, call recording compliance messaging, audit logging, and configurable data retention controls.",
  },
];

const AIReceptionistCoreIncludes = () => {
  useSEO({
    title: "What's Included — BrightLaunchIQ AI Receptionist Core Plan",
    description: "See everything included in the BrightLaunchIQ AI Receptionist Core plan at $497/month — 24/7 call answering, lead qualification, custom voice training, intelligent routing, and ongoing optimization.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/core/whats-included",
    keywords: "AI receptionist included, AI receptionist plan details, what's included AI phone answering, BrightLaunchIQ Core plan, AI call answering service features",
  });

  // Inject FAQPage JSON-LD
  useEffect(() => {
    const existingFaq = document.getElementById("faq-schema-core-includes");
    if (existingFaq) existingFaq.remove();

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema-core-includes";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": coreFaqItems.map((faq) => ({
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
      const el = document.getElementById("faq-schema-core-includes");
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
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold text-sm">Core Plan — $497/month</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.1]">
              What's Included in
              <br />
              <span className="text-emerald-400">AI Receptionist Core</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Everything you need to stop missing calls and start capturing every lead — live in days, optimized for months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/ai-receptionist/core/features">View Full Feature List</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Included sections — visual grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Complete AI Receptionist Package
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every capability, service, and deliverable included in your Core subscription — no hidden costs, no surprises.
              </p>
            </div>

            <div className="space-y-8">
              {includedSections.map((section, idx) => (
                <div
                  key={section.title}
                  className="group rounded-2xl border border-border bg-card p-8 hover:border-emerald-500/30 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground">{section.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 hidden md:block">{section.description}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground md:hidden">{section.description}</p>
                    <ul className="md:w-2/3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
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

      {/* Usage & upgrade nudge */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl font-display font-bold text-emerald-500">500</p>
                <p className="text-sm text-muted-foreground">Minutes per month</p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl font-display font-bold text-emerald-500">250</p>
                <p className="text-sm text-muted-foreground">Calls per month</p>
              </div>
            </div>
            <p className="text-sm font-semibold text-primary mb-1">Need more capacity or CRM integration?</p>
            <p className="text-sm text-muted-foreground mb-4">Upgrade to Growth for calendar sync, CRM integration, and 3× the call volume.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" size="sm" asChild>
                <Link to="/ai-receptionist/growth/whats-included">See Growth Includes</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/pricing">Compare All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Never Miss a Call Again?
            </h2>
            <p className="text-lg text-white/70 mb-8">Your AI receptionist can be live in as little as a few days.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
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

export default AIReceptionistCoreIncludes;