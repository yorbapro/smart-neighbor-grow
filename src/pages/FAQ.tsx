import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import useSEO from "@/hooks/useSEO";

const FAQ = () => {
  useSEO({
    title: "FAQ | AI Receptionist & Lead Generation | BrightLaunchIQ",
    description: "Answers about AI receptionists, lead generation, sales automation, AEO pricing, and how human-guided AI works for small businesses.",
    canonical: "https://brightlaunchiq.com/faq",
    keywords: "AI receptionist FAQ, AI lead generation questions, AEO, human-guided AI, BrightLaunchIQ",
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    // Comprehensive FAQ Schema for GEO
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is an AI receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "An AI receptionist is an artificial intelligence system that answers phone calls, qualifies leads, and books appointments automatically—just like a human receptionist, but available 24/7/365. BrightLaunchIQ AI Receptionist answers calls within 1-2 rings, handles complex conversations naturally, and costs a fraction of human staff." }},
        { "@type": "Question", "name": "How do I set up an AI voice agent?", "acceptedAnswer": { "@type": "Answer", "text": "Setting up the BrightLaunchIQ AI Receptionist takes just days. Schedule a strategy call, we customize the AI receptionist with your scripts, integrate with your CRM and calendar, then launch. No technical expertise required—BrightLaunchIQ handles all setup." }},
        { "@type": "Question", "name": "How much does an AI receptionist cost?", "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ AI Receptionist is available at a fraction of the cost of hiring staff—with 24/7 call answering. Compare that to a human receptionist at $3,000+/month (only 40 hours/week) or an answering service at $1-2 per call." }},
        { "@type": "Question", "name": "What is AI lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "AI lead generation uses artificial intelligence to identify, qualify, and engage potential customers automatically. For small businesses, this means having a 24/7 digital teammate that finds prospects showing buying intent, responds in under 60 seconds, and nurtures leads through personalized outreach—all supervised by human experts." }},
        { "@type": "Question", "name": "What is human-guided AI?", "acceptedAnswer": { "@type": "Answer", "text": "Human-guided AI means real experts supervise every AI system. Our consultants set the rules, monitor results, and ensure customer touchpoints feel authentic—never robotic. This gives you AI power with human judgment." }},
        { "@type": "Question", "name": "What is BrightLaunchIQ AI Receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ AI Receptionist is a 24/7 AI-powered phone answering system that answers calls and qualifies leads within seconds. It books appointments automatically and costs a fraction of hiring a human receptionist." }},
        { "@type": "Question", "name": "What is Answer Engine Optimization (AEO)?", "acceptedAnswer": { "@type": "Answer", "text": "AEO optimizes your business to be cited as the direct answer when people ask AI tools like ChatGPT, Gemini, Perplexity, or voice assistants. Unlike traditional SEO, AEO positions you as the authoritative answer across AI platforms." }}
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
      title: "AI Lead Generation",
      faqs: [
        { q: "What is AI lead generation?", a: "AI lead generation uses artificial intelligence to identify, qualify, and engage potential customers automatically. For small businesses, this means having a 24/7 digital teammate that finds prospects showing buying intent, responds in under 60 seconds, and nurtures leads through personalized outreach—all supervised by human experts." },
        { q: "How does AI find leads for my business?", a: "Our AI scans millions of data points to find 'intent signals'—hiring spikes, new reviews, growth events, or industry triggers. When a potential customer shows buying behavior, the AI identifies them and starts a helpful, automated conversation immediately." },
        { q: "What is an AI SDR?", a: "An AI SDR (Sales Development Representative) is an automated system that handles prospecting, outreach, and lead qualification. LaunchPad 360™ is a human-guided AI SDR combining automation with expert oversight—so outreach feels personal, not robotic." },
      ]
    },
    {
      title: "BrightLaunchIQ AI Receptionist & Voice Agent",
      faqs: [
        { q: "What is an AI receptionist?", a: "An AI receptionist is an artificial intelligence system that answers phone calls, qualifies leads, and books appointments automatically—just like a human receptionist, but available 24/7/365. BrightLaunchIQ AI Receptionist answers calls within 1-2 rings and handles complex conversations naturally." },
        { q: "How do I set up an AI voice agent for my business?", a: "Setting up BrightLaunchIQ AI Receptionist takes just days. Schedule a strategy call, we customize the AI receptionist with your scripts, integrate with your CRM and calendar, then launch. No technical expertise required—we handle all setup." },
        { q: "What is BrightLaunchIQ AI Receptionist?", a: "BrightLaunchIQ AI Receptionist is an AI-powered phone answering system that answers calls and qualifies leads within seconds. It works 24/7/365 and books appointments automatically—at a fraction of the cost of a human receptionist." },
        { q: "How fast does BrightLaunchIQ AI Receptionist answer calls?", a: "BrightLaunchIQ AI Receptionist answers calls instantly—within 1-2 rings. For form submissions, the AI voice agent can call leads back within seconds of submission, ensuring you're always first to respond. Research shows 50% of sales go to the first business that responds." },
        { q: "Can the AI receptionist book appointments on my calendar?", a: "Yes! BrightLaunchIQ AI Receptionist integrates with your calendar to check availability and book appointments in real-time during the call. It sends confirmations and reminders automatically—no more back-and-forth scheduling." },
        { q: "Does the AI voice agent sound like a robot?", a: "BrightLaunchIQ AI Receptionist uses advanced conversational AI with natural-sounding voices. Most callers can't tell they're talking to AI. The system handles complex conversations, follows up on questions, and maintains context throughout the call." },
        { q: "How much does an AI receptionist cost?", a: "BrightLaunchIQ AI Receptionist is available at a predictable monthly rate—a fraction of the $3,000+/month cost for a human receptionist who only works business hours. 24/7 AI-powered call answering included." },
      ]
    },
    {
      title: "Human-Guided AI",
      faqs: [
        { q: "What is human-guided AI?", a: "Human-guided AI means real experts supervise every AI system. Our consultants set the rules, monitor results, and ensure customer touchpoints feel authentic—never robotic. This 'bounded autonomy' gives you AI power with human judgment." },
        { q: "Will AI replace my sales team?", a: "AI doesn't replace your team—it amplifies them. Our AI handles repetitive work (prospecting, initial outreach, qualification) while your team focuses on relationships and closing. Think of it as making a 3-person team perform like 50." },
        { q: "How do you ensure AI doesn't sound robotic?", a: "Every automation is overseen by human experts who ensure messaging matches your brand voice. We conduct calibration sessions to define guardrails and review templates before launch." },
      ]
    },
    {
      title: "Pricing & ROI",
      faqs: [
        { q: "How much does AI sales automation cost?", a: "BrightLaunchIQ offers tiered pricing across its product suite: LocalLift™ for AI visibility, AI Receptionist for inbound call handling, and LaunchPad 360™ for full outbound lead generation. Each includes setup and is available at a fraction of the cost of hiring staff." },
        { q: "What's included in LaunchPad 360™?", a: "LaunchPad 360™ includes: 500+ targeted leads, multi-channel outreach (calls, SMS, email, LinkedIn), real-time lead scoring, pipeline dashboard, conversation intelligence, CRM integration, and ongoing human expert oversight." },
        { q: "Do you offer a guarantee?", a: "Yes! Our 14-Day Speed to Lead Guarantee: we move your business from 'Zero' to 'Automated Meetings' in 14 days. If we don't significantly increase your pipeline velocity within 30 days, we work for free until we do." },
      ]
    },
    {
      title: "Answer Engine Optimization (AEO)",
      faqs: [
        { q: "What is Answer Engine Optimization (AEO)?", a: "AEO optimizes your business to be cited as the direct answer when people ask AI tools like ChatGPT, Gemini, Perplexity, or voice assistants. Unlike traditional SEO focused on rankings, AEO positions you as the authoritative answer across all AI platforms." },
        { q: "How is AEO different from SEO?", a: "Traditional SEO focuses on ranking in Google search results. AEO focuses on being cited as the direct answer by AI assistants. SEO drives clicks to your website; AEO establishes authority so AI tools recommend your business by name." },
        { q: "Which AI platforms do you optimize for?", a: "LocalLift™ optimizes for ChatGPT, Google Gemini, Perplexity, Siri, Alexa, Google Assistant, and emerging AI search tools. We use structured data and Entity Graph building to ensure AI systems recognize you as the local authority." },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple answers about AI lead generation, human-guided AI, pricing, and Answer Engine Optimization for local businesses.
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
                  {category.faqs.map((faq) => (
                    <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                      <h3 className="font-display text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                      <p className="text-muted-foreground">{faq.a}</p>
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
          <h2 className="font-display text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-secondary-foreground/80 mb-6">Get a free AI Visibility Audit or talk to our team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild><Link to="/aeo-audit">Free AI Visibility Audit<ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            <Button variant="outline" className="border-primary/30" asChild><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
