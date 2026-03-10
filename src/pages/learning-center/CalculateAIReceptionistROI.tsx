import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import ROICalculator from "@/components/ROICalculator";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Related101Articles from "@/components/Related101Articles";

const CalculateAIReceptionistROI = () => {
  useSEO({
    title: "Calculate AI Receptionist ROI | Free Calculator | BrightLaunchIQ",
    description: "Use our free AI receptionist ROI calculator to see how much revenue you're losing to missed calls. Most businesses see 300-500% ROI in the first year.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/calculate-ai-receptionist-roi",
    keywords: "AI receptionist ROI, calculate AI receptionist return, missed call revenue calculator, AI phone answering ROI",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "roi-article-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "How to Calculate AI Receptionist ROI",
      "description": "Step-by-step guide to calculating the return on investment for an AI receptionist, with a free interactive calculator.",
      "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/calculate-ai-receptionist-roi",
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
    });
    document.head.appendChild(script);
    return () => { document.getElementById("roi-article-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">ROI Guide</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">How to Calculate AI Receptionist ROI</h1>
            <p className="text-lg text-muted-foreground mb-12">Most businesses recover their <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> investment within the first 30 days. Here's exactly how to calculate your return.</p>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Is AI Receptionist ROI?</h2>
              <p className="text-muted-foreground mb-4"><strong>AI receptionist ROI is the net revenue recovered from answered calls minus the cost of the AI service, expressed as a percentage.</strong> It measures how much additional revenue the AI generates compared to what you pay for it.</p>
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">The ROI Formula Explained</h2>
              <p className="text-muted-foreground mb-4"><strong>The formula is: ((Job Value × Missed Calls × Close Rate × 52) − Annual AI Cost) ÷ Annual AI Cost × 100.</strong></p>
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <p className="font-mono text-sm text-foreground">ROI = ((Avg Job Value × Weekly Missed Calls × Close Rate × 52 weeks) − (Monthly AI Cost × 12)) ÷ (Monthly AI Cost × 12) × 100</p>
              </div>
              <p className="text-muted-foreground">For example, a plumbing company with a $450 average job, 12 missed calls/week, and a 25% close rate using a $497/month AI receptionist would see <strong>$70,200 in annual recovered revenue</strong> — a return of over 1,000%.</p>
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Calculate Your ROI Now</h2>
              <p className="text-muted-foreground mb-6"><strong>Use the interactive calculator below to see your personalized ROI estimate.</strong> Adjust the inputs to match your business.</p>
              <ROICalculator />
            </section>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What ROI Should You Expect?</h2>
              <p className="text-muted-foreground mb-4"><strong>Most service businesses see between 300% and 800% ROI in the first year.</strong> The key variables are your average job value and the number of calls you're currently missing.</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { label: "Low Volume", calls: "5-10 missed/wk", roi: "200-400%" },
                  { label: "Medium Volume", calls: "10-20 missed/wk", roi: "400-800%" },
                  { label: "High Volume", calls: "20+ missed/wk", roi: "800%+" },
                ].map((tier) => (
                  <div key={tier.label} className="bg-card border border-border rounded-xl p-5 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{tier.label}</p>
                    <p className="text-xs text-muted-foreground mb-2">{tier.calls}</p>
                    <p className="text-2xl font-bold text-primary">{tier.roi}</p>
                  </div>
                ))}
              </div>
            </section>

            <Related101Articles articles={[
              { title: "Calculating the ROI of an AI Receptionist", slug: "calculating-roi-of-ai-receptionist" },
              { title: "How Much Does an AI Receptionist Cost?", slug: "ai-receptionist-cost" },
              { title: "Reduce Front-Office Payroll by 90%", slug: "reduce-payroll-with-ai" },
            ]} className="mb-12" />

            <section className="bg-card border border-border rounded-xl p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Want a Detailed ROI Breakdown?</h2>
              <p className="text-muted-foreground mb-6"><strong>Download our free ROI spreadsheet template to build a custom model for your business.</strong></p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" size="lg">
                  <Download className="mr-2 w-5 h-5" /> Download ROI Spreadsheet Template
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/get-started">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CalculateAIReceptionistROI;
