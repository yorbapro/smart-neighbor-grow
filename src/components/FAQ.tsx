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
      answer:
        "AI lead generation works by scanning millions of data points to find \"intent signals\"—hiring spikes, new reviews, growth events, or industry-specific triggers. For example, if a potential customer in your city searches for a service you provide, our AI identifies them as a high-priority prospect and starts a helpful, automated conversation immediately. This autonomous signal detection runs 24/7, capturing the 78% of leads that human-only teams typically miss.",
    },
    {
      question: "What is LaunchPad 360™ and what does it include?",
      answer:
        "LaunchPad 360™ is our complete AI sales engine—a done-for-you system installed in 30 days that includes everything: multi-channel outreach (calls, SMS, email, LinkedIn, Facebook), 500+ targeted leads, built-in revenue intelligence with real-time lead scoring, pipeline visibility dashboard, hot lead alerts, and conversation intelligence. It's your full sales automation plus pipeline management in one integrated package.",
    },
    {
      question: "Is the AI fully automatic or do I stay in control?",
      answer:
        "We use \"Bounded Autonomy\" with Human-Guided AI. This means the AI handles the repetitive grind of finding and sorting leads, but you and our human experts set the rules and have the final say on all important business decisions. Think of it as a tireless digital teammate who follows your exact instructions and brand voice.",
    },
    {
      question: "How does the lead scoring and pipeline intelligence work?",
      answer:
        "LaunchPad 360™ includes built-in revenue intelligence that automatically scores every lead based on engagement signals and buying readiness. You get instant mobile alerts when a hot lead needs attention, a real-time pipeline dashboard, and conversation intelligence that analyzes every call for deal risks and next steps. No leads slip through the cracks.",
    },
    {
      question: "How quickly can I see results from AI sales automation?",
      answer:
        "With LaunchPad 360™, most clients see their first automated meetings within 14 days of setup. That's our Speed to Lead Guarantee. The complete system—including lead generation, multi-channel outreach, and pipeline intelligence—is operational within 30 days. If we don't significantly increase your pipeline velocity in 30 days, we work for free until we do.",
    },
    {
      question: "How much does AI lead generation cost compared to hiring?",
      answer:
        "At $500/month after a one-time $1,500 setup, you gain a complete 24/7 AI sales engine for just $16.60 per day. Compare this to a human hire costing $80,000+/year (including benefits and taxes), and the ROI is immediate. You get multi-channel outreach PLUS pipeline intelligence PLUS conversation analytics—capabilities that would normally require multiple expensive tools or hires.",
    },
    {
      question: "Do I need technical skills to use your AI sales services?",
      answer:
        "Not at all. Our team handles all the technical setup and ongoing management—infrastructure build, data calibration, deliverability warming, and CRM integration. You focus on what you do best: running your business and closing deals. We provide simple dashboards and regular success audits so you always know what's working.",
    },
    {
      question: "What is Answer Engine Optimization (AEO)?",
      answer:
        "AEO is the practice of optimizing your business to be cited as the answer when people use AI search tools like ChatGPT, Gemini, Perplexity, or voice assistants. Unlike traditional SEO which focuses on ranking in Google results, AEO ensures your business is the direct answer AI agents provide. Our LocalLift™ service positions you as the local expert across all answer engines.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-subtle">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Sales Automation: Your Top Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple answers for local business owners exploring AI lead generation and sales implementation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
