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
];

const premiumFeatures = [
  {
    id: "scheduling",
    icon: Calendar,
    title: "Smart Scheduling",
    subtitle: "Appointment Booking & Calendar Integration",
    features: [
      "Google Calendar integration",
      "Outlook integration",
      "CRM calendar sync",
      "Real-time availability checking",
      "Time-zone handling",
      "Automated appointment confirmation via SMS/email",
      "Automated reminder texts",
      "Rescheduling via AI",
      "Cancellation handling",
      "Waitlist handling",
      "After-hours booking logic",
      "Calendar integration setup",
    ],
  },
  {
    id: "crm",
    icon: Plug,
    title: "Systems & Automation Integration",
    subtitle: "CRM & Systems Integration",
    features: [
      "CRM integration (HubSpot, GoHighLevel, Salesforce, etc.)",
      "Automated contact creation",
      "Pipeline stage updates",
      "Tagging and segmentation",
      "Webhook triggers",
      "Zapier integration",
      "Slack notifications for new leads",
      "SMS alerts to owner",
      "Revenue tracking attribution (where possible)",
      "CRM integration setup",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Reporting & Intelligence",
    subtitle: "Analytics & Performance Dashboard",
    features: [
      "Call volume tracking",
      "Missed call reduction reporting",
      "Lead conversion rate",
      "Appointment booking rate",
      "Average call duration",
      "Caller sentiment analysis",
      "Keyword tracking",
      "Top questions report",
      "Source tracking (if using call tracking numbers)",
      "ROI reporting dashboard",
      "Revenue attribution modeling",
      "Call recording library",
      "Downloadable transcripts",
    ],
  },
  {
    id: "setup-growth",
    icon: Settings,
    title: "Growth Setup & Configuration",
    subtitle: "What Your $2,500 Setup Fee Covers",
    features: [
      "Everything in Core setup, plus:",
      "Calendar integration and booking logic setup",
      "CRM integration and pipeline configuration",
      "Automation configuration (SMS, email, Slack)",
      "End-to-end booking flow testing",
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

const AIReceptionistGrowthFeatures = () => {
  useEffect(() => {
    document.title = "BrightLaunchIQ AI Receptionist Growth Features — Scheduling, CRM & Analytics";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the BrightLaunchIQ AI Receptionist Growth plan — all Core features plus appointment booking, CRM integration, analytics dashboard, and automation."
      );
    }

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(s => s.remove());

    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "growth-features-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BrightLaunchIQ AI Receptionist Growth Features",
      "description": "Complete feature breakdown of the AI Receptionist Growth plan — scheduling, CRM integration, analytics, and more.",
      "url": "https://brightlaunchiq.com/products/ai-receptionist/growth/features"
    });
    document.head.appendChild(schema);

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "growth-features-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can an AI receptionist schedule appointments?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. BrightLaunchIQ's Growth plan includes real-time calendar integration with automatic availability checking, appointment type classification, double-booking prevention, rescheduling and cancellation handling, and multi-provider scheduling support." }
        },
        {
          "@type": "Question",
          "name": "Does an AI receptionist work with HubSpot and Salesforce?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Growth plan integrates directly with HubSpot, Salesforce, Zoho, and more. It supports automatic contact creation, real-time lead status updates, custom field mapping, and automated workflow triggers via Zapier and Slack." }
        },
        {
          "@type": "Question",
          "name": "Can an AI receptionist send text messages after a call?",
          "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. BrightLaunchIQ's Growth plan includes automated SMS confirmations, email appointment reminders, post-call follow-up sequences, custom messaging templates, and no-show re-engagement — all triggered automatically." }
        },
        {
          "@type": "Question",
          "name": "What reports does an AI phone answering service provide?",
          "acceptedAnswer": { "@type": "Answer", "text": "The Growth plan provides real-time call analytics, lead conversion tracking, booking rate optimization, ROI reporting with revenue attribution, call quality metrics, weekly performance summaries, and a full analytics dashboard." }
        },
        {
          "@type": "Question",
          "name": "How does an AI receptionist improve over time?",
          "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ's Growth plan includes monthly script refinement, booking conversion analysis, CRM pipeline optimization, automation refinement, integration health monitoring, and AI retraining on real call transcripts." }
        },
        {
          "@type": "Question",
          "name": "What is included in the Growth plan setup fee?",
          "acceptedAnswer": { "@type": "Answer", "text": "The $2,500 Growth setup fee covers everything in Core setup plus calendar system integration, CRM connection and field mapping, booking logic configuration, automation workflow design, and end-to-end booking flow testing." }
        }
      ]
    });
    document.head.appendChild(faqSchema);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("growth-features-schema");
      if (el) el.remove();
      const faqEl = document.getElementById("growth-features-faq-schema");
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">AI Receptionist — Growth Plan</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              BrightLaunchIQ AI Receptionist
              <br />
              <span className="text-blue-500">Growth Features</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything in Core plus appointment booking, CRM integration, analytics, and automation — at $997/month.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Scale My Calls <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View All Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                Included in Every Plan
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Core Features
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
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold mb-4 uppercase tracking-wider">
                Growth Tier Exclusive
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlock scheduling, CRM integration, analytics dashboards, and automation when you choose Growth.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["scheduling"]} className="space-y-0">
              {premiumFeatures.map((item) => (
                <FeatureCategory key={item.id} item={item} />
              ))}
            </Accordion>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm font-semibold text-primary mb-1">Need multi-location routing and advanced analytics?</p>
              <p className="text-sm text-muted-foreground mb-4">Upgrade to Pro for enterprise-grade AI phone infrastructure.</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/products/ai-receptionist/pro/features">Pro Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Automate Scheduling & Follow-Up?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get your AI receptionist live with CRM and calendar integration in as little as a few days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Scale My Calls <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionistGrowthFeatures;
