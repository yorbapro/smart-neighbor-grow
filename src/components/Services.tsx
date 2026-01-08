import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Brain, Search, ArrowRight, Check, Phone, MessageSquare, Mail, Smartphone, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      tagline: "Your Agentic Go-To-Market Engine",
      description: "The complete AI sales implementation system. We build and install your custom automated sales engine directly into your existing ecosystem (Salesforce, HubSpot) in just 14 days.",
      features: [
        "Custom infrastructure build & data calibration",
        "AI Researcher identifies your ideal customers",
        "500+ targeted local business leads",
        "Multi-channel outreach: calls, voicemail, SMS, email",
        "LinkedIn & Facebook Messenger automation",
        "Email deliverability warming & protection",
        "60-minute strategy session with experts",
        "Hyper-individualized AI outreach",
        "Automated inbox triage (only hot leads forwarded)",
        "100 new intent-driven leads monthly",
      ],
      slug: "launchpad-360",
      featured: true,
    },
    {
      icon: Brain,
      name: "IQ Flow™",
      tagline: "Smart Pipeline Intelligence",
      description: "Your business's AI brain for lead scoring and pipeline management. Tracks every prospect, scores buying readiness, and alerts your team the second a hot lead needs attention.",
      features: [
        "Automated lead scoring & ranking",
        "Smart follow-up sequences",
        "Hot lead instant mobile alerts",
        "Pipeline visibility dashboard",
        "CRM integration (Salesforce/HubSpot)",
      ],
      slug: "iq-flow",
      featured: false,
    },
    {
      icon: Search,
      name: "LocalLift™",
      tagline: "Answer Engine Optimization",
      description: "Dominate AI search results. We optimize your business for Gemini, ChatGPT, Perplexity, and voice search so you're the top answer when prospects ask about your services.",
      features: [
        "Voice search optimization",
        "Google Maps ranking boost",
        "AI answer engine citations",
        "Local expert positioning",
        "AEO-optimized content strategy",
      ],
      slug: "locallift",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            AI Lead Generation Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automated Sales Systems That Scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Remove the procurement hurdles of high-ticket agency retainers ($3,000–$25,000/mo). 
            Get enterprise-grade AI sales automation at a fraction of the cost.
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
            2026 Focus: Central Valley Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Professional Services (Legal, Accounting, Consulting)",
              "Trade Services (HVAC, Solar, Commercial Contractors)",
              "Industrial/Logistics (Transportation, Warehousing)",
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
