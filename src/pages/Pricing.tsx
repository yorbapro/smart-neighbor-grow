import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, DollarSign, Phone, Shield, Star, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing — BrightLaunchIQ AI Receptionist | Simple Plans, Immediate ROI";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Simple AI Receptionist pricing. Less than the cost of one part-time employee. Available 24/7. No long-term contracts. Cancel anytime.");
    }

    window.scrollTo(0, 0);

    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    const pricingSchema = document.createElement("script");
    pricingSchema.type = "application/ld+json";
    pricingSchema.id = "pricing-schema";
    pricingSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BrightLaunchIQ AI Receptionist Pricing",
      "description": "Simple pricing for 24/7 AI Receptionist. Less than hiring a part-time employee.",
      "url": "https://brightlaunchiq.com/pricing"
    });
    document.head.appendChild(pricingSchema);

    return () => {
      const el = document.getElementById("pricing-schema");
      if (el) el.remove();
    };
  }, []);

  const standardFeatures = [
    "24/7 call answering",
    "Custom branded greeting",
    "Appointment booking",
    "Basic lead qualification",
    "SMS & email confirmations",
    "Call summaries",
    "CRM integration (basic)",
    "Monthly analytics report",
    "Email support",
  ];

  const premiumFeatures = [
    "Everything in Standard, plus:",
    "Advanced multi-step lead qualification",
    "Smart call routing & escalation",
    "Multiple calendar integrations",
    "CRM advanced automation",
    "After-hours overflow rules",
    "Custom voice tuning",
    "Priority onboarding",
    "Dedicated optimization support",
    "Advanced analytics dashboard",
  ];

  const faqs = [
    { q: "How long does setup take?", a: "Most businesses are live within a few days. We handle all training, configuration, and integration — no technical skills needed on your end." },
    { q: "Can it transfer live calls?", a: "Yes. You set the routing rules. Urgent calls, VIPs, or specific request types are instantly transferred to a live person." },
    { q: "Can it book into my calendar?", a: "Yes. BrightLaunchIQ integrates with popular calendar tools for real-time appointment booking with no double-bookings." },
    { q: "Does it sound human?", a: "Yes. The AI uses natural language processing to hold fluid, human-like conversations. Most callers assume they're speaking with a live receptionist." },
    { q: "What happens if I cancel?", a: "No penalties. You can cancel anytime and your service will continue through the end of your billing period." },
    { q: "Can I upgrade later?", a: "Absolutely. Upgrade from Standard to Premium at any time. Changes take effect on your next billing cycle." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content">
        <div className="container pt-24">
          <Breadcrumb />
        </div>

        {/* HERO */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-hero-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
                Simple Pricing.
                <br />
                <span className="text-gradient">Immediate ROI.</span>
              </h1>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-4">
                Less than the cost of one part-time employee. Available 24/7.
              </p>
              <p className="text-sm text-white/50">
                No long-term contracts. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE POSITIONING */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <DollarSign className="w-4 h-4" />
                  The ROI Case
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  One Missed Job Can
                  <span className="text-gradient"> Pay for This.</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  If your average job is $500–$2,000+, capturing just one or two additional jobs per month can more than cover your AI Receptionist investment.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  "Capture after-hours calls",
                  "Eliminate voicemail drop-off",
                  "Reduce staff interruptions",
                  "Book more appointments automatically",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
                Choose Your Plan
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* STANDARD */}
              <div className="rounded-2xl border border-secondary-foreground/10 bg-secondary-foreground/5 p-8 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-2xl font-bold text-secondary-foreground mb-2">Standard</h3>
                <p className="text-sm text-secondary-foreground/60 mb-8">Best for small teams getting started.</p>

                <ul className="space-y-3 mb-8">
                  {standardFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="lg" asChild className="w-full border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                  <Link to="/get-started">
                    Start Standard Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>

              {/* PREMIUM */}
              <div className="relative rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  Most Popular
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary-foreground mb-2">Premium</h3>
                <p className="text-sm text-secondary-foreground/60 mb-8">Best for growing businesses with higher call volume.</p>

                <ul className="space-y-3 mb-8">
                  {premiumFeatures.map((feature, i) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${i === 0 ? "text-accent" : "text-primary"}`} />
                      <span className={`text-sm ${i === 0 ? "font-semibold text-primary" : "text-secondary-foreground/80"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" size="lg" asChild className="w-full">
                  <Link to="/get-started">
                    Start Premium Plan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-secondary-foreground/50">
                Need a custom plan? <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for tailored solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ROI COMPARISON */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Compare the Math
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">Full-Time Receptionist</h3>
                  <p className="text-3xl font-display font-bold text-destructive mb-2">$45,000+/year</p>
                  <p className="text-sm text-muted-foreground">Plus taxes, benefits, training, turnover, sick days, and limited hours.</p>
                </div>
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">BrightLaunchIQ AI Receptionist</h3>
                  <p className="text-3xl font-display font-bold text-primary mb-2">A fraction of the cost</p>
                  <p className="text-sm text-muted-foreground">24/7 coverage. No overhead. No turnover. Predictable monthly rate.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl font-display font-bold text-foreground">
                  Automation scales. <span className="text-primary">Payroll doesn't.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {[
                { icon: Shield, text: "AES-256 Encryption" },
                { icon: Phone, text: "24/7 Uptime" },
                { icon: Star, text: "No Contracts" },
                { icon: Check, text: "Cancel Anytime" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <HelpCircle className="w-4 h-4" />
                FAQs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground">
                Common Questions
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
                Ready to Stop
                <br />
                <span className="text-gradient">Missing Calls?</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild className="group">
                  <Link to="/get-started">
                    Start Free Trial
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/contact">Schedule a Demo</Link>
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

export default Pricing;
