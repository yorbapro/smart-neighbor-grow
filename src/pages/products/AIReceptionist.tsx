import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Phone, Check, ArrowRight, X, AlertTriangle, Calendar, UserCheck, PhoneForwarded,
  HelpCircle, Moon, Shield, Lock, Server, Star, Wrench, Stethoscope, Scale,
  Briefcase, Building2, MapPin, MessageCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AIReceptionist = () => {
  useEffect(() => {
    document.title = "AI Receptionist — 24/7 AI Phone Answering | BrightLaunchIQ";

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "24/7 AI receptionist that answers every call, books appointments, qualifies leads & routes urgent calls. Best for HVAC, dental, legal. No contracts.");
    setMeta("keywords", "AI receptionist, AI receptionist for small business, best AI receptionist, AI answering service, 24/7 AI receptionist, virtual receptionist AI, AI phone answering, AI call answering service, automated receptionist, AI receptionist cost, AI receptionist for HVAC, AI receptionist for contractors, AI receptionist for dentists, AI receptionist for law firms, AI receptionist for healthcare, AI receptionist for plumbers, AI receptionist vs virtual receptionist, AI receptionist vs answering service, AI front desk, AI appointment booking, after hours AI answering, missed call prevention AI");
    setMeta("og:title", "AI Receptionist for Small Business | BrightLaunchIQ", true);
    setMeta("og:description", "24/7 AI receptionist that answers every call, qualifies leads, and books appointments. Best for HVAC, dental, legal, and service businesses.", true);
    setMeta("og:type", "product", true);
    setMeta("og:url", "https://brightlaunchiq.com/ai-receptionist", true);

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brightlaunchiq.com/ai-receptionist");

    window.scrollTo(0, 0);

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Product Schema
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "BrightLaunchIQ AI Receptionist",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud-based",
      "description": "Best AI receptionist for small business. 24/7 AI phone answering service that answers every call, qualifies leads, books appointments, routes urgent calls, and handles FAQs. Built for HVAC, plumbing, dental offices, law firms, medical practices, contractors, and all service businesses.",
      "featureList": [
        "24/7 AI call answering",
        "Appointment booking and calendar integration",
        "Lead qualification and scoring",
        "Intelligent call routing and live transfer",
        "After-hours and overflow coverage",
        "CRM integration (Salesforce, HubSpot, Zoho)",
        "Call transcription and summaries",
        "SMS and email confirmations",
        "Custom branded greeting",
        "Multi-location support",
        "HIPAA-ready configurations"
      ],
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "url": "https://brightlaunchiq.com/ai-receptionist"
    });
    document.head.appendChild(productScript);

    // FAQ Schema for this page
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "product-faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best AI receptionist for small business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrightLaunchIQ is the best AI receptionist for small businesses because it offers 24/7 call answering, appointment booking, lead qualification, CRM integration, and natural-sounding conversations. It's purpose-built for service businesses like HVAC, plumbing, dental offices, law firms, and contractors, with setup in days and no contracts."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an AI receptionist cost compared to hiring staff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI receptionist costs $199-$499/month — a fraction of a full-time receptionist's $35,000-$55,000+ annual salary. No payroll taxes, no benefits, no overtime, no training costs, and no turnover. It works 24/7 at a predictable monthly rate."
          }
        },
        {
          "@type": "Question",
          "name": "Is BrightLaunchIQ AI Receptionist good for HVAC and plumbing companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. HVAC and plumbing companies miss 60-80% of inbound calls because technicians are on job sites. BrightLaunchIQ answers every call instantly, books service appointments, captures emergency details, and routes urgent calls to the on-call technician — even at 2 AM."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Speakable Schema
    const speakableScript = document.createElement("script");
    speakableScript.type = "application/ld+json";
    speakableScript.id = "speakable-schema";
    speakableScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI Receptionist for Small Business | BrightLaunchIQ",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      },
      "url": "https://brightlaunchiq.com/ai-receptionist"
    });
    document.head.appendChild(speakableScript);

    return () => {
      ['product-schema', 'product-faq-schema', 'speakable-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  const comparisonRows = [
    { category: "Availability", ai: "24/7/365", staff: "8 hours/day" },
    { category: "Cost", ai: "Fraction of salary", staff: "$35,000–$55,000+/year + taxes" },
    { category: "Training Time", ai: "Days", staff: "Weeks/months" },
    { category: "Sick Days", ai: "Never", staff: "Yes" },
    { category: "Turnover", ai: "None", staff: "High" },
    { category: "Scalability", ai: "Instant", staff: "Hire & train again" },
    { category: "After-Hours", ai: "Included", staff: "Overtime required" },
    { category: "Consistency", ai: "Always on-script", staff: "Varies" },
  ];

  const faqs = [
    {
      q: "Will customers know it's AI?",
      a: "Most callers don't notice. The AI uses natural, conversational language trained specifically on your business. It sounds professional and handles conversations like a real front desk.",
    },
    {
      q: "Can it transfer live calls?",
      a: "Yes. You set routing rules — certain call types (emergencies, VIPs, specific requests) are instantly transferred to a live person. Everything else is qualified and organized by the AI.",
    },
    {
      q: "Does it integrate with my calendar?",
      a: "Yes. BrightLaunchIQ integrates with popular calendar and scheduling tools so appointments are booked in real time. No double-bookings.",
    },
    {
      q: "What if I already have staff?",
      a: "The AI handles overflow, after-hours, and peak times — so your team focuses on in-person service and closing deals. No leads fall through the cracks.",
    },
    {
      q: "How long does setup take?",
      a: "Most businesses are live within a few days. We handle all training, configuration, and integration. No technical skills needed.",
    },
    {
      q: "Can it handle multiple locations?",
      a: "Yes. Each location can have its own settings, routing rules, and business hours — all managed from a single system with unified reporting.",
    },
    {
      q: "Does it sound human?",
      a: "Yes. The AI uses natural language processing to hold fluid, human-like conversations. Callers routinely assume they're speaking with a live receptionist.",
    },
    {
      q: "Is my data secure?",
      a: "All data is encrypted in transit and at rest using AES-256 encryption. We maintain strict access controls, never sell your data, and offer HIPAA-ready configurations for regulated industries.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Breadcrumb />

      {/* HERO */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/6 w-[300px] h-[300px] bg-accent/8 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">AI Receptionist</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Never Miss Another
              <br />
              <span className="text-gradient">Customer Call.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-4 max-w-3xl mx-auto">
              BrightLaunchIQ AI Receptionist answers your calls 24/7, books appointments, qualifies leads, and routes urgent calls — so you capture every opportunity without hiring more staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/get-started">
                  Start Free Trial
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="#how-it-works">See How It Works</Link>
              </Button>
            </div>

            <p className="text-sm text-white/50">
              No contracts. Setup in days. Cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* THE COST OF MISSED CALLS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Every Missed Call Is
              <span className="text-gradient"> Lost Revenue.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
              {[
                "30–50% of inbound calls go unanswered at small businesses",
                "78% of callers won't leave a voicemail",
                "Most customers call the next competitor immediately",
                "After-hours and lunch breaks = lost jobs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xl font-display font-bold text-foreground">
              BrightLaunchIQ AI Receptionist ensures every call is answered professionally —{" "}
              <span className="text-primary">every time.</span>
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Simple Setup
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Your 24/7 AI Front Desk
              <span className="text-gradient block mt-2">in 4 Simple Steps</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { num: "01", icon: Phone, title: "Customer Calls Your Number", desc: "They dial your existing business number — no new number needed." },
              { num: "02", icon: MessageCircle, title: "AI Answers Instantly", desc: "Your branded greeting. Natural conversation. No hold times." },
              { num: "03", icon: Calendar, title: "AI Books, Qualifies, Routes", desc: "Books appointments, answers FAQs, qualifies leads, or routes urgent calls." },
              { num: "04", icon: Check, title: "You Get Results Instantly", desc: "Confirmations, summaries, transcripts, and recordings — delivered automatically." },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
                  <step.icon className="w-8 h-8 text-primary" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-secondary-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-secondary-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/get-started">
                Activate My AI Receptionist
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT IT HANDLES */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              More Than Just
              <span className="text-gradient"> Answering Calls</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Calendar,
                title: "Appointment Booking",
                items: ["Real-time calendar integration", "SMS & email confirmations", "Rescheduling & cancellations"],
              },
              {
                icon: UserCheck,
                title: "Lead Qualification",
                items: ["Custom intake questions", "Collects name, phone, service type, urgency", "Tags high-value opportunities"],
              },
              {
                icon: PhoneForwarded,
                title: "Call Routing",
                items: ["Transfers urgent calls", "Department routing", "Escalation rules"],
              },
              {
                icon: HelpCircle,
                title: "FAQ Handling",
                items: ["Pricing ranges", "Service areas & hours", "Common objections handled automatically"],
              },
              {
                icon: Moon,
                title: "After-Hours Coverage",
                items: ["Nights, weekends, holidays", "Overflow during busy hours", "Never miss a call again"],
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                items: ["Encrypted call handling", "Secure data storage", "Optional HIPAA-ready configurations"],
              },
            ].map((block) => (
              <div key={block.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <block.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE US */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Built for Growing
              <span className="text-gradient"> SMBs</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: MessageCircle, text: "Natural, human-like voice" },
              { icon: Wrench, text: "Custom trained on your business" },
              { icon: Lock, text: "Secure and compliant systems" },
              { icon: Calendar, text: "CRM & calendar integrations" },
              { icon: ArrowRight, text: "Fast setup (days, not months)" },
              { icon: Star, text: "Ongoing AI optimization included" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 p-5 rounded-xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-secondary-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-secondary-foreground/50 mb-4">Trusted by businesses in</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: Wrench, name: "Home Services" },
                { icon: Stethoscope, name: "Medical & Dental" },
                { icon: Scale, name: "Legal" },
                { icon: Briefcase, name: "Agencies" },
                { icon: Building2, name: "Local Services" },
                { icon: MapPin, name: "Multi-Location" },
              ].map((ind) => (
                <span key={ind.name} className="px-4 py-2 rounded-full bg-secondary-foreground/5 border border-secondary-foreground/10 text-sm text-secondary-foreground/70">
                  {ind.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI VS HIRING STAFF */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              AI Receptionist vs
              <span className="text-gradient"> Hiring a Full-Time Employee</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-3 bg-muted p-4">
                <div className="text-sm font-bold text-foreground">Category</div>
                <div className="text-sm font-bold text-primary text-center">AI Receptionist</div>
                <div className="text-sm font-bold text-muted-foreground text-center">In-House</div>
              </div>
              {comparisonRows.map((row, index) => (
                <div
                  key={row.category}
                  className={`grid grid-cols-3 p-4 items-center ${index % 2 === 0 ? "bg-muted/30" : ""}`}
                >
                  <div className="text-sm font-medium text-foreground">{row.category}</div>
                  <div className="text-sm font-semibold text-primary text-center">{row.ai}</div>
                  <div className="text-sm text-muted-foreground text-center">{row.staff}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Replace overhead with automation. Keep the human touch where it matters.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/pricing">
                See Plans & Pricing
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECURITY & RELIABILITY */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Security & Compliance
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Enterprise-Grade Security
              <span className="text-gradient block mt-2">for SMBs</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Lock, text: "Encrypted call handling" },
              { icon: Server, text: "Secure data storage" },
              { icon: Shield, text: "Role-based access controls" },
              { icon: Phone, text: "Call recordings stored safely" },
              { icon: Stethoscope, text: "Optional HIPAA-ready configurations" },
              { icon: Server, text: "Redundant infrastructure for uptime reliability" },
            ].map((point) => (
              <div key={point.text} className="flex items-start gap-4 p-5 rounded-2xl bg-secondary-foreground/5 border border-primary/10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-secondary-foreground/80 text-sm leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PLACEHOLDER */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Business Owners
              <span className="text-gradient"> Are Saying</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "We went from missing 60% of after-hours calls to capturing every single one. The system paid for itself in the first month.",
                name: "Marcus C.",
                role: "HVAC Company Owner",
              },
              {
                quote: "Response time dropped from hours to seconds. We're booking 3x more consultations without adding staff.",
                name: "Sarah R.",
                role: "Managing Partner, Law Firm",
              },
              {
                quote: "Our front desk was overwhelmed. Now the AI handles overflow seamlessly and our team focuses on patients in the office.",
                name: "David T.",
                role: "Dental Practice Manager",
              },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT FOR YOUR INDUSTRY */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
              Industry Solutions
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Built for
              <span className="text-gradient"> Your Industry</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Purpose-built AI workflows for the industries that depend on incoming calls the most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { icon: Wrench, name: "HVAC Contractors", slug: "hvac-contractors", desc: "Capture emergency repair calls 24/7 and book service appointments instantly." },
              { icon: Stethoscope, name: "Dental Clinics", slug: "dental-clinics", desc: "Fill cancellations, book new patients, and handle insurance questions." },
              { icon: Scale, name: "Personal Injury Lawyers", slug: "personal-injury-lawyers", desc: "Qualify high-value case leads and schedule consultations around the clock." },
              { icon: Building2, name: "Real Estate Agents", slug: "residential-real-estate", desc: "Capture buyer & seller inquiries and book showings on their schedule." },
              { icon: Phone, name: "Emergency Plumbers", slug: "emergency-plumbers", desc: "Dispatch emergency calls instantly and never lose an after-hours job." },
              { icon: Calendar, name: "Medical Spas", slug: "medical-spas", desc: "Book treatments, sell packages, and manage client consultations effortlessly." },
            ].map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{ind.desc}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild className="group">
              <Link to="/industries">
                View All 50+ Industries
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Frequently Asked
              <span className="text-gradient block mt-2">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group bg-secondary-foreground/5 rounded-2xl border border-primary/10 px-6 overflow-hidden transition-all duration-300 data-[state=open]:bg-secondary-foreground/10 data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-secondary-foreground hover:text-primary py-6 text-lg [&[data-state=open]>svg]:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 leading-relaxed text-base text-secondary-foreground/80">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 bg-gradient-hero-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Missing Calls.
              <br />
              <span className="text-gradient">Start Capturing Revenue.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Activate your AI Receptionist in days and never let another opportunity slip away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/get-started">
                  Start Free Trial
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIReceptionist;
