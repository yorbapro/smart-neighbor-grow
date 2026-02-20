import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneIncoming, Zap, CalendarCheck, VoicemailIcon } from "lucide-react";

const metrics = [
  { icon: PhoneIncoming, value: "Fewer Missed Calls", label: "Capture every opportunity", emoji: "📞" },
  { icon: Zap, value: "Faster Response", label: "Answer in seconds, not hours", emoji: "⚡" },
  { icon: CalendarCheck, value: "More Bookings", label: "Appointments scheduled automatically", emoji: "📅" },
  { icon: VoicemailIcon, value: "No Voicemail Drop-Offs", label: "Callers talk to AI, not a machine", emoji: "🚫" },
];

const HomeResults = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 7%) 0%, hsl(215, 28%, 12%) 50%, hsl(215, 28%, 7%) 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse at center, hsl(212, 92%, 45%) 0%, transparent 70%)' }} />
      </div>
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 uppercase text-xs font-bold tracking-[0.2em] text-primary mb-4">
            Results
            <span className="w-8 h-[2px] bg-primary" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Businesses Are Capturing
            <br />
            <span className="text-primary">More Revenue.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 text-center group hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{metric.emoji}</span>
              <p className="font-display text-lg font-bold text-primary mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-white/60">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/get-started">
              Get Started Today
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeResults;
