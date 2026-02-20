import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Megaphone,
  Rocket,
  ArrowRight,
  Check,
} from "lucide-react";

const systems = [
  {
    icon: Phone,
    name: "LeadLine AI",
    subtitle: "AI Receptionist & Inbound Automation",
    description:
      "Your 24/7 AI receptionist that answers every call, captures every lead, books appointments, and routes calls intelligently — without payroll.",
    features: [
      "Custom-trained voice agent",
      "Lead capture & qualification",
      "Smart routing & escalation",
      "Appointment booking integration",
      "CRM automation",
      "Performance reporting",
    ],
    cta: "Learn More About LeadLine",
    href: "/ai-receptionist",
    color: "primary" as const,
  },
  {
    icon: Megaphone,
    name: "LeadLine AI Proactive",
    subtitle: "AI Sales & Follow-Up Engine",
    description:
      "An AI-powered outbound system that follows up, reactivates, books, and drives revenue automatically.",
    features: [
      "Cold & warm outbound campaigns",
      "Missed-call callbacks",
      "Sales conversation engine",
      "Objection handling AI",
      "Revenue tracking & CRM automation",
    ],
    cta: "Explore Outbound AI",
    href: "/ai-sales-agent",
    color: "accent" as const,
  },
  {
    icon: Rocket,
    name: "LaunchPad 360™",
    subtitle: "The Complete AI Revenue System",
    description:
      "The complete AI-powered growth engine — inbound, outbound, SEO, funnels, and automation integrated into one system.",
    features: [
      "AI call handling",
      "AI sales follow-up",
      "SEO & authority building",
      "Conversion-optimized websites",
      "CRM & automation infrastructure",
      "Revenue reporting dashboards",
    ],
    cta: "See LaunchPad 360",
    href: "/launchpad-360",
    color: "primary" as const,
    featured: true,
  },
];

const HomeGrowthSystems = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Our Growth Systems
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            Three Ways to Install
            <br />
            <span className="text-gradient">Revenue Infrastructure</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {systems.map((system) => (
            <div
              key={system.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] ${
                system.featured
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 shadow-card-hover"
                  : "bg-secondary-foreground/5 border border-secondary-foreground/10 hover:border-primary/30"
              }`}
            >
              {system.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Flagship
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <system.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-2xl font-bold text-secondary-foreground mb-1">
                {system.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-4">
                {system.subtitle}
              </p>
              <p className="text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
                {system.description}
              </p>

              <ul className="space-y-2 mb-8">
                {system.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span className="text-sm text-secondary-foreground/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={system.featured ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <Link to={system.href}>
                  {system.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Industries */}
        <div className="mt-12 text-center">
          <p className="text-sm text-secondary-foreground/50 mb-4">
            Trusted by businesses in
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Legal",
              "HVAC & Solar",
              "Contractors",
              "Logistics",
              "Healthcare",
              "Professional Services",
            ].map((industry) => (
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

export default HomeGrowthSystems;
