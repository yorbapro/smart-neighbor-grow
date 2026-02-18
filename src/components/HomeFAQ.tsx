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
    question: "What is an AI receptionist?",
    directAnswer: "An AI receptionist is software that answers your business phone calls automatically — 24/7, 365 days a year.",
    detail: "It works just like a human receptionist: answering calls, qualifying leads, booking appointments, routing urgent calls, and handling FAQs. But unlike a human, it never calls in sick, never takes lunch breaks, answers instantly (no hold times), and handles unlimited simultaneous calls. BrightLaunchIQ's AI receptionist is trained on your specific business so it sounds natural and professional.",
  },
  {
    question: "How much does an AI receptionist cost?",
    directAnswer: "AI receptionist services typically cost $199–$499/month — a fraction of a full-time receptionist's $35,000–$55,000+ annual salary.",
    detail: "BrightLaunchIQ offers Standard and Premium plans with predictable monthly pricing. There are no per-call fees, no overtime charges, and no payroll taxes. Most businesses see ROI within the first month by capturing just 1–2 additional jobs that would have gone to voicemail.",
  },
  {
    question: "Will customers know it's AI?",
    directAnswer: "Most callers don't notice. The AI uses natural, conversational language trained on your business.",
    detail: "BrightLaunchIQ's AI receptionist knows your services, pricing, hours, and FAQs. It handles conversations naturally and professionally. Many callers assume they're speaking with a real person at your front desk. The AI is custom-trained on your tone and brand voice.",
  },
  {
    question: "Can the AI receptionist transfer calls to a live person?",
    directAnswer: "Yes. The AI can transfer urgent or high-priority calls to you or your team in real time.",
    detail: "You set the routing rules. Emergencies, VIP clients, or specific requests get instantly transferred to a live person. Everything else is handled, qualified, and organized by the AI. You control exactly which call types trigger a transfer.",
  },
  {
    question: "Does it integrate with my calendar?",
    directAnswer: "Yes. The AI books appointments directly into your calendar system in real time.",
    detail: "BrightLaunchIQ integrates with Google Calendar, Outlook, Calendly, and industry-specific scheduling tools. No double-bookings, no back-and-forth — callers get confirmed appointment slots immediately and receive SMS and email confirmations.",
  },
  {
    question: "What's the difference between an AI receptionist and a virtual receptionist?",
    directAnswer: "A virtual receptionist is a remote human ($250–$500+/month with limited hours). An AI receptionist is software that answers 24/7 at a flat monthly rate.",
    detail: "Virtual receptionists are real people working remotely — they're more personal but expensive, limited to business hours, and can only handle one call at a time. AI receptionists like BrightLaunchIQ answer instantly with no hold times, handle unlimited simultaneous calls, work 24/7/365, and cost 60–80% less.",
  },
  {
    question: "What's the difference between an AI receptionist and an answering service?",
    directAnswer: "Traditional answering services take messages. AI receptionists book appointments, qualify leads, and route calls — automatically.",
    detail: "Answering services use call center operators who follow basic scripts and charge per call or per minute. BrightLaunchIQ goes further: it answers instantly (no hold times), books appointments into your calendar, qualifies leads with custom intake questions, and routes urgent calls. All at a predictable flat monthly rate.",
  },
  {
    question: "Is an AI receptionist good for HVAC, plumbing, and home service businesses?",
    directAnswer: "AI receptionists are ideal for home service businesses. Contractors miss 60–80% of inbound calls because they're on job sites.",
    detail: "BrightLaunchIQ answers every call instantly — even at 2 AM when a customer's pipe bursts. It captures emergency details, books service appointments, routes urgent calls to the on-call technician, and handles routine questions about pricing and availability. No more lost jobs to competitors because you couldn't pick up the phone.",
  },
  {
    question: "What if I already have front desk staff?",
    directAnswer: "The AI handles overflow, after-hours, and peak times — so your team focuses on higher-value work.",
    detail: "You don't have to replace your team. BrightLaunchIQ works alongside your staff, catching calls they can't get to during busy periods, handling overnight volume, and ensuring no lead ever falls through the cracks. Your staff focuses on in-person service and closing deals.",
  },
  {
    question: "How long does setup take?",
    directAnswer: "Most businesses are live within a few days.",
    detail: "We train the AI on your business — services, FAQs, scheduling preferences, routing rules, and tone. The onboarding process is fast and hands-on. You don't need any technical skills. BrightLaunchIQ handles everything from configuration to testing to go-live.",
  },
  {
    question: "Can it handle multiple locations?",
    directAnswer: "Yes. The AI can be configured for multiple locations with different routing rules and schedules.",
    detail: "Each location gets its own settings, call routing, business hours, and greetings. Whether you have two locations or twenty, BrightLaunchIQ handles them all from a single system with unified reporting and analytics.",
  },
  {
    question: "Is it HIPAA compliant for medical and dental offices?",
    directAnswer: "BrightLaunchIQ offers HIPAA-ready configurations for healthcare providers.",
    detail: "This includes encrypted call handling, secure data storage, role-based access controls, and compliant patient information handling. Medical offices, dental practices, chiropractors, and therapists can use BrightLaunchIQ with confidence. Contact our team to discuss specific compliance requirements.",
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
          <p className="text-secondary-foreground/70 text-lg">
            Everything you need to know about AI receptionists, how they work, and why thousands of small businesses are switching.
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
