import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  Clock,
  DollarSign,
  Users,
  Brain,
  Shield,
  Calendar,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Minus,
  Zap,
  Building2,
  Stethoscope,
  Scale,
  Home,
  ChevronRight,
} from "lucide-react";

const tableOfContents = [
  { id: "what-is", label: "What is an AI Receptionist?" },
  { id: "how-it-works", label: "How Do AI Receptionists Work?" },
  { id: "benefits", label: "Benefits for Your Business" },
  { id: "comparison", label: "AI Receptionist vs. Alternatives" },
  { id: "features", label: "Key Features to Look For" },
  { id: "use-cases", label: "Use Cases by Industry" },
  { id: "choosing", label: "How to Choose the Right One" },
  { id: "pricing", label: "Pricing: What to Expect" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "next-steps", label: "Conclusion & Next Steps" },
];

const comparisonData = [
  { feature: "24/7 Availability", ai: "full", human: "partial", answering: "full", voicemail: "full" },
  { feature: "Cost per Month", ai: "$99–$499", human: "$2,500–$4,500", answering: "$200–$1,200", voicemail: "$0–$30" },
  { feature: "Lead Qualification", ai: "full", human: "full", answering: "partial", voicemail: "none" },
  { feature: "Appointment Booking", ai: "full", human: "full", answering: "partial", voicemail: "none" },
  { feature: "CRM Integration", ai: "full", human: "partial", answering: "partial", voicemail: "none" },
  { feature: "Consistent Quality", ai: "full", human: "partial", answering: "partial", voicemail: "none" },
  { feature: "Scales Instantly", ai: "full", human: "none", answering: "partial", voicemail: "full" },
  { feature: "Bilingual Support", ai: "full", human: "partial", answering: "partial", voicemail: "none" },
  { feature: "Warm Personality", ai: "partial", human: "full", answering: "partial", voicemail: "none" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "full") return <CheckCircle2 className="w-5 h-5 text-primary mx-auto" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-accent-foreground mx-auto" />;
  if (status === "none") return <XCircle className="w-5 h-5 text-destructive/60 mx-auto" />;
  return <span className="text-sm text-muted-foreground text-center block">{status}</span>;
};

const features = [
  { icon: Calendar, title: "Appointment Scheduling", desc: "Books, reschedules, and cancels appointments directly on your calendar in real time." },
  { icon: Phone, title: "Call Routing & Transfers", desc: "Intelligently routes callers to the right person or department based on intent." },
  { icon: Zap, title: "CRM & Calendar Integration", desc: "Syncs with your CRM, Google Calendar, Outlook, and practice management tools." },
  { icon: Users, title: "Customizable Scripts & Voice", desc: "Tailor the AI's personality, tone, and conversation flow to match your brand." },
  { icon: Shield, title: "Security & Compliance", desc: "Built on trusted, secure infrastructure with HIPAA-ready configurations available for medical and legal practices." },
  { icon: Clock, title: "24/7 Availability", desc: "Answers every call — nights, weekends, and holidays — without overtime costs." },
];

const industries = [
  { icon: Home, title: "Home Services", slug: "/ai-receptionist/industries/hvac-contractors", examples: ["HVAC contractors", "plumbers", "electricians", "roofers"], pain: "Emergency calls come at all hours. An AI receptionist captures every lead, qualifies urgency, and dispatches your team — even at 2 AM." },
  { icon: Stethoscope, title: "Medical & Dental", slug: "/ai-receptionist/industries/dental-clinics", examples: ["Dental clinics", "chiropractors", "medical spas", "therapists"], pain: "Patient scheduling, insurance questions, and after-hours calls overwhelm front desks. AI handles appointment booking and triage 24/7." },
  { icon: Scale, title: "Legal", slug: "/ai-receptionist/industries/personal-injury-lawyers", examples: ["Personal injury", "family law", "estate planning", "criminal defense"], pain: "Potential clients call once — if no one answers, they call the next firm. An AI receptionist ensures you never lose a case to a missed call." },
  { icon: Building2, title: "Real Estate", slug: "/ai-receptionist/industries/residential-real-estate", examples: ["Residential agents", "property managers", "mortgage brokers"], pain: "Buyers and sellers call during showings, open houses, and off-hours. AI qualifies leads and books appointments while you're in the field." },
];

const faqs = [
  { q: "Can an AI receptionist really sound natural?", a: "**Yes.** Modern AI receptionists use advanced voice synthesis and natural language processing to hold fluid, natural-sounding conversations. Most callers cannot distinguish the AI from a human receptionist, especially when the system is properly trained with your brand's tone and terminology." },
  { q: "Will an AI receptionist replace my staff?", a: "**No.** An AI receptionist is designed to augment your team, not replace them. It handles routine calls, after-hours inquiries, and overflow volume so your staff can focus on high-value tasks that require a human touch." },
  { q: "How long does it take to set up an AI receptionist?", a: "**Most businesses are live within 24–48 hours.** Setup involves configuring your call flows, integrating with your calendar and CRM, and customizing the AI's script. BrightLaunchIQ handles the entire setup process for you." },
  { q: "Is my data safe with an AI receptionist?", a: "**Yes.** Reputable AI receptionist providers use strong encryption, SOC 2–aligned infrastructure, and secure protocols. All call data is encrypted in transit and at rest, and access is strictly controlled." },
  { q: "Can an AI receptionist handle multiple calls at once?", a: "**Yes.** Unlike a human receptionist who can only handle one call at a time, an AI receptionist can manage unlimited simultaneous calls. This means zero hold times and zero missed calls, even during peak hours." },
  { q: "What happens if the AI can't answer a question?", a: "**It transfers the call.** Well-designed AI receptionists recognize when a question is outside their scope and seamlessly transfer the caller to a live team member. The handoff includes context so the caller doesn't have to repeat themselves." },
  { q: "Do AI receptionists work with my existing phone number?", a: "**Yes.** AI receptionists integrate with your current phone system through call forwarding. You keep your existing business number — no changes needed for your customers." },
  { q: "Can an AI receptionist speak multiple languages?", a: "**Yes.** Most modern AI receptionists support bilingual or multilingual conversations. BrightLaunchIQ's AI Receptionist supports English and Spanish out of the box, with additional languages available." },
  { q: "What's the ROI of an AI receptionist?", a: "**Significant.** The average service business loses $15,000–$75,000 per year in missed calls. An AI receptionist that costs $199/month pays for itself by capturing just 2–3 additional leads per month." },
  { q: "Can I customize what the AI says?", a: "**Absolutely.** You have full control over the AI's scripts, tone, and conversation flow. You can create custom responses for FAQs, set qualification criteria for leads, and define exactly how calls should be routed." },
  { q: "How does an AI receptionist handle appointment scheduling?", a: "**In real time.** The AI connects to your calendar, checks availability, and books appointments during the call. It can also send confirmation texts and emails, and handle rescheduling and cancellations." },
  { q: "Is there a contract or commitment required?", a: "**Not with BrightLaunchIQ.** We offer month-to-month plans with no long-term contracts. You can upgrade, downgrade, or cancel at any time." },
];

const AIReceptionistGuide = () => {
  useSEO({
    title: "The Ultimate Guide to AI Receptionists | BrightLaunchIQ",
    description: "Everything you need to know about AI receptionists — how they work, benefits, features, pricing, and how to choose the right one for your business.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-guide",
    keywords: "AI receptionist guide, AI receptionist benefits, AI receptionist features, AI receptionist pricing, AI phone answering, virtual receptionist",
  });

  useEffect(() => {
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "guide-schema";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Ultimate Guide to AI Receptionists",
      "description": "A comprehensive guide covering everything about AI receptionists — technology, benefits, features, pricing, and industry use cases.",
      "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-guide",
      "author": { "@type": "Organization", "name": "BrightLaunchIQ" },
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ", "url": "https://brightlaunchiq.com" },
      "mainEntityOfPage": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-guide",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com" },
          { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center" },
          { "@type": "ListItem", "position": 3, "name": "AI Receptionist Guide", "item": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-receptionist-guide" },
        ],
      },
    });
    document.head.appendChild(schema);

    const faqSchema = document.createElement("script");
    faqSchema.type = "application/ld+json";
    faqSchema.id = "guide-faq-schema";
    faqSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/\*\*/g, "") },
      })),
    });
    document.head.appendChild(faqSchema);

    return () => {
      document.getElementById("guide-schema")?.remove();
      document.getElementById("guide-faq-schema")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-hero text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-4 block">Comprehensive Pillar Guide</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                The Ultimate Guide to AI Receptionists
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Everything you need to know about AI receptionists — how they work, the business benefits, key features, real-world use cases, pricing, and how to choose the right one.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment">
                    Get My Free AI Score <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="tel:1-877-879-5552">Talk to a Live AI Receptionist Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 bg-card border-b border-border">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-xl font-bold text-foreground mb-6">In This Guide</h2>
              <nav className="grid sm:grid-cols-2 gap-2" aria-label="Table of contents">
                {tableOfContents.map((item, i) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground group"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* Section 1: What is an AI Receptionist? */}
        <section id="what-is" className="py-16 md:py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                1. What Is an AI Receptionist?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>An AI receptionist is an artificial intelligence-powered phone system that answers calls, qualifies leads, books appointments, and routes inquiries — automatically and around the clock.</strong> Unlike voicemail or basic auto-attendants, an AI receptionist holds natural, two-way conversations with callers using advanced voice technology.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Think of it as a virtual team member who never takes a day off, never puts a caller on hold, and never forgets to follow up. It handles the repetitive, high-volume calls so your human team can focus on work that truly requires a personal touch.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Phone, title: "Answers Every Call", desc: "24/7/365 — no missed calls, no hold times, no voicemail." },
                  { icon: Brain, title: "Qualifies Leads", desc: "Asks the right questions and captures caller information in real time." },
                  { icon: Calendar, title: "Books Appointments", desc: "Connects to your calendar and schedules meetings during the call." },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-xl border border-border p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: How Do AI Receptionists Work? */}
        <section id="how-it-works" className="py-16 md:py-20 bg-muted/30 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                2. How Do AI Receptionists Work?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                <strong>AI receptionists use three core technologies to understand and respond to callers: Natural Language Processing (NLP), Machine Learning, and Voice Synthesis.</strong> These technologies work together to create a seamless, natural conversation experience.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { step: "1", title: "Call Arrives", desc: "A customer calls your business number. The call is forwarded to the AI receptionist automatically." },
                  { step: "2", title: "Speech Recognition", desc: "The AI converts the caller's spoken words into text using advanced speech-to-text (STT) technology." },
                  { step: "3", title: "Intent Analysis", desc: "Natural Language Processing analyzes what the caller wants — booking an appointment, asking a question, reporting an emergency, etc." },
                  { step: "4", title: "Intelligent Response", desc: "The AI generates a contextually appropriate response based on your custom scripts, business rules, and conversation history." },
                  { step: "5", title: "Action Execution", desc: "The AI takes action — books an appointment, transfers the call, sends a text message, or logs the lead in your CRM." },
                  { step: "6", title: "Follow-Up", desc: "After the call, the AI sends confirmation texts, emails summaries to your team, and updates your CRM automatically." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Core Technologies Behind AI Receptionists</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Natural Language Processing", desc: "Understands the meaning and intent behind human speech, not just keywords." },
                    { title: "Machine Learning", desc: "Improves over time by learning from thousands of conversations and outcomes." },
                    { title: "Voice Synthesis (TTS)", desc: "Generates natural-sounding speech that matches your brand's tone and personality." },
                  ].map((t) => (
                    <div key={t.title} className="text-center">
                      <h4 className="font-display text-sm font-bold text-foreground mb-1">{t.title}</h4>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Benefits */}
        <section id="benefits" className="py-16 md:py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                3. The Benefits of an AI Receptionist for Your Business
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>An AI receptionist delivers measurable ROI by eliminating missed calls, reducing payroll costs, and improving customer experience.</strong> Here are the top benefits:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Clock, title: "24/7 Availability", desc: "Never miss a call again. Your AI receptionist answers every call — nights, weekends, and holidays — ensuring you capture every lead and serve every customer." },
                  { icon: DollarSign, title: "Significant Cost Savings", desc: "A full-time receptionist costs $30,000–$55,000/year plus benefits. An AI receptionist delivers the same (or better) call handling for a fraction of the cost." },
                  { icon: Users, title: "Improved Customer Experience", desc: "Zero hold times, zero transfers to voicemail, and consistent, professional service on every call. Your customers get answers instantly." },
                  { icon: Zap, title: "Increased Staff Productivity", desc: "Free your team from phone interruptions. When routine calls are handled by AI, your staff can focus on revenue-generating activities." },
                  { icon: Brain, title: "Enhanced Lead Capture", desc: "Every caller is asked qualifying questions. Lead information is logged in your CRM in real time — no sticky notes, no forgotten follow-ups." },
                  { icon: Shield, title: "Consistent Quality", desc: "No bad days, no sick calls, no turnover. Your AI receptionist delivers the same high-quality experience on call #1 and call #10,000." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ROI Callout */}
              <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">The ROI Math</h3>
                <p className="text-muted-foreground mb-4">The average service business misses 40% of inbound calls. At an average job value of $500, just 5 missed calls per week = <strong className="text-foreground">$130,000 in lost revenue per year</strong>.</p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment">
                    Get My Free AI Score <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Comparison */}
        <section id="comparison" className="py-16 md:py-20 bg-muted/30 scroll-mt-24">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                4. AI Receptionist vs. The Alternatives
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>When comparing call handling options, an AI receptionist offers the best combination of cost, availability, and capability.</strong> Here's how the four main options stack up:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-xl border border-border overflow-hidden">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-display text-sm font-bold text-foreground">Feature</th>
                      <th className="text-center p-4 font-display text-sm font-bold text-primary">AI Receptionist</th>
                      <th className="text-center p-4 font-display text-sm font-bold text-foreground">Human Receptionist</th>
                      <th className="text-center p-4 font-display text-sm font-bold text-foreground">Answering Service</th>
                      <th className="text-center p-4 font-display text-sm font-bold text-foreground">Voicemail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                        <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                        <td className="p-4"><StatusIcon status={row.ai} /></td>
                        <td className="p-4"><StatusIcon status={row.human} /></td>
                        <td className="p-4"><StatusIcon status={row.answering} /></td>
                        <td className="p-4"><StatusIcon status={row.voicemail} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Full support</span>
                  <span className="flex items-center gap-1"><Minus className="w-4 h-4 text-accent-foreground" /> Partial/varies</span>
                  <span className="flex items-center gap-1"><XCircle className="w-4 h-4 text-destructive/60" /> Not available</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Key Features */}
        <section id="features" className="py-16 md:py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                5. Key Features to Look for in an AI Receptionist
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>Not all AI receptionists are created equal.</strong> When evaluating providers, these are the essential AI receptionist features you should look for:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {features.map((f) => (
                  <div key={f.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-card-hover transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <f.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/ai-receptionist/features">
                    See All AI Receptionist Features <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Industry Use Cases */}
        <section id="use-cases" className="py-16 md:py-20 bg-muted/30 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                6. AI Receptionist Use Cases by Industry
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>AI receptionists deliver value across every service-based industry.</strong> Here's how specific sectors benefit from AI call handling:
              </p>

              <div className="space-y-8">
                {industries.map((ind) => (
                  <div key={ind.title} className="bg-card rounded-xl border border-border p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <ind.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">{ind.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{ind.pain}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {ind.examples.map((ex) => (
                        <span key={ex} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">{ex}</span>
                      ))}
                    </div>
                    <Link to={ind.slug} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
                      Explore {ind.title} solutions <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/ai-receptionist/industries">
                    View All 50+ Industries <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How to Choose */}
        <section id="choosing" className="py-16 md:py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                7. How to Choose the Right AI Receptionist
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>Choosing the right AI receptionist comes down to matching the platform's capabilities to your business needs.</strong> Follow this step-by-step evaluation framework:
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { title: "Define Your Call Volume & Hours", desc: "How many calls do you get per day? When do most calls come in? This determines the tier and features you need." },
                  { title: "Identify Your Integration Requirements", desc: "Does the AI need to connect with your CRM, calendar, or practice management software? List your must-have integrations." },
                  { title: "Evaluate Call Handling Complexity", desc: "Are your calls simple (booking requests) or complex (multi-step qualification)? More complex flows require more advanced AI." },
                  { title: "Test the Voice & Personality", desc: "Request a demo call. Does the AI sound natural? Can you customize the tone to match your brand?" },
                  { title: "Check Compliance & Security", desc: "If you're in healthcare or legal, ensure the provider offers HIPAA compliance and data encryption." },
                  { title: "Review Pricing Transparency", desc: "Avoid providers with hidden fees. Look for clear per-call or flat-rate pricing with no surprises." },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Questions to Ask During a Demo</h3>
                <ul className="space-y-2">
                  {[
                    "How quickly can I go live?",
                    "Can I listen to sample calls?",
                    "What happens when the AI can't handle a question?",
                    "How do you handle call spikes?",
                    "What reporting and analytics do you provide?",
                    "Is there a setup fee or long-term contract?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Pricing */}
        <section id="pricing" className="py-16 md:py-20 bg-muted/30 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                8. AI Receptionist Pricing: What to Expect
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>AI receptionist pricing typically ranges from $99 to $499+ per month, depending on features and call volume.</strong> Here's a breakdown of the most common pricing models:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { model: "Per Call", range: "$1–$3/call", best: "Low-volume businesses (under 100 calls/month)", note: "Costs can spike during busy periods." },
                  { model: "Per Minute", range: "$0.50–$1.50/min", best: "Businesses with short, predictable calls", note: "Longer calls can become expensive." },
                  { model: "Flat Monthly Fee", range: "$99–$499/mo", best: "Most businesses — predictable budgeting", note: "Best value for growing businesses." },
                ].map((item) => (
                  <div key={item.model} className="bg-card rounded-xl border border-border p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.model}</h3>
                    <p className="text-2xl font-bold text-primary mb-3">{item.range}</p>
                    <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {item.best}</p>
                    <p className="text-xs text-muted-foreground italic">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/pricing">
                    See BrightLaunchIQ Pricing <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" className="py-16 md:py-20 scroll-mt-24">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                9. Frequently Asked Questions About AI Receptionists
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                <strong>Get clear, direct answers to the most common questions about AI receptionists.</strong>
              </p>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
                    <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      <div dangerouslySetInnerHTML={{ __html: faq.a.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section 10: Conclusion & CTA */}
        <section id="next-steps" className="py-16 md:py-24 bg-gradient-hero text-white scroll-mt-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                10. Ready to Stop Missing Calls?
              </h2>
              <p className="text-lg text-white/80 mb-4">
                An AI receptionist isn't a luxury — it's the competitive advantage that separates businesses that grow from businesses that stagnate. Every missed call is a missed opportunity.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Take the first step: assess your readiness, hear the AI in action, or explore our plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/resources/ai-receptionist-readiness-assessment">
                    Get My Free AI Score <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="tel:1-877-879-5552">Call Our Live AI Receptionist Demo</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionistGuide;
