import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const comparisonRows = [
  { feature: "24/7 Availability", ai: true, answering: "Limited" },
  { feature: "Appointment Booking", ai: true, answering: false },
  { feature: "CRM Integration", ai: true, answering: false },
  { feature: "Call Transfers", ai: true, answering: true },
  { feature: "Custom Scripts", ai: true, answering: "Basic" },
  { feature: "Cost Per Month", ai: "$497–$1,497", answering: "$800–$2,500" },
  { feature: "Per-Call Fees", ai: "None (flat rate)", answering: "$2–$8/call" },
  { feature: "Consistency", ai: "100%", answering: "Varies by agent" },
  { feature: "Hold Times", ai: "0 seconds", answering: "30–120 seconds" },
  { feature: "Simultaneous Calls", ai: "Unlimited", answering: "Agent-dependent" },
];

const AIvsAnsweringService = () => {
  useSEO({
    title: "AI Receptionist vs Answering Service: Which Is Better? | BrightLaunchIQ",
    description: "AI receptionists book appointments and integrate with CRMs. Answering services take messages. Compare cost, features, and ROI side by side.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-vs-answering-service",
    keywords: "AI receptionist vs answering service, answering service comparison, AI phone answering vs call center",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ai-vs-answering-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI Receptionist vs Answering Service: Which Is Better?",
        "url": "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-vs-answering-service",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is an AI receptionist better than an answering service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, for most businesses. AI receptionists book appointments, integrate with CRMs, and handle unlimited calls at a flat rate — answering services typically just take messages." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("ai-vs-answering-schema")?.remove(); };
  }, []);

  const renderCell = (val: boolean | string) => {
    if (val === true) return <CheckCircle className="w-5 h-5 text-primary" />;
    if (val === false) return <XCircle className="w-5 h-5 text-destructive" />;
    return <span className="text-muted-foreground">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Comparison</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">AI Receptionist vs Answering Service: Which Is Better?</h1>
            <p className="text-lg text-muted-foreground mb-12">Traditional answering services take messages. An <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> books appointments, qualifies leads, and integrates with your CRM — all at a lower cost.</p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What's the Difference Between an AI Receptionist and an Answering Service?</h2>
              <p className="text-muted-foreground mb-6"><strong>An answering service takes messages; an AI receptionist takes action.</strong> AI receptionists book appointments, transfer calls, log data to your CRM, and operate 24/7 with zero hold times — capabilities most answering services simply don't offer.</p>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-display font-bold text-foreground">Feature</th>
                      <th className="text-left p-4 font-display font-bold text-primary">AI Receptionist</th>
                      <th className="text-left p-4 font-display font-bold text-foreground">Answering Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4">{renderCell(row.ai)}</td>
                        <td className="p-4">{renderCell(row.answering)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/get-started">See the BrightLaunchIQ Difference — Start Free Trial <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </section>

            {/* Decision Matrix / Quick Pick */}
            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Which Should You Choose?</h2>
              <p className="text-muted-foreground mb-6"><strong>It depends on what you need: message-taking or revenue recovery.</strong></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display font-bold text-foreground mb-3">Choose an Answering Service if:</h3>
                  <p className="text-muted-foreground">You only need a name and number taken. You don't need appointment booking, CRM integration, or after-hours lead capture.</p>
                </div>
                <div className="bg-card border-2 border-primary rounded-xl p-6 relative">
                  <span className="absolute -top-3 left-4 px-3 py-0.5 bg-primary text-primary-foreground text-xs font-bold rounded-full">Recommended</span>
                  <h3 className="font-display font-bold text-foreground mb-3">Choose BrightLaunchIQ if:</h3>
                  <p className="text-muted-foreground">You want appointments booked, leads qualified, and revenue recovered while you sleep. You need CRM integration and 24/7 intelligent call handling.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Much Do Answering Services Really Cost?</h2>
              <p className="text-muted-foreground"><strong>Most answering services charge $800–$2,500/month plus per-call fees of $2–$8.</strong> A busy service business handling 400+ calls/month can easily spend $3,000+ — more than an AI receptionist that handles unlimited calls at a flat rate with far more capabilities.</p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Can an AI Receptionist Replace an Answering Service?</h2>
              <p className="text-muted-foreground"><strong>Yes — and most businesses see improved results immediately.</strong> AI receptionists eliminate hold times, provide consistent call quality, and convert more calls into booked appointments because they act on calls rather than just recording them.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AIvsAnsweringService;
