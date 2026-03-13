import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Related101Articles from "@/components/Related101Articles";
import { Phone, PhoneCall, Calendar, Shield, ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react";

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface SimilarBusiness {
  name: string;
  slug: string;
}

export interface IndustryPainPoint {
  title: string;
  description: string;
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
  /** NEW: Industry-specific pain points that make this page unique */
  painPoints?: IndustryPainPoint[];
  /** NEW: A paragraph explaining why this industry specifically needs an AI receptionist */
  whyThisIndustry?: string;
  /** NEW: A real-world scenario showing the AI in action */
  dayInTheLife?: string;
}

const IndustryPageTemplate = ({ data }: { data: IndustryPageData }) => {
  const { name, slug, lossAmount, lossAmountNum, useCases, crm, similarBusinesses, faqs, sectorLabel, painPoints, whyThisIndustry, dayInTheLife } = data;

  useSEO({
    title: `AI Receptionist for ${name} | BrightLaunchIQ`,
    description: `AI Receptionist for ${name}: 24/7 call answering, lead qualification, and appointment booking into ${crm}. Purpose-built for ${name}. No contracts.`,
    canonical: `https://brightlaunchiq.com/ai-receptionist/industries/${slug}`,
    keywords: `AI receptionist ${name.toLowerCase()}, ${name.toLowerCase()} phone answering, AI voice agent ${name.toLowerCase()}, ${name.toLowerCase()} appointment booking`,
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
          "@id": "https://brightlaunchiq.com/#organization",
          "name": "BrightLaunchIQ",
          "url": "https://brightlaunchiq.com",
        },
        "description": `24/7 AI-powered phone answering service designed for ${name}. Answers calls, qualifies leads, books appointments into ${crm}, and routes urgent calls.`,
        "areaServed": "US",
        "serviceType": "AI Phone Answering Service",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Receptionist Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": `AI Receptionist Core for ${name}` },
              "price": "497",
              "priceCurrency": "USD",
              "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "MONTH" }
            }
          ]
        }
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
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com/" },
          { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://brightlaunchiq.com/ai-receptionist/industries" },
          { "@type": "ListItem", "position": 3, "name": name, "item": `https://brightlaunchiq.com/ai-receptionist/industries/${slug}` },
        ]
      }
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      document.getElementById(schemaId)?.remove();
    };
  }, [slug, name, faqs, crm]);

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
                { label: "Industries", href: "/ai-receptionist/industries" },
                { label: name },
              ]}
              className="mb-8 text-white/60"
            />
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              AI Receptionist for <span className="text-primary">{name}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              {whyThisIndustry || `${name} depend on incoming calls to generate revenue. When those calls go to voicemail, potential customers call the next business on the list. BrightLaunchIQ's AI Receptionist answers every call 24/7, qualifies leads, and books appointments directly into ${crm} — so you never lose a job to a missed call.`}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
                  Get Your Free Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                <Link to="/ai-receptionist">Learn About AI Receptionist</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industry-Specific Pain Points — NEW unique section */}
        {painPoints && painPoints.length > 0 && (
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
                Why {name} Lose Revenue to Missed Calls
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Every industry has unique call patterns and challenges. Here's what we hear most from {name.toLowerCase()} owners.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {painPoints.map((point, i) => (
                  <Card key={i} className="shadow-card hover:shadow-card-hover transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Fallback: Generic call handling section if no painPoints provided */}
        {(!painPoints || painPoints.length === 0) && (
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
                How AI Receptionist Works for {name}
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Our AI receptionist is configured specifically for {name.toLowerCase()}, handling the call types and workflows that matter most to your business.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6 text-center">
                    <PhoneCall className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground">24/7 Call Answering</h3>
                    <p className="text-muted-foreground text-sm">Every call is answered instantly — no voicemail, no hold times, no missed opportunities after hours or on weekends.</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Direct {crm} Integration</h3>
                    <p className="text-muted-foreground text-sm">The AI books appointments directly into {crm}, eliminating phone tag and manual data entry for your team.</p>
                  </CardContent>
                </Card>
                <Card className="shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-display font-semibold text-lg mb-2 text-foreground">Lead Qualification</h3>
                    <p className="text-muted-foreground text-sm">AI screens callers, captures key details, and routes qualified leads to your team so you focus on the jobs that matter.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Day in the Life — NEW unique narrative section */}
        {dayInTheLife && (
          <section className="py-16 md:py-24 bg-muted/30">
            <div className="container max-w-4xl">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
                A Day with BrightLaunchIQ
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
                Here's what it looks like when your AI receptionist is handling calls for your {name.toLowerCase()} business.
              </p>
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{dayInTheLife}</p>
              </div>
            </div>
          </section>
        )}

        {/* Use Cases */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Built for {name}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Purpose-built AI workflows that integrate with <strong className="text-foreground">{crm}</strong> and handle the calls that matter most to your business.
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

        {/* Comparison Table — NEW answer-ready content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              AI Receptionist vs. Traditional Options for {name}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              How does an AI receptionist compare to the alternatives?
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-foreground font-display font-bold">Feature</th>
                    <th className="py-4 px-4 text-primary font-display font-bold">AI Receptionist</th>
                    <th className="py-4 px-4 text-muted-foreground font-display font-bold">Hiring Staff</th>
                    <th className="py-4 px-4 text-muted-foreground font-display font-bold">Answering Service</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Available 24/7</td>
                    <td className="py-3 px-4 text-primary">Yes</td>
                    <td className="py-3 px-4 text-muted-foreground">No — limited hours</td>
                    <td className="py-3 px-4 text-muted-foreground">Often — with surcharges</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Books into {crm}</td>
                    <td className="py-3 px-4 text-primary">Yes — automatically</td>
                    <td className="py-3 px-4 text-muted-foreground">Manual entry</td>
                    <td className="py-3 px-4 text-muted-foreground">Rarely</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Qualifies leads</td>
                    <td className="py-3 px-4 text-primary">Yes — custom logic</td>
                    <td className="py-3 px-4 text-muted-foreground">Depends on training</td>
                    <td className="py-3 px-4 text-muted-foreground">Basic message taking</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Handles peak volume</td>
                    <td className="py-3 px-4 text-primary">Unlimited simultaneous calls</td>
                    <td className="py-3 px-4 text-muted-foreground">1 call at a time</td>
                    <td className="py-3 px-4 text-muted-foreground">Queue with hold times</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-medium">Monthly cost</td>
                    <td className="py-3 px-4 text-primary">Starting at $497/mo</td>
                    <td className="py-3 px-4 text-muted-foreground">$3,000–$5,000+/mo</td>
                    <td className="py-3 px-4 text-muted-foreground">$250–$1,000+/mo + per-call fees</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-foreground font-medium">Setup time</td>
                    <td className="py-3 px-4 text-primary">Days</td>
                    <td className="py-3 px-4 text-muted-foreground">Weeks to months</td>
                    <td className="py-3 px-4 text-muted-foreground">1–2 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Common questions about AI receptionists for {name.toLowerCase()}.
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

        {/* Deep Dive — AI Receptionists 101 */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Deep Dive: AI Receptionists 101
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              Want to learn more about how AI receptionists work, what they cost, and how to set one up? Explore our 24-article deep-dive series.
            </p>
            <div className="max-w-xl mx-auto">
              <Related101Articles articles={[
                { title: "What is an AI Receptionist and How Does It Work?", slug: "what-is-an-ai-receptionist" },
                { title: "Does an AI Receptionist Really Work 24/7/365?", slug: "24-7-ai-receptionist" },
                { title: "How Much Does an AI Receptionist Cost?", slug: "ai-receptionist-cost" },
                { title: "How to Set Up an AI Receptionist", slug: "how-to-set-up-ai-receptionist" },
              ]} />
            </div>
          </div>
        </section>

        {/* Beyond [Industry] - Cross-linking */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
              Beyond {name}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
              BrightLaunchIQ serves the entire {sectorLabel} sector. Our{" "}
              <Link to="/ai-receptionist" className="text-primary font-semibold hover:underline">
                AI Receptionist
              </Link>{" "}
              is purpose-built for businesses that depend on incoming calls to generate revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {similarBusinesses.map((biz) => (
                <Link
                  key={biz.slug}
                  to={`/ai-receptionist/industries/${biz.slug}`}
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
              Ready to Stop Missing Calls?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              See how BrightLaunchIQ's AI Receptionist works for {name.toLowerCase()}. Get a free demo — no commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/ai-receptionist/get-started">
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
