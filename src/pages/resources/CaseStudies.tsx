import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface WhitepaperMeta {
  title: string;
  executive_summary: string;
  slug: string;
}

const CaseStudies = () => {
  const [whitepapers, setWhitepapers] = useState<WhitepaperMeta[]>([]);

  useEffect(() => {
    fetch('/whitepaper_metadata.json')
      .then(response => response.json())
      .then(data => setWhitepapers(data));
  }, []);

  useSEO({
    title: "AI Receptionist & AI Voice Agent Authority Papers | BrightLaunchIQ",
    description: "Explore in-depth authority papers on AI Receptionists and AI Voice Agents. Learn how AI transforms lead generation, customer service, and business growth.",
    canonical: "https://brightlaunchiq.com/case-studies",
    keywords: "AI Receptionist whitepapers, AI Voice Agent case studies, AI call automation research, BrightLaunchIQ authority papers",
    speakable: ["h1", ".case-intro"],
  });

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
                Authority Papers
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                AI Receptionist & AI Voice Agent Series
              </h1>
              <p className="case-intro text-lg text-muted-foreground max-w-2xl mx-auto">
                Dive deep into the strategic advantages of AI in business with our comprehensive whitepaper series.
              </p>
            </div>
          </div>
        </section>

        {/* Whitepaper List */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-16">
              {whitepapers.map((paper) => (
                <article key={paper.slug} className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="p-6 md:p-8">
                    <h2 className="font-display text-2xl font-bold mb-4">{paper.title}</h2>
                    <p className="text-muted-foreground mb-6">{paper.executive_summary}</p>
                    <Button asChild>
                      <Link to={`/case-studies/${paper.slug}`}>
                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
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
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-secondary-foreground/80 mb-8">
                Get a free AI audit and see how AI can revolutionize your operations.
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
