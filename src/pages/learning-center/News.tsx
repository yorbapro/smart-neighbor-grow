import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Bell } from "lucide-react";

const News = () => {
  useSEO({
    title: "AI Voice Intelligence Feed | Latest AI Receptionist News | BrightLaunchIQ",
    description: "Weekly updates on AI receptionist technology, feature releases, industry trends, and voice agent innovations. Stay ahead of the AI revolution in small business.",
    canonical: "https://brightlaunchiq.com/learning-center/news",
    keywords: "AI receptionist news, AI voice agent updates, small business AI trends, AI phone technology news, BrightLaunchIQ updates",
    speakable: ["h1", ".news-intro"],
  });

  useEffect(() => {
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "news-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://brightlaunchiq.com/learning-center/news#collection",
      "name": "AI Voice Intelligence Feed — BrightLaunchIQ",
      "description": "Weekly updates on AI receptionist technology, feature releases, and industry trends.",
      "url": "https://brightlaunchiq.com/learning-center/news",
      "isPartOf": { "@type": "WebSite", "@id": "https://brightlaunchiq.com/#website", "name": "BrightLaunchIQ" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "News", "item": "https://brightlaunchiq.com/learning-center/news" }
        ]
      },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".news-intro"] }
    });
    document.head.appendChild(schemaScript);
    return () => { document.getElementById("news-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Intelligence Feed</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">AI Voice Intelligence Feed</h1>
              <p className="news-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                Weekly updates on AI receptionist technology, feature releases, industry trends, and voice agent innovations.
              </p>
              <Link to="/learning-center" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-4 inline-block">← Back to Learning Center</Link>
            </div>
          </div>
        </section>

        {/* Coming Soon State */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
                <Newspaper className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Our weekly intelligence feed is launching soon. We'll cover AI voice technology breakthroughs, feature releases, industry case studies, and practical tips for getting the most from your AI receptionist.
              </p>
              <div className="bg-card rounded-xl border border-border p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Bell className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">What to Expect</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2 text-left">
                  <li>• <strong className="text-foreground">Weekly AI Digest:</strong> What's new in AI voice technology this week</li>
                  <li>• <strong className="text-foreground">Feature Spotlights:</strong> Deep dives into new BrightLaunchIQ capabilities</li>
                  <li>• <strong className="text-foreground">Industry Trends:</strong> How AI is reshaping specific verticals (HVAC, legal, dental)</li>
                  <li>• <strong className="text-foreground">Quick Tips:</strong> Actionable advice you can implement today</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mb-6">In the meantime, explore our evergreen guides:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="default" asChild>
                  <Link to="/learning-center/for-business">Business Guides<ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" size="default" asChild>
                  <Link to="/learning-center/for-everyone">Consumer Guides<ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default News;
