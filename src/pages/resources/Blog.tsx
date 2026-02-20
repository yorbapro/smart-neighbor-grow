import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, BookOpen, Briefcase, Users, Newspaper } from "lucide-react";

const Blog = () => {
  useSEO({
    title: "Learning Center | AI Receptionist Guides & Insights | BrightLaunchIQ",
    description: "Expert guides on AI receptionists, Answer Engine Optimization (AEO), privacy, accessibility, and sales automation. For business owners and consumers alike.",
    canonical: "https://brightlaunchiq.com/learning-center",
    keywords: "AI receptionist guides, AEO tips, AI sales automation articles, small business AI guides, learning center, AI receptionist privacy",
    speakable: ["h1", ".blog-intro"],
  });

  useEffect(() => {
    const collectionPageSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://brightlaunchiq.com/learning-center#collection",
      "name": "BrightLaunchIQ Learning Center",
      "description": "Expert guides on AI receptionists, Answer Engine Optimization (AEO), privacy, accessibility, and sales automation for local businesses and consumers.",
      "url": "https://brightlaunchiq.com/learning-center",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brightlaunchiq.com/#website",
        "name": "BrightLaunchIQ",
        "url": "https://brightlaunchiq.com"
      },
      "about": [
        { "@type": "Thing", "name": "AI Receptionist", "description": "AI-powered phone answering for small businesses" },
        { "@type": "Thing", "name": "Answer Engine Optimization", "description": "Optimizing content for AI assistants and voice search" },
        { "@type": "Thing", "name": "AI Privacy & Security", "description": "Consumer data protection in AI voice systems" }
      ],
      "publisher": {
        "@type": "Organization",
        "@id": "https://brightlaunchiq.com/#organization",
        "name": "BrightLaunchIQ"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Learning Center Categories",
        "numberOfItems": 3,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "For Business", "url": "https://brightlaunchiq.com/learning-center/for-business" },
          { "@type": "ListItem", "position": 2, "name": "For Everyone", "url": "https://brightlaunchiq.com/learning-center/for-everyone" },
          { "@type": "ListItem", "position": 3, "name": "News & Intelligence Feed", "url": "https://brightlaunchiq.com/learning-center/news" }
        ]
      },
      "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1", ".blog-intro"] }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
        { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/learning-center" }
      ]
    };

    const collectionScript = document.createElement('script');
    collectionScript.type = 'application/ld+json';
    collectionScript.id = 'collection-page-schema';
    collectionScript.textContent = JSON.stringify(collectionPageSchema);
    document.head.appendChild(collectionScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.getElementById('collection-page-schema')?.remove();
      document.getElementById('breadcrumb-schema')?.remove();
    };
  }, []);

  const featuredArticle = {
    title: "What is an AI Receptionist? (And Why Your Business Needs One)",
    excerpt: "If your phone rings and nobody answers, you just lost money. Learn how an AI receptionist can engage customers instantly—24/7, 365 days a year.",
    slug: "what-is-ai-receptionist",
    author: "David Thompson",
    authorRole: "VP of Customer Success",
    date: "February 6, 2026",
    readTime: "3 min read",
    category: "AI Voice Agent",
  };

  const categories = [
    {
      title: "For Business",
      description: "ROI calculators, implementation roadmaps, CRM integration guides, and sales automation strategies for service businesses.",
      href: "/learning-center/for-business",
      icon: Briefcase,
      articleCount: "26 articles",
      series: ["The End of Missed Calls", "AI Receptionist Deep Dive", "The Future of Being Found", "The Deep Training Blueprint"],
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "For Everyone",
      description: "Privacy, etiquette, accessibility, and how AI phone technology is making life better for businesses and consumers.",
      href: "/learning-center/for-everyone",
      icon: Users,
      articleCount: "5 articles",
      series: ["The Consumer's Guide to AI Receptionists"],
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      title: "News & Intelligence Feed",
      description: "Weekly updates on AI voice technology, feature releases, industry trends, and actionable tips.",
      href: "/learning-center/news",
      icon: Newspaper,
      articleCount: "1 article",
      series: [],
      color: "text-accent-foreground",
      bgColor: "bg-accent/30",
    },
  ];

  // Preview articles for "Latest from each section"
  const latestBusiness = [
    { title: "What is an AI Receptionist? The Digital Evolution of the Front Desk", slug: "ai-receptionist-digital-evolution", author: "Dr. Sarah Chen", readTime: "4 min read", category: "Deep Dive" },
    { title: "Calculating the Leak: Why Missed Calls are Your Biggest Expense", slug: "missed-calls-biggest-expense", author: "Marcus Reynolds", readTime: "5 min read", category: "Deep Dive" },
    { title: "How to Set Up an AI Receptionist for Your Small Business", slug: "how-to-set-up-ai-receptionist", author: "David Thompson", readTime: "8 min read", category: "Guide" },
  ];

  const latestConsumer = [
    { title: "The Death of the Busy Signal: How AI is Fixing the Customer Experience", slug: "death-of-busy-signal", author: "Elena Rodriguez", readTime: "4 min read", category: "Consumer" },
    { title: "Your Data, Your Voice: Privacy and Security in the Age of AI", slug: "ai-receptionist-privacy-security", author: "David Thompson", readTime: "5 min read", category: "Consumer" },
    { title: "Accents, Dialects, and Accessibility: Why AI is More Inclusive", slug: "ai-accents-accessibility-inclusivity", author: "Elena Rodriguez", readTime: "5 min read", category: "Consumer" },
  ];

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
                Learning Center
              </h1>
              <p className="blog-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guides on AI receptionists — from ROI and implementation to privacy and accessibility. For business owners and consumers alike.
              </p>
            </div>
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <Link
                    key={cat.title}
                    to={cat.href}
                    className="group bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover hover:border-primary/30 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center mb-5`}>
                      <cat.icon className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                    <p className="text-xs font-semibold text-primary mb-2">{cat.articleCount}</p>
                    {cat.series.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {cat.series.map((s) => (
                          <span key={s} className="inline-block px-2 py-0.5 text-[10px] bg-muted text-muted-foreground rounded">{s}</span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-accent/20 to-transparent">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Featured Article</span>
              <article className="bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover transition-shadow">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">{featuredArticle.category}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  <Link to={`/learning-center/${featuredArticle.slug}`} className="hover:text-primary transition-colors">{featuredArticle.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" />{featuredArticle.author}, {featuredArticle.authorRole}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredArticle.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featuredArticle.readTime}</span>
                </div>
                <Button variant="hero" asChild>
                  <Link to={`/learning-center/${featuredArticle.slug}`}>Read Full Article<ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </article>
            </div>
          </div>
        </section>

        {/* Latest from Business & Consumer */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Business Preview */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-xl font-bold text-foreground">Latest for Business</h2>
                  </div>
                  <Link to="/learning-center/for-business" className="text-sm text-primary hover:underline">View all →</Link>
                </div>
                <div className="space-y-4">
                  {latestBusiness.map((article) => (
                    <Link key={article.slug} to={`/learning-center/${article.slug}`} className="group block bg-card rounded-xl border border-border p-5 hover:shadow-card-hover hover:border-primary/30 transition-all">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary rounded mb-2">{article.category}</span>
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{article.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.author}</span><span>•</span><span>{article.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Consumer Preview */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-destructive" />
                    <h2 className="font-display text-xl font-bold text-foreground">Latest for Everyone</h2>
                  </div>
                  <Link to="/learning-center/for-everyone" className="text-sm text-destructive hover:underline">View all →</Link>
                </div>
                <div className="space-y-4">
                  {latestConsumer.map((article) => (
                    <Link key={article.slug} to={`/learning-center/${article.slug}`} className="group block bg-card rounded-xl border border-border p-5 hover:shadow-card-hover hover:border-destructive/30 transition-all">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-destructive/10 text-destructive rounded mb-2">{article.category}</span>
                      <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{article.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.author}</span><span>•</span><span>{article.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
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

export default Blog;
