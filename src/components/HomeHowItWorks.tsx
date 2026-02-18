import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Phone, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "We Train It On Your Business",
    description: "Services, FAQs, routing rules, tone, scheduling preferences.",
  },
  {
    number: "02",
    icon: Phone,
    title: "It Answers Calls 24/7",
    description: "Natural voice conversations, just like a real front desk.",
  },
  {
    number: "03",
    icon: FileText,
    title: "You Get Organized Leads",
    description: "Transcripts, summaries, routing, and booking — automatically.",
  },
];

const HomeHowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Simple Setup
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How BrightLaunchIQ
            <br />
            <span className="text-gradient">AI Receptionist Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative z-10">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-10 h-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/get-started">
              Launch My AI Receptionist
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
