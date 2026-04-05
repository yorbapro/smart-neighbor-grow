import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useSEO from "@/hooks/useSEO";

const FAQ = () => {
  useSEO({
    title: "AI Receptionist FAQ | Complete Guide | BrightLaunchIQ",
    description: "Everything you need to know about the BrightLaunchIQ AI Receptionist—capabilities, setup, integrations, security, and ROI for small businesses.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/faq",
    keywords: "AI receptionist FAQ, AI voice agent questions, AI call answering, automated receptionist, BrightLaunchIQ guide",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Comprehensive FAQ Schema for SEO/AEO
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is the BrightLaunchIQ AI Receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "The BrightLaunchIQ AI Receptionist is a conversational voice AI system that answers inbound calls, engages customers in natural conversation, captures leads, books appointments, and routes calls—just like a trained human receptionist, but available 24/7." }},
        { "@type": "Question", "name": "How is this different from an answering service or IVR?", "acceptedAnswer": { "@type": "Answer", "text": "Unlike traditional answering services that rely on human agents reading scripts or rigid IVR systems, the BrightLaunchIQ AI Receptionist speaks naturally in real-time, understands context and intent, handles multi-step conversations, and integrates directly with your business systems." }},
        { "@type": "Question", "name": "Can the AI Receptionist book appointments?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The AI can check real-time availability, book, reschedule, or cancel appointments, and sync directly with your calendar (Google, Outlook, etc.)." }},
        { "@type": "Question", "name": "Which systems do you integrate with?", "acceptedAnswer": { "@type": "Answer", "text": "We integrate with major calendars (Google, Outlook), CRMs (HubSpot, Salesforce, ServiceTitan, Jobber, Housecall Pro, Zoho), and offer custom API/webhook integrations." }},
        { "@type": "Question", "name": "Is it HIPAA compliant?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, HIPAA-ready configurations are available in our Growth tier, including secure data handling, BAA availability, and PHI protection protocols." }}
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      const el = document.getElementById("faq-schema");
      if (el) el.remove();
    };
  }, []);

  const faqCategories = [
    {
      title: "1. Overview & Capabilities",
      faqs: [
        { q: "What is the BrightLaunchIQ AI Receptionist?", a: "The BrightLaunchIQ AI Receptionist is a conversational voice AI system that answers inbound calls, engages customers in natural conversation, captures leads, books appointments, and routes calls—just like a trained human receptionist, but available 24/7." },
        { q: "How is this different from an answering service or IVR?", a: "Unlike traditional solutions like answering services (which rely on human agents reading scripts) or IVR systems (which are rigid and frustrating), the BrightLaunchIQ AI Receptionist speaks naturally in real-time, understands context and intent, handles multi-step conversations, and integrates with your systems." },
        { q: "How natural does it sound?", a: "The system uses advanced low-latency voice AI to ensure conversations feel fluid and human-like. There are no awkward pauses or robotic delays. Many callers cannot distinguish it from a live receptionist." },
        { q: "Will callers know it's AI?", a: "The experience is designed to feel human. When appropriate or required, the system can transparently identify itself as an AI assistant." },
        { q: "Can it handle multiple calls at once?", a: "Yes. The AI can handle unlimited simultaneous calls, meaning no hold times, no busy signals, and no missed opportunities." },
        { q: "What types of businesses is this best for?", a: "It's ideal for home services (HVAC, plumbing, roofing), medical and dental practices, law firms, real estate teams, agencies, and any call-driven business." },
      ]
    },
    {
      title: "2. Features & Functionality",
      faqs: [
        { q: "What can the AI Receptionist do?", a: "Core capabilities include answering calls instantly 24/7, providing business info, capturing lead details, and filtering spam. Advanced capabilities (Premium & Growth) include real-time appointment booking, calendar sync, CRM integration, call summaries, and intelligent routing." },
        { q: "Can it book appointments?", a: "Yes. The AI can check real-time availability, book, reschedule, or cancel appointments, and sync directly with your calendar." },
        { q: "Can it qualify leads?", a: "Yes. The AI asks customized intake questions to filter out low-quality inquiries, prioritize high-value prospects, and capture structured lead data." },
        { q: "Can it transfer calls to my team?", a: "Absolutely. You can configure live transfers, department routing (sales, support, etc.), and emergency escalation." },
        { q: "How are emergency calls handled?", a: "You define what qualifies as an emergency. The AI can detect urgency based on keywords or intent and immediately transfer to an on-call staff member." },
        { q: "Can it handle complex conversations?", a: "Yes. It can ask follow-up questions, maintain context, handle multi-step interactions, and adapt responses dynamically." },
      ]
    },
    {
      title: "3. Plans & Pricing",
      faqs: [
        { q: "What's included in the Core Tier?", a: "Best for businesses needing reliable call coverage: 24/7 AI answering, custom greetings, lead capture & qualification, FAQ handling, message taking, and spam filtering." },
        { q: "What's included in the Premium Tier?", a: "Adds automation efficiency: Everything in Core plus appointment booking, calendar/CRM integrations, enhanced routing, call summaries/transcripts, and custom workflows." },
        { q: "What's included in the Growth Tier?", a: "Designed for scaling businesses: Everything in Premium plus advanced analytics, multi-location support, priority optimization, high-volume tuning, and HIPAA-ready configurations." },
        { q: "Can I upgrade later?", a: "Yes. You can move between tiers as your business evolves." },
        { q: "Is there a contract?", a: "No long-term contracts. Plans are typically month-to-month." },
      ]
    },
    {
      title: "4. Integrations & Technical Setup",
      faqs: [
        { q: "Which systems do you integrate with?", a: "We integrate with Google Calendar, Microsoft Outlook, HubSpot, Salesforce, ServiceTitan, Jobber, Housecall Pro, Zoho, and offer custom API/webhook integrations." },
        { q: "Do I need to change my phone number?", a: "No. You can keep your existing number. Calls can be forwarded to the AI, routed after a set number of rings, or used only after hours." },
        { q: "Does it work with my current phone system?", a: "Yes. It works with most VoIP and traditional systems via forwarding or integration." },
      ]
    },
    {
      title: "5. Setup & Onboarding",
      faqs: [
        { q: "How long does setup take?", a: "Most businesses go live within 3–5 business days." },
        { q: "What does onboarding include?", a: "Business discovery (services, FAQs, policies), AI training (scripts, tone, workflows), calendar/CRM integration, and testing/optimization." },
        { q: "What do you need from me?", a: "Business details, call handling preferences, optional scripts or examples, and access to systems if integrating." },
        { q: "Do you train the AI on my business?", a: "Yes. The AI is customized to your services, pricing, brand voice, and processes." },
      ]
    },
    {
      title: "6. Quality, Accuracy & Reliability",
      faqs: [
        { q: "How accurate is the AI?", a: "Highly accurate when properly configured. Performance improves through initial training, real-world testing, and ongoing optimization." },
        { q: "What happens if the AI doesn't understand something?", a: "Fallback options include asking clarifying questions, taking a message, or transferring to a human." },
        { q: "Can I review calls?", a: "Yes. You get access to call recordings, transcripts, summaries, and performance data." },
      ]
    },
    {
      title: "7. Security & Compliance",
      faqs: [
        { q: "Is customer data secure?", a: "Yes. We follow a privacy-first approach with encrypted data handling, controlled access, and no selling of data." },
        { q: "Are calls recorded?", a: "Yes, if enabled. The system can notify callers for compliance." },
        { q: "Is it HIPAA compliant?", a: "HIPAA-ready configurations are available (Growth tier), including secure data handling, BAA availability, and PHI protection protocols." },
      ]
    },
    {
      title: "8. Customization & Control",
      faqs: [
        { q: "Can I control what the AI says?", a: "Yes. You can customize greetings, tone, personality, call flows, and responses." },
        { q: "Can it match my brand voice?", a: "Absolutely. It can be professional, friendly, direct, or consultative." },
        { q: "Can I update it later?", a: "Yes. Changes can be made quickly as your business evolves." },
      ]
    },
    {
      title: "9. Performance, ROI & Business Impact",
      faqs: [
        { q: "Will this increase leads?", a: "Yes, primarily by eliminating missed calls, responding instantly, and capturing/qualifying more prospects." },
        { q: "How does it compare to hiring staff?", a: "No salaries or benefits, no missed calls, works 24/7, and costs a fraction of a full-time receptionist." },
        { q: "What metrics can I track?", a: "Call volume, lead capture rate, booking rate, call outcomes, and conversion trends." },
      ]
    },
    {
      title: "10. Edge Cases & Real-World Use",
      faqs: [
        { q: "What if a caller is upset?", a: "The AI is trained to respond calmly, de-escalate, and transfer when needed." },
        { q: "What if my business changes?", a: "We can quickly update services, messaging, pricing, and call flows." },
        { q: "Can it handle high call volume?", a: "Yes. It scales instantly with demand—no additional staffing required." },
      ]
    },
    {
      title: "11. Support & Optimization",
      faqs: [
        { q: "Do you provide ongoing support?", a: "Yes. We assist with updates, optimization, and performance improvements." },
        { q: "Does the system improve over time?", a: "Yes. We continuously refine conversations, accuracy, and conversion performance." },
      ]
    },
    {
      title: "12. Getting Started",
      faqs: [
        { q: "How do I get started?", a: "Schedule a demo, review your use case, and begin onboarding." },
        { q: "Do you offer demos?", a: "Yes. We can demonstrate live AI calls, custom scenarios, and real business use cases." },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Receptionist FAQ
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            BrightLaunchIQ AI Receptionist — Complete Guide (Core, Premium & Growth)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to the definitive resource for the BrightLaunchIQ AI Receptionist. This page answers everything business owners, operators, and decision-makers need to know—from capabilities and setup to integrations, security, and ROI.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-8 pb-4 border-b border-border">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {faqCategories.find(c => c.title === category.title)?.faqs.map((faq) => (
                    <div key={faq.q} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="font-display text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-secondary-foreground text-center">
        <div className="container">
          <h2 className="font-display text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-secondary-foreground/80 mb-8 text-lg">Get a free AI Visibility Audit or talk to our team about your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/locallift/resources/aeo-audit">
                Free AI Visibility Audit<ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary/30 hover:bg-primary/10" asChild>
              <Link to="/ai-receptionist/demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="container max-w-4xl text-center">
          <h2 className="font-display text-2xl font-bold mb-6">Final Thought: Is this replacing my team?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            No, it actually enhances your team by handling repetitive calls, capturing missed opportunities, and freeing staff for higher-value work. 
            BrightLaunchIQ focuses on real business outcomes, high-quality voice AI, and practical automation that actually converts.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
