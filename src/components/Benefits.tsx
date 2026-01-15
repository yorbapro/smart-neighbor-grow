import { Users, Target, Zap, Shield, Heart, Brain, Clock, TrendingUp, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import businessOwnerPhoto from "@/assets/photos/business-owner-woman.jpg";

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
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="font-display text-4xl md:text-5xl font-bold text-gradient">{stat.value}</span>
                {stat.unit && <span className="text-lg text-primary font-semibold">{stat.unit}</span>}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Process Flow Infographic */}
        <div className="mb-16 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border">
          <h3 className="font-display text-lg font-bold text-foreground text-center mb-8">
            How Your Leads Get Handled
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-2">
                {/* Step */}
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 ${
                    index === 0 ? 'bg-primary/20' : 
                    index === 1 ? 'bg-accent/20' : 
                    index === 2 ? 'bg-primary/20' : 
                    'bg-accent/20'
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      index === 0 ? 'text-primary' : 
                      index === 1 ? 'text-accent' : 
                      index === 2 ? 'text-primary' : 
                      'text-accent'
                    }`} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground mt-1">
                    {step.label}
                  </span>
                </div>
                
                {/* Arrow (not after last step) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center px-4">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-accent relative">
                      <ArrowRight className="absolute -right-3 -top-[7px] w-4 h-4 text-accent" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            From inquiry to closed deal—AI speed with human quality control
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Stat badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
                {benefit.stat}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                {benefit.highlight}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Cost Comparison Banner with Photo */}
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-secondary text-secondary-foreground mb-8">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">The Math of Success</h3>
              </div>
              <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6">
                Why pay $80,000+ for a full-time SDR when you can get a 24/7 digital teammate 
                that never takes sick days, never needs training, and responds in under 60 seconds?
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>168 hrs/week coverage</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Instant lead response</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Headphones className="w-4 h-4 text-primary" />
                  <span>Human oversight included</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-6 md:gap-8">
                <div className="text-center p-6 rounded-2xl bg-primary/10 border border-primary/20">
                  <p className="font-display text-4xl md:text-5xl font-bold text-primary">$16.60</p>
                  <p className="text-sm text-secondary-foreground/70 mt-1">per day</p>
                  <p className="text-xs text-primary font-semibold mt-2">AI Teammate</p>
                </div>
                <div className="text-secondary-foreground/40 text-3xl font-light">vs</div>
                <div className="text-center p-6 rounded-2xl bg-destructive/10 border border-destructive/20">
                  <p className="font-display text-4xl md:text-5xl font-bold text-destructive">$308</p>
                  <p className="text-sm text-secondary-foreground/70 mt-1">per day</p>
                  <p className="text-xs text-destructive font-semibold mt-2">Human SDR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-hero text-primary-foreground text-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-10 h-10" />
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                The 14-Day Speed to Lead Guarantee
              </h3>
            </div>
            <p className="max-w-2xl mx-auto text-primary-foreground/90 text-lg leading-relaxed">
              We take you from "Zero" to "Automated Meetings" in just 14 days. If we don't 
              significantly boost your lead response rate within 30 days,{" "}
              <strong className="text-white">we work for free until we do.</strong>
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70">
              No long-term contracts. No hidden fees. Just results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;