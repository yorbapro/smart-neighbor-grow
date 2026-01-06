import { MessageSquare, Repeat, MapPin } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: MessageSquare,
      title: "Respond in Seconds",
      description: "Half of all sales go to the business that answers first. Our system responds to new questions in under 60 seconds.",
      highlight: "First to respond wins",
    },
    {
      icon: Repeat,
      title: "Stop the Sales Busywork",
      description: "We automate 70% of your daily repetitive tasks, like data entry and follow-up emails, so your team can focus on building real relationships.",
      highlight: "Focus on what matters",
    },
    {
      icon: MapPin,
      title: "Built for Your Neighborhood",
      description: "We don't just provide software; we provide a strategy that helps your neighbors find you first.",
      highlight: "Local expertise",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Small Businesses Trust Our Hybrid Approach
          </h2>
          <p className="text-lg text-muted-foreground">
            Fully automated tools often make mistakes that look robotic. We believe in Human-Guided AI, 
            where our expert team sets the rules and supervises the tools to ensure every customer 
            interaction feels personal, helpful, and real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
      </div>
    </section>
  );
};

export default Benefits;
