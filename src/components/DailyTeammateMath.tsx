import { Users, Rocket, ArrowRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DailyTeammateMath = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            The Daily Teammate Math
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Smart Businesses Choose AI
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Human SDR Card */}
          <div className="relative rounded-2xl bg-card border border-border p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-muted/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Human SDR Hire
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Traditional sales development representative
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Annual Cost</span>
                  <span className="font-display text-2xl font-bold text-foreground">$80,000+</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Daily Cost</span>
                  <span className="font-display text-xl font-semibold text-foreground">$308/day</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Availability</span>
                  <span className="text-sm font-medium text-foreground">40 hrs/week</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-muted-foreground">Training Time</span>
                  <span className="text-sm font-medium text-foreground">3-6 months</span>
                </div>
              </div>
            </div>
          </div>

          {/* LaunchPad 360 Card */}
          <div className="relative rounded-2xl bg-secondary p-8 overflow-hidden ring-2 ring-primary shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                <Calculator className="w-3 h-3" />
                Massive Savings
              </span>
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-secondary-foreground mb-2">
                LaunchPad 360™
              </h3>
              <p className="text-sm text-secondary-foreground/70 mb-6">
                AI-powered digital teammate with human oversight
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-primary/20 pb-3">
                  <span className="text-sm text-secondary-foreground/70">Annual Cost</span>
                  <span className="font-display text-2xl font-bold text-primary">Fraction of a hire</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/20 pb-3">
                  <span className="text-sm text-secondary-foreground/70">ROI</span>
                  <span className="font-display text-xl font-semibold text-primary">Immediate</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-primary/20 pb-3">
                  <span className="text-sm text-secondary-foreground/70">Availability</span>
                  <span className="text-sm font-medium text-secondary-foreground">168 hrs/week (24/7)</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm text-secondary-foreground/70">Go-Live</span>
                  <span className="text-sm font-medium text-primary">30 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/ai-receptionist/get-started">
              Schedule My 15-Minute Revenue Audit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DailyTeammateMath;
