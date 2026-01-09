import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const Blog = () => {
  useSEO({
    title: "AI Lead Generation Blog | BrightLaunchIQ Resources",
    description: "Expert insights on AI lead generation, Answer Engine Optimization (AEO), and sales automation for local businesses. Learn how human-guided AI can grow your business.",
    canonical: "https://brightlaunchiq.com/resources/blog",
    keywords: "AI lead generation blog, AEO tips, AI sales automation articles, small business AI guides",
    speakable: ["h1", ".blog-intro"],
  });

  const featuredArticle = {
    title: "What is Answer Engine Optimization (AEO)? The Complete Guide for 2026",
    excerpt: "Answer Engine Optimization is transforming how businesses get discovered online. Learn how to optimize your content for AI assistants like ChatGPT, Gemini, and Perplexity.",
    slug: "what-is-aeo",
    author: "Dr. Sarah Chen",
    authorRole: "Chief AI Officer",
    date: "January 5, 2026",
    readTime: "8 min read",
    category: "AEO",
  };

  const articles = [
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