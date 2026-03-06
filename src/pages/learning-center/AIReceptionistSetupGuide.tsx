import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, CheckCircle } from "lucide-react";

const steps = [
  { step: 1, title: "Choose Your Plan", desc: "Select Core ($497/mo), Growth ($997/mo), or Pro ($1,497/mo) based on your call volume and feature needs.", tip: "Not sure? Start with Core — you can upgrade anytime with setup fee credits applied." },
  { step: 2, title: "Complete the Onboarding Form", desc: "Provide your business name, services, hours, FAQs, and call handling preferences. This takes about 15 minutes.", tip: "The more detail you provide, the smarter your AI receptionist will be from day one." },
  { step: 3, title: "Voice & Script Training", desc: "Our team configures your AI's voice persona, greeting scripts, and call flow logic based on your onboarding data.", tip: "Pro tier includes custom voice cloning to match your brand's exact tone." },
  { step: 4, title: "CRM & Calendar Integration", desc: "Connect your CRM (HubSpot, Salesforce, etc.) and calendar (Google, Outlook) so appointments and leads sync automatically.", tip: "Growth and Pro tiers include full CRM integration setup by our team." },
  { step: 5, title: "Test Calls & Refinement", desc: "Place test calls to hear your AI in action. Provide feedback and our team fine-tunes scripts, routing, and escalation rules.", tip: "Most businesses complete this in 1–2 rounds of testing." },
  { step: 6, title: "Go Live", desc: "Forward your business line to your AI receptionist number. Calls start being answered instantly, 24/7.", tip: "You can forward all calls or just overflow/after-hours — your choice." },
  { step: 7, title: "Monitor & Optimize", desc: "Review call analytics, listen to recordings, and adjust scripts as your business evolves. Your success manager handles ongoing optimization.", tip: "Most businesses see measurable ROI within the first 30 days." },
];

const AIReceptionistSetupGuide = () => {
  useSEO({
    title: "How to Set Up an AI Receptionist: 7-Step Guide | BrightLaunchIQ",
    description: "Set up an AI receptionist in 7 steps: choose a plan, complete onboarding, train the voice, integrate CRM, test, go live, and optimize. Full setup guide.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-setup-guide",
    keywords: "AI receptionist setup guide, how to set up AI receptionist, AI phone answering setup, virtual receptionist implementation",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "setup-guide-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Set Up an AI Receptionist",
      "description": "A 7-step guide to setting up an AI receptionist for your business.",
      "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-setup-guide",
      "totalTime": "P2D",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "USD", "value": "497" },
      "step": steps.map((s) => ({
        "@type": "HowToStep",
        "position": s.step,
        "name": s.title,
        "text": s.desc,
      })),
    });
    document.head.appendChild(script);
    return () => { document.getElementById("setup-guide-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <div className="container max-w-6xl mx-auto py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Setup Guide</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">How to Set Up an AI Receptionist: 7-Step Guide</h1>
              <p className="text-lg text-muted-foreground mb-12">Setting up an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> is simpler than you think. Most businesses go from signup to live calls in under 48 hours.</p>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Long Does Setup Take?</h2>
                <p className="text-muted-foreground mb-6"><strong>Most businesses are fully live within 48 hours of signing up.</strong> The onboarding form takes 15 minutes, and our team handles the technical configuration, voice training, and integration setup.</p>

                {/* Step-by-step cards */}
                <div className="space-y-4">
                  {steps.map((s) => (
                    <div key={s.step} className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold font-display">
                          {s.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{s.desc}</p>
                          <p className="text-xs text-primary flex items-start gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" /> {s.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Do I Need Technical Skills?</h2>
                <p className="text-muted-foreground"><strong>No — BrightLaunchIQ handles all technical setup for you.</strong> You fill out the onboarding form with your business details, and our team does the rest: voice configuration, CRM integration, call routing, and script training. If you can forward a phone call, you can use an AI receptionist.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Much Does It Cost to Get Started?</h2>
                <p className="text-muted-foreground mb-4"><strong>Plans start at $497/month with a one-time setup fee that covers voice training, CRM integration, and script configuration.</strong> Setup fees are credited toward future tier upgrades.</p>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/ai-receptionist/pricing">View Full Pricing <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </section>

              {/* Inline CTA */}
              <section className="bg-gradient-subtle border border-border rounded-xl p-8 text-center">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Want a Pro to Handle the Setup for You?</h2>
                <p className="text-muted-foreground mb-6"><strong>Our team configures everything — voice, scripts, integrations, and testing — so you can focus on running your business.</strong></p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </section>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Ready to stop the busy signal?</h3>
                <p className="text-sm text-muted-foreground mb-4">Get set up in under 48 hours.</p>
                <Button variant="hero" size="default" className="w-full" asChild>
                  <Link to="/ai-receptionist/get-started">Start Free Trial <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default AIReceptionistSetupGuide;
