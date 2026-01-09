import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Search, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      tagline: "Your Complete AI Sales Engine",
      description: "The complete AI sales implementation system. We build and install your custom automated sales engine with built-in revenue intelligence in just 30 days. Human experts guide every step.",
      features: [
        "Custom infrastructure build & data calibration",
        "AI Researcher identifies your ideal customers",
        "500+ targeted local business leads",
        "Multi-channel outreach: calls, voicemail, SMS, email",
        "Real-time lead scoring & hot lead alerts",
        "Pipeline visibility dashboard",
        "Human oversight on every campaign",
        "CRM integration (Salesforce/HubSpot)",
      ],
      slug: "launchpad-360",
      featured: true,
    },
    {
      icon: Search,
      name: "LocalLift™",
      tagline: "Stellar Content + Answer Engine Optimization",
      description: "Elevate your online presence with expert website content and dominate AI search results. Get found when customers ask Gemini, ChatGPT, Perplexity, and voice assistants for local recommendations.",
      features: [
        "Custom website content creation",
        "SEO-optimized copywriting",
        "Engaging blog posts & articles",
        "Answer Engine Optimization (AEO)",
        "Voice search optimization",
        "Google Maps ranking boost",
        "AI answer engine citations",
        "Local expert positioning",
      ],
      slug: "locallift",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        {/* Intro Section - General to Specific Transition */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            How We Help Your Business Grow
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI for Business, Built for You
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            BrightLaunchIQ combines local knowledge with advanced automation so your business stands out, answers first, and closes more deals. We help companies fill their pipeline and manage growth with less effort.
          </p>
        </div>

        {/* Bridge Text */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-muted-foreground">
            Our two flagship solutions work together to capture leads around the clock and position your business as the local authority. Choose one or combine them for maximum impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

              {/* CTA */}
              <Button
                variant={service.featured ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <Link to={`/products/${service.slug}`}>
                  {service.featured ? "Start Your 30-Day Launch" : "Learn More"}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Target Markets */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">
            Industries We Serve: Central Valley & Beyond
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Professional Services (Legal, Accounting, Consulting)",
              "Trade Services (HVAC, Solar, Commercial Contractors)",
              "Industrial & Logistics (Transportation, Warehousing)",
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground"
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

export default Services;
