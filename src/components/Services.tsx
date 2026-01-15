import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Search, Cog, ArrowRight, Check, Zap, TrendingUp, Users } from "lucide-react";
import salesTeamPhoto from "@/assets/photos/sales-team-dashboard.jpg";
import contentMarketingPhoto from "@/assets/photos/content-marketing-pro.jpg";
import enterpriseTechPhoto from "@/assets/photos/enterprise-tech-team.jpg";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      name: "LaunchPad 360™",
      tagline: "Your Complete AI Sales Engine",
      description: "The complete AI sales implementation system. We build and install your custom automated sales engine with built-in revenue intelligence in just 30 days.",
      features: [
        "AI Researcher identifies your ideal customers",
        "500+ targeted local business leads",
        "Multi-channel outreach: calls, SMS, email",
        "Real-time lead scoring & hot lead alerts",
        "Pipeline visibility dashboard",
        "Human oversight on every campaign",
      ],
      slug: "launchpad-360",
      photo: salesTeamPhoto,
      photoAlt: "Sales team reviewing AI-powered analytics dashboard",
      stat: { value: "30", unit: "days", label: "To Full Automation" },
      accentColor: "primary",
    },
    {
      icon: Search,
      name: "LocalLift™",
      tagline: "Stellar Content + Answer Engine Optimization",
      description: "Elevate your online presence with expert website content and dominate AI search results. Get found by Gemini, ChatGPT, and voice assistants.",
      features: [
        "Custom website content creation",
        "SEO-optimized copywriting",
        "Answer Engine Optimization (AEO)",
        "Voice search optimization",
        "Google Maps ranking boost",
        "AI answer engine citations",
      ],
      slug: "locallift",
      photo: contentMarketingPhoto,
      photoAlt: "Content marketing professional working on SEO analytics",
      stat: { value: "156%", unit: "", label: "More Visibility" },
      accentColor: "accent",
    },
    {
      icon: Cog,
      name: "OmniLogic™",
      tagline: "Custom AI Workflow Automation",
      description: "Completely bespoke AI workflow automation designed for your unique business processes. From document processing to complex decision engines.",
      features: [
        "Custom AI model integration",
        "End-to-end workflow automation",
        "Document processing & extraction",
        "Predictive analytics dashboards",
        "API integrations & data pipelines",
        "Dedicated solution architect",
      ],
      slug: "custom-ai-workflows",
      photo: enterpriseTechPhoto,
      photoAlt: "Enterprise technology team planning AI workflow solutions",
      stat: { value: "10x", unit: "", label: "Faster Operations" },
      accentColor: "primary",
      isEnterprise: true,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            How We Help Your Business Grow
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI for Business, Built for You
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            BrightLaunchIQ combines local knowledge with advanced automation so your business stands out, answers first, and closes more deals.
          </p>
        </div>

        {/* Bridge Text */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-muted-foreground">
            Our flagship solutions work together to capture leads around the clock and position your business as the local authority.
          </p>
        </div>

        {/* Services Grid with Photos */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-card-hover hover:border-primary/20 transition-all duration-300"
            >
              {/* Photo Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.photo} 
                  alt={service.photoAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Stat Badge */}
                <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-xl ${
                  service.accentColor === 'primary' ? 'bg-primary/90' : 'bg-accent/90'
                } backdrop-blur-sm`}>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-xl font-bold text-white">
                      {service.stat.value}
                    </span>
                    {service.stat.unit && (
                      <span className="text-xs text-white/80">{service.stat.unit}</span>
                    )}
                  </div>
                  <p className="text-xs text-white/80">{service.stat.label}</p>
                </div>

                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.accentColor === 'primary' ? 'bg-primary' : 'bg-accent'
                } shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {service.name}
                </h3>
                <p className={`text-sm font-medium mb-4 ${
                  service.accentColor === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {service.tagline}
                </p>
                <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features - Compact */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        service.accentColor === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                      <span className="text-xs text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={service.accentColor === 'primary' ? 'default' : 'outline'}
                  className="w-full group/btn"
                  asChild
                >
                  <Link to={`/products/${service.slug}`}>
                    {service.isEnterprise ? "Contact Us" : "Learn More"}
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats Row */}
        <div className="mt-20 p-8 md:p-10 rounded-3xl bg-secondary/50 border border-border">
          <h3 className="font-display text-lg font-bold text-foreground text-center mb-8">
            The BrightLaunchIQ Advantage
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, value: "60s", label: "Response Time", color: "primary" },
              { icon: TrendingUp, value: "340%", label: "Lead Increase", color: "accent" },
              { icon: Users, value: "100%", label: "Human Verified", color: "primary" },
              { icon: Rocket, value: "14 Days", label: "To First Meeting", color: "accent" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 ${
                  stat.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                }`}>
                  <stat.icon className={`w-6 h-6 ${
                    stat.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                <p className={`font-display text-2xl font-bold ${
                  stat.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Markets */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-xl font-bold text-foreground mb-6">
            Industries We Serve: Central Valley & Beyond
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Professional Services", examples: "Legal, Accounting, Consulting" },
              { name: "Trade Services", examples: "HVAC, Solar, Commercial Contractors" },
              { name: "Industrial & Logistics", examples: "Transportation, Warehousing" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="px-5 py-3 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <p className="text-sm font-semibold text-foreground">{industry.name}</p>
                <p className="text-xs text-muted-foreground">{industry.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;