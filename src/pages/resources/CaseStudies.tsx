import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, CheckCircle } from "lucide-react";

const CaseStudies = () => {
  useSEO({
    title: "AI Lead Generation Case Studies | BrightLaunchIQ Success Stories",
    description: "Real results from local businesses using AI lead generation. See how our clients achieved 40% more conversions, 60-second response times, and 5x pipeline growth.",
    canonical: "https://brightlaunchiq.com/resources/case-studies",
    keywords: "AI lead generation results, sales automation case studies, local business AI success stories",
    speakable: ["h1", ".case-intro"],
  });

  const caseStudies = [
    {
      company: "Summit HVAC Services",
      industry: "Trade Services",
      location: "Fresno, CA",
      challenge: "Missing 80% of after-hours leads with 2-day average response time",
      results: [
        { metric: "Response Time", before: "47 hours", after: "58 seconds", improvement: "99.9%" },
        { metric: "Lead Capture Rate", before: "22%", after: "89%", improvement: "305%" },
        { metric: "Monthly Appointments", before: "12", after: "47", improvement: "292%" },
        { metric: "Revenue Growth", before: "$45k/mo", after: "$128k/mo", improvement: "184%" },
      ],
      testimonial: "We went from losing leads every weekend to booking appointments at 2 AM. The AI responds faster than we ever could, and the human oversight means every message sounds like us.",
      contact: "Mike R., Owner",
      timeframe: "6 months",
    },
    {
      company: "Precision Legal Consulting",
      industry: "Professional Services",
      location: "Sacramento, CA",
      challenge: "High-value leads falling through the cracks due to slow follow-up",
      results: [
        { metric: "Lead Response Time", before: "8 hours", after: "<60 sec", improvement: "99.8%" },
        { metric: "Qualified Leads/Month", before: "15", after: "62", improvement: "313%" },
        { metric: "Proposal Close Rate", before: "18%", after: "34%", improvement: "89%" },
        { metric: "Average Deal Size", before: "$12k", after: "$18k", improvement: "50%" },
      ],
      testimonial: "BrightLaunchIQ transformed our practice. We went from chasing leads to having qualified prospects ready for consultation. The AI does the grind, we focus on client work.",
      contact: "Jennifer T., Managing Partner",
      timeframe: "4 months",
    },
    {
      company: "SunPower Solar Solutions",
      industry: "Solar Installation",
      location: "Bakersfield, CA",
      challenge: "Competing against national brands with limited marketing budget",
      results: [
        { metric: "Cost Per Lead", before: "$180", after: "$42", improvement: "77%" },
        { metric: "Monthly Leads", before: "28", after: "145", improvement: "418%" },
        { metric: "Consultation Bookings", before: "8/mo", after: "52/mo", improvement: "550%" },
        { metric: "Installation Pipeline", before: "$120k", after: "$680k", improvement: "467%" },
      ],
      testimonial: "We're now outpacing installers 10x our size. The multi-channel AI outreach hits prospects before our competitors even know they're interested.",
      contact: "Carlos M., CEO",
      timeframe: "5 months",
    },
  ];

  // Add case study schema
  useEffect(() => {
    const existingSchema = document.getElementById("casestudies-schema");
    if (existingSchema) existingSchema.remove();

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "casestudies-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "BrightLaunchIQ Case Studies",
      "description": "Real results from local businesses using AI lead generation and sales automation.",
      "itemListElement": caseStudies.map((study, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": `${study.company} - AI Lead Generation Case Study`,
          "description": study.challenge,
          "author": {
            "@type": "Organization",
            "name": "BrightLaunchIQ",
          },
        },
      })),
    });
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById("casestudies-schema");
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main-content" className="pt-24">
        <div className="container">
          <Breadcrumb />
        </div>

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                Real Results
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                AI Lead Generation Success Stories
              </h1>
              <p className="case-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                See how local businesses transformed their sales with human-guided AI. Real metrics, real growth, real businesses like yours.
              </p>
            </div>
          </div>
        </section>

        {/* Aggregate Stats */}
        <section className="py-12 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">305%</div>
                <div className="text-sm text-secondary-foreground/70">Avg Lead Capture Increase</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">&lt;60s</div>
                <div className="text-sm text-secondary-foreground/70">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">77%</div>
                <div className="text-sm text-secondary-foreground/70">Lower Cost Per Lead</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-primary mb-1">4.5x</div>
                <div className="text-sm text-secondary-foreground/70">Pipeline Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-16">
              {caseStudies.map((study, index) => (
                <article key={study.company} className="bg-card rounded-2xl border border-border overflow-hidden">
                  {/* Header */}
                  <div className="bg-gradient-hero p-6 text-primary-foreground">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl font-bold">{study.company}</h2>
                        <p className="text-primary-foreground/80">{study.industry} • {study.location}</p>
                      </div>
                      <div className="px-4 py-2 bg-white/20 rounded-lg">
                        <span className="text-sm font-semibold">Results in {study.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    {/* Challenge */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    {/* Results Grid */}
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                        The Results
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="bg-muted rounded-xl p-4">
                            <p className="text-xs font-medium text-muted-foreground mb-2">{result.metric}</p>
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="text-sm text-muted-foreground line-through">{result.before}</span>
                              <ArrowRight className="w-3 h-3 text-primary" />
                              <span className="font-display text-xl font-bold text-foreground">{result.after}</span>
                            </div>
                            <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                              <TrendingUp className="w-4 h-4" />
                              {result.improvement} improvement
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-subtle rounded-xl p-6">
                      <blockquote className="text-foreground italic mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-sm font-semibold text-primary not-italic">
                        — {study.contact}
                      </cite>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-secondary-foreground/80 mb-8">
                Get a free AEO audit and see how AI can transform your lead generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/aeo-audit">
                    Get Your Free Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/get-started">Start Your Launch</Link>
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

export default CaseStudies;