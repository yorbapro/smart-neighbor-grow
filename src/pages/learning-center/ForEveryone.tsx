import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const ForEveryone = () => {
  useSEO({
    title: "AI Receptionist Consumer Guide | Privacy, Accessibility & Future Tech | BrightLaunchIQ",
    description: "Consumer-friendly guides to AI receptionists: privacy protection, voice quality, accessibility, multilingual support, and how AI keeps local businesses alive.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone",
    keywords: "AI receptionist privacy, is AI listening to my calls, AI voice quality, AI accessibility, multilingual AI phone, consumer guide AI",
    speakable: ["h1", ".category-intro"],
  });

  useEffect(() => {
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "for-everyone-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone#collection",
      "name": "AI Receptionist Consumer Guide — Learning Center",
      "description": "Consumer-friendly guides about AI receptionist privacy, voice quality, accessibility, and community impact.",
      "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone",
      "isPartOf": { "@type": "WebSite", "@id": "https://brightlaunchiq.com/#website", "name": "BrightLaunchIQ" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "For Everyone", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-everyone" }
        ]
      },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".category-intro"] }
    });
    document.head.appendChild(schemaScript);
    return () => { document.getElementById("for-everyone-schema")?.remove(); };
  }, []);

  const consumerGuideSeries = [
    { title: "The Death of the Busy Signal: How AI is Fixing the Customer Experience", excerpt: "Nobody wants to wait on hold for 10 minutes. AI eliminates hold times, lost messages, and the dreaded 'Please Hold' — forever.", slug: "death-of-busy-signal", part: 1 },
    { title: "Is it a Human or a Bot? Navigating the Era of Conversational AI", excerpt: "AI voices have evolved from robotic monotones to natural inflection. Here's how to navigate — and get the best results.", slug: "human-or-bot-conversational-ai", part: 2 },
    { title: "Your Data, Your Voice: Privacy and Security in the Age of AI Answering", excerpt: "Where does your audio go? Is AI always listening? Honest answers to the #1 consumer concern.", slug: "ai-receptionist-privacy-security", part: 3 },
    { title: "Accents, Dialects, and Accessibility: Why AI is More Inclusive than Humans", excerpt: "AI doesn't judge your accent, age, or speech pattern. It focuses solely on intent — in 50+ languages.", slug: "ai-accents-accessibility-inclusivity", part: 4 },
    { title: "The Future of Your Neighborhood: How AI Keeps Local Shops Alive", excerpt: "AI isn't taking jobs — it's helping the local mom-and-pop shop compete against Amazon and national franchises.", slug: "ai-keeps-local-shops-alive", part: 5 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-destructive mb-4 block">For Everyone</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">The Consumer's Guide to AI Receptionists</h1>
              <p className="category-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                Privacy, etiquette, accessibility, and how AI phone technology is making life better for both businesses and the customers they serve.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Link to="/ai-receptionist/learning-center" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Learning Center</Link>
                <Link to="/ai-receptionist/learning-center/for-business" className="text-sm text-muted-foreground hover:text-primary transition-colors">For Business →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Consumer Guide Series */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-destructive" />
                <span className="text-sm font-semibold uppercase tracking-wider text-destructive">5-Part Series</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">The Consumer's Guide to AI Receptionists</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">Written for consumers, not businesses. Privacy, accessibility, voice quality, and community impact.</p>
              
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                {consumerGuideSeries.map((article) => (
                  <Link key={article.slug} to={`/ai-receptionist/learning-center/for-everyone/${article.slug}`} className="group bg-card rounded-xl border border-border p-6 hover:shadow-card-hover hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-xl">
                        {article.part}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Curious How AI Receptionists Work?</h2>
              <p className="text-secondary-foreground/80 mb-8">See a live demo or try our free AI audit to find out how visible your business is to AI assistants.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/locallift/resources/aeo-audit">Get Your Free Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                  <Link to="/ai-receptionist/learning-center/for-business">Explore Business Guides<ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForEveryone;
