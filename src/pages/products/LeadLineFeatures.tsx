import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Phone, Check, ArrowRight, Zap, Bot, Calendar, Shield, BarChart3,
  Clock, Users, Settings, Headphones, Lock, Rocket, TrendingUp,
  MessageSquare, Plug, ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
    id: "addons",
    icon: Settings,
    title: "Advanced Add-On Features",
    subtitle: "Extend Your AI Receptionist",
    features: [
      "SMS auto-reply integration",
      "Web chat AI synced with voice agent",
      "After-hours only mode",
      "Multiple location handling",
      "Multi-number support",
      "Dedicated AI voice cloning option",
      "Custom branded caller ID",
      "AI voicemail drop",
      "Real-time dashboard display for front desk",
    ],
  },
];

const FeatureCategory = ({
  item,
}: {
  item: (typeof coreFeatures)[0];
}) => (
  <AccordionItem value={item.id} className="border border-border rounded-xl mb-4 overflow-hidden bg-card data-[state=open]:shadow-card-hover transition-shadow">
    <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
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

const LeadLineFeatures = () => {
  useEffect(() => {
    document.title = "LeadLine AI Features - Complete AI Receptionist Capabilities | BrightLaunchIQ";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore every feature of LeadLine AI — 24/7 call answering, lead qualification, smart scheduling, CRM integration, analytics, and more. See why businesses trust our AI receptionist."
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">AI Receptionist — Inbound</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Every Feature. Every Call Handled.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A complete breakdown of what LeadLine AI delivers — from intelligent call answering and lead qualification to CRM integrations and advanced analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products/ai-receptionist">
                  Back to AI Receptionist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
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

      {/* Premium Features */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 uppercase tracking-wider">
                Growth &amp; Pro Tiers
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlock scheduling, CRM integration, analytics dashboards, and advanced add-ons when you upgrade.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["scheduling"]} className="space-y-0">
              {premiumFeatures.map((item) => (
                <FeatureCategory key={item.id} item={item} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Complete Library Link */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-primary/20 bg-primary/5">
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Want the full breakdown?</h3>
            <p className="text-sm text-muted-foreground mb-4">See every feature across all 11 capability categories — Standard and Premium.</p>
            <Button variant="outline" asChild>
              <Link to="/products/ai-receptionist/features/complete-library">
                View Complete Feature Library <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Never Miss a Call Again?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See pricing, choose your tier, and get your AI receptionist live in 7–14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products/ai-receptionist">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadLineFeatures;
