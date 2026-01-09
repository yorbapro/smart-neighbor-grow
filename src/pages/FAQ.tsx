import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ | AI Lead Generation, Sales Automation & AEO Questions | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Answers to common questions about AI lead generation, AI sales automation, Answer Engine Optimization (AEO), pricing, and how human-guided AI works for small businesses.");
    }

    window.scrollTo(0, 0);

    // Comprehensive FAQ Schema for GEO
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What is AI lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "AI lead generation uses artificial intelligence to identify, qualify, and engage potential customers automatically. For small businesses, this means having a 24/7 digital teammate that finds prospects showing buying intent, responds in under 60 seconds, and nurtures leads through personalized outreach—all supervised by human experts." }},
        { "@type": "Question", "name": "What is human-guided AI?", "acceptedAnswer": { "@type": "Answer", "text": "Human-guided AI means real experts supervise every AI system. Our consultants set the rules, monitor results, and ensure customer touchpoints feel authentic—never robotic. This gives you AI power with human judgment." }},
        { "@type": "Question", "name": "How much does AI sales automation cost?", "acceptedAnswer": { "@type": "Answer", "text": "BrightLaunchIQ offers AI sales automation starting at $500/month after a one-time $1,500 setup fee. This breaks down to $16.60 per day for a 24/7 AI sales team—compared to $80,000+ per year for a human hire." }},
        { "@type": "Question", "name": "What is Answer Engine Optimization (AEO)?", "acceptedAnswer": { "@type": "Answer", "text": "AEO optimizes your business to be cited as the direct answer when people ask AI tools like ChatGPT, Gemini, Perplexity, or voice assistants. Unlike traditional SEO, AEO positions you as the authoritative answer across AI platforms." }},
        { "@type": "Question", "name": "What is an AI SDR?", "acceptedAnswer": { "@type": "Answer", "text": "An AI SDR (Sales Development Representative) is an automated system that handles prospecting, outreach, and lead qualification using AI. LaunchPad 360™ is a human-guided AI SDR that combines automation with expert oversight." }}
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
        { q: "How much does AI sales automation cost?", a: "BrightLaunchIQ offers AI sales automation starting at $500/month after a one-time $1,500 setup. This breaks down to $16.60/day for a 24/7 AI sales team—compared to $80,000+/year for a human hire. Most clients see ROI within 30 days." },
        { q: "What's included in the $500/month?", a: "LaunchPad 360™ includes: 500+ targeted leads, multi-channel outreach (calls, SMS, email, LinkedIn), real-time lead scoring, pipeline dashboard, conversation intelligence, CRM integration, and ongoing human expert oversight." },
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
