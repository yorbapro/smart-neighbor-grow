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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 uppercase text-xs font-bold tracking-[0.2em] text-primary mb-4">
            Results
            <span className="w-8 h-[2px] bg-primary" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Businesses Are Capturing
            <br />
            <span className="text-gradient">More Revenue.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.value}
              className="relative p-8 rounded-2xl bg-card border border-border text-center group hover:border-primary/30 transition-colors"
            >
              <span className="text-3xl mb-4 block">{metric.emoji}</span>
              <p className="font-display text-lg font-bold text-gradient mb-2">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
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
