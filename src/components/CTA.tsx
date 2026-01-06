import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            Get Your Free 15-Minute Revenue Audit
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
            Ready to find out how much more your team could achieve? Our human experts 
            will review your current sales process and show you exactly where a 
            "digital teammate" can help you win more business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Schedule Your Free Audit
              <ArrowRight size={20} />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-secondary-foreground/90">
            <a
              href="tel:1-800-LAUNCH-IQ"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">1-800-LAUNCH-IQ</span>
            </a>
            <a
              href="mailto:success@BrightLaunchIQ.com"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span className="font-semibold">success@BrightLaunchIQ.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
