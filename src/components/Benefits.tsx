import { Users, Target, Zap, Shield, Heart, Brain, ArrowRight, CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Human-in-the-Loop",
      description: "Every AI decision is supervised by our expert consultants. Your customers get instant responses that still feel personal, authentic, and on-brand.",
      highlight: "Expert Supervised AI",
      stat: "100% Human Verified",
    },
    {
      icon: Target,
      title: "ROI-First Approach",
      description: "We only deploy tools that directly grow revenue or save time. No bloated tech stacks—just systems that pay for themselves within 30 days.",
      highlight: "Results-Driven Strategy",
      stat: "30-Day Guarantee",
    },
    {
      icon: Brain,
      title: "AI + Local Expertise",
      description: "Cutting-edge automation guided by people who understand the Central Valley market. Technology that adapts to your community, not the other way around.",
      highlight: "Human-Guided Automation",
      stat: "Just $16.60/day",
    },
  ];

  const stats = [
    { value: "60", unit: "sec", label: "Average Response Time" },
    { value: "24/7", unit: "", label: "Lead Coverage" },
    { value: "500+", unit: "", label: "Leads Per Launch" },
    { value: "14", unit: "days", label: "To First Meeting" },
  ];

  // Process flow for infographic
  const processSteps = [
    { label: "Lead Arrives", icon: Zap },
    { label: "AI Responds", icon: Brain },
    { label: "Human Reviews", icon: Users },
    { label: "Deal Closes", icon: CheckCircle2 },
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            The Human Touch in an AI World
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            AI That Actually Understands
            <span className="text-gradient block mt-2">Local Business</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe small business owners deserve enterprise-grade sales automation without sacrificing 
            what makes their company special. Get AI that works for you, guided by experts who know your market.
          </p>
        </div>

        {/* Stats Row - Compact */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display text-3xl md:text-4xl font-bold text-gradient">{stat.value}</span>
                {stat.unit && <span className="text-base text-primary font-semibold">{stat.unit}</span>}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Process Flow Infographic - Simplified */}
        <div className="mb-12 p-6 rounded-2xl bg-muted/50 border border-border">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    index % 2 === 0 ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <step.icon className={`w-5 h-5 ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{step.label}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground/40" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Icon + Stat Row */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {benefit.stat}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cost Comparison Banner - Compact */}
        <div className="relative p-6 md:p-8 rounded-2xl overflow-hidden bg-secondary text-secondary-foreground mb-6">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2">The Math of Success</h3>
              <p className="text-secondary-foreground/70 text-sm">
                24/7 coverage, instant response, no training required.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center px-5 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">$16.60</p>
                <p className="text-xs text-secondary-foreground/60">AI / day</p>
              </div>
              <span className="text-secondary-foreground/30 text-xl">vs</span>
              <div className="text-center px-5 py-3 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="font-display text-2xl md:text-3xl font-bold text-destructive">$308</p>
                <p className="text-xs text-secondary-foreground/60">Human / day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner - Compact */}
        <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-hero text-primary-foreground overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4">
            <Shield className="w-8 h-8 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-display text-lg md:text-xl font-bold mb-1">
                14-Day Speed to Lead Guarantee
              </h3>
              <p className="text-sm text-primary-foreground/80">
                From zero to automated meetings in 14 days—or we work free until you see results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;