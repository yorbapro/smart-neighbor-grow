import { Button } from "@/components/ui/button";
import { Rocket, Brain, Search, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      tagline: "Your 30-Day Customer Growth Strategy",
      description: "We set up your entire New Business Launch Plan in just 30 days. Our human experts build the system that finds your ideal customers and starts the conversation for you.",
      features: [
        "AI Researcher identifies your ideal customers",
        "500 targeted local business leads",
        "Email deliverability protection",
        "60-minute strategy session with experts",
        "100 new leads added monthly",
        "Hyper-personalized outreach",
      ],
      pricing: {
        setup: "$1,500",
        monthly: "$500/mo",
      },
      featured: true,
    },
    {
      icon: Brain,
      name: "IQ Flow™",
      tagline: "Smart Follow-Ups & Daily Management",
      description: "Your business's new 'brain.' It tracks every potential customer, scores them based on buying readiness, and alerts your team the second a hot lead needs attention.",
      features: [
        "Automated lead scoring",
        "Smart follow-up sequences",
        "Hot lead instant alerts",
        "Pipeline visibility dashboard",
      ],
      featured: false,
    },
    {
      icon: Search,
      name: "LocalLift™",
      tagline: "Dominating Search & AI Answers",
      description: "We make sure you are the top answer when people use voice search or Google Maps. Optimized for the new era of Answer Engines.",
      features: [
        "Voice search optimization",
        "Google Maps ranking boost",
        "AI answer engine citations",
        "Local expert positioning",
      ],
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Our Core Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service Packages Built for Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            From launch to scale, we have the tools to help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                service.featured
                  ? "bg-secondary text-secondary-foreground shadow-card-hover scale-[1.02] lg:scale-105"
                  : "bg-card border border-border hover:shadow-card-hover hover:border-primary/20"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-hero text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured ? "bg-primary/20" : "bg-primary/10"
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.featured ? "text-primary" : "text-primary"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-2">
                {service.name}
              </h3>
              <p
                className={`text-sm font-medium mb-4 ${
                  service.featured ? "text-primary" : "text-primary"
                }`}
              >
                {service.tagline}
              </p>
              <p
                className={`mb-6 ${
                  service.featured
                    ? "text-secondary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        service.featured ? "text-primary" : "text-accent"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        service.featured
                          ? "text-secondary-foreground/90"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              {service.pricing && (
                <div className="mb-6 pb-6 border-b border-primary/20">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold">
                      {service.pricing.setup}
                    </span>
                    <span className="text-sm opacity-70">setup</span>
                  </div>
                  <p className="text-sm opacity-70">
                    then {service.pricing.monthly} ongoing
                  </p>
                </div>
              )}

              {/* CTA */}
              <Button
                variant={service.featured ? "hero" : "outline"}
                className="w-full"
              >
                Learn More
                <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
