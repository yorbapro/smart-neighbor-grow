import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import useSEO from "@/hooks/useSEO";
import {
  ArrowRight, Phone, PhoneCall, Bot, Users, Headphones,
  Calendar, BarChart3, Shield, Rocket, Settings, CheckCircle,
  Clock, Zap, TrendingUp, MessageSquare
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    number: 1,
    icon: Rocket,
    title: "Onboarding & Discovery",
    description: "Your dedicated implementation specialist conducts a strategy session to understand your business, industry, services, and customer profile. We review your existing call flow, FAQ documents, pricing sheets, and brand voice to build the foundation.",
    details: [
      "Industry discovery call and business model review",
      "Custom script development tailored to your services",
      "Knowledge base ingestion — website, FAQs, pricing sheets",
      "AI persona development (tone, style, brand alignment)",
    ],
    result: "A fully trained AI receptionist that sounds like your best front-desk employee.",
  },
  {
    number: 2,
    icon: Settings,
    title: "System Configuration & Testing",
    description: "We configure call routing rules, escalation logic, and integrations — then validate everything with simulated test calls before going live.",
    details: [
      "Call routing rules by department, intent, and time of day",
      "Escalation triggers for urgent or VIP callers",
      "Calendar and CRM integration setup (Growth & Pro)",
      "Test call simulations to validate accuracy and tone",
    ],
    result: "A go-live-ready system with verified accuracy across all call scenarios.",
  },
  {
    number: 3,
    icon: PhoneCall,
    title: "AI Answers Every Call — 24/7",
    description: "Once live, every inbound call is answered instantly by your AI receptionist with a custom branded greeting, natural conversational flow, and dynamic call scripting that adapts in real time to each caller.",
    details: [
      "Instant pickup — no rings, no hold music, no voicemail",
      "Human-like voice with dynamic pacing and emotion",
      "Time-aware greetings (morning/afternoon/evening)",
      "Holiday and after-hours messaging logic",
      "Multi-language support for diverse callers",
      "FAQ handling and spam call filtering",
    ],
    result: "Zero missed calls. Every customer gets an immediate, professional response.",
  },
  {
    number: 4,
    icon: Users,
    title: "Lead Capture & Qualification",
    description: "The AI collects structured lead data — name, phone, email, service interest, urgency — and applies your custom qualification criteria to score and prioritize each caller in real time.",
    details: [
      "Intelligent intake with custom qualification questions",
      "Intent detection identifies what the caller needs",
      "New vs. existing customer detection",
      "High-intent caller flagging and priority tagging",
      "Smart data structuring for CRM-ready output",
    ],
    result: "Every lead arrives pre-qualified with full context — ready for follow-up or booking.",
  },
  {
    number: 5,
    icon: Headphones,
    title: "Smart Routing & Escalation",
    description: "Based on caller intent, urgency, and your routing rules, the AI either handles the call autonomously, books an appointment, or seamlessly transfers to a human team member.",
    details: [
      "Conditional routing by intent, department, or time",
      "Warm and cold transfer to live staff",
      "VIP client recognition and priority routing",
      "Emergency escalation triggers (urgent issues, angry callers)",
      "Voicemail fallback with intelligent processing",
    ],
    result: "The right caller reaches the right person — or gets resolved by AI — every time.",
  },
  {
    number: 6,
    icon: BarChart3,
    title: "Reporting, Optimization & Growth",
    description: "After every call, you receive email notifications with full transcripts, sentiment analysis, and lead summaries. Over time, the AI continuously improves through call review, script refinement, and A/B testing.",
    details: [
      "Email notifications with complete call transcripts",
      "Call summary and caller sentiment analysis",
      "Monthly script refinement and objection-handling upgrades",
      "A/B greeting and script testing",
      "Performance monitoring and conversion optimization",
      "ROI reporting and revenue attribution (Pro)",
    ],
    result: "Your AI receptionist gets smarter every month — so your results keep improving.",
  },
];

const stats = [
  { value: "24/7", label: "Call Coverage", icon: Clock },
  { value: "<1s", label: "Answer Time", icon: Zap },
  { value: "100%", label: "Calls Answered", icon: CheckCircle },
  { value: "55+", label: "AI Features", icon: TrendingUp },
];

const faqs = [
  {
    question: "How long does it take to set up an AI receptionist?",
    answer: "Most businesses are live within a few days. Setup includes a discovery call, custom script development, system configuration, and test call validation — all handled by your dedicated implementation specialist.",
  },
  {
    question: "Will callers know they're talking to AI?",
    answer: "No. Most callers don't notice. The AI uses natural, human-like conversational flow with dynamic pacing, emotion modeling, and brand-aligned tone — not robotic IVR menus.",
  },
  {
    question: "Can the AI receptionist book appointments?",
    answer: "Yes. Growth and Pro plans include real-time calendar sync with Google Calendar and Outlook, live availability checking, automated confirmations, and rescheduling/cancellation handling.",
  },
  {
    question: "What happens if the AI can't handle a call?",
    answer: "The AI uses smart escalation triggers to detect complex situations, urgent issues, or angry callers and seamlessly transfers to a live team member via warm or cold transfer.",
  },
  {
    question: "Does the AI receptionist integrate with my CRM?",
    answer: "Yes. Growth and Pro plans include CRM sync (HubSpot, Salesforce, GoHighLevel, etc.), workflow automation triggers, custom API integrations, and two-way data sync.",
  },
  {
    question: "How much does an AI receptionist cost compared to hiring?",
    answer: "BrightLaunchIQ AI Receptionist starts at $497/month — compared to $35,000–$55,000+/year for a full-time human receptionist. It works 24/7/365 with no sick days, overtime, or benefits costs.",
  },
];

const AIReceptionistHowItWorks = () => {
  useSEO({
    title: "How the AI Receptionist Works | Step-by-Step Guide — BrightLaunchIQ",
    description: "See exactly how BrightLaunchIQ's AI Receptionist works in 6 steps — from onboarding and voice training to 24/7 call answering, lead qualification, smart routing, and continuous optimization.",
    canonical: "https://brightlaunchiq.com/products/ai-receptionist/how-it-works",
    keywords: "how AI receptionist works, AI receptionist setup, AI phone answering process, AI receptionist onboarding, how does an AI receptionist work",
  });

  useEffect(() => {
    // HowTo Schema
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.id = "receptionist-howto-schema";
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How BrightLaunchIQ's AI Receptionist Works",
      "description": "A complete step-by-step guide to deploying an AI receptionist — from onboarding and voice training to 24/7 call answering, lead qualification, smart routing, and continuous optimization.",
      "totalTime": "PT72H",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "497",
        "unitText": "MONTH",
      },
      "tool": [
        { "@type": "HowToTool", "name": "AI Voice Agent Platform" },
        { "@type": "HowToTool", "name": "Calendar Integration" },
        { "@type": "HowToTool", "name": "CRM Integration" },
      ],
      "step": steps.map((s) => ({
        "@type": "HowToStep",
        "position": s.number,
        "name": s.title,
        "text": s.description,
        "url": `https://brightlaunchiq.com/products/ai-receptionist/how-it-works#step-${s.number}`,
      })),
    });
    document.head.appendChild(howToScript);

    // FAQ Schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "receptionist-howto-faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      })),
    });
    document.head.appendChild(faqScript);

    window.scrollTo(0, 0);

    return () => {
      ["receptionist-howto-schema", "receptionist-howto-faq-schema"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
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
              <span className="font-semibold">How It Works</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How the AI Receptionist
              <br />
              <span className="text-primary">Actually Works</span>
            </h1>

            <p className="speakable-intro text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From onboarding to 24/7 call answering in days — not months. Here's the complete 6-step process behind your AI-powered front desk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Replace My Front Desk <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products/ai-receptionist/features/complete-library">
                  View All 55+ Features
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-secondary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                6-Step Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Setup to Revenue in Days
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every step is handled by our team. No technical skills required on your end.
              </p>
            </div>

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  id={`step-${step.number}`}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-[2.25rem] top-[5.5rem] bottom-0 w-0.5 bg-border" />
                  )}

                  <div className={`relative grid md:grid-cols-[4.5rem_1fr] gap-6 pb-12 md:pb-16 ${
                    index % 2 === 0 ? "" : ""
                  }`}>
                    {/* Step number */}
                    <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-0">
                      <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shadow-button">
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className="step-title font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>

                      <p className="step-description text-muted-foreground mb-5 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-primary/5 border border-primary/15 rounded-xl px-4 py-3">
                        <p className="text-sm">
                          <span className="font-semibold text-primary">Result: </span>
                          <span className="text-foreground">{step.result}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Happens on Every Call */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-4 uppercase tracking-wider">
                Behind the Scenes
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Happens on Every Call
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From the first ring to the follow-up — here's the full lifecycle of an AI-handled call.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Zap, label: "Instant Pickup", desc: "AI answers before the second ring" },
                { icon: MessageSquare, label: "Natural Conversation", desc: "Dynamic scripts adapt to each caller" },
                { icon: Users, label: "Lead Captured", desc: "Name, contact, intent, urgency scored" },
                { icon: Calendar, label: "Action Taken", desc: "Booked, routed, or escalated automatically" },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-5 text-center shadow-card hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance callout */}
      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-10 h-10 text-primary" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Secure & Compliant by Default
              </h2>
              <p className="text-muted-foreground">
                Every call is protected with end-to-end encryption, role-based access controls, and configurable data retention policies. HIPAA-ready configurations are available for healthcare businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                Common Questions
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Receptionist FAQ
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border rounded-xl overflow-hidden bg-card data-[state=open]:shadow-card-hover transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <span className="font-display font-bold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm font-semibold text-primary mb-1">Want to see every feature?</p>
              <p className="text-sm text-muted-foreground mb-4">Browse all 55+ features across 11 capability categories.</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/products/ai-receptionist/features/complete-library">Complete Feature Library →</Link>
              </Button>
            </div>
            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 text-center">
              <p className="text-sm font-semibold text-accent mb-1">Compare plans side by side</p>
              <p className="text-sm text-muted-foreground mb-4">Find the right tier — Core, Growth, or Pro.</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/pricing">View Pricing →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your AI receptionist can be live in days — answering every call, qualifying every lead, and booking appointments 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Replace My Front Desk <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionistHowItWorks;
