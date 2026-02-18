import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Rocket, Cog, ArrowRight, Sparkles, Phone } from "lucide-react";

const FeaturedSolutions = () => {
  const solutions = [
    {
      icon: Search,
      name: "LocalLift™",
      tagline: "Get Found First",
      description: "Dominate AI search, voice assistants, and Google Maps.",
      price: "Contact Us",
      slug: "locallift",
    },
    {
      icon: Phone,
      name: "LeadLine™",
      tagline: "AI Receptionist & Voice Agent",
      description: "24/7 AI receptionist that answers calls, qualifies leads, and books appointments.",
      price: "From $497/mo",
      slug: "leadline",
      hasDemo: true,
      demoUrl: "https://agent.retellai.com/preview/agent_19d43cf736300711221e30a6b0",
    },
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      tagline: "Grow Revenue",
      description: "AI lead generation with 60-second response guarantee.",
      price: "Contact Us",
      slug: "launchpad-360",
      featured: true,
    },
    {
      icon: Cog,
      name: "OmniLogic™",
      tagline: "Scale Everything",
      description: "Custom AI workflows for complete business automation.",
      price: "Contact Us",
      slug: "custom-ai-workflows",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Solutions for Every Stage
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Choose Your Path to Growth
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            From local visibility to complete business automation—find the right solution for where you are today.
          </p>
        </div>

        {/* Solution Cards - Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {solutions.map((solution) => (
            <div
              key={solution.name}
              className={`group relative rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] ${
                solution.featured
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30"
                  : "bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30"
              }`}
            >
              {solution.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                solution.featured ? "bg-primary/20" : "bg-primary/10"
              }`}>
                <solution.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-xl font-bold text-secondary-foreground mb-1">
                {solution.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-2">
                {solution.tagline}
              </p>
              <p className="text-sm text-secondary-foreground/60 mb-4">
                {solution.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-lg font-bold text-secondary-foreground">
                  {solution.price}
                </span>
                <Link 
                  to={`/products/${solution.slug}`}
                  className="text-primary group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Live Demo Button for LeadLine™ */}
              {solution.hasDemo && solution.demoUrl && (
                <a
                  href={solution.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-accent text-accent-foreground font-semibold text-sm transition-all duration-300 hover:bg-accent/90 shadow-button-accent hover:shadow-glow-accent"
                >
                  <Phone className="w-4 h-4" />
                  Talk to Our AI Receptionist
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="hero" 
            size="lg" 
            asChild
          >
            <Link to="/pricing">
              View All Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          
          {/* Electric Green Audit Button */}
          <Button 
            size="lg" 
            asChild
            className="bg-audit hover:bg-audit/90 text-audit-foreground shadow-button-audit hover:shadow-glow-audit transition-all duration-300"
          >
            <Link to="/aeo-audit">
              <Sparkles className="mr-2 w-5 h-5" />
              Free AI Visibility Audit
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 text-center">
          <p className="text-sm text-secondary-foreground/50 mb-4">Trusted by businesses in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Legal", "HVAC & Solar", "Contractors", "Logistics", "Professional Services"].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full bg-secondary-foreground/5 border border-secondary-foreground/10 text-sm text-secondary-foreground/70"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
