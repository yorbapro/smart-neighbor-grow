import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Check, 
  ArrowRight, 
  MapPin, 
  Mic, 
  Star,
  Phone,
  Globe,
  MessageSquare,
  Shield,
  Clock,
  TrendingUp,
  Bot,
  Users,
  Heart
} from "lucide-react";

const LocalLift = () => {
  useEffect(() => {
    document.title = "LocalLift™ - Human-Guided Content & Answer Engine Optimization | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LocalLift™ combines expert content creation with Answer Engine Optimization (AEO). Be the answer when customers ask AI for local recommendations. Human-guided strategies for Gemini, ChatGPT, Perplexity, and voice search.");
    }

    window.scrollTo(0, 0);

    // Remove existing schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Product Schema
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LocalLift™",
      "description": "Expert content creation and Answer Engine Optimization (AEO) for local businesses. Be cited by ChatGPT, Gemini, Perplexity, and voice assistants as the local authority.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "category": "Content Marketing & SEO Services",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "32",
        "bestRating": "5"
      }
    });
    document.head.appendChild(productScript);

    // Service Schema for GEO
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.id = "service-schema";
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Answer Engine Optimization (AEO)",
      "serviceType": "SEO & Content Marketing",
      "provider": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "description": "Answer Engine Optimization (AEO) makes your business the direct answer when people ask AI tools like ChatGPT, Gemini, Perplexity, or voice assistants for local recommendations. Human experts craft content designed for AI citation.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "LocalLift™ Features",
        "itemListElement": [
          { "@type": "Service", "name": "Custom Website Content" },
          { "@type": "Service", "name": "SEO-Optimized Copywriting" },
          { "@type": "Service", "name": "Answer Engine Optimization" },
          { "@type": "Service", "name": "Voice Search Optimization" },
          { "@type": "Service", "name": "Google Maps Ranking" },
          { "@type": "Service", "name": "AI Citation Building" }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    // FAQ Schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Answer Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Answer Engine Optimization (AEO) is the practice of optimizing your business to be cited as the direct answer when people use AI tools like ChatGPT, Gemini, Perplexity, or voice assistants. Unlike traditional SEO focused on Google rankings, AEO positions your business as the authoritative answer across all AI-powered search platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How is AEO different from traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional SEO focuses on ranking in Google's search results. AEO focuses on being cited as the direct answer by AI assistants. SEO drives clicks to your website; AEO establishes your authority so AI tools recommend your business by name when asked relevant questions."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms does LocalLift optimize for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LocalLift™ optimizes your presence across all major AI platforms including ChatGPT, Google Gemini, Perplexity, Siri, Alexa, Google Assistant, and emerging AI search tools. We use structured data and Entity Graph building to ensure AI systems recognize you as the local authority."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      ['product-schema', 'service-schema', 'faq-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  const contentFeatures = [
    {
      icon: Bot,
      title: "Custom Website Content",
      description: "Expert writers craft tailored content that resonates with your audience and captures your brand essence—not generic AI-generated fluff."
    },
    {
      icon: Star,
      title: "SEO-Optimized Copywriting",
      description: "Enhance visibility with expertly written content that boosts your search engine rankings and drives organic traffic."
    },
    {
      icon: MessageSquare,
      title: "Engaging Blog Posts",
      description: "Capture attention and drive traffic with compelling, informative content that positions you as an industry authority."
    }
  ];

  const aeoFeatures = [
    {
      icon: Search,
      title: "Answer Engine Optimization",
      description: "Dominate AI search results. We optimize your business for Gemini, ChatGPT, Perplexity, and voice search so you're the top answer."
    },
    {
      icon: Mic,
      title: "Voice Search Optimization",
      description: "Structured content and FAQ optimization ensures your business is the spoken answer when customers use Siri, Alexa, or Google Assistant."
    },
    {
      icon: MapPin,
      title: "Google Maps Ranking Boost",
      description: "Optimized business profiles, consistent NAP data, and strategic review management to own your local map pack."
    },
    {
      icon: Globe,
      title: "AI Answer Engine Citations",
      description: "Be the source that ChatGPT, Gemini, and Perplexity cite when answering questions about your industry in your area."
    },
    {
      icon: TrendingUp,
      title: "Local Expert Positioning",
      description: "Build your Entity Graph so AI systems recognize you as THE local authority in your industry and service area."
    },
    {
      icon: Shield,
      title: "AEO-Optimized Content Strategy",
      description: "Continuous content creation designed for AI discoverability—structured data, semantic markup, and citation-worthy expertise."
    }
  ];

  const aiEngines = [
    { name: "Google", description: "Maps & Voice" },
    { name: "ChatGPT", description: "AI Search" },
    { name: "Gemini", description: "Google AI" },
    { name: "Perplexity", description: "Answer Engine" },
    { name: "Siri", description: "Voice Assistant" },
    { name: "Alexa", description: "Smart Speakers" }
  ];

  const benefits = [
    "Human experts craft every piece of content",
    "AI-optimized structure for citation and discovery",
    "Dominate voice search with optimized content",
    "Reputation management across 100+ directories",
    "Quarterly performance reviews with your team",
    "NAP verification ensures accuracy everywhere"
  ];

  const stats = [
    { value: "100+", label: "Directories Monitored" },
    { value: "6+", label: "AI Engines Covered" },
    { value: "#1", label: "Local Ranking Goal" },
    { value: "24/7", label: "AI Visibility" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Search className="w-5 h-5" />
              <span className="font-semibold">Human-Guided Content & AEO</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Be the Answer AI Recommends
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Expert Content + Answer Engine Optimization
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              When customers ask ChatGPT, Gemini, or Perplexity for local recommendations, will they mention your business? Our human experts craft content designed to make you the answer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/aeo-audit">
                  Free AI Visibility Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" />
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human-Guided Approach */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                The Human Touch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Real Experts, Real Content, Real Results
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Unlike generic AI content mills, our human experts craft every piece of content. We understand your business, your market, and what makes you unique—then create content that AI systems trust and cite.
              </p>
              <ul className="space-y-4">
                {[
                  "Human writers who understand your industry",
                  "Strategic content designed for AI citation",
                  "Your brand voice, amplified—not replaced",
                  "Expert oversight on every deliverable",
                  "Quarterly strategy sessions with your team"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl font-bold">Made for Local Business</h3>
              </div>
              <p className="text-secondary-foreground/80 mb-6">
                Our local focus means smarter content and faster growth. We understand your unique needs because we work in the same communities you serve.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-foreground/90 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engines Coverage */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Platform Coverage
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Be the Answer Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              LocalLift™ optimizes your presence across all major search platforms and AI answer engines—so wherever customers ask, you're the recommendation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiEngines.map((engine) => (
              <div key={engine.name} className="p-6 rounded-2xl bg-card border border-border text-center hover:shadow-card-hover transition-shadow">
                <div className="font-display text-xl font-bold text-foreground mb-1">
                  {engine.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {engine.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Features Grid */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Expert Content Creation
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stellar Content, Human-Crafted
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in crafting compelling website content that captures the essence of your brand—created by real writers who understand your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentFeatures.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO Features Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Answer Engine Optimization
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dominate AI Search Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Be the answer when prospects ask AI about your services. Our human experts build content strategies designed for AI discoverability and citation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aeoFeatures.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                The Challenge
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Search Has Changed. Has Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In 2026, customers don't just Google—they ask AI. They use voice search. They trust AI recommendations. If you're not optimized for the new era of search, you're invisible.
              </p>
              
              <ul className="space-y-4">
                {[
                  "46% of Google searches have local intent",
                  "Voice search queries have tripled since 2023",
                  "AI answer engines are replacing traditional search",
                  "The top 3 map pack results get 75% of clicks",
                  "Customers trust AI-recommended businesses more"
                ].map((stat) => (
                  <li key={stat} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-secondary text-secondary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">
                How AEO Works
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Entity Graph Building",
                    description: "We structure your data so AI systems understand exactly what you do, where, and why you're the best."
                  },
                  {
                    step: "2",
                    title: "Knowledge Base Optimization",
                    description: "Your information is syndicated across platforms AI systems trust as authoritative sources."
                  },
                  {
                    step: "3",
                    title: "Continuous Citation Building",
                    description: "Ongoing efforts ensure AI models consistently reference your business in relevant queries."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-secondary-foreground/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Featured Testimonial */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center mb-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-foreground font-medium mb-6 leading-relaxed">
                "BrightLaunchIQ transformed our online presence. Their human experts understood our business in a way no AI tool could. Now when customers ask ChatGPT about our industry, we're the recommendation."
              </blockquote>
              <cite className="text-muted-foreground not-italic">
                <span className="font-semibold text-foreground">Alex Reed</span>
                <span className="mx-2">•</span>
                Small Business Owner, Sacramento
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Discover Your AI Visibility Score
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free audit showing how your business appears to AI search engines. See what customers find when they ask about your services.
          </p>

          <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/aeo-audit">
              Get Your Free AI Visibility Audit
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalLift;
