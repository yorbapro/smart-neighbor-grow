import { Link } from "react-router-dom";
import { Phone, MessageSquare, Calendar, ArrowRightLeft, Shield, Clock, Headphones, ArrowRight } from "lucide-react";

const demoFeatures = [
  {
    icon: MessageSquare,
    title: "Ask About Services & Hours",
    description: "The AI receptionist knows your business inside and out.",
  },
  {
    icon: Calendar,
    title: "Test Appointment Booking",
    description: "Watch it book directly to a calendar in real time.",
  },
  {
    icon: ArrowRightLeft,
    title: "Request a Live Transfer",
    description: "Ask to speak with a person — see smart call routing in action.",
  },
];

const trustItems = [
  { icon: Clock, label: "Available 24/7" },
  { icon: Shield, label: "No Login Required" },
  { icon: Headphones, label: "Real AI, Real Conversations" },
];

const HomeLiveDemo = () => {
  return (
    <section
      id="live-demo"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(215, 28%, 7%) 0%, hsl(215, 30%, 10%) 50%, hsl(215, 28%, 7%) 100%)",
      }}
    >
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, hsl(212, 92%, 45%) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Live Demo
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Experience Our AI Receptionist
              <br />
              <span className="text-gradient">Yourself — Call Now</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Have a real conversation with our AI receptionist. Ask questions,
              test appointment booking, and hear how natural it sounds. No
              signup required.
            </p>
          </div>

          {/* Phone CTA card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12 mb-14">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <Phone className="w-10 h-10 text-primary" />
              </div>

              <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-3">
                Call Our Live AI Receptionist Demo
              </p>

              <a
                href="tel:1-877-879-5552"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:text-primary transition-colors mb-6"
                aria-label="Call our live AI receptionist demo at 1-877-879-5552"
              >
                1-877-879-5552
              </a>

              <a
                href="tel:1-877-879-5552"
                className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors mb-8"
                aria-label="Tap to call our AI receptionist"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Call Our AI Receptionist Now</span>
                <span className="sm:hidden">Tap to Call AI Receptionist</span>
              </a>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {trustItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-white/50"
                  >
                    <item.icon className="w-4 h-4 text-primary/70" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="mb-14">
            <h3 className="font-display text-xl md:text-2xl font-bold text-white text-center mb-8">
              Try These AI Receptionist Features:
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {demoFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Educational callout */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 md:p-8 text-center max-w-3xl mx-auto">
            <h3 className="font-display text-lg font-semibold text-white mb-3">
              What You'll Experience
            </h3>
            <p className="text-white/60 leading-relaxed text-sm md:text-base mb-4">
              Our AI receptionist uses advanced natural language processing to
              understand and respond to callers just like a human receptionist
              would — but it never takes a break, never calls in sick, and
              handles unlimited calls simultaneously.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/ai-receptionist/resources/ai-receptionist-readiness-assessment"
                className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                Get My Free AI Score <ArrowRight className="w-3 h-3" />
              </Link>
              <Link
                to="/ai-receptionist/pricing"
                className="text-white/50 text-sm font-semibold hover:text-white/80 hover:underline inline-flex items-center gap-1"
              >
                View AI Receptionist Pricing <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLiveDemo;
