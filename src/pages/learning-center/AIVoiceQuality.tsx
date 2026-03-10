import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Play, Pause, Volume2 } from "lucide-react";
import Related101Articles from "@/components/Related101Articles";

const voicePersonas = [
  { name: "Professional Sarah", desc: "Warm, confident, American English — ideal for law firms and medical offices.", style: "Corporate" },
  { name: "Friendly Mike", desc: "Upbeat, approachable — perfect for home services and auto repair.", style: "Casual" },
  { name: "Calm Elena", desc: "Soothing, measured tone — designed for wellness, spas, and therapy practices.", style: "Wellness" },
  { name: "Energetic Alex", desc: "High-energy, enthusiastic — great for sales-driven businesses and real estate.", style: "Sales" },
];

const AIVoiceQuality = () => {
  const [activeVoice, setActiveVoice] = useState<string | null>(null);

  useSEO({
    title: "Do AI Receptionists Sound Human? Voice Quality Explained | BrightLaunchIQ",
    description: "Modern AI receptionists sound nearly indistinguishable from humans. Learn how voice synthesis creates natural conversations with custom personas.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone/ai-voice-quality",
    keywords: "AI receptionist voice quality, does AI sound human, AI voice synthesis, natural AI phone voice",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "voice-quality-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Do AI Receptionists Sound Human?",
        "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone/ai-voice-quality",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Do AI receptionists sound human?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — modern AI receptionists use neural text-to-speech that produces voices virtually indistinguishable from real humans, with natural cadence, intonation, and emotional responsiveness." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("voice-quality-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <div className="container max-w-6xl mx-auto py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Consumer Guide</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Do AI Receptionists Sound Human?</h1>
              <p className="text-lg text-muted-foreground mb-12">The biggest concern businesses have about switching to an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> is voice quality. Here's the truth about how they sound in 2026.</p>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Do AI Receptionists Really Sound Like Humans?</h2>
                <p className="text-muted-foreground"><strong>Yes — modern AI receptionists use neural text-to-speech that produces voices virtually indistinguishable from real humans, with natural cadence, intonation, and emotional responsiveness.</strong> The robotic "press 1 for sales" voice is a relic. Today's AI voices breathe, pause, and inflect just like a trained professional receptionist.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Can You Customize the Voice?</h2>
                <p className="text-muted-foreground mb-6"><strong>Yes — you can choose from dozens of pre-built voice personas or create a custom voice that matches your brand's personality.</strong> Voice parameters like pitch, speed, warmth, and accent can all be fine-tuned.</p>

                {/* Voice Sample UI Component */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Volume2 className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-bold text-foreground">Voice Persona Samples</h3>
                  </div>
                  <div className="space-y-3">
                    {voicePersonas.map((voice) => (
                      <div
                        key={voice.name}
                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                          activeVoice === voice.name
                            ? "border-primary bg-primary/5"
                            : "border-border bg-background hover:border-primary/30"
                        }`}
                        onClick={() => setActiveVoice(activeVoice === voice.name ? null : voice.name)}
                      >
                        <button
                          className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                            activeVoice === voice.name
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                          }`}
                          aria-label={`Play ${voice.name} voice sample`}
                        >
                          {activeVoice === voice.name ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                        </button>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className="font-medium text-foreground">{voice.name}</p>
                            <span className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">{voice.style}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{voice.desc}</p>
                        </div>
                        {activeVoice === voice.name && (
                          <div className="flex items-center gap-1">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="w-1 bg-primary rounded-full animate-pulse" style={{ height: `${12 + Math.random() * 16}px`, animationDelay: `${i * 0.15}s` }} />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">Audio samples available during a live demo. <Link to="/ai-receptionist/get-started" className="text-primary hover:underline">Request one →</Link></p>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Has AI Voice Quality Improved?</h2>
                <p className="text-muted-foreground"><strong>AI voice quality has improved more in the last 2 years than in the previous 20.</strong> Neural TTS models now capture micro-expressions like hesitation, enthusiasm, and empathy that were impossible with older concatenative synthesis. In blind tests, listeners identify modern AI voices as human over 85% of the time.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Will Callers Know They're Talking to AI?</h2>
                <p className="text-muted-foreground"><strong>Most callers don't realize it unless told — and many businesses choose to disclose it transparently.</strong> The key isn't whether callers detect AI; it's whether they get their problem solved quickly and professionally. When the AI books their appointment in 30 seconds flat, callers don't care who — or what — answered.</p>
              </section>

              <Related101Articles articles={[
                { title: "Can AI Sound Like a Real Person?", slug: "can-ai-sound-like-a-person" },
                { title: "AI Receptionist vs. IVR", slug: "ai-receptionist-vs-ivr" },
                { title: "What is an AI Receptionist?", slug: "what-is-an-ai-receptionist" },
              ]} className="mb-10" />
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Ready to stop the busy signal?</h3>
                <p className="text-sm text-muted-foreground mb-4">Hear the voice quality for yourself.</p>
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

export default AIVoiceQuality;
