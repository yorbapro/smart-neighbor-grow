import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Bot
} from "lucide-react";

const LocalLift = () => {
  useEffect(() => {
    document.title = "LocalLift™ - Local Dominance & Answer Engine Optimization | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LocalLift™ puts your business at the top when people use voice search or Google Maps. Dominate map packs and AI answer engines with local SEO designed for small business.");
    }

    window.scrollTo(0, 0);

    // Structured data for product
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LocalLift™",
      "description": "Local Dominance System - Specialized package ensuring you own your local market and answer-engine results",
      "brand": {
        "@type": "Brand",
        "name": "BrightLaunchIQ"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const features = [
    {
      icon: Bot,
      title: "Answer Engine Optimization",
      description: "AI agents structure your website into Entity Graphs, making you the authoritative answer for 'best [service] near me' voice searches across all platforms."
    },
    {
      icon: Star,
      title: "Reputation Autopilot",
      description: "Autonomous monitoring and response across 100+ directories including Yelp, Google, and Bing ensures pristine online reputation."
    },
    {
      icon: MessageSquare,
      title: "Local Inbound Hub",
      description: "AI Voice agents handle 80% of routine inquiries and appointment scheduling 24/7, eliminating receptionist costs while improving response times."
    },
    {
      icon: MapPin,
      title: "Google Maps Domination",
      description: "Optimized business profiles, consistent NAP data, and strategic review management to own your local map pack."
    },
    {
      icon: Mic,
      title: "Voice Search Ready",
      description: "Structured content and FAQ optimization ensures your business is the spoken answer when customers use Siri, Alexa, or Google Assistant."
    },
    {
      icon: Globe,
      title: "AI Search Citations",
      description: "Be the source that ChatGPT, Gemini, and Perplexity cite when answering questions about your industry in your area."
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
    "Show up first in map packs so local customers find and trust your business",
    "Be the top answer when prospects ask AI about your services",
    "Dominate voice search with optimized content structure",
    "Automated reputation management across 100+ directories",
    "24/7 AI-powered customer inquiry handling",
    "Quarterly NAP verification ensures accuracy everywhere"
  ];

  const stats = [
    { value: "100+", label: "Directories Monitored" },
    { value: "80%", label: "Inquiries Auto-Handled" },
    { value: "24/7", label: "AI Availability" },
    { value: "#1", label: "Local Ranking Goal" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Search className="w-5 h-5" />
              <span className="font-semibold">Local Dominance System</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              LocalLift™
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Dominate Maps & AI Search
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Be the first answer when customers search. LocalLift™ puts your business at the top of Google Maps, voice search, and AI answer engines.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Own Your Local Market
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:1-800-LAUNCH-IQ">
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
              LocalLift™ optimizes your presence across all major search platforms and AI answer engines.
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

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Local Dominance
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to become the go-to business in your local market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item) => (
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

      {/* The Problem We Solve */}
      <section className="py-20 md:py-28">
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
                In 2026, customers don't just Google—they ask AI. They use voice search. They trust map pack rankings. If you're not optimized for the new era of search, you're invisible.
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
                The LocalLift™ Advantage
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-foreground/90">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How AEO Works */}
      <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Answer Engine Optimization
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How We Make You the Answer
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Our proprietary AEO methodology ensures AI systems cite your business as the authority.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Entity Graph Building",
                description: "We structure your website data so AI systems understand exactly what you do, where, and why you're the best."
              },
              {
                step: "2",
                title: "Knowledge Base Optimization",
                description: "Your business information is syndicated across platforms AI systems trust as authoritative sources."
              },
              {
                step: "3",
                title: "Continuous Citation Building",
                description: "Ongoing efforts ensure AI models consistently reference your business in relevant local queries."
              }
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl bg-card/10 backdrop-blur border border-primary/20">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary-foreground/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Local Trust Built-In</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Neighbors Trust You. Now AI Does Too.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              LocalLift™ doesn't just optimize for algorithms—it builds genuine local authority. When AI systems recommend you, it's because you've earned it.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: Star,
                  title: "Reputation Management",
                  description: "Automated monitoring and response keeps your star ratings high across all platforms."
                },
                {
                  icon: Clock,
                  title: "Always Available",
                  description: "AI voice agents handle inquiries 24/7, so you never miss a customer."
                },
                {
                  icon: MapPin,
                  title: "NAP Consistency",
                  description: "Your business info is accurate everywhere, building trust with search engines."
                }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-card border border-border">
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Dominate Your Local Market?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stop losing customers to competitors who show up first. LocalLift™ puts you at the top of every search that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Start LocalLift™ Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products/iq-flow">See IQ Flow™</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalLift;
