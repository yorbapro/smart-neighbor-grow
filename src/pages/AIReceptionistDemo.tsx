import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageSquare, 
  Calendar, 
  ArrowRightLeft, 
  Shield, 
  Clock, 
  Headphones, 
  ArrowRight,
  Settings,
  CheckCircle2,
  Zap,
  Target
} from "lucide-react";

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

const trainingSteps = [
  {
    icon: Settings,
    title: "Business Logic Ingestion",
    description: "We feed the AI your specific business hours, service lists, pricing, and FAQs so it never gives a wrong answer."
  },
  {
    icon: Target,
    title: "Persona & Tone Calibration",
    description: "Whether you want 'Professional & Formal' or 'Friendly & Local', we tune the voice and script to match your brand perfectly."
  },
  {
    icon: Zap,
    title: "Workflow Integration",
    description: "We connect the AI to your existing tools—Google Calendar, HubSpot, Salesforce—so it can book and log leads automatically."
  },
  {
    icon: CheckCircle2,
    title: "Continuous Optimization",
    description: "Our human experts review call transcripts and sentiment analysis to refine the AI's responses over time."
  }
];

const AIReceptionistDemo = () => {
  useEffect(() => {
    document.title = "Live AI Receptionist Demo | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experience the BrightLaunchIQ AI Receptionist firsthand. Call our live demo to test 24/7 answering, appointment booking, and smart routing.");
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content">
        <div className="container pt-24">
          <Breadcrumb />
        </div>

        {/* HERO / DEMO SECTION */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden bg-gradient-hero-dark">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full opacity-15 bg-primary/30 blur-[120px]" />
          </div>

          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                  Live Experience
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Experience Our AI Receptionist
                  <br />
                  <span className="text-gradient">Yourself — Call Now</span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Have a real conversation with our AI receptionist. Ask questions,
                  test appointment booking, and hear how natural it sounds. No
                  signup required.
                </p>
              </div>

              {/* Phone CTA card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-12 mb-14 shadow-2xl">
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

                  <Button size="lg" variant="hero" asChild className="mb-8 px-10 py-7 text-xl">
                    <a href="tel:1-877-879-5552">
                      <Phone className="w-6 h-6 mr-2" />
                      Tap to Call Now
                    </a>
                  </Button>

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
              <div className="grid md:grid-cols-3 gap-6">
                {demoFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center hover:bg-white/[0.05] transition-colors"
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
          </div>
        </section>

        {/* TRAINING SECTION */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                  How We Train Your <span className="text-primary">AI Receptionist</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just give you a generic bot. We build a custom digital teammate that understands your business as well as you do.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {trainingSteps.map((step) => (
                  <div key={step.title} className="flex gap-5 p-6 rounded-2xl bg-background border border-border shadow-sm">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-secondary-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                <h3 className="font-display text-xl font-bold text-secondary-foreground mb-4">
                  Ready to see your own AI in action?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Take our 2-minute assessment to see if your business is ready for an AI receptionist and get a custom implementation plan.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment">
                      Take the Free Assessment
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">
                      Book a Strategy Call
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIReceptionistDemo;
