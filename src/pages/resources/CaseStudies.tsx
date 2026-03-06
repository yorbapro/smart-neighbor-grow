import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, BookOpen, FileText, BarChart3 } from "lucide-react";
import whitepaperMetadata from "./whitepaper_metadata.json";

const CaseStudies = () => {
  useSEO({
    title: "AI Lead Generation Case Studies & Authority Papers | BrightLaunchIQ",
    description: "Real results from local businesses using AI lead generation and in-depth authority papers on AI receptionists, voice agents, and business automation.",
    canonical: "https://brightlaunchiq.com/case-studies",
    keywords: "AI lead generation results, sales automation case studies, AI receptionist whitepapers, AI voice agent research",
    speakable: ["h1", ".case-intro"],
  });

  const caseStudies = [
    {
      company: "Summit HVAC Services",
      industry: "Trade Services",
      location: "Phoenix, AZ",
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
      location: "Atlanta, GA",
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
      location: "Tampa, FL",
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

  // Add schema
  useEffect(() => {
    const existingSchema = document.getElementById("casestudies-schema");
    if (existingSchema) existingSchema.remove();

    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "casestudies-schema";
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "BrightLaunchIQ Case Studies & Authority Papers",
      "description": "Real results and in-depth research on AI lead generation and sales automation.",
      "itemListElement": [
        ...caseStudies.map((study, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Article",
            "headline": `${study.company} - AI Lead Generation Case Study`,
            "description": study.challenge,
            "author": { "@type": "Organization", "name": "BrightLaunchIQ" },
          },
        })),
        ...whitepaperMetadata.map((paper, index) => ({
          "@type": "ListItem",
          "position": caseStudies.length + index + 1,
          "item": {
            "@type": "Article",
            "headline": paper.title,
            "description": paper.summary,
            "author": { "@type": "Organization", "name": "BrightLaunchIQ" },
          },
        })),
      ],
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
                Resources & Insights
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Authority Papers & Success Stories
              </h1>
              <p className="case-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our in-depth research on AI automation and see real-world results from businesses transforming their operations with BrightLaunchIQ.
              </p>
            </div>
          </div>
        </section>

        {/* Authority Papers Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">AI Authority Papers</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whitepaperMetadata.map((paper) => (
                <Link 
                  key={paper.slug} 
                  to={`/case-studies/${paper.slug}`}
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all flex flex-col"
                >
                  <div className="mb-4 p-3 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                    {paper.summary}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Read Authority Paper
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex items-center gap-3 mb-12">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Success Stories</h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {caseStudies.map((study) => (
                <article key={study.company} className="bg-card rounded-2xl border border-border overflow-hidden">
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
                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">The Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">The Results</h3>
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

                    <div className="bg-gradient-subtle rounded-xl p-6">
                      <blockquote className="text-foreground italic mb-4">"{study.testimonial}"</blockquote>
                      <cite className="text-sm font-semibold text-primary not-italic">— {study.contact}</cite>
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
                  <Link to="/locallift/resources/aeo-audit">
                    Get Your Free Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/ai-receptionist/get-started">Start Your Launch</Link>
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
