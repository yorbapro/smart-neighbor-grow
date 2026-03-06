import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, PhoneOff, Clock, UserX, DollarSign, VoicemailIcon, ArrowRight } from "lucide-react";

const problems = [
  { icon: PhoneOff, text: "Staff can't answer every call during peak hours." },
  { icon: Clock, text: "After-hours calls go to voicemail." },
  { icon: UserX, text: "Leads hang up instead of leaving messages." },
  { icon: VoicemailIcon, text: "Follow-ups get delayed." },
  { icon: DollarSign, text: "Hiring full-time staff is expensive." },
];

const HomeProblem = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(220, 30%, 3%) 0%, hsl(215, 28%, 10%) 50%, hsl(215, 28%, 7%) 100%)' }}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Real Cost
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Every Missed Call Is
            <br />
            <span className="text-primary">Lost Revenue.</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {problems.map((problem) => (
              <div
                key={problem.text}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-white/90 font-medium text-sm">{problem.text}</span>
              </div>
            ))}
          </div>

          <p className="text-xl font-display font-bold text-white mb-8">
            If your business depends on phone calls,{" "}
            <span className="text-primary">you can't afford to miss them.</span>
          </p>

          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment" aria-label="Get my free AI score">
              Get My Free AI Score
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeProblem;
