import { Target, Users, TrendingUp } from "lucide-react";

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
            <p className="text-lg text-muted-foreground mb-8">
              At BrightLaunchIQ, we don't think powerful automation should only be for 
              giant corporations. We started this company to help local business owners 
              use AI sales tools to grow their income without increasing their stress.
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
                  <p className="text-muted-foreground">
                    We are Cognitive Architects. Our real people work side-by-side with 
                    you to design the "logic" behind your AI, ensuring technology follows 
                    your brand's voice.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    Real Results for Lean Teams
                  </h3>
                  <p className="text-muted-foreground">
                    We focus on Return on AI (ROI). We build the digital infrastructure 
                    that makes a 3-person team feel like a 50-person powerhouse.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">
                    Our Mission: Your Growth
                  </h3>
                  <p className="text-muted-foreground">
                    If a tool doesn't help you make more money or save more time, 
                    we don't use it. Simple as that.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-dark p-8 flex items-center justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative text-center text-secondary-foreground">
                <div className="font-display text-6xl md:text-7xl font-bold mb-4 text-gradient">
                  3→50
                </div>
                <p className="text-lg opacity-80 max-w-xs mx-auto">
                  Make your 3-person team perform like a 50-person powerhouse
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card-hover p-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">Human-Guided</p>
                  <p className="text-sm text-muted-foreground">Expert supervised AI</p>
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
