import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const comparisonRows = [
  { feature: "Voice Calls", ai: true, virtual: true },
  { feature: "24/7 Availability", ai: true, virtual: false },
  { feature: "Instant Pickup", ai: true, virtual: false },
  { feature: "Appointment Booking", ai: true, virtual: "Manual" },
  { feature: "CRM Auto-Logging", ai: true, virtual: false },
  { feature: "Unlimited Simultaneous Calls", ai: true, virtual: false },
  { feature: "Cost Per Month", ai: "$497–$1,497", virtual: "$1,500–$3,000" },
  { feature: "Consistency", ai: "100%", virtual: "Varies" },
  { feature: "Training Required", ai: "48 hours", virtual: "1–2 weeks" },
  { feature: "Human Warmth", ai: "Good", virtual: "Excellent" },
];

const AIvsVirtualReceptionist = () => {
  useSEO({
    title: "AI Receptionist vs Virtual Receptionist: Key Differences | BrightLaunchIQ",
    description: "AI receptionists provide 24/7 instant coverage at lower cost. Virtual receptionists offer human warmth. See the full feature comparison.",
    canonical: "https://brightlaunchiq.com/ai-receptionist/learning-center/for-business/ai-vs-virtual-receptionist",
    keywords: "AI receptionist vs virtual receptionist, virtual receptionist comparison, AI vs remote receptionist",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ai-vs-virtual-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI Receptionist vs Virtual Receptionist: Key Differences",
        "url": "https://brightlaunchiq.com/learning-center/business-growth/ai-vs-virtual-receptionist",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What's the difference between AI and virtual receptionists?", "acceptedAnswer": { "@type": "Answer", "text": "A virtual receptionist is a remote human worker. An AI receptionist is software that handles calls 24/7 with instant pickup, automatic appointment booking, and CRM integration at lower cost." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("ai-vs-virtual-schema")?.remove(); };
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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">AI Receptionist vs Virtual Receptionist: Key Differences</h1>
            <p className="text-lg text-muted-foreground mb-12">A virtual receptionist is a remote human. An <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> is intelligent software. Here's how they compare on cost, features, and results.</p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What's the Difference Between an AI and Virtual Receptionist?</h2>
              <p className="text-muted-foreground mb-6"><strong>A virtual receptionist is a remote human worker who answers calls during set hours. An AI receptionist is software that handles calls 24/7 with instant pickup, automatic appointment booking, and CRM integration.</strong></p>

              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-display font-bold text-foreground">Feature</th>
                      <th className="text-left p-4 font-display font-bold text-primary">AI Receptionist</th>
                      <th className="text-left p-4 font-display font-bold text-foreground">Virtual Receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4">{renderCell(row.ai)}</td>
                        <td className="p-4">{renderCell(row.virtual)}</td>
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

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">When Should You Choose a Virtual Receptionist Over AI?</h2>
              <p className="text-muted-foreground"><strong>Choose a virtual receptionist when your calls require deep empathy, complex negotiation, or highly sensitive conversations.</strong> For everything else — routine inquiries, appointment scheduling, lead capture, after-hours coverage — an AI receptionist delivers better results at a fraction of the cost.</p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Can You Use Both Together?</h2>
              <p className="text-muted-foreground"><strong>Yes — a hybrid approach is often the best strategy.</strong> Let AI handle the volume (routine calls, after-hours, overflow) while your virtual or in-house receptionist focuses on high-value interactions that benefit from a human touch.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AIvsVirtualReceptionist;
