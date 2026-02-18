import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const comparisons = [
  { feature: "Works 24/7", ai: true, staff: false },
  { feature: "Never calls in sick", ai: true, staff: false },
  { feature: "Handles peak volume instantly", ai: true, staff: false },
  { feature: "Monthly cost", aiText: "Predictable", staffText: "Salary + taxes + benefits" },
  { feature: "Setup time", aiText: "Days", staffText: "Weeks" },
  { feature: "Missed calls", aiText: "Virtually none", staffText: "Common" },
  { feature: "Scales instantly", ai: true, staff: false },
];

const HomeComparison = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            The Economics
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
            AI Receptionist vs
            <br />
            <span className="text-gradient">Hiring Front Desk Staff</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="rounded-2xl overflow-hidden border border-secondary-foreground/10">
            {/* Header */}
            <div className="grid grid-cols-3 bg-secondary-foreground/10 p-4">
              <div className="text-sm font-bold text-secondary-foreground">Feature</div>
              <div className="text-sm font-bold text-primary text-center">AI Receptionist</div>
              <div className="text-sm font-bold text-secondary-foreground/60 text-center">Hiring Staff</div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 p-4 items-center ${
                  index % 2 === 0 ? "bg-secondary-foreground/5" : "bg-transparent"
                }`}
              >
                <div className="text-sm font-medium text-secondary-foreground">{row.feature}</div>
                <div className="flex justify-center">
                  {row.aiText ? (
                    <span className="text-sm font-semibold text-primary">{row.aiText}</span>
                  ) : row.ai ? (
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {row.staffText ? (
                    <span className="text-sm text-secondary-foreground/60">{row.staffText}</span>
                  ) : row.staff ? (
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-secondary-foreground/80 mb-8">
            For less than the cost of a part-time employee, you get a fully trained, always-available front desk.
          </p>
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/get-started">
              Replace Missed Calls
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeComparison;
