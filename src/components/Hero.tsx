import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Zap, TrendingUp } from "lucide-react";

// Use public folder path for hero image - enables HTML preloading for faster LCP
const businessOwnerPhoto = "/images/hero-business-owner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Flowing lines effect - inspired by Fractal.ai */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(187, 92%, 42%)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="hsl(210, 100%, 50%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(38, 92%, 50%)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Flowing curves */}
            <path
              d="M-100 600 Q 300 400, 600 500 T 1000 400 T 1400 500 T 1900 300 T 2100 400"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse-soft"
            />
            <path
              d="M-100 700 Q 400 500, 700 600 T 1100 500 T 1500 600 T 2000 400"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse-soft"
              style={{ animationDelay: "0.5s" }}
            />
            <path
              d="M-100 800 Q 500 600, 800 700 T 1200 600 T 1600 700 T 2100 500"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse-soft"
              style={{ animationDelay: "1s" }}
            />
          </svg>
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div>
            {/* Eyebrow badge - inspired by RTS Labs */}
            <div 
              className="inline-flex items-center gap-3 mb-8 animate-fade-in"
            >
              <span className="uppercase text-xs font-bold tracking-[0.25em] text-primary">
                Human-Guided AI
              </span>
              <span className="w-12 h-[2px] bg-gradient-hero" />
            </div>

            {/* Main Headline - Large, bold, enterprise feel */}
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 animate-slide-up"
            >
              You built a great business.
              <br />
              <span className="text-gradient">We'll help you catch every opportunity.</span>
            </h1>

            {/* Subheadline - Clean, informative */}
            <p 
              className="text-lg md:text-xl text-white/70 max-w-2xl mb-6 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              You're busy managing jobs and serving clients. You don't have time to 
              chase every call and email. Our human-guided AI acts as your 24/7 teammate, 
              ensuring every new customer gets an instant, professional response, so you 
              can focus on running your business.
            </p>

            {/* Value prop line */}
            <p 
              className="text-base text-white/50 max-w-xl mb-4 animate-slide-up"
              style={{ animationDelay: "0.15s" }}
            >
              The power of a 50-person sales team. The personal touch of a trusted partner.
            </p>

            {/* Security reassurance */}
            <p 
              className="text-sm text-primary/80 max-w-xl mb-10 animate-slide-up flex items-center gap-2"
              style={{ animationDelay: "0.18s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Secure. Compliant. Built with enterprise-grade infrastructure.
            </p>

            {/* CTA Buttons - Bold and clear */}
            <div 
              className="flex flex-col sm:flex-row items-start gap-4 mb-12 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button variant="hero" size="xl" asChild className="group bg-audit hover:bg-audit/90 shadow-glow-audit">
                <Link to="/aeo-audit">
                  Free AI Visibility Audit
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/get-started">Talk to an Expert</Link>
              </Button>
            </div>

            {/* Trust indicators - Clean horizontal layout */}
            <div 
              className="flex flex-wrap gap-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">Under 60s</p>
                  <p className="text-xs text-white/50">Lead Response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">Expert Team</p>
                  <p className="text-xs text-white/50">Human Oversight</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">$5,000+</p>
                  <p className="text-xs text-white/50">Monthly Revenue Rescued</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">30-Day</p>
                  <p className="text-xs text-white/50">ROI Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column - Professional Photo with AI Graphics Overlay */}
          <div 
            className="relative hidden lg:block animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Main Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={businessOwnerPhoto} 
                alt="Business owner reviewing AI-powered analytics dashboard" 
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1200}
                height={800}
              />
              {/* Gradient overlay for blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-sm rounded-2xl shadow-card-hover p-5 border border-border animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">+340%</p>
                  <p className="text-sm text-muted-foreground">Lead Capture Rate</p>
                </div>
              </div>
            </div>

            {/* Floating AI Indicator */}
            <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-2xl shadow-glow px-5 py-3 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-semibold text-primary-foreground">AI Active</span>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/20" />
          </div>
        </div>
      </div>

      {/* Curved bottom edge - premium feel */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z" 
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;