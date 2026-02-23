import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Shield, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="uppercase text-xs font-bold tracking-[0.2em] text-primary">
              Revenue Infrastructure
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Install Your
            <br />
            <span className="text-gradient">Revenue System?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop losing revenue to missed calls, unworked leads, and disconnected systems.
            Let's build your AI-powered growth infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Implementation in days</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Less than hiring staff</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Enterprise-grade security</span>
            </div>
          </div>

          <Button variant="hero" size="xl" asChild className="group">
             <Link to="/ai-receptionist-readiness-assessment" aria-label="Get my free AI score">
              Get My Free AI Score
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 mt-10 border-t border-white/10">
            <a
              href="tel:1-877-879-5552"
              className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone size={18} />
              </div>
              <span className="font-semibold">1-877-879-5552</span>
            </a>
            <a
              href="mailto:success@BrightLaunchIQ.com"
              className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={18} />
              </div>
              <span className="font-semibold">success@BrightLaunchIQ.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
