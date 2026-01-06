import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Clock, Bot, TrendingUp } from "lucide-react";

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
            <Bot size={16} className="fill-primary" />
            <span className="text-sm font-semibold">Your 24/7 AI Sales Implementation Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Stop Renting Your Growth.{" "}
            <span className="text-gradient">Command Your Results.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Meet your new <strong className="text-foreground">24/7 Digital Teammate</strong>. We install a proprietary AI lead generation engine that finds, qualifies, and books meetings while you sleep.
          </p>

          {/* Pricing highlight */}
          <p className="text-base text-primary font-semibold mb-10 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            $1,500 setup. $500/mo. Results in 14 days—Guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Get Your Free Revenue Audit
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              See the 14-Day Guarantee
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">Under 60s</p>
                <p className="text-xs text-muted-foreground">Response Time</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">$16.60/day</p>
                <p className="text-xs text-muted-foreground">Digital Worker</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">168 hrs/wk</p>
                <p className="text-xs text-muted-foreground">Always Working</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card shadow-card">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-foreground text-sm">78%</p>
                <p className="text-xs text-muted-foreground">Leads Captured</p>
              </div>
            </div>
          </div>

          {/* ROI Statement */}
          <p className="text-sm text-muted-foreground mt-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Compare $500/mo to an $80,000+/year human hire. LaunchPad 360™ delivers immediate, undeniable ROI from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
