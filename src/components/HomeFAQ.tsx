import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will customers know it's AI?",
    directAnswer: "Most callers don't notice. The AI uses natural, conversational language trained on your business.",
    detail: "Our AI receptionist is designed to sound professional and human-like. It uses your preferred tone, knows your services, and handles conversations naturally. Many callers assume they're speaking with a real person at your front desk.",
  },
  {
    question: "Can it transfer calls?",
    directAnswer: "Yes. The AI can transfer urgent or high-priority calls to you or your team in real time.",
    detail: "You set the routing rules. Certain call types — like emergencies, VIP clients, or specific requests — can be instantly transferred to a live person. Everything else is handled, qualified, and organized by the AI.",
  },
  {
    question: "Does it integrate with my calendar?",
    directAnswer: "Yes. The AI books appointments directly into your calendar system.",
    detail: "BrightLaunchIQ integrates with popular calendar and scheduling tools so appointments are booked in real time. No double-bookings, no back-and-forth — callers get confirmed slots immediately.",
  },
  {
    question: "What if I already have staff?",
    directAnswer: "The AI handles overflow, after-hours, and peak times — so your team can focus on higher-value work.",
    detail: "You don't have to replace your team. The AI receptionist works alongside your staff, catching calls they can't get to, handling after-hours volume, and ensuring no lead ever falls through the cracks. Your team focuses on in-person service and closing deals.",
  },
  {
    question: "How long does setup take?",
    directAnswer: "Most businesses are live within a few days.",
    detail: "We train the AI on your business — services, FAQs, scheduling preferences, routing rules, and tone. The onboarding process is fast and hands-on. You don't need any technical skills. We handle everything.",
  },
  {
    question: "Can it handle multiple locations?",
    directAnswer: "Yes. The AI can be configured for multiple locations with different routing rules and schedules.",
    detail: "Each location can have its own settings, call routing, and business hours. Whether you have two locations or twenty, the AI handles them all from a single system with unified reporting.",
  },
];

const HomeFAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
            AI Receptionist
            <span className="text-gradient block mt-2">Frequently Asked Questions</span>
          </h2>
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
                Our team is ready to show you how the AI Receptionist works for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild className="text-primary-foreground border border-primary-foreground/20 hover:bg-white/10">
                  <a href="tel:1-877-879-5552">
                    Call 1-877-879-5552
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

export default HomeFAQ;
