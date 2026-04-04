import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const weeklyArticles = [
  {
    title: "Mistral Voxtral Introduces AI Voice Agent with Real-Time Multilingual and Emotional Intelligence",
    slug: "mistral-voxtral-introduces-ai-voice-agent-with-real-time-multilingual-and-emotional-intelligence",
    date: "April 04, 2026",
    readTime: "4 min read",
    category: "Tech Updates",
    excerpt: "Mistral has launched Voxtral, an innovative AI voice agent that can hold real-time multilingual conversations and detect emotions, aiming to revolutionize the way businesses handle customer calls.",
  },
  {
    title: "Google Launches Duplex 3.0 with Real-Time Emotional Intelligence for Smarter AI Receptionists",
    slug: "google-launches-duplex-3-0-with-real-time-emotional-intelligence-for-smarter-ai-receptionists",
    date: "April 03, 2026",
    readTime: "4 min read",
    category: "Tech Updates",
    excerpt: "Google’s new Duplex 3.0 introduces emotional intelligence, allowing AI receptionists to better understand and respond to callers' feelings in real time, improving customer interactions.",
  },
  {
    title: "Google Introduces Duetto: AI Receptionist That Speaks Your Language and Feels Your Mood",
    slug: "google-introduces-duetto-ai-receptionist-that-speaks-your-language-and-feels-your-mood",
    date: "April 03, 2026",
    readTime: "4 min read",
    category: "Tech Updates",
    excerpt: "Google’s new AI receptionist, Duetto, offers real-time multilingual support and emotion detection to transform how businesses handle customer calls.",
  },
  {
    title: "Mistral Voxtral Launches AI Voice Agent with Human-Like Emotional Intelligence",
    slug: "mistral-voxtral-launches-ai-voice-agent-with-human-like-emotional-intelligence",
    date: "April 03, 2026",
    readTime: "4 min read",
    category: "Tech Updates",
    excerpt: "Mistral has introduced Voxtral, a new AI voice agent designed to understand and respond to customer emotions. This breakthrough could transform how small businesses handle customer service calls.",
  },
  {
    title: "Mistral Voxtral Launches VoxtralX: AI Voice Agent That Truly Understands You",
    slug: "mistral-voxtral-launches-voxtralx-ai-voice-agent-that-truly-understands-you",
    date: "April 03, 2026",
    readTime: "4 min read",
    category: "Tech Updates",
    excerpt: "Mistral Voxtral has introduced VoxtralX, a groundbreaking AI voice agent that offers human-like conversation skills, making customer interactions smoother and more empathetic than ever.",
  },
  {
    title: "The Zero-Pause Revolution: Why 2026 is the Year the \"Robot Voice\" Finally Died",
    slug: "zero-pause-revolution",
    date: "February 20, 2026",
    readTime: "4 min read",
    category: "Voice Insights",
    excerpt: "Edge-Inference and Predictive Phonetics have slashed AI response times to under 500ms — and it's changing everything.",
  },
];

const News = () => {
  useSEO({
    title: "AI Voice Intelligence Feed | Latest AI Receptionist News | BrightLaunchIQ",
    description: "Weekly updates on AI receptionist technology, feature releases, industry trends, and voice agent innovations. Stay ahead of the AI revolution in small business.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/news",
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
      "@id": "https://brightlaunchiq.com/ai-receptionist/news#collection",
      "name": "AI Voice Intelligence Feed — BrightLaunchIQ",
      "description": "Weekly updates on AI receptionist technology, feature releases, and industry trends.",
      "url": "https://brightlaunchiq.com/ai-receptionist/news",
      "isPartOf": { "@type": "WebSite", "@id": "https://brightlaunchiq.com/#website", "name": "BrightLaunchIQ" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "News", "item": "https://brightlaunchiq.com/ai-receptionist/news" }
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
              <Link to="/ai-receptionist/learning-center" className="text-sm text-muted-foreground hover:text-primary transition-colors mt-4 inline-block">← Back to Learning Center</Link>
            </div>
          </div>
        </section>

        {/* Weekly Drops */}
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {weeklyArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/ai-receptionist/news/${article.slug}`}
                    className="group block bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{article.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                    <span className="text-sm font-semibold text-primary flex items-center gap-1">
                      Read article <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to See AI in Action?</h2>
              <p className="text-muted-foreground mb-8">Get a free AEO audit and discover how visible your business is to AI assistants.</p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/locallift/resources/aeo-audit">Get Your Free Audit<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
