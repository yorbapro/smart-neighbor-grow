import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, BarChart3, Clock, Bot, DollarSign, Shield, Zap, Users, MessageSquare, CheckCircle } from "lucide-react";
import Related101Articles from "@/components/Related101Articles";

const WhatIsAIReceptionist = () => {
  useSEO({
    title: "What Is an AI Receptionist? The Definitive Guide (2026) | BrightLaunchIQ",
    description: "An AI receptionist is software that answers phone calls, books appointments, and qualifies leads 24/7 using natural language processing. Learn how it works, what it costs, and who it's for.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/what-is-ai-receptionist",
    keywords: "what is an AI receptionist, AI receptionist definition, AI phone answering, virtual AI receptionist, AI receptionist cost, AI receptionist vs virtual receptionist",
    speakable: ["h1", ".definition-block"],
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "what-is-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Is an AI Receptionist? The Definitive Guide",
        "description": "A comprehensive guide explaining what an AI receptionist is, how it works, what it costs, and which businesses benefit most.",
        "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone/what-is-ai-receptionist",
        "datePublished": "2025-06-01",
        "dateModified": "2026-02-27",
        "author": [
          { "@type": "Person", "@id": "https://brightlaunchiq.com/#tony-yorba", "name": "Tony Yorba" },
          { "@type": "Person", "@id": "https://brightlaunchiq.com/#scott-mckinnon", "name": "Scott McKinnon" }
        ],
        "publisher": {
          "@type": "Organization",
          "@id": "https://brightlaunchiq.com/#organization",
          "name": "BrightLaunchIQ",
          "url": "https://brightlaunchiq.com"
        },
        "mainEntityOfPage": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone/what-is-ai-receptionist",
      },
      {
        "@context": "https://schema.org",
        "@type": "DefinedTerm",
        "name": "AI Receptionist",
        "description": "An AI receptionist is intelligent software that answers phone calls, books appointments, qualifies leads, and routes calls — 24 hours a day, 7 days a week — using natural language processing and voice synthesis.",
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "AI Business Automation Glossary",
          "url": "https://brightlaunchiq.com/resources/glossary"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is an AI receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "An AI receptionist is intelligent software that answers phone calls, books appointments, qualifies leads, and routes calls — 24 hours a day, 7 days a week — using natural language processing and voice synthesis. Unlike voicemail or basic auto-attendants, it holds a natural conversation with callers, understanding their intent and taking action in real time." } },
          { "@type": "Question", "name": "How is an AI receptionist different from voicemail?", "acceptedAnswer": { "@type": "Answer", "text": "Voicemail records messages passively. An AI receptionist has a live, two-way conversation with callers — answering questions, booking appointments into your calendar, qualifying leads, and transferring urgent calls to the right person in real time." } },
          { "@type": "Question", "name": "How much does an AI receptionist cost?", "acceptedAnswer": { "@type": "Answer", "text": "AI receptionist services typically cost between $200 and $1,500 per month depending on features and call volume. BrightLaunchIQ starts at $497/month. Compare that to $35,000–$55,000+ per year for a full-time human receptionist." } },
          { "@type": "Question", "name": "Which industries use AI receptionists?", "acceptedAnswer": { "@type": "Answer", "text": "Any service business that depends on incoming phone calls benefits from an AI receptionist. The most common adopters include HVAC contractors, plumbers, dental clinics, law firms, real estate agencies, auto repair shops, salons, and medical practices." } },
          { "@type": "Question", "name": "Can an AI receptionist transfer calls to a live person?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AI receptionists can transfer calls to specific team members based on rules you configure — for example, routing emergency calls to an on-call technician or transferring high-value leads to a sales manager." } },
          { "@type": "Question", "name": "How does an AI receptionist work?", "acceptedAnswer": { "@type": "Answer", "text": "An AI receptionist uses natural language processing (NLP) and voice synthesis to understand what callers are saying and respond conversationally. It connects to your calendar, CRM, and business rules to take actions like booking appointments, qualifying leads, and routing calls — all without human intervention." } },
          { "@type": "Question", "name": "Is an AI receptionist right for my business?", "acceptedAnswer": { "@type": "Answer", "text": "If your business receives more than 10 calls per week and you have ever missed a call that could have been a customer, an AI receptionist will likely pay for itself. It is especially valuable for businesses where calls come in outside business hours or during peak periods when staff is busy." } },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com/" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "What Is an AI Receptionist?", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone/what-is-ai-receptionist" },
        ]
      }
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("what-is-schema")?.remove(); };
  }, []);

  const capabilities = [
    { icon: Phone, label: "Answer Calls 24/7", desc: "Every call picked up instantly, day or night. No voicemail, no hold times." },
    { icon: Calendar, label: "Book Appointments", desc: "Syncs directly with Google Calendar, Outlook, Calendly, and industry tools like ServiceTitan and Dentrix." },
    { icon: BarChart3, label: "Qualify Leads", desc: "Asks custom screening questions and scores leads based on your business rules." },
    { icon: Clock, label: "Zero Hold Times", desc: "Handles unlimited simultaneous calls. No caller ever waits in a queue." },
    { icon: MessageSquare, label: "Answer FAQs", desc: "Trained on your business knowledge base to answer common questions accurately." },
    { icon: Zap, label: "Route & Transfer Calls", desc: "Transfers urgent or high-value calls to the right person based on rules you set." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <div className="container max-w-6xl mx-auto py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Article */}
            <article className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">The Definitive Guide</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">What Is an AI Receptionist?</h1>
              <p className="text-lg text-muted-foreground mb-4">Think of an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> as your tireless front-desk employee — one that never sleeps, never takes lunch, and never sends a caller to voicemail.</p>
              <p className="text-sm text-muted-foreground mb-12">By <strong>Tony Yorba</strong> and <strong>Scott McKinnon</strong>, Co-Founders of BrightLaunchIQ &middot; Updated February 2026</p>

              {/* Table of Contents */}
              <nav className="bg-muted/50 border border-border rounded-xl p-6 mb-12">
                <h2 className="font-display text-lg font-bold text-foreground mb-3">In This Guide</h2>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li><a href="#definition" className="text-primary hover:underline">Definition: What Is an AI Receptionist?</a></li>
                  <li><a href="#capabilities" className="text-primary hover:underline">What Can an AI Receptionist Do?</a></li>
                  <li><a href="#how-it-works" className="text-primary hover:underline">How Does an AI Receptionist Work?</a></li>
                  <li><a href="#vs-voicemail" className="text-primary hover:underline">AI Receptionist vs. Voicemail</a></li>
                  <li><a href="#vs-human" className="text-primary hover:underline">AI Receptionist vs. Human Receptionist</a></li>
                  <li><a href="#vs-answering-service" className="text-primary hover:underline">AI Receptionist vs. Answering Service</a></li>
                  <li><a href="#cost" className="text-primary hover:underline">How Much Does an AI Receptionist Cost?</a></li>
                  <li><a href="#industries" className="text-primary hover:underline">Which Industries Use AI Receptionists?</a></li>
                  <li><a href="#right-for-you" className="text-primary hover:underline">Is an AI Receptionist Right for My Business?</a></li>
                  <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                </ol>
              </nav>

              {/* Section 1: Definition */}
              <section id="definition" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">1. What Exactly Is an AI Receptionist?</h2>
                <div className="definition-block bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 mb-4">
                  <p className="text-foreground font-medium"><strong>An AI receptionist is intelligent software that answers phone calls, books appointments, qualifies leads, and routes calls — 24 hours a day, 7 days a week — using natural language processing (NLP) and voice synthesis.</strong></p>
                </div>
                <p className="text-muted-foreground mb-4">Unlike voicemail or basic auto-attendants ("press 1 for sales"), an AI receptionist holds a natural, two-way conversation with your callers. It understands what they're asking for and takes action in real time — booking an appointment, answering a question, or transferring the call to the right person.</p>
                <p className="text-muted-foreground">The technology behind it combines several AI disciplines: <strong>natural language processing</strong> to understand speech, <strong>voice synthesis</strong> to respond naturally, <strong>intent recognition</strong> to determine what the caller needs, and <strong>API integrations</strong> to connect with your calendar, CRM, and business tools.</p>
              </section>

              {/* Section 2: Capabilities */}
              <section id="capabilities" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">2. What Can an AI Receptionist Do?</h2>
                <p className="text-muted-foreground mb-6"><strong>An AI receptionist can answer calls, book appointments, qualify leads, transfer calls, answer FAQs, and log everything to your CRM — all without human intervention.</strong></p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map((cap) => (
                    <div key={cap.label} className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <cap.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-foreground mb-1">{cap.label}</p>
                        <p className="text-sm text-muted-foreground">{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: How It Works */}
              <section id="how-it-works" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">3. How Does an AI Receptionist Work?</h2>
                <p className="text-muted-foreground mb-4">When a customer calls your business number, the AI receptionist picks up instantly. Here's what happens behind the scenes:</p>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Call Answered", desc: "The AI picks up the call and greets the caller using your custom branded greeting." },
                    { step: "2", title: "Intent Recognition", desc: "Using NLP, the AI determines what the caller needs — booking an appointment, asking a question, reporting an emergency, etc." },
                    { step: "3", title: "Conversation & Data Capture", desc: "The AI asks relevant follow-up questions, captures caller information, and provides answers from your knowledge base." },
                    { step: "4", title: "Action Taken", desc: "Based on the conversation, the AI books an appointment, routes the call, sends a confirmation, or logs the lead in your CRM." },
                    { step: "5", title: "Summary & Notification", desc: "You receive a call transcript, summary, and any flagged items. Everything is logged automatically." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <p className="font-display font-bold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4: vs Voicemail */}
              <section id="vs-voicemail" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">4. AI Receptionist vs. Voicemail</h2>
                <p className="text-muted-foreground mb-4"><strong>Voicemail records messages. An AI receptionist has a live conversation, answers questions, books appointments, and transfers urgent calls — in real time.</strong></p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 text-foreground font-bold">Capability</th>
                        <th className="py-3 px-4 text-primary font-bold">AI Receptionist</th>
                        <th className="py-3 px-4 text-muted-foreground font-bold">Voicemail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Two-way conversation", "Yes", "No"],
                        ["Books appointments", "Yes — into your calendar", "No"],
                        ["Answers FAQs", "Yes — from your knowledge base", "No"],
                        ["Transfers urgent calls", "Yes — to the right person", "No"],
                        ["Available 24/7", "Yes", "Yes (passive only)"],
                        ["Caller experience", "Natural conversation", "Leave a message after the beep"],
                      ].map(([feature, ai, vm], i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-2 px-4 text-foreground font-medium">{feature}</td>
                          <td className="py-2 px-4 text-primary">{ai}</td>
                          <td className="py-2 px-4 text-muted-foreground">{vm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5: vs Human */}
              <section id="vs-human" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">5. AI Receptionist vs. Human Receptionist</h2>
                <p className="text-muted-foreground mb-4">A full-time receptionist costs $35,000–$55,000+ per year in salary alone, works limited hours, and can only handle one call at a time. An AI receptionist works 24/7, handles unlimited simultaneous calls, and costs a fraction of the price.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 text-foreground font-bold">Factor</th>
                        <th className="py-3 px-4 text-primary font-bold">AI Receptionist</th>
                        <th className="py-3 px-4 text-muted-foreground font-bold">Human Receptionist</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Annual cost", "$6,000–$18,000/year", "$35,000–$55,000+/year"],
                        ["Availability", "24/7/365", "Business hours only"],
                        ["Simultaneous calls", "Unlimited", "1 at a time"],
                        ["Sick days / vacation", "None", "Yes"],
                        ["Training time", "Days", "Weeks to months"],
                        ["Consistency", "Every call handled identically", "Varies by person and mood"],
                        ["CRM logging", "Automatic", "Manual (often skipped)"],
                      ].map(([factor, ai, human], i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-2 px-4 text-foreground font-medium">{factor}</td>
                          <td className="py-2 px-4 text-primary">{ai}</td>
                          <td className="py-2 px-4 text-muted-foreground">{human}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">This doesn't mean AI replaces humans entirely. Many businesses use an AI receptionist to handle overflow, after-hours calls, and routine inquiries — while their human staff focuses on complex or high-touch interactions.</p>
              </section>

              {/* Section 6: vs Answering Service */}
              <section id="vs-answering-service" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">6. AI Receptionist vs. Traditional Answering Service</h2>
                <p className="text-muted-foreground mb-4">Traditional answering services use remote human operators who take messages and relay them to you. They charge per call or per minute, and the quality varies widely depending on the operator.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 text-foreground font-bold">Factor</th>
                        <th className="py-3 px-4 text-primary font-bold">AI Receptionist</th>
                        <th className="py-3 px-4 text-muted-foreground font-bold">Answering Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Books appointments", "Yes — directly into your calendar", "Rarely"],
                        ["Qualifies leads", "Yes — custom screening logic", "Basic message taking"],
                        ["Hold times", "None — instant pickup", "Often 30–90 seconds"],
                        ["Per-call fees", "No", "Yes — $1–$5+ per call"],
                        ["Business knowledge", "Trained on your FAQs and services", "Generic scripts"],
                        ["CRM integration", "Automatic", "Manual or none"],
                      ].map(([factor, ai, as_], i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-2 px-4 text-foreground font-medium">{factor}</td>
                          <td className="py-2 px-4 text-primary">{ai}</td>
                          <td className="py-2 px-4 text-muted-foreground">{as_}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 7: Cost */}
              <section id="cost" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">7. How Much Does an AI Receptionist Cost?</h2>
                <p className="text-muted-foreground mb-4"><strong>AI receptionist services typically cost between $200 and $1,500 per month</strong>, depending on the provider, features, and call volume included. Here's how the major cost categories break down:</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4 text-foreground font-bold">Option</th>
                        <th className="py-3 px-4 text-foreground font-bold">Monthly Cost</th>
                        <th className="py-3 px-4 text-foreground font-bold">Annual Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["AI Receptionist (basic)", "$200–$500/mo", "$2,400–$6,000/yr"],
                        ["AI Receptionist (advanced)", "$500–$1,500/mo", "$6,000–$18,000/yr"],
                        ["Virtual Receptionist (human)", "$250–$1,000+/mo + per-call fees", "$3,000–$15,000+/yr"],
                        ["Full-Time Human Receptionist", "$3,000–$5,000+/mo (salary + benefits)", "$35,000–$55,000+/yr"],
                      ].map(([option, monthly, annual], i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="py-2 px-4 text-foreground font-medium">{option}</td>
                          <td className="py-2 px-4 text-muted-foreground">{monthly}</td>
                          <td className="py-2 px-4 text-muted-foreground">{annual}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">BrightLaunchIQ AI Receptionist starts at <strong className="text-foreground">$497/month</strong> for the Core plan, which includes 24/7 call answering, lead qualification, call routing, and CRM integration. <Link to="/ai-receptionist/pricing" className="text-primary hover:underline">See full pricing →</Link></p>
              </section>

              {/* Section 8: Industries */}
              <section id="industries" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">8. Which Industries Use AI Receptionists?</h2>
                <p className="text-muted-foreground mb-4"><strong>Any service business that depends on incoming phone calls benefits from an AI receptionist.</strong> The most common adopters include:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "HVAC Contractors", href: "/industries/hvac-contractors" },
                    { name: "Plumbers", href: "/industries/emergency-plumbers" },
                    { name: "Dental Clinics", href: "/industries/dental-clinics" },
                    { name: "Personal Injury Lawyers", href: "/industries/personal-injury-lawyers" },
                    { name: "Real Estate Agents", href: "/industries/residential-real-estate" },
                    { name: "Auto Repair Shops", href: "/industries/auto-repair-shops" },
                    { name: "Hair Salons & Spas", href: "/industries/hair-salons" },
                    { name: "Veterinary Clinics", href: "/industries/veterinary-clinics" },
                  ].map((ind) => (
                    <Link key={ind.name} to={ind.href} className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                      <ArrowRight className="w-4 h-4 flex-shrink-0" /> {ind.name}
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <Link to="/ai-receptionist/industries" className="text-primary hover:underline">Browse all 50+ industries we serve →</Link>
                </p>
              </section>

              {/* Section 9: Right for You */}
              <section id="right-for-you" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">9. Is an AI Receptionist Right for My Business?</h2>
                <p className="text-muted-foreground mb-4">An AI receptionist is a strong fit if any of the following apply to your business:</p>
                <div className="space-y-3 mb-6">
                  {[
                    "You receive more than 10 calls per week",
                    "You've missed calls that could have been paying customers",
                    "Your staff is too busy to answer every call promptly",
                    "You get calls outside business hours that go to voicemail",
                    "You spend money on advertising but can't always pick up the phone",
                    "You want to reduce the cost of hiring front-desk staff",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground"><strong>If even one of these is true, an AI receptionist will likely pay for itself within the first month</strong> by capturing calls that would have otherwise been lost.</p>
                <div className="mt-6">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment">
                      Take the Free AI Receptionist Readiness Assessment <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </section>

              {/* Section 10: FAQ */}
              <section id="faq" className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">10. Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "Will customers know they're talking to AI?", a: "Most callers don't notice. Modern AI receptionists use natural, conversational voice synthesis trained on your specific business. The experience feels like talking to a knowledgeable receptionist." },
                    { q: "Can an AI receptionist transfer calls to a live person?", a: "Yes. You configure routing rules that determine which call types get transferred to a live person in real time — for example, emergency calls, VIP clients, or high-value leads." },
                    { q: "Does it work with my calendar and CRM?", a: "Yes. AI receptionists integrate with Google Calendar, Outlook, Calendly, ServiceTitan, Dentrix, Clio, HubSpot, Salesforce, and many other tools. BrightLaunchIQ supports all major platforms." },
                    { q: "How long does setup take?", a: "Most businesses are live within a few days. Setup involves configuring your call flows, integrating with your tools, and training the AI on your services and FAQs. No technical skills required." },
                    { q: "Is it secure? What about HIPAA?", a: "BrightLaunchIQ uses AES-256 encryption for all data in transit and at rest. HIPAA-ready configurations are available for healthcare practices. Your data is never used to train AI models." },
                    { q: "What happens if the AI can't handle a call?", a: "If the AI encounters a situation outside its configured scope, it transfers the call to a live person or takes a detailed message and flags it for immediate follow-up." },
                  ].map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-display font-bold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom CTA */}
              <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Ready to Hear It in Action?</h2>
                <p className="text-muted-foreground mb-6">Call our live AI receptionist demo. No signup required — experience the technology firsthand.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="tel:1-877-879-5552">
                      <Phone className="mr-2 w-5 h-5" /> Call 1-877-879-5552
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/ai-receptionist/get-started">Schedule a Demo <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <div className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Ready to stop the busy signal?</h3>
                  <p className="text-sm text-muted-foreground mb-4">See how an AI receptionist works for your industry.</p>
                  <Button variant="hero" size="default" className="w-full" asChild>
                    <Link to="/ai-receptionist/get-started">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>

                {/* Quick Facts Card */}
                <div className="bg-muted/50 border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Quick Facts</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Starting price</p>
                      <p className="font-bold text-foreground">$497/month</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Setup time</p>
                      <p className="font-bold text-foreground">Days, not months</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Availability</p>
                      <p className="font-bold text-foreground">24/7/365</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Simultaneous calls</p>
                      <p className="font-bold text-foreground">Unlimited</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Contracts</p>
                      <p className="font-bold text-foreground">None required</p>
                    </div>
                  </div>
                </div>

                {/* Related Pages */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Related Pages</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "AI Receptionist Features", href: "/ai-receptionist" },
                      { label: "How It Works", href: "/ai-receptionist/how-it-works" },
                      { label: "Pricing", href: "/pricing" },
                      { label: "Industries We Serve", href: "/industries" },
                      { label: "FAQ", href: "/faq" },
                    ].map((link) => (
                      <Link key={link.href} to={link.href} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRight className="w-3 h-3" /> {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsAIReceptionist;
