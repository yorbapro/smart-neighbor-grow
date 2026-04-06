import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DollarSign, Check, ArrowRight } from "lucide-react";

const noOverheadItems = [
  "No payroll taxes",
  "No benefits",
  "No overtime",
  "No training costs",
  "No HR headaches",
  "No turnover",
];

const HomePricingPosition = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 7%) 0%, hsl(215, 28%, 10%) 50%, hsl(215, 28%, 7%) 100%)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <DollarSign className="w-4 h-4" />
              Smart Economics
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              A Full-Time Receptionist
              <br />
              <span className="text-primary">Without the Full-Time Cost.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              BrightLaunchIQ AI Receptionist works 24/7, handles conversations within your plan, and costs a fraction of hiring staff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                The Cost of Hiring Staff
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Hiring a receptionist means salary, payroll taxes, training, sick days, turnover, and limited hours. You pay for downtime, holidays, and the inevitable gaps in coverage.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Compared to Hiring Staff
              </h3>
              <ul className="space-y-3">
                {noOverheadItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
            <p className="text-lg text-white/70 mb-4">
              BrightLaunchIQ AI Receptionist delivers consistent, always-on call handling at a predictable monthly rate, without overhead, scheduling conflicts, or missed calls.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/ai-receptionist/pricing">
                View Pricing
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricingPosition;
