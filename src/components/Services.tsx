import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Rocket, Cog, ArrowRight, Check, Zap, TrendingUp, Users, Star, Clock } from "lucide-react";

const Services = () => {
  const tiers = [
    {
      icon: Search,
      name: "LocalLift™",
      subtitle: "The Foundation",
      goal: "Visibility & Being Found",
      setupFee: "$1,500",
      monthlyFee: "$299",
      deployment: "14-Day Deployment",
      features: [
        "Custom website",
        "Answer Engine Optimization (AEO)",
        "Google Maps & Voice Search dominance",
        "Reputation Management",
      ],
      cta: "Get Found",
      slug: "locallift",
      featured: false,
    },
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      subtitle: "The Growth Engine",
      goal: "Increase Revenue, Lead Generation & Booking Meetings",
      setupFee: "$2,500",
      monthlyFee: "$599",
      deployment: "30-Day Deployment",
      includesText: "Includes everything in LocalLift™ plus...",
      features: [
        "60s Speed-to-Lead Guarantee",
        "AI Lead Generation",
        "Automated Meeting Booking",
        "Human-in-the-Loop Triage",
      ],
      cta: "Start Growing",
      slug: "launchpad-360",
      featured: true,
    },
    {
      icon: Cog,
      name: "OmniLogic™",
      subtitle: "The Custom Solution",
      goal: "Total Business Automation",
      setupFee: "Starts at $5,000",
      monthlyFee: "Custom Quote",
      deployment: "Custom Timeline",
      features: [
        "Custom Business Intelligence",
        "Operations/HR/Inventory Automation",
        "Custom Cognitive Architecture",
      ],
      cta: "Contact Us",
      slug: "custom-ai-workflows",
      featured: false,
      isCustom: true,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-subtle">
      <div className="container">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                tier.featured
                  ? "bg-secondary ring-2 ring-primary shadow-2xl lg:scale-105 z-10"
                  : "bg-card border border-border hover:shadow-card-hover"
              }`}
            >
              {/* Featured Badge */}
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className={`p-6 md:p-8 ${tier.featured ? "pt-14" : ""}`}>
                {/* Icon & Name */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  tier.featured ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <tier.icon className="w-6 h-6 text-primary" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  {tier.subtitle}
                </p>
                <h3 className={`font-display text-2xl font-bold mb-2 ${
                  tier.featured ? "text-secondary-foreground" : "text-foreground"
                }`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  tier.featured ? "text-secondary-foreground/70" : "text-muted-foreground"
                }`}>
                  <span className="font-medium">Goal:</span> {tier.goal}
                </p>

                {/* Pricing */}
                <div className={`mb-6 pb-6 border-b ${
                  tier.featured ? "border-primary/20" : "border-border"
                }`}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className={`font-display text-3xl font-bold ${
                      tier.featured ? "text-secondary-foreground" : "text-foreground"
                    }`}>
                      {tier.setupFee}
                    </span>
                    <span className={`text-sm ${
                      tier.featured ? "text-secondary-foreground/60" : "text-muted-foreground"
                    }`}>
                      {tier.isCustom ? "" : "one-time"}
                    </span>
                  </div>
                  {!tier.isCustom && (
                    <p className={`text-sm ${
                      tier.featured ? "text-secondary-foreground/70" : "text-muted-foreground"
                    }`}>
                      then <span className="font-semibold">{tier.monthlyFee}/month</span>
                    </p>
                  )}
                  {tier.isCustom && (
                    <p className={`text-sm ${
                      tier.featured ? "text-secondary-foreground/70" : "text-muted-foreground"
                    }`}>
                      Monthly: <span className="font-semibold">{tier.monthlyFee}</span>
                    </p>
                  )}
                </div>

                {/* Deployment Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5 ${
                  tier.featured 
                    ? "bg-primary/20 text-primary" 
                    : "bg-accent/10 text-accent"
                }`}>
                  <Clock className="w-3 h-3" />
                  {tier.deployment}
                </div>

                {/* Includes Text for LaunchPad */}
                {tier.includesText && (
                  <p className={`text-sm font-medium mb-4 ${
                    tier.featured ? "text-primary" : "text-accent"
                  }`}>
                    {tier.includesText}
                  </p>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.featured ? "text-primary" : "text-accent"
                      }`} />
                      <span className={`text-sm ${
                        tier.featured ? "text-secondary-foreground/90" : "text-muted-foreground"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={tier.featured ? "hero" : "outline"}
                  className="w-full group/btn"
                  asChild
                >
                  <Link to={tier.isCustom ? "/contact" : `/products/${tier.slug}`}>
                    {tier.cta}
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats Row */}
        <div className="mt-12 relative overflow-hidden rounded-2xl bg-secondary p-8 md:p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
              {[
                { icon: Zap, value: "60s", label: "Response Time" },
                { icon: TrendingUp, value: "340%", label: "Lead Increase" },
                { icon: Users, value: "100%", label: "Human Verified" },
                { icon: Rocket, value: "14 Days", label: "To First Meeting" },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 md:flex-col md:text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-secondary-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-secondary-foreground/60">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Markets */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">Serving</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Legal & Accounting", "HVAC & Solar", "Contractors", "Logistics", "Professional Services"].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground"
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
