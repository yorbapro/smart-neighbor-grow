import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does AI lead generation work for small businesses?",
      directAnswer: "AI lead generation scans for buying signals and initiates personalized outreach in under 60 seconds—24/7.",
      detail:
        "It works by scanning millions of data points to find \"intent signals\"—hiring spikes, new reviews, growth events, or industry-specific triggers. For example, if a potential customer in your city searches for a service you provide, our AI identifies them as a high-priority prospect and starts a helpful, automated conversation immediately. This autonomous signal detection runs 24/7, capturing the 78% of leads that human-only teams typically miss.",
    },
    {
      question: "What is LaunchPad 360™ and what does it include?",
      directAnswer: "LaunchPad 360™ is a complete AI sales engine installed in 30 days that includes multi-channel outreach, lead scoring, and pipeline management.",
      detail:
        "It's a done-for-you system that includes everything: multi-channel outreach (calls, SMS, email, LinkedIn, Facebook), 500+ targeted leads, built-in revenue intelligence with real-time lead scoring, pipeline visibility dashboard, hot lead alerts, and conversation intelligence. It's your full sales automation plus pipeline management in one integrated package.",
    },
    {
      question: "Is the AI fully automatic or do I stay in control?",
      directAnswer: "You stay in control—we use 'Bounded Autonomy' where AI handles repetitive tasks while humans set rules and approve decisions.",
      detail:
        "We use \"Bounded Autonomy\" with Human-Guided AI. This means the AI handles the repetitive grind of finding and sorting leads, but you and our human experts set the rules and have the final say on all important business decisions. Think of it as a tireless digital teammate who follows your exact instructions and brand voice.",
    },
    {
      question: "How does the lead scoring and pipeline intelligence work?",
      directAnswer: "LaunchPad 360™ automatically scores leads based on engagement signals and sends instant mobile alerts for hot leads.",
      detail:
        "LaunchPad 360™ includes built-in revenue intelligence that automatically scores every lead based on engagement signals and buying readiness. You get instant mobile alerts when a hot lead needs attention, a real-time pipeline dashboard, and conversation intelligence that analyzes every call for deal risks and next steps. No leads slip through the cracks.",
    },
    {
      question: "How quickly can I see results from AI sales automation?",
      directAnswer: "Most clients see their first automated meetings within 14 days, with the complete system operational in 30 days.",
      detail:
        "With LaunchPad 360™, most clients see their first automated meetings within 14 days of setup. That's our Speed to Lead Guarantee. The complete system—including lead generation, multi-channel outreach, and pipeline intelligence—is operational within 30 days. If we don't significantly increase your pipeline velocity in 30 days, we work for free until we do.",
    },
    {
      question: "How much does AI lead generation cost compared to hiring?",
      directAnswer: "At $599/month, you get a 24/7 AI sales engine for just $20/day—compared to $308/day for a human hire.",
      detail:
        "At $599/month after a one-time $2,500 setup, you gain a complete 24/7 AI sales engine for about $20 per day. Compare this to a human hire costing $80,000+/year (including benefits and taxes), and the ROI is immediate. You get multi-channel outreach PLUS pipeline intelligence PLUS conversation analytics—capabilities that would normally require multiple expensive tools or hires.",
    },
    {
      question: "Do I need technical skills to use your AI sales services?",
      directAnswer: "No technical skills needed—we handle all setup, management, and CRM integration for you.",
      detail:
        "Not at all. Our team handles all the technical setup and ongoing management—infrastructure build, data calibration, deliverability warming, and CRM integration. You focus on what you do best: running your business and closing deals. We provide simple dashboards and regular success audits so you always know what's working.",
    },
    {
      question: "What is Answer Engine Optimization (AEO)?",
      directAnswer: "AEO optimizes your business to be cited as the direct answer when people use AI search tools like ChatGPT, Gemini, or voice assistants.",
      detail:
        "AEO is the practice of optimizing your business to be cited as the answer when people use AI search tools like ChatGPT, Gemini, Perplexity, or voice assistants. Unlike traditional SEO which focuses on ranking in Google results, AEO ensures your business is the direct answer AI agents provide. Our LocalLift™ service positions you as the local expert across all answer engines.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-secondary" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            AI Sales Automation
            <span className="text-gradient block mt-2">Your Top Questions Answered</span>
          </h2>
          <p className="text-lg text-secondary-foreground/70 leading-relaxed">
            Simple answers for local business owners exploring AI lead generation and sales implementation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary/10 px-6 overflow-hidden transition-all duration-300 data-[state=open]:bg-secondary-foreground/10 data-[state=open]:border-primary/20 data-[state=open]:shadow-lg"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-secondary-foreground hover:text-primary py-6 text-lg [&[data-state=open]>svg]:text-primary">
                  <span className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                      {index + 1}
                    </span>
                    <span className="pt-1">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-12 leading-relaxed text-base">
                  <p className="text-primary font-medium mb-2">{faq.directAnswer}</p>
                  <p className="text-secondary-foreground/80">{faq.detail}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-hero text-primary-foreground text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  Still Have Questions?
                </h3>
              </div>
              <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
                Our team is happy to answer any questions about how AI can transform your sales process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild className="text-primary-foreground border border-primary-foreground/20 hover:bg-white/10">
                  <a href="tel:1-800-LAUNCH-IQ">
                    Call 1-800-LAUNCH-IQ
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;