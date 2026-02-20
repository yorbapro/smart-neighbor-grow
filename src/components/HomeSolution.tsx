import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, UserCheck, CalendarCheck, ArrowRight } from "lucide-react";

const valueBlocks = [
  {
    icon: Phone,
    title: "Answers Every Call Instantly",
    description: "No hold times. No voicemail. No missed opportunities.",
  },
  {
    icon: UserCheck,
    title: "Qualifies and Captures Leads",
    description: "Collects caller information, identifies intent, and organizes details automatically.",
  },
  {
    icon: CalendarCheck,
    title: "Routes or Books Appointments",
    description: "Transfers urgent calls or schedules appointments directly into your calendar.",
  },
];

const HomeSolution = () => {
  return (
    <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 7%) 0%, hsl(215, 28%, 12%) 50%, hsl(215, 28%, 7%) 100%)' }}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            The Solution
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Your 24/7
            <br />
            <span className="text-primary">AI Receptionist.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {valueBlocks.map((block) => (
            <div
              key={block.title}
              className="relative rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] text-center"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <block.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {block.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild className="group">
            <Link to="/products/ai-receptionist">
              See It In Action
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeSolution;
