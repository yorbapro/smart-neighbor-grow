import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ArrowRight,
  Check,
  Cog,
  Database,
  Shield,
  Headphones,
  Building2,
  Workflow,
  LineChart,
  Phone
} from "lucide-react";

const CustomAIWorkflows = () => {
  useEffect(() => {
    document.title = "OmniLogic™ - Custom AI Workflow Automation | BrightLaunchIQ";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "OmniLogic™ delivers fully customized AI automation solutions tailored to your unique business processes. Professional-grade workflows with dedicated support and custom integrations."
      );
    }

    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: Workflow,
      title: "Custom Workflow Design",
      description: "We architect AI workflows specific to your business processes, from lead nurturing to customer retention."
    },
    {
      icon: Database,
      title: "Multi-System Integration",
      description: "Connect your CRM, ERP, marketing tools, and custom databases into a unified automation ecosystem."
    },
    {
      icon: LineChart,
      title: "Advanced Analytics",
      description: "Custom dashboards and reporting tailored to your KPIs and business intelligence needs."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "On-premise deployment options, SSO integration, and compliance with industry regulations."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority SLA with a dedicated success manager who understands your business inside and out."
    },
    {
      icon: Building2,
      title: "White-Label Solutions",
      description: "Branded AI solutions for agencies and enterprises that want to offer AI services under their own name."
    }
  ];

  const useCases = [
    "Multi-location franchise operations",
    "Complex B2B sales cycles",
    "Healthcare & HIPAA-compliant workflows",
    "Financial services automation",
    "Manufacturing & supply chain",
    "Real estate portfolio management",
    "Legal document processing",
    "Custom API-driven integrations"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We deep-dive into your business processes, pain points, and automation goals."
    },
    {
      step: "02",
      title: "Solution Architecture",
      description: "Our team designs a custom AI workflow blueprint tailored to your specific needs."
    },
    {
      step: "03",
      title: "Pilot Implementation",
      description: "We build and deploy a proof-of-concept to validate the solution in your environment."
    },
    {
      step: "04",
      title: "Scale & Optimize",
      description: "Full rollout with ongoing optimization and dedicated support."
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
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Brain className="w-4 h-4" />
                <span className="text-sm font-semibold">Enterprise Solutions</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="text-gradient">OmniLogic™</span><br />
                Custom AI Workflow Automation
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                When off-the-shelf solutions aren't enough. We build bespoke AI automation 
                systems that transform how your entire business operates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
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
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Enterprise Capabilities
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built for Complex Business Needs
              </h2>
              <p className="text-lg text-muted-foreground">
                Our custom solutions go beyond standard automation to address your unique challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <capability.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                  Industry Applications
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Tailored Solutions for Every Industry
                </h2>
                <p className="text-secondary-foreground/80 mb-8">
                  Whether you're managing multi-location operations, navigating complex compliance 
                  requirements, or integrating legacy systems, we've got you covered.
                </p>
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-secondary-foreground/90">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Our Process
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                From Concept to Production
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology for delivering custom AI solutions that actually work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.step} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 shadow-button">
                      <span className="text-white font-display font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Cog className="w-4 h-4" />
                <span className="text-sm font-semibold">Custom Pricing</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Build Something Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every business is unique. Contact us to discuss your specific requirements 
                and get a customized proposal tailored to your needs and budget.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request a Custom Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:1-877-879-5552">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Us Directly
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Typical enterprise projects start at $5,000/month. No long-term contracts required.
              </p>
            </div>
          </div>
        </section>
      </main>

      <TrustBadges />
      <Footer />
    </div>
  );
};

export default CustomAIWorkflows;
