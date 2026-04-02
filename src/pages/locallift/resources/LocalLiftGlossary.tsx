import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AEO (Answer Engine Optimization)",
    definition: "Answer Engine Optimization is the practice of optimizing content to be discovered and cited by AI assistants like ChatGPT, Gemini, Perplexity, and Google AI Overviews. Unlike traditional SEO which focuses on ranking in search results, AEO focuses on being the authoritative answer AI systems quote.",
    category: "Marketing",
  },
  {
    term: "AI Lead Generation",
    definition: "AI lead generation uses artificial intelligence to identify, qualify, and engage potential customers automatically. It scans data sources for intent signals and initiates personalized outreach when prospects show buying behavior, operating 24/7 without human intervention.",
    category: "Sales",
  },
  {
    term: "AI SDR (AI Sales Development Representative)",
    definition: "An AI SDR is an automated sales development system that handles prospecting, outreach, and lead qualification using artificial intelligence. It performs tasks traditionally done by human SDRs: finding leads, sending personalized messages, and qualifying prospects for sales conversations.",
    category: "Sales",
  },
  {
    term: "Agentic AI",
    definition: "Agentic AI refers to AI systems that can take autonomous actions toward goals with minimal human intervention. In sales, this means AI agents that can independently research prospects, craft messages, and manage follow-up sequences within defined guardrails.",
    category: "Technology",
  },
  {
    term: "Bounded Autonomy",
    definition: "Bounded autonomy is a human-AI collaboration framework where AI systems operate independently within predefined limits or 'guardrails' set by humans. This allows automation of routine tasks while maintaining human oversight for important decisions.",
    category: "Technology",
  },
  {
    term: "GEO (Generative Engine Optimization)",
    definition: "Generative Engine Optimization is a strategy focused on making content discoverable and citable by AI-powered search engines and assistants. It emphasizes structured facts, entity recognition, and authority signals that AI systems use to generate answers.",
    category: "Marketing",
  },
  {
    term: "Human-in-the-Loop (HITL)",
    definition: "Human-in-the-loop is an AI approach where human experts supervise, guide, and quality-check AI outputs. This ensures AI systems maintain brand voice, handle edge cases appropriately, and deliver authentic customer experiences.",
    category: "Technology",
  },
  {
    term: "ICP (Ideal Customer Profile)",
    definition: "An Ideal Customer Profile is a detailed description of the type of company or customer most likely to benefit from your product or service. In AI lead generation, ICP signals are used to identify and prioritize high-value prospects automatically.",
    category: "Sales",
  },
  {
    term: "Intent Signals",
    definition: "Intent signals are behaviors or data points that indicate a prospect is actively researching or considering a purchase. Examples include visiting pricing pages, downloading whitepapers, or searching for competitor comparisons. AI systems detect these to prioritize hot leads.",
    category: "Sales",
  },
  {
    term: "Lead Scoring",
    definition: "Lead scoring is the process of ranking leads based on their likelihood to convert. AI-powered lead scoring analyzes dozens of signals—engagement, demographics, behavior—to automatically prioritize which leads deserve immediate attention.",
    category: "Sales",
  },
  {
    term: "Multi-Channel Outreach",
    definition: "Multi-channel outreach is a sales strategy that engages prospects across multiple communication channels—email, phone, SMS, LinkedIn, social media—in a coordinated sequence. AI automation enables personalized multi-channel campaigns at scale.",
    category: "Sales",
  },
  {
    term: "Pipeline Intelligence",
    definition: "Pipeline intelligence uses AI and data analytics to provide real-time visibility into sales pipeline health, forecast accuracy, and deal risks. It identifies at-risk opportunities and suggests next best actions for sales teams.",
    category: "Sales",
  },
  {
    term: "Schema Markup",
    definition: "Schema markup is structured data added to websites that helps search engines and AI systems understand content meaning. For local businesses, schemas like LocalBusiness, FAQ, and Product help AI assistants accurately describe and recommend businesses.",
    category: "Marketing",
  },
  {
    term: "Speed to Lead",
    definition: "Speed to lead measures how quickly a business responds to new inquiries. Research shows 50% of sales go to the first responder, yet average response time is 47 hours. AI automation can reduce this to under 60 seconds.",
    category: "Sales",
  },
  {
    term: "Voice Search Optimization",
    definition: "Voice search optimization adapts content for voice-activated assistants like Siri, Alexa, and Google Assistant. It focuses on natural language, question-based queries, and featured snippet positions that voice assistants read aloud.",
    category: "Marketing",
  },
];

const LocalLiftGlossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);

  useSEO({
    title: "LocalLift™ AI Sales & Marketing Glossary | BrightLaunchIQ",
    description: "Comprehensive glossary of AI lead generation, AEO, GEO, and sales automation terms. Learn what AI SDR, human-in-the-loop, intent signals, and other key terms mean.",
    canonical: "https://brightlaunchiq.com/locallift/resources/glossary",
    keywords: "AI glossary, AEO definition, GEO meaning, AI SDR explained, sales automation terms",
    speakable: ["h1", ".glossary-intro"],
  });

  useEffect(() => {
    const filtered = glossaryTerms.filter(
      (item) =>
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTerms(filtered);
  }, [searchQuery]);

  // Add DefinedTermSet schema with enhanced GEO signals
  useEffect(() => {
    const existingSchema = document.getElementById("glossary-schema");
    if (existingSchema) existingSchema.remove();

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "glossary-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "name": "LocalLift™ AI Sales & Marketing Glossary",
      "description": "Comprehensive glossary of AI lead generation, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and sales automation terminology. Authoritative definitions for AI-powered business growth.",
      "url": "https://brightlaunchiq.com/locallift/resources/glossary",
      "inLanguage": "en-US",
      "publisher": {
        "@type": "Organization",
        "name": "BrightLaunchIQ",
        "url": "https://brightlaunchiq.com"
      },
      "hasDefinedTerm": glossaryTerms.map((item, index) => ({
        "@type": "DefinedTerm",
        "name": item.term,
        "description": item.definition,
        "url": `https://brightlaunchiq.com/locallift/resources/glossary#${item.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        "inDefinedTermSet": "https://brightlaunchiq.com/locallift/resources/glossary",
        "termCode": `BLIQ-LL-${String(index + 1).padStart(3, '0')}`
      })),
    });
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById("glossary-schema");
      if (el) el.remove();
    };
  }, []);

  const categories = [...new Set(glossaryTerms.map((t) => t.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" className="pt-24">
        <div className="container">
          <Breadcrumb />
        </div>

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                LocalLift™ AI Sales & Marketing Glossary
              </h1>
              <p className="glossary-intro text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Clear definitions for AI lead generation, Answer Engine Optimization, and sales automation terminology.
              </p>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setSearchQuery("")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    !searchQuery ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSearchQuery(cat)}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Terms list */}
              <div className="space-y-6">
                {filteredTerms.map((item) => (
                  <article
                    key={item.term}
                    id={item.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className="bg-card rounded-xl border border-border p-6"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="font-display text-xl font-bold text-foreground">
                        {item.term}
                      </h2>
                      <span className="px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded flex-shrink-0">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.definition}
                    </p>
                  </article>
                ))}
              </div>

              {filteredTerms.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No terms found matching "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LocalLiftGlossary;
