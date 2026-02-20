import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import TrustBadges from "@/components/TrustBadges";
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
  Linkedin,
  Brain,
  TrendingUp,
  Lock,
  Eye,
  ShieldCheck,
  Ban
} from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | BrightLaunchIQ AI Receptionist";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Meet BrightLaunchIQ. Human-guided AI receptionist helping local businesses capture every call and grow revenue."
      );
    }

    // Set canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brightlaunchiq.com/about");

    // Add Organization and AboutPage schema
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const aboutSchema = document.createElement("script");
    aboutSchema.type = "application/ld+json";
    aboutSchema.id = "about-schema";
    aboutSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About BrightLaunchIQ",
      "description": "BrightLaunchIQ combines local experts, AI-driven sales tools, and local businesses. Our mission is to help small business owners use AI sales tools to grow their income without increasing their stress.",
      "mainEntity": {
        "@type": "Organization",
        "name": "BrightLaunchIQ",
        "description": "Human-guided AI for business growth. We help contractors, consultants, and local businesses respond first, automate the busywork, and win more customers.",
        "foundingDate": "2023",
        "slogan": "Making Big Tech Work for Main Street",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "knowsAbout": [
          "AI Lead Generation",
          "AI Sales Automation",
          "Answer Engine Optimization",
          "Human-Guided AI",
          "Small Business Automation"
        ]
      }
    });
    document.head.appendChild(aboutSchema);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("about-schema");
      if (el) el.remove();
    };
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
      title: "Human-in-the-Loop",
      description: "Our expert consultants guide and supervise every AI system, so your customer touchpoints always feel real and never robotic.",
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
    { year: "2023", event: "Founded with a mission to democratize AI sales for local businesses" },
    { year: "2024", event: "Launched LaunchPad 360™ and served 100+ businesses nationwide" },
    { year: "2025", event: "Expanded to regional hubs across the United States" },
    { year: "2026", event: "Pioneering Agentic Go-To-Market solutions for SMBs" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Making Big Tech Work for <span className="text-primary">Main Street</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              BrightLaunchIQ connects local experts, AI-driven sales tools, and local businesses. 
              We understand your unique needs and help you grow without increasing stress.
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
                Our Mission: Your Growth
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Human Touch in an AI World
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We believe small business owners deserve world-class sales automation, without 
                sacrificing what makes their company special. Our hybrid AI and expert team brings 
                sales you can count on—made for local business owners.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our expert team guides the AI to keep every interaction friendly and real for your 
                customers. We build your sales engine around your story and values, making sure 
                your technology listens and responds like a trusted member of your team—never a robot.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If a tool doesn't help you make more money or save more time, we don't use it. 
                Simple as that. You'll see clear results in less time, and every step is checked 
                by an expert.
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
                    Our tools are made for small local businesses—so you get the strength of a big 
                    company without hiring a huge staff. More sales, less stress, simple systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI + Experts Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Human-Guided AI
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI Plus Experts: How We Work
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">AI Does the Work</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI tools track leads around the clock so you never miss an opportunity. 
                  Automated outreach, instant responses, continuous prospecting.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Experts Guide Everything</h3>
                <p className="text-sm text-muted-foreground">
                  Real people work side-by-side with you to design the logic behind your AI. 
                  Human-verified, local strategies for smarter sales.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">You Get Results</h3>
                <p className="text-sm text-muted-foreground">
                  Grow your reach and outperform competitors. Fill your pipeline and manage 
                  growth with less effort using AI that understands your unique needs.
                </p>
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
                We're not a faceless tech company. Get connected to a real expert who 
                understands your area. Our local focus means smarter answers and faster 
                growth for your business.
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

      {/* Data Protection & Compliance Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                Our Commitment to Security
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Data. Your Business. <span className="text-primary">Our Promise.</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe AI should grow your business — never put it at risk. Security and transparency are built into everything we do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Lock, title: "AES-256 Encryption", desc: "All data is encrypted in transit and at rest using the same standards trusted by major financial institutions." },
                { icon: Ban, title: "Zero-Training Policy", desc: "Your proprietary business data is never used to train public AI models. Your data stays yours — period." },
                { icon: Eye, title: "GDPR & CCPA Ready", desc: "Our data handling practices are aligned with global privacy regulations so your customers' data is protected." },
                { icon: ShieldCheck, title: "SOC 2 Infrastructure", desc: "Our enterprise AI providers maintain SOC 2 Type II compliance, ensuring rigorous operational security." },
                { icon: Users, title: "Human Oversight", desc: "Every AI action is supervised by our expert team. You always have real-time override and blacklist capabilities." },
                { icon: Shield, title: "Transparent Operations", desc: "We publish our security practices openly. Visit our Trust & Security page for full details on how we protect you." },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-2xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/trust-security">
                  Learn More About Our Security
                  <ArrowRight className="ml-2 w-5 h-5" />
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
              Ready to Grow Your Business the Right Way?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free AI Visibility Audit to see how your business appears to AI search 
              engines, or schedule a call with our team to discuss your growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/aeo-audit">
                  Free AI Visibility Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/get-started">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <Footer />
    </div>
  );
};

export default About;
