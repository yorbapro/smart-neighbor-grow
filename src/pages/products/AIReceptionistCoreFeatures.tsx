import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Phone, Check, ArrowRight, Zap, Bot, Calendar, Shield, BarChart3,
  Users, Settings, Headphones, Lock, Rocket, TrendingUp,
  Plug, MessageSquare
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const coreFeatures = [
  {
    id: "call-handling",
    icon: Zap,
    title: "24/7 Intelligent Call Answering",
    subtitle: "Core Inbound Call Handling Capabilities",
    features: [
      "Answers 100% of inbound calls instantly (no rings beyond configured limit)",
      "Natural, human-like voice with dynamic pacing and emotion modeling",
      "Custom greeting by business name",
      "Time-aware greeting (morning/afternoon/evening)",
      "Holiday/after-hours messaging logic",
      "Multi-language support (optional add-on)",
      "Smart interruption handling (barge-in capability)",
      "Filler-word smoothing and conversational transitions",
    ],
  },
  {
    id: "voice-training",
    icon: Bot,
    title: "Voice Agent Customization & Training",
    subtitle: "Best-in-Class Voice Agent Training System",
    features: [
      "Custom script design based on industry and business model",
      "Persona development (friendly, professional, high-energy, luxury tone, etc.)",
      "Objection-handling training",
      "Industry-specific intent modeling (e.g., HVAC, legal, dental, med spa, etc.)",
      "Knowledge base ingestion: website scraping, FAQ documents, service lists, pricing sheets",
      "Context-based memory during calls",
      "Natural conversational branching (not rigid IVR style)",
      "Continuous learning optimization (call transcript review + tuning)",
      "Tone refinement and pronunciation customization",
      'Custom name for AI receptionist (e.g., "Hi, this is Emma at BrightSmile Dental")',
    ],
  },
  {
    id: "lead-capture",
    icon: Users,
    title: "Smart Intake & Lead Qualification",
    subtitle: "Lead Capture & Qualification",
    features: [
      "Captures caller name, phone, email",
      "Captures service interest",
      "Captures urgency level",
      "Custom qualification questions (per client)",
      "Budget pre-qualification (if appropriate)",
      "ZIP code / territory verification",
      "Appointment type classification",
      "New vs existing customer detection",
      "Tags leads by quality score",
      "Flags high-intent callers",
    ],
  },
  {
    id: "routing",
    icon: Headphones,
    title: "Intelligent Routing",
    subtitle: "Call Routing & Escalation Logic",
    features: [
      "Conditional routing rules (based on intent)",
      "Warm transfer to human",
      "Cold transfer option",
      "Call forwarding by department",
      "Emergency routing logic",
      "VIP client recognition and routing",
      "Failover routing (if staff unavailable)",
      "Voicemail fallback",
      "Priority escalation detection (angry customer, urgent issue)",
      "Human takeover trigger words",
    ],
  },
  {
    id: "security",
    icon: Lock,
    title: "Secure & Compliant Infrastructure",
    subtitle: "Security & Compliance",
    features: [
      "Encrypted data storage",
      "Secure API connections",
      "Role-based access controls",
      "SOC 2–aligned infrastructure (if applicable)",
      "HIPAA-compliant option (add-on tier)",
      "Call recording compliance messaging",
      "Secure cloud hosting",
      "Audit logs",
      "Data retention control",
      "Secure knowledge base ingestion",
      "Consent management tools",
    ],
  },
  {
    id: "onboarding",
    icon: Rocket,
    title: "Implementation Process",
    subtitle: "Setup & Onboarding Deliverables",
    features: [
      "Onboarding strategy session",
      "Industry discovery call",
      "Script development session",
      "Knowledge base review",
      "Call routing configuration",
      "Test call simulations",
      "Persona fine-tuning",
      "Go-live checklist",
      "7-day optimization review",
      "30-day performance review",
      "Ongoing optimization cadence",
      "Email notifications with full transcript",
      "Call summary + sentiment analysis",
    ],
  },
  {
    id: "optimization",
    icon: TrendingUp,
    title: "Ongoing Performance Tuning",
    subtitle: "Optimization & Continuous Improvement",
    features: [
      "Monthly script refinement",
      "Objection-handling upgrades",
      "Seasonal messaging updates",
      "Call quality audits",
      "AI retraining on real transcripts",
      "Lead quality improvements",
      "A/B greeting tests",
      "Booking conversion optimization",
      "Industry updates implementation",
    ],
  },
  {
    id: "setup-core",
    icon: Settings,
    title: "Core Setup & Configuration",
    subtitle: "What Your $1,500 Setup Fee Covers",
    features: [
      "Script customization tailored to your business",
      "Call routing configuration",
      "Knowledge base ingestion (website, FAQs, service lists)",
      "Initial testing and QA simulations",
      "Basic optimization pass",
    ],
  },
];

const FeatureCategory = ({ item }: { item: (typeof coreFeatures)[0] }) => (
  <AccordionItem value={item.id} className="border border-border rounded-xl mb-4 overflow-hidden bg-card data-[state=open]:shadow-card-hover transition-shadow">
    <AccordionTrigger className="px-6 py-5 hover:no-underline">
      <div className="flex items-center gap-4 text-left w-full">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <item.icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="px-6 pb-6">
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 pt-2">
        {item.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </AccordionContent>
  </AccordionItem>
);

const AIReceptionistCoreFeatures = () => {
  useEffect(() => {
    document.title = "BrightLaunchIQ AI Receptionist Core Features — 24/7 Call Answering & Lead Capture";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Every feature included in the BrightLaunchIQ AI Receptionist Core plan — 24/7 intelligent call answering, lead qualification, smart routing, secure infrastructure, and ongoing optimization."
      );
    }

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(s => s.remove());

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "core-features-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BrightLaunchIQ AI Receptionist Core Features",
      "description": "Complete feature breakdown of the AI Receptionist Core plan — intelligent call answering, lead capture, routing, and security.",
      "url": "https://brightlaunchiq.com/ai-receptionist/core/features"
    });
    document.head.appendChild(schema);

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "core-features-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What features does an AI receptionist have?",
          "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ's AI Receptionist includes 24/7 intelligent call answering with natural voice, custom greeting scripts, lead capture and qualification with urgency scoring, intelligent call routing with VIP recognition, AES-256 encryption, and ongoing optimization with monthly script refinement." }
        },
        {
          "@type": "Question",
          "name": "How does an AI receptionist qualify leads?",
          "acceptedAnswer": { "@type": "Answer", "text": "The AI captures name, phone, email, and service interest on every call. It performs urgency and budget pre-qualification, detects new vs. existing customers, scores lead quality, and flags high-intent callers for immediate follow-up." }
        },
        {
          "@type": "Question",
          "name": "Can an AI receptionist route calls to different people?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. BrightLaunchIQ's AI Receptionist supports conditional routing by intent, warm and cold transfers, VIP client recognition, emergency routing logic, priority escalation detection, and voicemail fallback." }
        },
        {
          "@type": "Question",
          "name": "How does an AI receptionist sound on the phone?",
          "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ's AI Receptionist uses natural, human-like voice with dynamic pacing and emotion modeling, filler-word smoothing, conversational transitions, and smart interruption handling — designed to sound like your best front-desk employee." }
        },
        {
          "@type": "Question",
          "name": "Is an AI receptionist better than a traditional answering service?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike traditional answering services, an AI receptionist answers instantly 24/7 with zero hold times, qualifies leads automatically, routes calls intelligently, provides full transcripts and sentiment analysis, and improves continuously through AI retraining — all at a fraction of the cost." }
        },
        {
          "@type": "Question",
          "name": "What happens during AI receptionist setup?",
          "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ's setup includes an onboarding strategy session, custom script development, call routing configuration, knowledge base ingestion from your website and FAQs, test call simulations, a 7-day optimization review, and a 30-day performance review." }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("core-features-schema");
      if (el) el.remove();
      const faqEl = document.getElementById("core-features-faq-schema");
      if (faqEl) faqEl.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">AI Receptionist — Core Plan</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              BrightLaunchIQ AI Receptionist
              <br />
              <span className="text-emerald-500">Core Features</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything included at $497/month — intelligent call answering, lead qualification, smart routing, secure infrastructure, and ongoing optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-receptionist/pricing">View All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold mb-4 uppercase tracking-wider">
                Included in Core
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Core Feature Set
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you get out of the box — intelligent answering, lead capture, routing, security, and ongoing optimization.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["call-handling"]} className="space-y-0">
              {coreFeatures.map((item) => (
                <FeatureCategory key={item.id} item={item} />
              ))}
            </Accordion>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm font-semibold text-primary mb-1">Want scheduling, CRM integration, and analytics?</p>
              <p className="text-sm text-muted-foreground mb-4">Upgrade to Growth or Pro to unlock premium capabilities.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/ai-receptionist/how-it-works">How It Works</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/ai-receptionist/growth/features">Growth Features</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/ai-receptionist/pro/features">Pro Features</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/ai-receptionist/features/complete-library">Complete Library</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Never Miss a Call Again?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your AI receptionist live in as little as a few days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-receptionist/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionistCoreFeatures;
