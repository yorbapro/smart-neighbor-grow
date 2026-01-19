import { Calendar, Lightbulb, Server, Mic, Rocket, CheckCircle } from "lucide-react";

const ImplementationRoadmap = () => {
  const milestones = [
    {
      day: "Day 1",
      title: "Strategy",
      description: "Kickoff call, ICP definition, and custom playbook creation",
      icon: Lightbulb,
      color: "primary",
    },
    {
      day: "Day 7",
      title: "Infrastructure",
      description: "CRM integration, multi-channel setup, and lead list curation",
      icon: Server,
      color: "accent",
    },
    {
      day: "Day 11",
      title: "Voice Audit",
      description: "Brand voice calibration and messaging approval",
      icon: Mic,
      color: "primary",
    },
    {
      day: "Day 14",
      title: "Go-Live",
      description: "System activation and first automated outreach",
      icon: Rocket,
      color: "accent",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            The Implementation Roadmap
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            From Kickoff to Go-Live in 14 Days
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Our proven deployment process gets your AI sales engine running fast—with zero disruption to your business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
          
          {/* Milestones */}
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {milestones.map((milestone, index) => (
              <div key={milestone.day} className="relative">
                {/* Mobile connector */}
                {index < milestones.length - 1 && (
                  <div className="md:hidden absolute top-[60px] left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Day badge */}
                  <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                    milestone.color === "primary" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}>
                    <Calendar className="w-4 h-4" />
                    {milestone.day}
                  </div>

                  {/* Icon circle */}
                  <div className={`w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    milestone.color === "primary" 
                      ? "bg-primary/20" 
                      : "bg-accent/20"
                  }`}>
                    <milestone.icon className={`w-10 h-10 ${
                      milestone.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-secondary-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground/70 max-w-[200px] mx-auto">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 text-primary">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">
              30-Day Speed to Lead Guarantee • Results or we work free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmap;
