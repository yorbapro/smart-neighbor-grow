import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const HomeCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Letting Calls
            <br />
            <span className="text-gradient">Go to Voicemail.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Your AI Receptionist can be live in days — not months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/get-started">
                Get Started
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10 border-t border-white/10">
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

export default HomeCTA;
