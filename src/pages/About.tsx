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
    document.title = "About Us — Tony Yorba & Scott McKinnon | BrightLaunchIQ";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "BrightLaunchIQ was founded by Tony Yorba and Scott McKinnon — two business owners who built AI receptionist tools because they needed them first. Learn our story."
      );
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brightlaunchiq.com/about");

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const aboutSchema = document.createElement("script");
    aboutSchema.type = "application/ld+json";
    aboutSchema.id = "about-schema";
    aboutSchema.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About BrightLaunchIQ",
        "description": "BrightLaunchIQ was founded by Tony Yorba and Scott McKinnon to help local service businesses capture every customer call using AI receptionist technology.",
        "mainEntity": {
          "@type": "Organization",
          "@id": "https://brightlaunchiq.com/#organization",
          "name": "BrightLaunchIQ",
          "description": "AI receptionist provider for small businesses. Founded by Tony Yorba and Scott McKinnon.",
          "foundingDate": "2024",
          "founder": [
            { "@type": "Person", "@id": "https://brightlaunchiq.com/#tony-yorba" },
            { "@type": "Person", "@id": "https://brightlaunchiq.com/#scott-mckinnon" }
          ],
          "slogan": "Never Miss Another Customer Call",
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "knowsAbout": [
            "AI Receptionist",
            "AI Phone Answering",
            "Small Business Automation",
            "Lead Qualification",
            "Appointment Booking"
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://brightlaunchiq.com/#tony-yorba",
        "name": "Tony Yorba",
        "jobTitle": "Chief Executive Officer",
        "worksFor": { "@type": "Organization", "name": "BrightLaunchIQ" },
        "knowsAbout": ["Digital Marketing", "AI Business Automation", "Brand Strategy", "Small Business Growth"],
        "sameAs": ["https://www.linkedin.com/in/tony-yorba-a0309020"]
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://brightlaunchiq.com/#scott-mckinnon",
        "name": "Scott McKinnon",
        "jobTitle": "Chief Information Officer",
        "worksFor": { "@type": "Organization", "name": "BrightLaunchIQ" },
        "knowsAbout": ["AI Implementation", "Business Operations", "Screen Printing", "Small Business Technology"],
        "sameAs": ["https://www.linkedin.com/in/scott-mckinnon-785a1125"]
      }
    ]);
    document.head.appendChild(aboutSchema);

    window.scrollTo(0, 0);

    return () => {
      const el = document.getElementById("about-schema");
      if (el) el.remove();
    };
  }, []);

  const teamMembers = [
    {
      name: "Tony Yorba",
      role: "CEO & Co-Founder",
      bio: "Tony brings over a decade of hands-on digital marketing and brand strategy experience to BrightLaunchIQ. As the former president of Shine Brand Studios, he helped local businesses build their online presence from the ground up. When he saw how many of his clients were losing leads to missed calls and slow follow-ups, he knew AI could close that gap — and co-founded BrightLaunchIQ to make it happen.",
      avatar: "TY",
      linkedin: "https://www.linkedin.com/in/tony-yorba-a0309020",
    },
    {
      name: "Scott McKinnon",
      role: "CIO & Co-Founder",
      bio: "Scott has owned and operated Creative Impressions, a Sacramento screen-printing business, for over 20 years. He knows firsthand what it means to miss a call while you're on the production floor. Over the past year, Scott has dedicated thousands of hours to studying AI, large language models, and agentic workflows — turning that knowledge into practical tools that help small business owners like himself capture every opportunity.",
      avatar: "SM",
      linkedin: "https://www.linkedin.com/in/scott-mckinnon-785a1125",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Built by Business Owners, for Business Owners",
      description: "We didn't build BrightLaunchIQ in a lab. We built it because we needed it. Every feature solves a problem we've faced ourselves.",
    },
    {
      icon: Shield,
      title: "Human Oversight, Always",
      description: "AI handles the calls. Humans set the rules. You stay in control of how your business is represented to every caller.",
    },
    {
      icon: Heart,
      title: "Local First",
      description: "We serve the contractors, dentists, lawyers, and shop owners who are the backbone of their communities. Big-company tools, small-business values.",
    },
    {
      icon: Lightbulb,
      title: "Honest Results",
      description: "We don't make promises we can't back up. If something isn't working, we'll tell you — and fix it. Transparency is non-negotiable.",
    },
  ];

  const milestones = [
    { year: "2024", event: "Tony and Scott founded BrightLaunchIQ after seeing local businesses lose revenue to missed calls and slow lead follow-up." },
    { year: "2025", event: "Launched the AI Receptionist product and began serving service businesses across California and the western United States." },
    { year: "2026", event: "Expanding AI receptionist capabilities with deeper CRM integrations, multi-location support, and industry-specific voice agents." },
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
              Two Business Owners Who Got Tired of <span className="text-primary">Missing Calls</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              BrightLaunchIQ wasn't born in a Silicon Valley incubator. It was born in a screen-printing shop 
              and a digital marketing agency — two businesses where every missed call meant lost revenue. 
              We built the AI receptionist we wished we'd had years ago.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Why We Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                We Know What a Missed Call Costs
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Between us, we have over 30 years of experience running local businesses. Tony spent years 
                helping small companies build their brands through digital marketing at Shine Brand Studios. 
                Scott has run Creative Impressions, a Sacramento screen-printing company, for over two decades. 
                We both learned the same hard lesson: it doesn't matter how good your marketing is if nobody 
                picks up the phone.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When Scott started experimenting with AI and large language models, the lightbulb went on. 
                What if a small business could have an AI-powered receptionist that answers every call, 
                qualifies every lead, and books appointments — without hiring another employee? That question 
                became BrightLaunchIQ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not a faceless tech company. We're two guys who have stood behind counters, answered 
                our own phones, and lost sleep over missed opportunities. BrightLaunchIQ is the tool we 
                built for ourselves — and now we're sharing it with every local business that needs it.
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-8 text-secondary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">The Numbers That Matter</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-primary">30+</span>
                  </div>
                  <div>
                    <p className="font-semibold">Years of Business Ownership</p>
                    <p className="text-sm text-secondary-foreground/70">Combined experience running local businesses</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-xl font-bold text-primary">24/7</span>
                  </div>
                  <div>
                    <p className="font-semibold">Always-On Coverage</p>
                    <p className="text-sm text-secondary-foreground/70">Your AI receptionist never takes a day off</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-secondary-foreground/10">
                  <p className="text-sm text-secondary-foreground/80">
                    We price BrightLaunchIQ for the businesses we know — not enterprise budgets. 
                    Our AI Receptionist starts at $497/month, a fraction of what a part-time hire costs.
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
                Our Approach
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                AI That Works Because Humans Set It Up Right
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">We Train It On Your Business</h3>
                <p className="text-sm text-muted-foreground">
                  Your AI receptionist learns your services, your FAQs, your scheduling rules, and your 
                  tone of voice. It represents your business, not a generic script.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Real People Oversee Everything</h3>
                <p className="text-sm text-muted-foreground">
                  We review call logs, refine scripts, and adjust routing rules. The AI handles volume; 
                  our team handles quality.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">You See Measurable Results</h3>
                <p className="text-sm text-muted-foreground">
                  Fewer missed calls. More booked appointments. Clear reporting so you know 
                  exactly what your AI receptionist is doing for your business.
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
              These aren't corporate slogans. They're the principles we apply to our own businesses every day.
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
              Meet The Founders
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The People Behind BrightLaunchIQ
            </h2>
            <p className="text-lg text-muted-foreground">
              We're not AI researchers in a lab. We're business owners who use this technology every day 
              to solve real problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-card-hover transition-shadow"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center mb-6">
                  <span className="text-primary-foreground font-display font-bold text-2xl">
                    {member.avatar}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
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
              From Idea to Impact
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
                Based in Sacramento. Serving Businesses Nationwide.
              </h2>
              <p className="text-secondary-foreground/80 mb-6">
                BrightLaunchIQ is headquartered in Sacramento, California. Our AI receptionist 
                technology works for any service business in the United States — no matter where 
                your customers are calling from.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Sacramento, CA"].map((city) => (
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
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/30 text-secondary-foreground hover:bg-primary/10" asChild>
                <a href="tel:1-877-879-5552">
                  Call Us: 1-877-879-5552
                </a>
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
                We take data security seriously because our own businesses depend on it too.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Lock, title: "AES-256 Encryption", desc: "All data is encrypted in transit and at rest using industry-standard AES-256 encryption." },
                { icon: Ban, title: "Zero-Training Policy", desc: "Your business data is never used to train AI models. Your data stays yours." },
                { icon: Eye, title: "GDPR & CCPA Aligned", desc: "Our data handling practices are designed to align with GDPR and CCPA privacy regulations." },
                { icon: ShieldCheck, title: "SOC 2 Infrastructure", desc: "Our enterprise AI infrastructure providers maintain SOC 2 Type II compliance." },
                { icon: Users, title: "Human Oversight", desc: "Every AI system is supervised. You always have real-time override and control." },
                { icon: Shield, title: "Transparent Operations", desc: "We publish our security practices openly. Visit our Trust & Security page for details." },
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
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Talk to us about how an AI receptionist can work for your business. 
              No pressure, no jargon — just a straightforward conversation with people who get it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist-readiness-assessment">
                  Get My Free AI Score
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
