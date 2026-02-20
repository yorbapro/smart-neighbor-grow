import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const ForBusiness = () => {
  useSEO({
    title: "AI Receptionist for Business | ROI, Setup & Growth Guides | BrightLaunchIQ",
    description: "Expert guides on AI receptionist ROI, implementation, CRM integration, and sales automation for small business owners. Learn how to grow revenue with AI voice agents.",
    canonical: "https://brightlaunchiq.com/learning-center/for-business",
    keywords: "AI receptionist ROI, AI voice agent setup, CRM integration AI, sales automation guides, small business AI growth",
    speakable: ["h1", ".category-intro"],
  });

  useEffect(() => {
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "for-business-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://brightlaunchiq.com/learning-center/for-business#collection",
      "name": "AI Receptionist for Business — Learning Center",
      "description": "Expert guides on AI receptionist ROI, implementation, CRM integration, and sales automation for small business owners.",
      "url": "https://brightlaunchiq.com/learning-center/for-business",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brightlaunchiq.com/#website",
        "name": "BrightLaunchIQ"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "For Business", "item": "https://brightlaunchiq.com/learning-center/for-business" }
        ]
      },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".category-intro"] }
    });
    document.head.appendChild(schemaScript);
    return () => { document.getElementById("for-business-schema")?.remove(); };
  }, []);

  const voiceAgentSeries = [
    { title: "What is an AI Receptionist? (And Why Your Business Needs One)", slug: "what-is-ai-receptionist", part: 1 },
    { title: "How to Set Up an AI Voice Agent for Inbound Calls", slug: "ai-voice-agent-setup-guide", part: 2 },
    { title: "Training Your AI: How to Teach Your Digital Receptionist", slug: "training-your-ai-voice-agent", part: 3 },
    { title: "Managing the Machine: Human Handoffs and Monitoring", slug: "managing-ai-human-handoffs", part: 4 },
    { title: "The Cost Comparison: AI Receptionist vs. Hiring a Human", slug: "ai-receptionist-cost-comparison", part: 5 },
    { title: "The Easy Button: Why You Need BrightLaunchIQ AI Receptionist", slug: "why-you-need-leadline", part: 6 },
  ];

  const deepDiveSeries = [
    { title: "What is an AI Receptionist? The Digital Evolution of the Front Desk", slug: "ai-receptionist-digital-evolution", part: 1 },
    { title: "Behind the Mic: How AI Voice Agents \"Think\" in Real-Time", slug: "how-ai-voice-agents-think", part: 2 },
    { title: "Calculating the Leak: Why Missed Calls are Your Biggest Expense", slug: "missed-calls-biggest-expense", part: 3 },
    { title: "Man vs. Machine? Why the \"Hybrid\" Receptionist Wins", slug: "hybrid-receptionist-wins", part: 4 },
    { title: "From Sign-up to Dial-tone: The 10-Minute Implementation", slug: "ten-minute-implementation", part: 5 },
  ];

  const aeoSeries = [
    { title: "The Shift: From Typing Keywords to Asking Questions", slug: "the-shift-from-typing-to-asking", part: 1 },
    { title: "SEO vs. AEO: Why Being #1 Isn't Enough Anymore", slug: "seo-vs-aeo-why-being-number-one-isnt-enough", part: 2 },
    { title: "GEO: How to Speak \"Robot\" to AI Assistants", slug: "geo-how-to-speak-robot-to-ai-assistants", part: 3 },
    { title: "Local Search: Why Google Maps is Your New Storefront", slug: "local-search-google-maps-is-your-new-storefront", part: 4 },
    { title: "Reviews: The Fuel That Powers AI Recommendations", slug: "reviews-the-fuel-that-powers-ai-recommendations", part: 5 },
    { title: "The Solution: How to Handle It All Without Losing Your Mind", slug: "the-solution-how-to-handle-it-all", part: 6 },
  ];

  const deepTrainingSeries = [
    { title: "The Brand Persona: Giving Your AI a Soul, Not Just a Script", slug: "ai-brand-persona-training", part: 1 },
    { title: "The Physics of Phrasing: Masterclass in Cadence, Tone, and Prosody", slug: "ai-voice-cadence-prosody", part: 2 },
    { title: "The Guardrails of Excellence: Compliance, Messaging, and Strategic Control", slug: "ai-receptionist-compliance-guardrails", part: 3 },
    { title: "The Professional Edge: Why \"DIY\" AI is a Risky Business Move", slug: "professional-ai-training-vs-diy", part: 4 },
  ];

  const standaloneArticles = [
    { title: "How to Set Up an AI Receptionist for Your Small Business", slug: "how-to-set-up-ai-receptionist", category: "AI Receptionist" },
    { title: "AI Lead Generation: How It Works and Why It Matters", slug: "ai-lead-generation-guide", category: "AI Sales" },
    { title: "Human-Guided AI vs Fully Automated: Which is Right?", slug: "human-guided-ai-vs-automated", category: "Strategy" },
    { title: "The Speed to Lead Problem: Why 78% of Leads Are Lost", slug: "speed-to-lead-problem", category: "Sales" },
    { title: "How to Optimize Your Google Business Profile for AI Search", slug: "gbp-optimization-ai", category: "AEO" },
    { title: "CRM Integration Best Practices for AI Sales Automation", slug: "crm-integration-ai", category: "Technology" },
    { title: "What is Answer Engine Optimization (AEO)? Complete Guide", slug: "what-is-aeo", category: "AEO" },
  ];

  const renderSeriesGrid = (series: typeof voiceAgentSeries, colorClass: string, bgClass: string) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {series.map((article) => (
        <Link key={article.slug} to={`/learning-center/${article.slug}`} className="group bg-card rounded-xl border border-border p-5 hover:shadow-card-hover hover:border-primary/30 transition-all">
          <div className="flex items-start gap-4">
            <div className={`flex-shrink-0 w-10 h-10 rounded-full ${bgClass} flex items-center justify-center ${colorClass} font-bold text-lg`}>
              {article.part}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">For Business Owners</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">AI Receptionist Growth Guides</h1>
              <p className="category-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                ROI calculators, implementation roadmaps, CRM integration guides, and sales automation strategies for service businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link to="/learning-center" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Learning Center</Link>
                <Link to="/learning-center/for-everyone" className="text-sm text-muted-foreground hover:text-primary transition-colors">For Everyone →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* The End of Missed Calls Series */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-transparent">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">6-Part Series</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">The End of Missed Calls</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">How AI Voice Agents Are Changing Small Business. From setup to ROI.</p>
              {renderSeriesGrid(voiceAgentSeries, "text-primary", "bg-primary/10")}
            </div>
          </div>
        </section>

        {/* AI Receptionist Deep Dive */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/30 to-transparent">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-secondary-foreground" />
                <span className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground">5-Part Series</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">AI Receptionist Deep Dive</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">The technology, the ROI math, the hybrid strategy, and how to get started in minutes.</p>
              {renderSeriesGrid(deepDiveSeries, "text-secondary-foreground", "bg-secondary/50")}
            </div>
          </div>
        </section>

        {/* The Future of Being Found */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">6-Part Series</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">The Future of Being Found</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">How AI is changing the way customers find local businesses. SEO, AEO, and GEO.</p>
              {renderSeriesGrid(aeoSeries, "text-primary", "bg-primary/10")}
            </div>
          </div>
        </section>

        {/* The Deep Training Blueprint */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-accent/20 to-transparent">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">4-Part Series</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">The Deep Training Blueprint</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">Brand persona, cadence mastery, compliance guardrails, and why professional training is the edge.</p>
              {renderSeriesGrid(deepTrainingSeries, "text-accent-foreground", "bg-accent/30")}
            </div>
          </div>
        </section>

        {/* Standalone Articles */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">More Business Guides</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {standaloneArticles.map((article) => (
                  <article key={article.slug} className="bg-background rounded-xl border border-border p-6 hover:shadow-card-hover transition-shadow">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-3">{article.category}</span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      <Link to={`/learning-center/${article.slug}`} className="hover:text-primary transition-colors">{article.title}</Link>
                    </h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to See AI in Action?</h2>
              <p className="text-muted-foreground mb-8">Get a free AEO audit and discover how visible your business is to AI assistants.</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/aeo-audit">Get Your Free Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForBusiness;
