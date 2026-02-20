import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, BarChart3, Clock, Bot } from "lucide-react";

const WhatIsAIReceptionist = () => {
  useSEO({
    title: "What Is an AI Receptionist? Definition & Guide | BrightLaunchIQ",
    description: "An AI receptionist is software that answers phone calls, books appointments, and qualifies leads 24/7 using natural language processing.",
    canonical: "https://brightlaunchiq.com/learning-center/business-growth/what-is-an-ai-receptionist",
    keywords: "what is an AI receptionist, AI receptionist definition, AI phone answering, virtual AI receptionist",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "what-is-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "What Is an AI Receptionist?",
        "url": "https://brightlaunchiq.com/learning-center/business-growth/what-is-an-ai-receptionist",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is an AI receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "An AI receptionist is intelligent software that answers phone calls, books appointments, qualifies leads, and routes calls — 24 hours a day, 7 days a week — using natural language processing and voice synthesis." } },
          { "@type": "Question", "name": "How is an AI receptionist different from voicemail?", "acceptedAnswer": { "@type": "Answer", "text": "Voicemail records messages. An AI receptionist has a live conversation, answers questions, books appointments into your calendar, and transfers urgent calls to the right person in real time." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("what-is-schema")?.remove(); };
  }, []);

  const capabilities = [
    { icon: Phone, label: "Answer Calls 24/7", desc: "Every call picked up in under 1 second, day or night." },
    { icon: Calendar, label: "Book Appointments", desc: "Syncs directly with your calendar and scheduling tools." },
    { icon: BarChart3, label: "Qualify Leads", desc: "Asks screening questions and scores leads automatically." },
    { icon: Clock, label: "Zero Hold Times", desc: "Handles unlimited simultaneous calls with no queue." },
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
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Foundations</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">What Is an AI Receptionist?</h1>
              <p className="text-lg text-muted-foreground mb-12">Think of an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> as your tireless front-desk employee — one that never sleeps, never takes lunch, and never sends a caller to voicemail.</p>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Exactly Is an AI Receptionist?</h2>
                <p className="text-muted-foreground mb-4"><strong>An AI receptionist is intelligent software that answers phone calls, books appointments, qualifies leads, and routes calls — 24 hours a day, 7 days a week — using natural language processing and voice synthesis.</strong> Unlike voicemail or basic auto-attendants, it holds a natural conversation with your callers, understanding their intent and taking action in real time.</p>
                <p className="text-muted-foreground">Imagine a receptionist who memorizes every FAQ, never puts anyone on hold, and greets your 100th caller of the day with the same energy as the first. That's what AI receptionist technology delivers.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Can an AI Receptionist Do?</h2>
                <p className="text-muted-foreground mb-6"><strong>An AI receptionist can answer calls, book appointments, qualify leads, transfer calls, and log everything to your CRM — all without human intervention.</strong></p>
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

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Is an AI Receptionist Different from Voicemail?</h2>
                <p className="text-muted-foreground"><strong>Voicemail records messages. An AI receptionist has a live conversation, answers questions, books appointments into your calendar, and transfers urgent calls to the right person in real time.</strong> The difference is like comparing a sticky note to a full-time employee — one captures information, the other takes action.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Which Industries Use AI Receptionists?</h2>
                <p className="text-muted-foreground mb-4"><strong>Any service business that depends on phone calls benefits from an AI receptionist.</strong> The most common adopters include:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: "Home Services (HVAC, Plumbing, Electrical)", href: "/industries/hvac-contractors" },
                    { name: "Medical & Dental Practices", href: "/industries/dental-clinics" },
                    { name: "Law Firms", href: "/industries/personal-injury-lawyers" },
                    { name: "Real Estate Agencies", href: "/industries/residential-real-estate" },
                    { name: "Auto Repair & Towing", href: "/industries/auto-repair-shops" },
                    { name: "Salons & Spas", href: "/industries/hair-salons" },
                  ].map((ind) => (
                    <Link key={ind.name} to={ind.href} className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                      <ArrowRight className="w-4 h-4 flex-shrink-0" /> {ind.name}
                    </Link>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <Link to="/industries" className="text-primary hover:underline">Browse all 50+ industries →</Link>
                </p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Is an AI Receptionist Right for My Business?</h2>
                <p className="text-muted-foreground"><strong>If your business receives more than 10 calls per week and you've ever missed one, the answer is almost certainly yes.</strong> An AI receptionist pays for itself by capturing even a few calls that would have otherwise gone to voicemail — or worse, to a competitor.</p>
              </section>
            </article>

            {/* Sidebar CTA */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Ready to stop the busy signal?</h3>
                <p className="text-sm text-muted-foreground mb-4">See how an AI receptionist works for your industry.</p>
                <Button variant="hero" size="default" className="w-full" asChild>
                  <Link to="/get-started">Start Free Trial <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
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
