import { Target, Users, TrendingUp, ShieldCheck, Brain, MapPin, CheckCircle } from "lucide-react";
import teamPhoto from "@/assets/photos/team-collaboration.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              About BrightLaunchIQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Making Big Tech Work for Main Street
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At BrightLaunchIQ, we don't think powerful automation should only be for 
              giant corporations. We started this company to help local business owners 
              use AI sales tools to grow their income without increasing their stress.
            </p>
            <p className="text-muted-foreground mb-8">
              BrightLaunchIQ connects local experts, AI-driven sales tools, and local businesses. 
              Work with a team that sets you up for success—combining proven automation and real 
              human oversight to deliver qualified leads and more deals, every month.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    The Human Touch in a Digital World
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We are Cognitive Architects. Our real people work side-by-side with 
                    you to design the "logic" behind your AI, ensuring technology follows 
                    your brand's voice and never feels robotic.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    ROI Focus: Real Results for Lean Teams
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    We only implement tools that help you grow revenue or save time—your 
                    results matter most. We build the digital infrastructure that makes a 
                    3-person team perform like a 50-person powerhouse.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    Local Knowledge, AI Power
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Our local focus means smarter answers and faster growth. We understand 
                    your unique needs because we work in the same communities you serve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual - Photo with overlays */}
          <div className="relative">
            {/* Main Photo */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={teamPhoto} 
                alt="Professional team collaborating on AI-powered business solutions" 
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
            </div>

            {/* Infographic overlay - Team Multiplier */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-card/95 backdrop-blur-sm rounded-2xl shadow-card-hover p-6 border border-border">
              <div className="flex items-center justify-between gap-6">
                {/* Before */}
                <div className="text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-muted mx-auto flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="font-display text-2xl font-bold text-foreground">3</p>
                  <p className="text-xs text-muted-foreground">Person Team</p>
                </div>
                
                {/* Arrow/Transformation */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-[2px] bg-gradient-hero relative">
                    <div className="absolute -right-1 -top-1 w-0 h-0 border-l-8 border-l-primary border-y-4 border-y-transparent" />
                  </div>
                  <span className="text-xs text-primary font-semibold mt-1">AI + Experts</span>
                </div>
                
                {/* After */}
                <div className="text-center flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/20 mx-auto flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-display text-2xl font-bold text-gradient">50</p>
                  <p className="text-xs text-muted-foreground">Team Performance</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-card-hover p-4 border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">Human-Guided</p>
                  <p className="text-xs text-muted-foreground">Expert supervised AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;