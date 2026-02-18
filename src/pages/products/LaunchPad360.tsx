import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Rocket, Check, ArrowRight, Zap, Users, Target, Phone, MessageSquare, Linkedin, Mail, BarChart3, Brain, Bell, LineChart } from "lucide-react";


const LaunchPad360 = () => {
  useEffect(() => {
    document.title = "LaunchPad 360™ - Complete AI Revenue System | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "LaunchPad 360™ is the complete AI revenue infrastructure. Inbound automation, outbound sales engine, SEO, funnels, and CRM automation integrated into one system.");
    }

    window.scrollTo(0, 0);

    // Schema
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LaunchPad 360™",
      "description": "Complete AI revenue infrastructure with inbound automation, outbound sales, SEO, funnels, and CRM integration.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      }
    });
    document.head.appendChild(productScript);

    return () => {
      const el = document.getElementById("product-schema");
      if (el) el.remove();
    };
  }, []);

  const systemComponents = [
    {
      icon: Phone,
      title: "AI Inbound System",
      description: "24/7 call answering, lead qualification, and appointment booking. Your AI receptionist never sleeps.",
      features: ["24/7 Call Answering", "Lead Qualification", "Appointment Booking", "CRM Integration"]
    },
    {
      icon: MessageSquare,
      title: "AI Outbound System",
      description: "Automated follow-up, reactivation campaigns, and sales conversations that convert.",
      features: ["Follow-Up Automation", "Reactivation Campaigns", "Sales Conversation AI", "Revenue Tracking"]
    },
    {
      icon: Zap,
      title: "Answer Engine Optimization (AEO)",
      description: "Dominate AI search results across ChatGPT, Gemini, Claude, and other answer engines. Get found where prospects search today.",
      features: ["AI Search Engine Dominance", "Answer Engine Optimization", "Multi-Engine Visibility", "Authority Building"]
    },
    {
      icon: LineChart,
      title: "Conversion & Automation",
      description: "High-converting website, funnel architecture, and complete automation infrastructure.",
      features: ["Conversion-Optimized Site", "Funnel Architecture", "Automation Workflows", "Revenue Dashboards"]
    }
  ];

  const positioning = [
    { old: "Receptionist", new: "AI Receptionist" },
    { old: "SDR", new: "AI Sales Agent" },
    { old: "SEO Agency", new: "SEO Authority" },
    { old: "Web Team", new: "Conversion System" },
    { old: "CRM Consultant", new: "Automation" }
  ];

  const metrics = [
    { value: "1", label: "Integrated System", suffix: "" },
    { value: "4", label: "Core Components", suffix: "" },
    { value: "30", label: "Days to Implementation", suffix: "" },
    { value: "∞", label: "Scalability", suffix: "" }
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
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">Flagship System</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              One System to Capture, Convert, and Compound Revenue
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Inbound. Outbound. SEO. Funnels. Automation. All integrated.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              LaunchPad 360™ is the complete AI-powered growth infrastructure. Instead of hiring fragmented teams, you install one intelligent system that handles everything: capturing leads, converting customers, and compounding revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Apply for LaunchPad 360
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" />
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-secondary-foreground/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Growth Fails When Systems Don't Connect
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Marketing brings leads. Phones ring. CRMs fill up. But without infrastructure:
            </p>

            <ul className="space-y-4 mb-12">
              {[
                "Calls go unanswered",
                "Leads sit untouched",
                "Follow-ups stall",
                "Revenue leaks"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0"></div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-semibold text-foreground">
              LaunchPad 360 installs the missing system.
            </p>
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything Your Growth Engine Needs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {systemComponents.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Replace Chaos With Infrastructure
            </h2>
            
            <div className="space-y-4">
              {positioning.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Instead of hiring:</span>
                    <span className="font-semibold text-foreground">{item.old}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">{item.new}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 text-center">
              <p className="text-lg text-foreground font-semibold">
                You install one integrated system instead of juggling 5+ vendors, hiring 3+ staff members, and managing disconnected tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Custom-Built for Your Business
            </h2>
            <p className="text-lg text-background/80 mb-8">
              Every LaunchPad 360™ deployment is tailored to your business scale, industry, and growth goals. Talk to our team to build your custom plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Apply for LaunchPad 360
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" />
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              This Is Not for Everyone
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">
              LaunchPad 360 is built for businesses ready to scale with infrastructure — not experiments.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Multi-Location Businesses",
                  desc: "Scale across multiple locations with unified systems and reporting."
                },
                {
                  icon: Users,
                  title: "Growing Service Providers",
                  desc: "Contractors, agencies, and professional services scaling revenue."
                },
                {
                  icon: Zap,
                  title: "Operators Tired of Chaos",
                  desc: "Ready to replace disconnected tools with one integrated system."
                },
                {
                  icon: BarChart3,
                  title: "Revenue-Focused Leaders",
                  desc: "Decision-makers who measure success by bookings, pipeline, and revenue."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Ready to Build Infrastructure?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              LaunchPad 360 isn't a software subscription. It's a complete revenue system with expert guidance, 30-day implementation, and ongoing optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Apply for LaunchPad 360
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" />
                  Talk to an Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaunchPad360;
