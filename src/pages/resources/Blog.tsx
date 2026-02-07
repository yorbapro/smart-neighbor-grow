import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, BookOpen } from "lucide-react";

const Blog = () => {
  useSEO({
    title: "Learning Center | AI & Sales Insights | BrightLaunchIQ",
    description: "Expert insights on AI lead generation, Answer Engine Optimization (AEO), and sales automation for local businesses. Learn how human-guided AI can grow your business.",
    canonical: "https://brightlaunchiq.com/resources/blog",
    keywords: "AI lead generation, AEO tips, AI sales automation articles, small business AI guides, learning center",
    speakable: ["h1", ".blog-intro"],
  });

  // CollectionPage JSON-LD Schema for AI discoverability
  useEffect(() => {
    const collectionPageSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://brightlaunchiq.com/resources/blog#collection",
      "name": "BrightLaunchIQ Learning Center",
      "description": "Expert guides on AI lead generation, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and human-guided sales automation for local businesses.",
      "url": "https://brightlaunchiq.com/resources/blog",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brightlaunchiq.com/#website",
        "name": "BrightLaunchIQ",
        "url": "https://brightlaunchiq.com"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "AI Lead Generation",
          "description": "Using artificial intelligence to identify, qualify, and engage potential customers automatically"
        },
        {
          "@type": "Thing",
          "name": "Answer Engine Optimization",
          "description": "Optimizing content for AI assistants and voice search"
        },
        {
          "@type": "Thing",
          "name": "Sales Automation",
          "description": "Automating sales processes with human-guided AI systems"
        }
      ],
      "publisher": {
        "@type": "Organization",
        "@id": "https://brightlaunchiq.com/#organization",
        "name": "BrightLaunchIQ",
        "logo": {
          "@type": "ImageObject",
          "url": "https://brightlaunchiq.com/favicon.ico"
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Learning Center Articles",
        "numberOfItems": 19,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "What is an AI Receptionist? (And Why Your Business Needs One)",
            "url": "https://brightlaunchiq.com/resources/blog/what-is-ai-receptionist"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "How to Set Up an AI Voice Agent for Inbound Calls",
            "url": "https://brightlaunchiq.com/resources/blog/ai-voice-agent-setup-guide"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Training Your AI: How to Teach Your Digital Receptionist",
            "url": "https://brightlaunchiq.com/resources/blog/training-your-ai-voice-agent"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Managing the Machine: Human Handoffs and Monitoring",
            "url": "https://brightlaunchiq.com/resources/blog/managing-ai-human-handoffs"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "The Cost Comparison: AI Receptionist vs. Hiring a Human",
            "url": "https://brightlaunchiq.com/resources/blog/ai-receptionist-cost-comparison"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "The Easy Button: Why You Need LeadLine",
            "url": "https://brightlaunchiq.com/resources/blog/why-you-need-leadline"
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "What is Answer Engine Optimization (AEO)? The Complete Guide for 2026",
            "url": "https://brightlaunchiq.com/resources/blog/what-is-aeo"
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "The Shift: From Typing Keywords to Asking Questions",
            "url": "https://brightlaunchiq.com/resources/blog/the-shift-from-typing-to-asking"
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "SEO vs. AEO: Why Being #1 Isn't Enough Anymore",
            "url": "https://brightlaunchiq.com/resources/blog/seo-vs-aeo-why-being-number-one-isnt-enough"
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "GEO: How to Speak Robot to AI Assistants",
            "url": "https://brightlaunchiq.com/resources/blog/geo-how-to-speak-robot-to-ai-assistants"
          },
          {
            "@type": "ListItem",
            "position": 11,
            "name": "Local Search: Why Google Maps is Your New Storefront",
            "url": "https://brightlaunchiq.com/resources/blog/local-search-google-maps-is-your-new-storefront"
          },
          {
            "@type": "ListItem",
            "position": 12,
            "name": "Reviews: The Fuel That Powers AI Recommendations",
            "url": "https://brightlaunchiq.com/resources/blog/reviews-the-fuel-that-powers-ai-recommendations"
          },
          {
            "@type": "ListItem",
            "position": 13,
            "name": "The Solution: How to Handle It All Without Losing Your Mind",
            "url": "https://brightlaunchiq.com/resources/blog/the-solution-how-to-handle-it-all"
          },
          {
            "@type": "ListItem",
            "position": 14,
            "name": "AI Lead Generation: How It Works and Why It Matters for Small Business",
            "url": "https://brightlaunchiq.com/resources/blog/ai-lead-generation-guide"
          },
          {
            "@type": "ListItem",
            "position": 15,
            "name": "Human-Guided AI vs Fully Automated: Which is Right for Your Business?",
            "url": "https://brightlaunchiq.com/resources/blog/human-guided-ai-vs-automated"
          },
          {
            "@type": "ListItem",
            "position": 16,
            "name": "The Speed to Lead Problem: Why 78% of Leads Are Lost",
            "url": "https://brightlaunchiq.com/resources/blog/speed-to-lead-problem"
          },
          {
            "@type": "ListItem",
            "position": 17,
            "name": "How to Optimize Your Google Business Profile for AI Search",
            "url": "https://brightlaunchiq.com/resources/blog/gbp-optimization-ai"
          },
          {
            "@type": "ListItem",
            "position": 18,
            "name": "CRM Integration Best Practices for AI Sales Automation",
            "url": "https://brightlaunchiq.com/resources/blog/crm-integration-ai"
          },
          {
            "@type": "ListItem",
            "position": 19,
            "name": "How to Set Up an AI Receptionist for Your Small Business",
            "url": "https://brightlaunchiq.com/resources/blog/how-to-set-up-ai-receptionist"
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".blog-intro"]
      }
    };

    // BreadcrumbList schema for navigation signals
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://brightlaunchiq.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resources",
          "item": "https://brightlaunchiq.com/resources"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Learning Center",
          "item": "https://brightlaunchiq.com/resources/blog"
        }
      ]
    };

    // WebPage schema with mainContentOfPage for enhanced AI discoverability
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://brightlaunchiq.com/resources/blog#webpage",
      "url": "https://brightlaunchiq.com/resources/blog",
      "name": "Learning Center | AI & Sales Insights | BrightLaunchIQ",
      "description": "Expert guides on AI lead generation, Answer Engine Optimization (AEO), and human-guided sales automation for local businesses.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://brightlaunchiq.com/#website",
        "name": "BrightLaunchIQ",
        "url": "https://brightlaunchiq.com"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://brightlaunchiq.com/favicon.ico"
      },
      "breadcrumb": {
        "@id": "https://brightlaunchiq.com/resources/blog#breadcrumb"
      },
      "mainContentOfPage": {
        "@type": "WebPageElement",
        "cssSelector": "#main-content",
        "description": "Educational articles and guides covering AI lead generation, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and sales automation strategies for local businesses."
      },
      "specialty": "AI Lead Generation and Sales Automation Education",
      "about": {
        "@type": "Thing",
        "name": "AI-Powered Business Growth",
        "description": "Educational content about leveraging artificial intelligence for lead generation, sales automation, and digital visibility optimization."
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small and Medium Business Owners",
        "geographicArea": {
          "@type": "Country",
          "name": "United States"
        }
      },
      "inLanguage": "en-US",
      "dateModified": "2026-01-20",
      "publisher": {
        "@type": "Organization",
        "@id": "https://brightlaunchiq.com/#organization",
        "name": "BrightLaunchIQ"
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".blog-intro"]
      }
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

    const webPageScript = document.createElement('script');
    webPageScript.type = 'application/ld+json';
    webPageScript.id = 'webpage-schema';
    webPageScript.textContent = JSON.stringify(webPageSchema);
    document.head.appendChild(webPageScript);

    return () => {
      const existingCollectionScript = document.getElementById('collection-page-schema');
      if (existingCollectionScript) {
        existingCollectionScript.remove();
      }
      const existingBreadcrumbScript = document.getElementById('breadcrumb-schema');
      if (existingBreadcrumbScript) {
        existingBreadcrumbScript.remove();
      }
      const existingWebPageScript = document.getElementById('webpage-schema');
      if (existingWebPageScript) {
        existingWebPageScript.remove();
      }
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

  // AI Voice Agent Series: The End of Missed Calls
  const voiceAgentSeries = [
    {
      title: "What is an AI Receptionist? (And Why Your Business Needs One)",
      excerpt: "If your phone rings and nobody answers, you just lost money. Learn how an AI receptionist can engage customers instantly.",
      slug: "what-is-ai-receptionist",
      author: "David Thompson",
      date: "February 6, 2026",
      readTime: "3 min read",
      category: "AI Voice Agent Series",
      part: 1,
    },
    {
      title: "How to Set Up an AI Voice Agent for Inbound Calls",
      excerpt: "You decided you want an AI to handle your phones. Here's the simple breakdown of how to get it running.",
      slug: "ai-voice-agent-setup-guide",
      author: "Marcus Reynolds",
      date: "February 5, 2026",
      readTime: "4 min read",
      category: "AI Voice Agent Series",
      part: 2,
    },
    {
      title: "Training Your AI: How to Teach Your Digital Receptionist",
      excerpt: "An AI voice agent is only as smart as you teach it. Learn how to build the knowledge base that powers your AI.",
      slug: "training-your-ai-voice-agent",
      author: "Dr. Sarah Chen",
      date: "February 4, 2026",
      readTime: "4 min read",
      category: "AI Voice Agent Series",
      part: 3,
    },
    {
      title: "Managing the Machine: Human Handoffs and Monitoring",
      excerpt: "The best systems are a mix of AI speed and human skill. Learn about human handoffs and monitoring.",
      slug: "managing-ai-human-handoffs",
      author: "David Thompson",
      date: "February 3, 2026",
      readTime: "3 min read",
      category: "AI Voice Agent Series",
      part: 4,
    },
    {
      title: "The Cost Comparison: AI Receptionist vs. Hiring a Human",
      excerpt: "Is an AI voice agent worth the money? Let's break down the numbers and compare the ROI.",
      slug: "ai-receptionist-cost-comparison",
      author: "Marcus Reynolds",
      date: "February 2, 2026",
      readTime: "4 min read",
      category: "AI Voice Agent Series",
      part: 5,
    },
    {
      title: "The Easy Button: Why You Need LeadLine™",
      excerpt: "AI voice agents are powerful—but setting them up is complicated. That's why we built LeadLine™.",
      slug: "why-you-need-leadline",
      author: "Marcus Reynolds",
      date: "February 1, 2026",
      readTime: "3 min read",
      category: "AI Voice Agent Series",
      part: 6,
    },
  ];

  // The Future of Being Found Series
  const seriesArticles = [
    {
      title: "The Shift: From Typing Keywords to Asking Questions",
      excerpt: "How AI is changing the way customers find local businesses. Discover why the old search rules no longer apply.",
      slug: "the-shift-from-typing-to-asking",
      author: "Elena Rodriguez",
      date: "January 14, 2026",
      readTime: "3 min read",
      category: "AEO Series",
      part: 1,
    },
    {
      title: "SEO vs. AEO: Why Being #1 Isn't Enough Anymore",
      excerpt: "You've heard of SEO, but there's a new player in town: AEO. Learn the difference and why you need both.",
      slug: "seo-vs-aeo-why-being-number-one-isnt-enough",
      author: "Elena Rodriguez",
      date: "January 13, 2026",
      readTime: "3 min read",
      category: "AEO Series",
      part: 2,
    },
    {
      title: "GEO: How to Speak \"Robot\" to AI Assistants",
      excerpt: "What about ChatGPT, Gemini, and Claude? Learn how to optimize for generative AI with GEO.",
      slug: "geo-how-to-speak-robot-to-ai-assistants",
      author: "Dr. Sarah Chen",
      date: "January 12, 2026",
      readTime: "3 min read",
      category: "AEO Series",
      part: 3,
    },
    {
      title: "Local Search: Why Google Maps is Your New Storefront",
      excerpt: "For local businesses, your Google Business Profile is critical. Learn why consistency is the key to AI visibility.",
      slug: "local-search-google-maps-is-your-new-storefront",
      author: "Marcus Reynolds",
      date: "January 11, 2026",
      readTime: "3 min read",
      category: "AEO Series",
      part: 4,
    },
    {
      title: "Reviews: The Fuel That Powers AI Recommendations",
      excerpt: "To AI, customer reviews aren't just feelings—they are data. Learn why recency matters and how to build social proof.",
      slug: "reviews-the-fuel-that-powers-ai-recommendations",
      author: "David Thompson",
      date: "January 10, 2026",
      readTime: "3 min read",
      category: "AEO Series",
      part: 5,
    },
    {
      title: "The Solution: How to Handle It All Without Losing Your Mind",
      excerpt: "SEO, AEO, GEO, local maps, reviews—it's a lot. Here's how LocalLift makes it simple so you can focus on your business.",
      slug: "the-solution-how-to-handle-it-all",
      author: "Marcus Reynolds",
      date: "January 9, 2026",
      readTime: "4 min read",
      category: "AEO Series",
      part: 6,
    },
  ];

  const articles = [
    {
      title: "How to Set Up an AI Receptionist for Your Small Business",
      excerpt: "Complete guide to setting up an AI receptionist or AI voice agent. No technical expertise required. Learn the 7-step process in 7-14 days.",
      slug: "how-to-set-up-ai-receptionist",
      author: "David Thompson",
      date: "February 7, 2026",
      readTime: "8 min read",
      category: "AI Receptionist",
    },
    {
      title: "AI Lead Generation: How It Works and Why It Matters for Small Business",
      excerpt: "AI lead generation uses artificial intelligence to identify, qualify, and engage potential customers automatically. Here's how small businesses can leverage this technology.",
      slug: "ai-lead-generation-guide",
      author: "Marcus Reynolds",
      date: "January 3, 2026",
      readTime: "6 min read",
      category: "AI Sales",
    },
    {
      title: "Human-Guided AI vs Fully Automated: Which is Right for Your Business?",
      excerpt: "Not all AI is created equal. Discover why human-in-the-loop AI delivers better results for customer-facing automation.",
      slug: "human-guided-ai-vs-automated",
      author: "David Thompson",
      date: "December 28, 2025",
      readTime: "5 min read",
      category: "Strategy",
    },
    {
      title: "The Speed to Lead Problem: Why 78% of Leads Are Lost",
      excerpt: "Research shows 50% of sales go to the first business that responds. Most businesses take 47 hours to respond. Here's how AI changes the game.",
      slug: "speed-to-lead-problem",
      author: "Marcus Reynolds",
      date: "December 20, 2025",
      readTime: "4 min read",
      category: "Sales",
    },
    {
      title: "How to Optimize Your Google Business Profile for AI Search",
      excerpt: "AI assistants pull information from Google Business Profiles. Make sure yours is optimized to get cited in AI-generated answers.",
      slug: "gbp-optimization-ai",
      author: "Elena Rodriguez",
      date: "December 15, 2025",
      readTime: "7 min read",
      category: "AEO",
    },
    {
      title: "CRM Integration Best Practices for AI Sales Automation",
      excerpt: "Seamless CRM integration is critical for AI sales success. Learn how to connect your existing tech stack with AI-powered lead generation.",
      slug: "crm-integration-ai",
      author: "David Thompson",
      date: "December 10, 2025",
      readTime: "6 min read",
      category: "Technology",
    },
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
                AI & Sales Insights
              </h1>
              <p className="blog-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guides on AI lead generation, Answer Engine Optimization, and human-guided sales automation for local businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Featured Article
              </span>
              <article className="bg-card rounded-2xl border border-border p-8 hover:shadow-card-hover transition-shadow">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                  {featuredArticle.category}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  <Link to={`/resources/blog/${featuredArticle.slug}`} className="hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {featuredArticle.author}, {featuredArticle.authorRole}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button variant="hero" asChild>
                  <Link to={`/resources/blog/${featuredArticle.slug}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </article>
            </div>
          </div>
        </section>

        {/* Featured Series: The End of Missed Calls */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-accent/30 to-transparent">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground">
                  New 6-Part Series
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                The End of Missed Calls
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                How AI Voice Agents Are Changing Small Business. Learn everything about AI receptionists—from setup to ROI.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {voiceAgentSeries.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/resources/blog/${article.slug}`}
                    className="group bg-card rounded-xl border border-border p-5 hover:shadow-card-hover hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {article.part}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Series: The Future of Being Found */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  6-Part Series
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                The Future of Being Found
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                How AI is changing the way customers find local businesses. A complete guide to navigating SEO, AEO, and GEO.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {seriesArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/resources/blog/${article.slug}`}
                    className="group bg-card rounded-xl border border-border p-5 hover:shadow-card-hover hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        {article.part}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {article.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <span>{article.author}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Latest Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="bg-background rounded-xl border border-border p-6 hover:shadow-card-hover transition-shadow"
                  >
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary/10 text-primary rounded mb-3">
                      {article.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      <Link to={`/resources/blog/${article.slug}`} className="hover:text-primary transition-colors">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to See AI in Action?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get a free AEO audit and discover how visible your business is to AI assistants.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/aeo-audit">
                  Get Your Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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