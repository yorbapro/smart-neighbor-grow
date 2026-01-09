import { Users, Target, Zap, Shield, Heart, Brain } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Human-in-the-Loop",
      description: "Our expert consultants guide and supervise every AI system, so your customer touchpoints always feel real and never robotic. We build your sales engine around your story and values.",
      highlight: "Expert Supervised AI",
      stat: "100% Verified",
    },
    {
      icon: Target,
      title: "ROI Focus",
      description: "We only implement tools that help you grow revenue or save time—your results matter most. See clear results in less time with systems that just work.",
      highlight: "Results-Driven Approach",
      stat: "30-Day Guarantee",
    },
    {
      icon: Brain,
      title: "AI Plus Experts",
      description: "Every automation and follow-up is overseen by people who make sure BrightLaunchIQ matches your brand's voice and delivers trust. Technology that listens and responds like a trusted member of your team.",
      highlight: "Human-Guided Automation",
      stat: "$16.60/day",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            The Human Touch in an AI World
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supercharge Your Sales with Local Knowledge and AI
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe small business owners deserve world-class sales automation, without sacrificing what makes their company special. Get connected to a real expert who understands your area.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stat badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                {benefit.stat}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
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

        {/* Value Prop Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-dark text-secondary-foreground">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl font-bold">Made for Local Business</h3>
              </div>
              <p className="text-secondary-foreground/80">
                Our tools are made for small local businesses—so you get the strength of a big company without hiring a huge staff. We focus on what matters most: more sales, less stress, and simple systems that just work.
              </p>
            </div>
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">$16.60</p>
                <p className="text-sm text-secondary-foreground/70">per day</p>
              </div>
              <div className="text-secondary-foreground/30 text-4xl">vs</div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-destructive">$80k+</p>
                <p className="text-sm text-secondary-foreground/70">per year hire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 p-8 rounded-2xl bg-secondary text-secondary-foreground text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h3 className="font-display text-2xl font-bold">The 14-Day Speed to Lead Guarantee</h3>
          </div>
          <p className="max-w-2xl mx-auto text-secondary-foreground/80">
            We move your business from "Zero" to "Automated Meetings" in 14 days. If we don't 
            significantly increase your lead response rate within 30 days, <strong className="text-primary">we work for free until we do.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
