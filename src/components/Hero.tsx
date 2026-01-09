import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Clock, Bot, TrendingUp, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <ShieldCheck size={16} className="fill-primary" />
            <span className="text-sm font-semibold">Human-Guided AI for Business Growth</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Get More Customers.{" "}
            <span className="text-gradient">Less Stress.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We help contractors, consultants, and local businesses respond first, automate the busywork, and win more customers—using AI that's always supervised by real experts.
          </p>

          {/* Value Prop */}
          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            Our hybrid AI and expert team brings sales you can count on—made for local business owners who want big results without hiring a huge staff.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/aeo-audit">
                Free AI Visibility Audit
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/get-started">Start Growing Today</Link>
            </Button>
          </div>

          {/* Secondary Link */}
          <div className="mb-16 animate-slide-up" style={{ animationDelay: "0.25s" }}>
            <Link 
              to="/pricing" 
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              See Pricing
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">Under 60s</p>
                <p className="text-xs text-muted-foreground">Lead Response</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">Expert Team</p>
                <p className="text-xs text-muted-foreground">Human Oversight</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">$16.60/day</p>
                <p className="text-xs text-muted-foreground">AI Sales Team</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">30-Day</p>
                <p className="text-xs text-muted-foreground">ROI Guarantee</p>
              </div>
            </div>
          </div>

          {/* ROI Statement */}
          <p className="text-sm text-muted-foreground mt-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Making big tech work for Main Street. Every step is checked by an expert, so your business not only grows—it grows the right way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
