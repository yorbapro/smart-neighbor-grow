import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Mic, Brain, Volume2, ArrowDown } from "lucide-react";
import Related101Articles from "@/components/Related101Articles";

const processSteps = [
  { icon: Mic, label: "STT", title: "Speech-to-Text", desc: "The caller's voice is converted into text in real time using advanced speech recognition.", color: "bg-primary/10 text-primary" },
  { icon: Brain, label: "LLM", title: "Language Model", desc: "An AI language model interprets the caller's intent, accesses your business data, and generates the ideal response.", color: "bg-accent/30 text-accent-foreground" },
  { icon: Volume2, label: "TTS", title: "Text-to-Speech", desc: "The response is converted back into natural-sounding speech and delivered to the caller instantly.", color: "bg-secondary/50 text-secondary-foreground" },
];

const HowAIReceptionistsWork = () => {
  useSEO({
    title: "How Do AI Receptionists Work? The Technology Explained | BrightLaunchIQ",
    description: "AI receptionists use speech-to-text, large language models, and voice synthesis to hold natural phone conversations 24/7. Here's exactly how.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/how-ai-receptionists-work",
    keywords: "how do AI receptionists work, AI receptionist technology, NLP voice agent, speech-to-text receptionist",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "how-works-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How Do AI Receptionists Work?",
        "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/how-ai-receptionists-work",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do AI receptionists work?", "acceptedAnswer": { "@type": "Answer", "text": "AI receptionists use a three-stage pipeline: Speech-to-Text (STT) converts the caller's voice into text, a Large Language Model (LLM) interprets intent and generates a response, and Text-to-Speech (TTS) converts that response into natural-sounding voice — all in under 500 milliseconds." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("how-works-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <div className="container max-w-6xl mx-auto py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Foundations</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">How Do AI Receptionists Work?</h1>
              <p className="text-lg text-muted-foreground mb-12">Understanding the technology behind an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> helps you evaluate whether it's the right fit. Here's the simple version — no computer science degree required.</p>

              <section className="mb-12">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Technology Powers an AI Receptionist?</h2>
                <p className="text-muted-foreground mb-6"><strong>AI receptionists use a three-stage pipeline: Speech-to-Text (STT) converts the caller's voice into text, a Large Language Model (LLM) interprets intent and generates a response, and Text-to-Speech (TTS) converts that response into natural-sounding voice — all in under 500 milliseconds.</strong></p>

                {/* CSS Process Flow Infographic */}
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                  <h3 className="font-display text-lg font-bold text-foreground mb-6 text-center">The AI Receptionist Call Flow</h3>
                  <div className="flex flex-col items-center gap-2">
                    {processSteps.map((step, i) => (
                      <div key={step.label} className="w-full max-w-md">
                        <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${step.color}`}>
                            <step.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-mono font-bold text-muted-foreground">{step.label}</span>
                              <span className="text-sm font-display font-bold text-foreground">{step.title}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                        {i < processSteps.length - 1 && (
                          <div className="flex justify-center py-1">
                            <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-4">Total round-trip latency: ~300–500ms</p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Fast Is the Response?</h2>
                <p className="text-muted-foreground"><strong>Modern AI receptionists respond in 300–500 milliseconds — faster than most humans.</strong> The entire STT → LLM → TTS pipeline runs in parallel with optimized streaming, so the caller experiences a natural conversational pace with no awkward delays.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Does It Know What to Say?</h2>
                <p className="text-muted-foreground"><strong>The AI is trained on your business's specific FAQs, services, pricing, and call handling rules before it goes live.</strong> Think of it like onboarding a new employee: you provide the playbook (your scripts, service menu, booking rules), and the AI memorizes it perfectly — then follows it consistently on every single call.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Happens When the AI Can't Handle a Call?</h2>
                <p className="text-muted-foreground"><strong>It transfers the call to a human — seamlessly.</strong> Every AI receptionist has configurable escalation rules. If a caller asks something outside the AI's training, expresses frustration, or requests a specific person, the AI performs a warm transfer with context so the human picks up where the AI left off.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Is the Technology Proven?</h2>
                <p className="text-muted-foreground"><strong>Yes — the underlying technologies (STT, LLM, TTS) are used by billions of people daily through Siri, Alexa, Google Assistant, and customer service bots.</strong> AI receptionists apply these same proven technologies in a purpose-built package optimized for business phone calls.</p>
              </section>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Ready to stop the busy signal?</h3>
                <p className="text-sm text-muted-foreground mb-4">Hear the technology in action with a live demo.</p>
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

export default HowAIReceptionistsWork;
