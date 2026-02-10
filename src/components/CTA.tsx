import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Shield, Clock, CheckCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="uppercase text-xs font-bold tracking-[0.2em] text-primary">
              14-Day Speed to Lead Guarantee
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Free 15-Minute
            <br />
            <span className="text-gradient">Revenue Audit</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
            Ready to stop renting your growth? Our human experts will review your current 
            sales process and show you exactly where a 24/7 digital teammate can help you 
            capture the leads your competitors miss.
          </p>

          {/* Value Props - Horizontal */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Results in 14 days</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">$16.60/day for 24/7 coverage</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Performance guaranteed</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/get-started">
                Start Your 14-Day Launch
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 border-t border-white/10">
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