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
        "AI lead generation works by scanning millions of data points to find \"intent signals.\" For example, if a potential customer in your city searches for a service you provide, the AI identifies them as a high-priority prospect and starts a helpful, automated conversation immediately. Our system combines speed with accuracy to connect you with the right customers at the right time.",
    },
    {
      question: "Is the AI fully automatic or do I stay in control?",
      answer:
        "We use \"Bounded Autonomy.\" This means the AI handles the repetitive \"grind\" of finding and sorting leads, but you and our human experts set the rules and have the final say on all important business decisions. Think of it as having a tireless assistant who follows your exact instructions.",
    },
    {
      question: "What is the best way to automate customer follow-up?",
      answer:
        "The best way is to use a system that combines Instant Response with Human Review. Our tools answer routine questions instantly, but they immediately notify a human team member if a customer has a complex need or is ready to sign a contract. This ensures you never miss a hot lead while maintaining quality relationships.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "With our LaunchPad 360™ system, most clients see their first automated meetings within 14 days of setup. The complete system is operational within 30 days, and you only need to invest about two hours of your time during the setup process.",
    },
    {
      question: "Do I need technical skills to use your services?",
      answer:
        "Not at all. Our team handles all the technical setup and ongoing management. You focus on what you do best—running your business and closing deals. We provide simple dashboards and regular reports so you always know what's working.",
    },
    {
      question: "How do you protect my business email reputation?",
      answer:
        "We set up 2-3 separate email domains specifically for outreach (like get[yourbrand].com). This protects your main business email from any potential issues. Our AI agents also \"warm up\" these inboxes to ensure messages land in inboxes, not spam folders.",
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
            AI for Small Business: Your Top Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple answers for business owners who want to grow smarter.
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
