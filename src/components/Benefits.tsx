import { Clock, Target, Zap, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Always On, Never Tired",
      description: "Your digital teammate works 168 hours a week, catching the 8 PM inquiries your competitors miss. We reduce your response time from 47 hours to under 60 seconds.",
      highlight: "24/7 AI Sales Automation",
      stat: "47hrs → 60s",
    },
    {
      icon: Target,
      title: "Zero Noise, All Intent",
      description: "No more manual list building. Our AI lead generation system feeds your Salesforce or HubSpot CRM with high-fit prospects the moment they show buying intent.",
      highlight: "Autonomous Signal Detection",
      stat: "78% more leads",
    },
    {
      icon: Zap,
      title: "Scale Without Headcount",
      description: "Achieve the output of a 5-person sales team for less than the cost of a part-time assistant. AI sales implementation that makes small teams unstoppable.",
      highlight: "Hyper-Individualized Outreach",
      stat: "$16.60/day",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            The Digital Teammate Framework
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Local Businesses Choose Our AI Sales Implementation
          </h2>
          <p className="text-lg text-muted-foreground">
            78% of prospects buy from the company that responds first, yet the average business 
            takes 47 hours to respond. We capture the leads your competitors miss with 
            human-guided AI automation.
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

        {/* Guarantee Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-dark text-secondary-foreground text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h3 className="font-display text-2xl font-bold">The 14-Day Speed to Lead Guarantee</h3>
          </div>
          <p className="max-w-2xl mx-auto text-secondary-foreground/80">
            We move your business from "Zero" to "Automated Meetings" in 14 days. If we do not 
            significantly increase your lead response rate and pipeline velocity within the first 
            30 days of operation, <strong className="text-primary">we will work for free until we do.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
