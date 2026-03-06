import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Phone, Check, ArrowRight, Zap, Bot, Calendar, Shield, BarChart3,
  Users, Settings, Headphones, Lock, Rocket, TrendingUp,
  Plug, MessageSquare, Mic, MapPin, Star
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import useSEO from "@/hooks/useSEO";

interface FeatureSection {
  id: string;
  icon: React.ElementType;
  number: number;
  title: string;
  tier: "core" | "premium";
  features: { name: string; description: string }[];
}

const standardSections: FeatureSection[] = [
  {
    id: "call-handling", icon: Zap, number: 1, tier: "core",
    title: "Core Inbound Call Handling Capabilities",
    features: [
      { name: "24/7 Intelligent Call Answering", description: "Answers every inbound call instantly with a natural, human-like AI voice—ensuring no missed opportunities, even after hours." },
      { name: "Human-Like Conversational Flow", description: "Engages callers in dynamic, context-aware conversations that feel natural and responsive rather than robotic." },
      { name: "Multi-Language Support", description: "Communicates fluently in multiple languages to support diverse customer bases and expand market reach." },
      { name: "Custom Business Greeting", description: "Delivers a fully customized greeting aligned with your brand voice, tone, and messaging." },
      { name: "Dynamic Call Scripting", description: "Uses adaptable scripts that adjust in real time based on caller responses and intent." },
      { name: "FAQ Handling", description: "Answers common business questions automatically, reducing workload on human staff." },
      { name: "DTMF & Voice Input Recognition", description: "Understands both spoken responses and keypad selections for flexible caller interaction." },
      { name: "Voicemail Capture & Intelligent Processing", description: "Captures voicemails and converts them into structured, actionable data." },
      { name: "Spam Call Filtering", description: "Identifies and filters spam or irrelevant calls to protect staff time." },
    ],
  },
  {
    id: "voice-training", icon: Bot, number: 2, tier: "core",
    title: "Best-in-Class Voice Agent Training System",
    features: [
      { name: "Custom AI Persona Development", description: "Builds a voice agent personality tailored to your brand's tone and communication style." },
      { name: "Industry-Specific Training", description: "Trains the AI on vertical-specific language, terminology, and common customer scenarios." },
      { name: "Objection Handling Intelligence", description: "Prepares the AI to respond effectively to common objections or concerns." },
      { name: "Scenario-Based Simulation Training", description: "Tests and refines conversations using simulated real-world call scenarios." },
      { name: "Continuous Learning Optimization", description: "Improves performance over time using real call data and analytics." },
      { name: "Knowledge Base Integration", description: "Connects to your FAQs, documentation, and internal resources for accurate responses." },
    ],
  },
  {
    id: "lead-capture", icon: Users, number: 3, tier: "core",
    title: "Lead Capture & Qualification",
    features: [
      { name: "Intelligent Lead Intake", description: "Collects structured lead information including name, contact info, and inquiry details." },
      { name: "Custom Qualification Criteria", description: "Applies business-defined qualification rules to assess lead quality." },
      { name: "Smart Data Structuring", description: "Organizes captured data into usable formats for CRM or follow-up workflows." },
      { name: "Intent Detection", description: "Identifies caller intent in real time to guide conversation flow." },
    ],
  },
  {
    id: "routing", icon: Headphones, number: 4, tier: "core",
    title: "Call Routing & Escalation Logic",
    features: [
      { name: "Smart Call Routing", description: "Routes calls based on time, department, caller intent, or priority." },
      { name: "Live Transfer Capability", description: "Transfers calls seamlessly to human staff when required." },
      { name: "Escalation Triggers", description: "Automatically escalates high-priority calls based on defined logic." },
      { name: "After-Hours Handling Logic", description: "Applies custom routing rules outside business hours." },
    ],
  },
  {
    id: "security", icon: Lock, number: 5, tier: "core",
    title: "Security & Compliance",
    features: [
      { name: "End-to-End Encryption", description: "Encrypts call data and stored information for secure handling." },
      { name: "Role-Based Access Controls", description: "Restricts system access based on user permissions." },
      { name: "Data Retention Controls", description: "Allows configurable retention policies for call recordings and transcripts." },
      { name: "Compliance-Ready Architecture", description: "Designed to support regulatory compliance requirements where applicable." },
    ],
  },
  {
    id: "onboarding", icon: Rocket, number: 6, tier: "core",
    title: "Setup & Onboarding Deliverables",
    features: [
      { name: "Dedicated Implementation Specialist", description: "Provides guided onboarding support for smooth deployment." },
      { name: "Custom Script Development", description: "Builds call flows tailored to your business processes." },
      { name: "System Configuration", description: "Sets up routing rules, call logic, and integrations." },
      { name: "Test Call Validation", description: "Conducts test calls to ensure proper functionality before launch." },
      { name: "Email Notifications with Full Transcript", description: "Sends complete call transcripts via email for immediate visibility and follow-up." },
      { name: "Call Summary + Sentiment Analysis", description: "Provides concise summaries and caller sentiment insights to improve responsiveness." },
    ],
  },
  {
    id: "optimization", icon: TrendingUp, number: 7, tier: "core",
    title: "Optimization & Continuous Improvement",
    features: [
      { name: "Performance Monitoring", description: "Tracks key metrics to ensure system efficiency and accuracy." },
      { name: "Call Review & Refinement", description: "Analyzes real calls to refine scripts and improve outcomes." },
      { name: "A/B Script Testing", description: "Tests variations in call flows to optimize performance." },
      { name: "Monthly Performance Reporting", description: "Provides ongoing insights into usage, trends, and improvements." },
    ],
  },
];

const premiumSections: FeatureSection[] = [
  {
    id: "appointments", icon: Calendar, number: 8, tier: "premium",
    title: "Appointment Booking & Calendar Integration",
    features: [
      { name: "Real-Time Calendar Sync", description: "Books appointments directly into connected calendars." },
      { name: "Availability Detection", description: "Checks live availability before confirming appointments." },
      { name: "Automated Confirmations", description: "Sends confirmation notifications to callers." },
      { name: "Rescheduling & Cancellation Handling", description: "Manages booking changes without human intervention." },
    ],
  },
  {
    id: "crm", icon: Plug, number: 9, tier: "premium",
    title: "CRM & Systems Integration",
    features: [
      { name: "CRM Sync", description: "Automatically pushes captured lead data into connected CRM systems." },
      { name: "Workflow Automation Triggers", description: "Triggers downstream automations after calls." },
      { name: "Custom API Integrations", description: "Connects to proprietary or third-party platforms." },
      { name: "Two-Way Data Sync", description: "Ensures real-time updates between systems." },
    ],
  },
  {
    id: "analytics", icon: BarChart3, number: 10, tier: "premium",
    title: "Analytics & Performance Dashboard",
    features: [
      { name: "Real-Time Call Analytics", description: "Displays live call metrics and performance indicators." },
      { name: "Lead Conversion Tracking", description: "Tracks conversion from call to booked appointment or sale." },
      { name: "Call Volume Reporting", description: "Breaks down call traffic by time and source." },
      { name: "Agent Performance Metrics", description: "Evaluates AI handling efficiency and outcomes." },
    ],
  },
  {
    id: "addons", icon: Star, number: 11, tier: "premium",
    title: "Advanced Add-On Features",
    features: [
      { name: "Multi-Location Management", description: "Supports centralized management for multiple business locations." },
      { name: "Custom Voice Cloning", description: "Creates a unique branded voice experience." },
      { name: "Advanced Workflow Automation", description: "Implements complex automation logic for enterprise needs." },
      { name: "Dedicated Account Manager", description: "Provides ongoing strategic support and optimization." },
    ],
  },
];

const SectionBlock = ({ section }: { section: FeatureSection }) => {
  const tierColor = section.tier === "core" ? "emerald" : "blue";
  const tierBg = section.tier === "core" ? "bg-emerald-500/10 text-emerald-600" : "bg-blue-500/10 text-blue-600";
  const iconBg = section.tier === "core" ? "bg-emerald-500/10" : "bg-blue-500/10";
  const iconColor = section.tier === "core" ? "text-emerald-600" : "text-blue-600";

  return (
    <AccordionItem value={section.id} className="border border-border rounded-xl mb-4 overflow-hidden bg-card data-[state=open]:shadow-card-hover transition-shadow">
      <AccordionTrigger className="px-6 py-5 hover:no-underline">
        <div className="flex items-center gap-4 text-left w-full">
          <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
            <section.icon className={`w-5 h-5 ${iconColor}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tierBg}`}>
                {section.tier === "core" ? "STANDARD" : "PREMIUM"}
              </span>
              <span className="text-xs text-muted-foreground">Section {section.number}</span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{section.title}</h3>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-6">
        <div className="space-y-4 pt-2">
          {section.features.map((f) => (
            <div key={f.name} className="flex items-start gap-3">
              <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${iconColor}`} />
              <div>
                <p className="font-semibold text-sm text-foreground">{f.name}</p>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const AIReceptionistFeatureLibrary = () => {
  useSEO({
    title: "AI Receptionist Complete Feature Library | Every Capability Explained — BrightLaunchIQ",
    description: "The complete feature library for BrightLaunchIQ's AI Receptionist — 11 capability categories, 55+ features across Standard (Core) and Premium (Growth & Pro) tiers. Call handling, voice training, lead capture, CRM integration, analytics, and more.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/features/complete-library",
    keywords: "AI receptionist features, AI receptionist capabilities, AI phone answering features, AI receptionist call handling, AI receptionist CRM integration, AI receptionist appointment booking, AI receptionist analytics, virtual receptionist features list",
  });

  useEffect(() => {
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "feature-library-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What features does an AI receptionist include?",
          "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ's AI Receptionist includes 55+ features across 11 categories: 24/7 call answering, voice agent training, lead capture & qualification, call routing & escalation, security & compliance, setup & onboarding, optimization, appointment booking, CRM integration, analytics dashboards, and advanced add-ons like multi-location management and custom voice cloning." }
        },
        {
          "@type": "Question",
          "name": "What is the difference between Standard and Premium AI receptionist features?",
          "acceptedAnswer": { "@type": "Answer", "text": "Standard features (included in all plans) cover core call handling, voice training, lead capture, routing, security, onboarding, and optimization. Premium features (Growth and Pro plans) add appointment booking with calendar sync, CRM integration, real-time analytics dashboards, multi-location management, custom voice cloning, and a dedicated account manager." }
        },
        {
          "@type": "Question",
          "name": "Can an AI receptionist book appointments automatically?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. BrightLaunchIQ's Growth and Pro plans include real-time calendar sync, live availability detection, automated confirmations, and rescheduling/cancellation handling — all without human intervention." }
        },
        {
          "@type": "Question",
          "name": "Does an AI receptionist integrate with my CRM?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Premium tiers include CRM sync that automatically pushes lead data into your existing CRM, workflow automation triggers, custom API integrations, and two-way data sync for real-time updates." }
        },
      ]
    });
    document.head.appendChild(schema);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("feature-library-schema");
      if (el) el.remove();
    };
  }, []);

  const totalFeatures = [...standardSections, ...premiumSections].reduce((sum, s) => sum + s.features.length, 0);

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
              <span className="font-semibold">Complete Feature Library</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              BrightLaunchIQ AI Receptionist
              <br />
              <span className="text-primary">Complete Feature Library</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              {totalFeatures}+ features across 11 capability categories. Everything your AI-powered phone system can do — from first ring to closed deal.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium">
                <Check className="w-3.5 h-3.5" /> 7 Standard Categories
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium">
                <Check className="w-3.5 h-3.5" /> 4 Premium Categories
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/ai-receptionist/pricing">Compare Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold mb-4 uppercase tracking-wider">
                Included in All Plans
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Standard Features (Core)
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every plan includes these foundational capabilities — intelligent call handling, lead capture, routing, security, onboarding, and ongoing optimization.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["call-handling"]} className="space-y-0">
              {standardSections.map((s) => (
                <SectionBlock key={s.id} section={s} />
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
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold mb-4 uppercase tracking-wider">
                Growth &amp; Pro Plans
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Premium Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Unlock appointment booking, CRM integration, real-time analytics, and enterprise add-ons with Growth or Pro.
              </p>
            </div>

            <Accordion type="multiple" defaultValue={["appointments"]} className="space-y-0">
              {premiumSections.map((s) => (
                <SectionBlock key={s.id} section={s} />
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Explore by Plan
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "How It Works", href: "/ai-receptionist/how-it-works", price: "Step-by-step guide" },
                { label: "Core Features", href: "/ai-receptionist/core/features", price: "$497/mo" },
                { label: "Growth Features", href: "/ai-receptionist/growth/features", price: "$897/mo" },
                { label: "Pro Features", href: "/ai-receptionist/pro/features", price: "$1,497/mo" },
              ].map((plan) => (
                <Link
                  key={plan.label}
                  to={plan.href}
                  className="group p-6 rounded-xl border border-border bg-card hover:shadow-card-hover transition-all text-center"
                >
                  <p className="font-display font-bold text-foreground mb-1">{plan.label}</p>
                  <p className="text-sm text-muted-foreground mb-3">Starting at {plan.price}</p>
                  <span className="text-sm text-primary font-medium group-hover:underline">
                    View Details <ArrowRight className="inline w-3.5 h-3.5 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

export default AIReceptionistFeatureLibrary;
