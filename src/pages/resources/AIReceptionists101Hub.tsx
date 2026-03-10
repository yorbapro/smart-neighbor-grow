import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Wrench, DollarSign, Shield, Building2 } from "lucide-react";
import { articles, pillarNames, articlePath, HUB_PATH } from "@/data/ai-receptionists-101";
import { useEffect } from "react";

const pillarIcons = [BookOpen, Wrench, DollarSign, Shield, Building2];
const pillarDescriptions = [
  "Understanding the LLM-powered technology behind the voice.",
  "Setting up, training, and integrating your AI agent.",
  "Platform fees, per-minute costs, and the ROI formula.",
  "HIPAA compliance, encryption, and fallback logic.",
  "Playbooks for HVAC, legal, multi-location, and outbound.",
];

const AIReceptionists101Hub = () => {
  useSEO({
    title: "AI Receptionists 101: The Business Owner's Manual | BrightLaunchIQ",
    description: "24-article deep-dive series on AI receptionists. Learn the technology, setup, costs, security, and industry playbooks. Your roadmap to a 24/7 front desk.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/resources/ai-receptionists-101",
    keywords: "AI receptionist guide, AI receptionist 101, AI receptionist for business, AI voice agent manual",
  });

  // Inject CollectionPage schema
  useEffect(() => {
    const id = "collection-schema-101";
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "AI Receptionists 101: The Business Owner's Manual",
      "description": "A 24-article deep-dive series covering AI receptionist technology, implementation, ROI, security, and industry playbooks.",
      "url": "https://brightlaunchiq.com/ai-receptionist/resources/ai-receptionists-101",
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      "hasPart": articles.map((a) => ({
        "@type": "Article",
        "name": a.title,
        "url": `https://brightlaunchiq.com${articlePath(a.slug)}`,
      })),
    });
    document.head.appendChild(script);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">24-Article Series</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                AI Receptionists 101: The Business Owner's Manual
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
                Stop Missing Calls. Start Scaling Service.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every missed call is a missed opportunity. We've compiled 24 deep-dive articles to help you understand, implement, and profit from AI voice technology. Whether you are a solo contractor or managing a multi-location enterprise, this series is your roadmap to a 24/7, zero-latency front desk.
              </p>
            </div>
          </div>
        </section>

        {/* Pillar sections */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-14">
              {pillarNames.map((pillarName, pi) => {
                const Icon = pillarIcons[pi];
                const pillarArticles = articles.filter((a) => a.pillarNumber === pi + 1);
                return (
                  <div key={pillarName}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Pillar {pi + 1}</span>
                        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{pillarName}</h2>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5 ml-[52px]">{pillarDescriptions[pi]}</p>
                    <div className="grid gap-3 ml-[52px]">
                      {pillarArticles.map((article) => (
                        <Link
                          key={article.id}
                          to={articlePath(article.slug)}
                          className="group flex items-start gap-3 bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                        >
                          <span className="text-xs font-mono font-bold text-muted-foreground/60 mt-0.5 shrink-0 w-6 text-right">
                            {String(article.id).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                              {article.title}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{article.tldr}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-0.5 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to use */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">How to Use This Manual</h2>
              <p className="text-muted-foreground mb-8">
                This isn't just a collection of articles—it's a strategic resource. Start with the <Link to={articlePath("what-is-an-ai-receptionist")} className="text-primary hover:underline">Fundamentals</Link> if you're new to voice AI, or jump directly into <Link to={articlePath("how-to-set-up-ai-receptionist")} className="text-primary hover:underline">Implementation</Link> if you're ready to sync your Google Calendar and start booking jobs today.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">Get Started with BrightLaunchIQ <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionists101Hub;
