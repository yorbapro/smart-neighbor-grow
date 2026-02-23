import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";

const RevenueReadinessCTA = () => {
  return (
    <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 12%) 0%, hsl(215, 28%, 7%) 50%, hsl(220, 30%, 3%) 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-18" style={{ background: 'radial-gradient(ellipse at center, hsl(212, 92%, 45%) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] rounded-full opacity-12" style={{ background: 'radial-gradient(ellipse at center, hsl(260, 80%, 55%) 0%, transparent 70%)' }} />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                <FileText className="w-4 h-4" />
                Free Revenue Readiness Audit
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Is Your Business Ready for an AI Receptionist?
              </h2>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-white/80 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>15-minute call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>Custom AI recommendations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>No obligation</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/ai-receptionist-readiness-assessment" aria-label="Get my free AI score">
                  Get My Free AI Score
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueReadinessCTA;
