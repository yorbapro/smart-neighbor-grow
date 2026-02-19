import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, PhoneCall, Calendar, Shield, ArrowRight, CheckCircle } from "lucide-react";

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface SimilarBusiness {
  name: string;
  slug: string;
}

export interface IndustryPageData {
  name: string;
  slug: string;
  lossAmount: string;
  lossAmountNum: number;
  useCases: string[];
  crm: string;
  similarBusinesses: SimilarBusiness[];
  faqs: IndustryFAQ[];
  sectorLabel: string;
}

const IndustryPageTemplate = ({ data }: { data: IndustryPageData }) => {
  const { name, slug, lossAmount, lossAmountNum, useCases, crm, similarBusinesses, faqs, sectorLabel } = data;

  useSEO({
    title: `AI Receptionist for ${name} | BrightLaunchIQ`,
    description: `Stop losing up to $${lossAmount}/year in missed calls. Our 24/7 AI Receptionist for ${name} captures leads & books appointments instantly. See the case study.`,
    canonical: `https://brightlaunchiq.com/industries/${slug}`,
    keywords: `AI receptionist ${name.toLowerCase()}, ${name.toLowerCase()} phone answering, ${name.toLowerCase()} missed calls, AI voice agent ${name.toLowerCase()}`,
  });

  // Inject Service + SoftwareApplication + FAQPage JSON-LD
  useEffect(() => {
    const schemaId = `industry-schema-${slug}`;
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `AI Receptionist for ${name}`,
        "provider": {
          "@type": "Organization",
          "name": "BrightLaunchIQ",
          "url": "https://brightlaunchiq.com",
        },
        "description": `24/7 AI-powered phone answering service designed specifically for ${name}. Never miss a customer call again.`,
        "areaServed": "US",
        "serviceType": "AI Phone Answering Service",
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "BrightLaunchIQ AI Receptionist",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud-based",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free consultation for " + name,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [slug, name, faqs]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-hero-dark overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(187,92%,42%,0.12),transparent_60%)]" />
          <div className="container relative z-10">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: name },
              ]}
              className="mb-8 text-white/60"
            />
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              How {name} Lose <span className="text-primary">${lossAmount}+</span> Per Year in Missed Calls
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              Your customers call when they need you — nights, weekends, holidays. Every missed call is lost revenue.
              Our AI Receptionist answers 24/7, qualifies leads, and books appointments in real time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Your Free Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                <Link to="/products/ai-receptionist">Learn About AI Receptionist</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Cost of Missed Calls */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              The True Cost for {name}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Industry data shows {name.toLowerCase()} lose an average of <strong className="text-foreground">${lossAmount}</strong> per year from unanswered calls.
              Here's how our AI Receptionist stops that leak.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <PhoneCall className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">24/7 Call Answering</h3>
                  <p className="text-muted-foreground text-sm">Never miss an after-hours emergency or weekend inquiry again. Every call is answered instantly.</p>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Instant Scheduling</h3>
                  <p className="text-muted-foreground text-sm">The AI books appointments directly into your calendar or {crm}, eliminating phone tag.</p>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Lead Qualification</h3>
                  <p className="text-muted-foreground text-sm">AI screens callers, captures key details, and routes hot leads to your team instantly.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Built for {name}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Purpose-built AI workflows that integrate with <strong className="text-foreground">{crm}</strong> and handle the calls that matter most.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {useCases.map((useCase, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border shadow-card">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Common questions about AI Receptionists for {name.toLowerCase()}.
            </p>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 bg-card shadow-card">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Beyond [Industry] - Cross-linking */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-4xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Beyond {name}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              BrightLaunchIQ serves the entire {sectorLabel} sector. Our{" "}
              <Link to="/products/ai-receptionist" className="text-primary font-semibold hover:underline">
                AI Receptionist
              </Link>{" "}
              is purpose-built for businesses that depend on incoming calls to generate revenue.
              Explore how we help similar businesses:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {similarBusinesses.map((biz) => (
                <Link
                  key={biz.slug}
                  to={`/industries/${biz.slug}`}
                  className="px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors shadow-card"
                >
                  {biz.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-hero-dark">
          <div className="container text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">
              Stop Losing ${lossAmount}+ Per Year
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Join hundreds of {name.toLowerCase()} using BrightLaunchIQ to capture every call, book every appointment, and grow revenue on autopilot.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/get-started">
                  Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                <a href="tel:1-877-879-5552">
                  <Phone className="mr-2 w-5 h-5" /> Call 1-877-879-5552
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryPageTemplate;
