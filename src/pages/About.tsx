import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Target, 
  Users, 
  Lightbulb, 
  Shield,
  Heart,
  Zap,
  MapPin,
  Linkedin
} from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | BrightLaunchIQ - Human-Guided AI for Local Business";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Meet the team behind BrightLaunchIQ. We're Cognitive Architects building invisible infrastructure that helps local businesses compete with enterprise-grade AI sales automation."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Marcus Reynolds",
      role: "Founder & CEO",
      bio: "Former enterprise sales leader who saw local businesses getting left behind in the AI revolution. Founded BrightLaunchIQ to democratize access to world-class sales automation.",
      avatar: "MR",
      linkedin: "#",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "PhD in Machine Learning from Stanford. Previously led AI initiatives at a Fortune 500 company. Passionate about responsible AI that augments human decision-making.",
      avatar: "SC",
      linkedin: "#",
    },
    {
      name: "David Thompson",
      role: "VP of Customer Success",
      bio: "20+ years helping small businesses grow. Believes technology should feel invisible—powerful results without complexity. Leads our human oversight team.",
      avatar: "DT",
      linkedin: "#",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Operations",
      bio: "Operations expert who built scalable systems for high-growth startups. Ensures every client gets enterprise-grade infrastructure with boutique-level attention.",
      avatar: "ER",
      linkedin: "#",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Human-Guided AI",
      description: "We believe the best AI systems have humans in the loop. Our experts set the rules, supervise results, and ensure every interaction feels authentic.",
    },
    {
      icon: Shield,
      title: "Bounded Autonomy",
      description: "AI should be powerful but controllable. We design systems with clear guardrails that keep you in command of your business decisions.",
    },
    {
      icon: Heart,
      title: "Local First",
      description: "We're not building for faceless corporations. Every feature is designed for the local business owner who cares about their community.",
    },
    {
      icon: Lightbulb,
      title: "Invisible Infrastructure",
      description: "The best technology disappears. We build systems that work silently in the background, delivering results without adding complexity.",
    },
  ];

  const milestones = [
    { year: "2023", event: "Founded in Sacramento with a mission to democratize AI sales" },
    { year: "2024", event: "Launched LaunchPad 360™ and served 100+ local businesses" },
    { year: "2025", event: "Expanded to 5 regional hubs across California and Nevada" },
    { year: "2026", event: "Pioneering Agentic Go-To-Market solutions for SMBs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Cognitive Architects for <span className="text-primary">Local Business</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're building the invisible infrastructure that helps local businesses 
              compete with enterprise-grade AI—without the enterprise complexity or cost.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Our Mission
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Democratizing AI for the Businesses That Built America
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                While Fortune 500 companies invest millions in AI sales teams, local businesses—the 
                backbone of our economy—were being left behind. We started BrightLaunchIQ to change that.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our founders saw a gap: enterprise AI tools were too expensive, too complex, and 
                designed for companies with dedicated IT departments. Local business owners needed 
                something different—powerful automation that just works, guided by humans who understand 
                their communities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to serve businesses across California and Nevada, helping them 
                capture leads, close deals, and grow—all for less than the cost of a daily coffee.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">The Math of Success</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-primary">$16.60</span>
                  </div>
                  <div>
                    <p className="font-semibold">Per Day</p>
                    <p className="text-sm text-secondary-foreground/70">Your 24/7 AI sales teammate</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-destructive">$80k+</span>
                  </div>
                  <div>
                    <p className="font-semibold">Per Year</p>
                    <p className="text-sm text-secondary-foreground/70">Traditional human hire cost</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-secondary-foreground/10">
                  <p className="text-sm text-secondary-foreground/80">
                    We believe every local business deserves access to the same growth tools 
                    as the biggest corporations—at a price that makes sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              What We Believe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide every decision we make and every system we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Meet The Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Humans Behind the AI
            </h2>
            <p className="text-lg text-muted-foreground">
              We're a team of sales veterans, AI researchers, and operations experts 
              united by a mission to help local businesses thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-display font-bold text-2xl">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building the Future of Local Business
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="font-display text-xl font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="relative flex-1 pb-6">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
                    {index < milestones.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-border" />
                    )}
                    <p className="pl-6 text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Where We Work
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Serving Communities Across the West
              </h2>
              <p className="text-secondary-foreground/80 mb-6">
                We're not a faceless tech company in Silicon Valley. We have boots on the ground 
                in the communities we serve—understanding local markets, local challenges, and 
                local opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sacramento", "Bakersfield", "Culver City", "Henderson", "Monterey"].map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    {city}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/locations">
                  Find Your Local Hub
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/30 text-secondary-foreground hover:bg-primary/10" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a local business ready to grow, or a talented professional 
              who wants to help democratize AI—we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Schedule Your Revenue Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
