import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import DailyTeammateMath from "@/components/DailyTeammateMath";
import ImplementationRoadmap from "@/components/ImplementationRoadmap";
import RevenueReadinessCTA from "@/components/RevenueReadinessCTA";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  ArrowRight, 
  Rocket, 
  Brain, 
  Search,
  Phone,
  Users,
  Clock,
  DollarSign,
  Calculator,
  Zap,
  Shield
} from "lucide-react";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing - AI Sales Automation for Small Business | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transparent pricing for AI-powered sales automation. LocalLift™ at $299/mo, LeadLine™ at $399/mo, LaunchPad 360™ at $500/mo. Get a 24/7 digital teammate for under $17/day.");
    }

    // Add keywords meta
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "AI sales pricing, AI lead generation cost, sales automation pricing, LaunchPad 360 pricing, LocalLift pricing, AI SDR cost, small business AI pricing";
    if (existingKeywords) {
      existingKeywords.setAttribute("content", keywordsContent);
    } else {
      const keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      keywordsMeta.content = keywordsContent;
      document.head.appendChild(keywordsMeta);
    }

    // PriceSpecification Schema for GEO
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    const pricingSchema = document.createElement("script");
    pricingSchema.type = "application/ld+json";
    pricingSchema.id = "pricing-schema";
    pricingSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BrightLaunchIQ Pricing",
      "description": "Transparent pricing for AI-powered sales automation. Compare costs of human SDR vs AI teammate.",
      "url": "https://brightlaunchiq.com/pricing",
      "mainEntity": {
        "@type": "ItemList",
        "name": "AI Sales Automation Products",
        "itemListElement": [
          {
            "@type": "Product",
            "position": 1,
            "name": "LocalLift™",
            "description": "Answer Engine Optimization and local visibility for small businesses.",
            "offers": {
              "@type": "Offer",
              "price": "299",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "299",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            }
          },
          {
            "@type": "Product",
            "position": 2,
            "name": "LeadLine™",
            "description": "AI-powered voice assistant for 24/7 call answering and lead qualification.",
            "offers": {
              "@type": "Offer",
              "price": "399",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "399",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            }
          },
          {
            "@type": "Product",
            "position": 3,
            "name": "LaunchPad 360™",
            "description": "Complete AI sales engine with human oversight, multi-channel outreach, and 60-second lead response.",
            "offers": {
              "@type": "Offer",
              "price": "500",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "500",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            }
          },
          {
            "@type": "Product",
            "position": 4,
            "name": "OmniLogic™",
            "description": "Custom enterprise AI workflows and business automation solutions."
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".text-gradient"]
      }
    });
    document.head.appendChild(pricingSchema);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("pricing-schema");
      if (el) el.remove();
    };
  }, []);

  const products = [
    {
      icon: Search,
      name: "LocalLift™",
      tagline: "The Foundation",
      description: "Visibility & Being Found. Custom website, AEO, and local dominance to ensure you're discovered first.",
      setup: "$1,500",
      monthly: "$299",
      dailyCost: "$9.97",
      deployment: "14-Day Deployment",
      features: [
        "Custom website",
        "Answer Engine Optimization (AEO)",
        "Google Maps & Voice Search dominance",
        "Reputation Management",
      ],
      highlighted: false,
      cta: "Get Found",
      slug: "locallift",
      isCustom: false
    },
    {
      icon: Phone,
      name: "LeadLine™",
      tagline: "Instant Response",
      description: "24/7 AI voice assistant that answers calls, qualifies leads, and books appointments automatically.",
      setup: "$1,500",
      monthly: "$399",
      dailyCost: "$13.30",
      deployment: "14-Day Deployment",
      features: [
        "24/7 AI call answering",
        "Lead qualification & scoring",
        "Real-time appointment booking",
        "Call transcription & analytics",
      ],
      highlighted: false,
      cta: "Never Miss a Lead",
      slug: "leadline",
      isCustom: false,
      hasDemo: true,
      demoUrl: "https://agent.retellai.com/preview/agent_19d43cf736300711221e30a6b0"
    },
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      tagline: "The Growth Engine",
      description: "Increase Revenue, Lead Generation & Booking Meetings. Everything in LocalLift™ plus automated sales.",
      setup: "$1,500",
      monthly: "$500",
      dailyCost: "$16.60",
      deployment: "30-Day Deployment",
      includesText: "Includes everything in LocalLift™ plus...",
      features: [
        "60s Speed-to-Lead Guarantee",
        "AI Lead Generation",
        "Automated Meeting Booking",
        "Human-in-the-Loop Triage",
      ],
      highlighted: true,
      cta: "Start Growing",
      slug: "launchpad-360",
      isCustom: false
    },
    {
      icon: Brain,
      name: "OmniLogic™",
      tagline: "The Custom Solution",
      description: "Total Business Automation. Fully customized AI solutions tailored to your unique business processes.",
      setup: "Starts at $5,000",
      deployment: "Custom Timeline",
      features: [
        "Custom Business Intelligence",
        "Operations/HR/Inventory Automation",
        "Custom Cognitive Architecture",
        "Dedicated success manager",
        "Priority support SLA",
      ],
      highlighted: false,
      cta: "Contact Us",
      slug: "custom-ai-workflows",
      isCustom: true
    }
  ];

  const comparisonItems = [
    { feature: "Annual cost", human: "$80,000+", ai: "$7,500" },
    { feature: "Daily cost", human: "$308/day", ai: "$16.60/day" },
    { feature: "Hours available", human: "40 hrs/week", ai: "168 hrs/week" },
    { feature: "Response time", human: "Hours to days", ai: "Under 60 seconds" },
    { feature: "Sick days", human: "Yes", ai: "Never" },
    { feature: "Training required", human: "3-6 months", ai: "30 days" },
    { feature: "Scalability", human: "Limited", ai: "Unlimited" },
    { feature: "Consistency", human: "Variable", ai: "100%" }
  ];

  const valueProps = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI teammate never sleeps, ensuring you never miss a lead—even at 3 AM."
    },
    {
      icon: Zap,
      title: "60-Second Response",
      description: "50% of sales go to the first responder. Our AI answers in under 60 seconds."
    },
    {
      icon: Users,
      title: "Human Oversight",
      description: "Every AI action is guided by human experts who ensure quality and brand consistency."
    },
    {
      icon: Shield,
      title: "ROI Guaranteed",
      description: "We focus on tools that grow revenue or save time. Your results matter most."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content">
        <div className="container pt-24">
          <Breadcrumb />
        </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Simple, Transparent Pricing
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              A Digital Teammate for<br />
              <span className="text-gradient">Under $17/Day</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Skip the $80k/year hire. Get enterprise-grade AI sales automation at a fraction of the cost—with human expert oversight included.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground">
              <Calculator className="w-5 h-5 text-primary" />
              <span className="font-semibold">The Math: $500/mo ÷ 30 days = $16.60/day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28">
        <div className="container">
          {/* Intro Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Choose Your Path to Growth
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Packages Built for Your Goals
            </h2>
            <p className="text-lg text-muted-foreground">
              From local visibility to complete business automation—find the right solution for where you are today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product) => (
              <div
                key={product.name}
                className={`relative rounded-2xl p-6 transition-all duration-300 ${
                  product.highlighted
                    ? "bg-secondary text-secondary-foreground shadow-card-hover scale-[1.02] lg:scale-[1.03]"
                    : "bg-card border border-border hover:shadow-card-hover"
                }`}
              >

                {/* Icon & Name */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  product.highlighted ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <product.icon className="w-6 h-6 text-primary" />
                </div>

                <h2 className="font-display text-xl font-bold mb-1">
                  {product.name}
                </h2>
                <p className="text-sm font-medium text-primary mb-3">
                  {product.tagline}
                </p>
                <p className={`text-sm mb-4 ${
                  product.highlighted ? "text-secondary-foreground/80" : "text-muted-foreground"
                }`}>
                  {product.description}
                </p>

                {/* Pricing */}
                {product.isCustom ? (
                  <div className="mb-4 pb-4 border-b border-primary/20">
                    <div className="font-display text-2xl font-bold mb-1">
                      Custom
                    </div>
                    <p className="text-xs opacity-70">
                      Tailored for your needs
                    </p>
                  </div>
                ) : (
                  <div className="mb-4 pb-4 border-b border-primary/20">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="font-display text-2xl font-bold">{product.setup}</span>
                      <span className="text-xs opacity-70">setup</span>
                    </div>
                    <p className="text-xs opacity-70 mb-2">
                      then <span className="font-semibold">{product.monthly}/mo</span>
                    </p>
                    <div className="flex items-center gap-1 text-primary">
                      <DollarSign className="w-3 h-3" />
                      <span className="text-xs font-semibold">
                        {product.dailyCost}/day
                      </span>
                    </div>
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        product.highlighted ? "text-primary" : "text-accent"
                      }`} />
                      <span className={`text-xs ${
                        product.highlighted ? "text-secondary-foreground/90" : "text-muted-foreground"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={product.highlighted ? "hero" : "outline"}
                  className="w-full mb-2"
                  size="sm"
                  asChild
                >
                  <Link to={product.isCustom ? "/contact" : `/products/${product.slug}`}>
                    {product.isCustom ? "Contact Us" : "Learn More"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                {/* Demo Button for LeadLine */}
                {product.hasDemo && product.demoUrl && (
                  <a
                    href={product.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-accent text-accent-foreground font-semibold text-xs transition-all duration-300 hover:bg-accent/90"
                  >
                    <Phone className="w-3 h-3" />
                    Live Demo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No-Regret Onboarding Guarantee */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-accent/5 border-2 border-primary/20 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our "No-Regret" Onboarding Guarantee
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We are so confident that our human-guided onboarding will set you up for success that we offer a <span className="font-bold text-foreground">100% money-back guarantee on your setup fee</span>. If you're not live and capturing leads within 14 days, we'll refund the fee in full. We take on the risk, so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Teammate Math */}
      <DailyTeammateMath />

      {/* Implementation Roadmap */}
      <ImplementationRoadmap />

      {/* Revenue Readiness CTA */}
      <RevenueReadinessCTA />

      {/* Comparison Table */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              The Math of Success
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Human Hire vs. AI Teammate
            </h2>
            <p className="text-lg text-muted-foreground">
              See why smart local businesses choose BrightLaunchIQ over traditional hires.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-card">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-secondary text-secondary-foreground">
                <div className="p-4 font-semibold">Feature</div>
                <div className="p-4 font-semibold text-center border-l border-primary/20">Human SDR</div>
                <div className="p-4 font-semibold text-center border-l border-primary/20 bg-primary/10">
                  <span className="flex items-center justify-center gap-2">
                    <Rocket className="w-4 h-4 text-primary" />
                    LaunchPad 360™
                  </span>
                </div>
              </div>

              {/* Table Body */}
              {comparisonItems.map((item, index) => (
                <div 
                  key={item.feature} 
                  className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-muted/30" : "bg-card"}`}
                >
                  <div className="p-4 font-medium text-foreground">{item.feature}</div>
                  <div className="p-4 text-center text-muted-foreground border-l border-border">
                    {item.human}
                  </div>
                  <div className="p-4 text-center font-semibold text-primary border-l border-border bg-primary/5">
                    {item.ai}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              * Based on average SDR salary of $60,000 + benefits, training, and overhead costs
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Why BrightLaunchIQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Human-Guided AI That Delivers
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe small business owners deserve world-class sales automation without sacrificing what makes their company special.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop) => (
              <div key={prop.title} className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <prop.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Common Questions
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">How long does it take to see results?</p>
                    <p className="text-secondary-foreground/80 text-sm">
                      Most clients see measurable improvements within the first 30 days. LaunchPad 360™ gets your entire GTM system operational in just one month.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Do I need to be tech-savvy?</p>
                    <p className="text-secondary-foreground/80 text-sm">
                      Not at all. We handle all technical setup and management. You focus on running your business and serving customers.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-1">Is my customer data safe?</p>
                    <p className="text-secondary-foreground/80 text-sm">
                      Yes. We prioritize Responsible AI with Privacy by Design, ensuring your data is secure, compliant, and never shared.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">What if I want to cancel?</p>
                    <p className="text-secondary-foreground/80 text-sm">
                      No long-term contracts. Cancel anytime with 30 days notice. Your data and leads remain yours.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="mt-6 border-primary/30 text-secondary-foreground hover:bg-primary/10" asChild>
                  <Link to="/#faq">
                    View All FAQs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Your Digital Teammate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free 15-minute revenue audit. Our human experts will review your sales process and show exactly where AI can help you win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Schedule Your Revenue Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" />
                  1-877-879-5552
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, ever. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
