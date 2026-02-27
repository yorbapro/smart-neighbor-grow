import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const comparisonRows = [
  { feature: "24/7 Availability", ai: "✅ Always on", human: "❌ Limited to shifts" },
  { feature: "Cost Per Month", ai: "$497–$1,497", human: "$3,200–$4,500+" },
  { feature: "Consistency", ai: "✅ 100% scripted accuracy", human: "⚠️ Varies by mood/training" },
  { feature: "Scalability", ai: "✅ Unlimited simultaneous calls", human: "❌ 1 call at a time" },
  { feature: "Appointment Booking", ai: "✅ Instant calendar sync", human: "⚠️ Manual entry" },
  { feature: "CRM Integration", ai: "✅ Automatic logging", human: "⚠️ Manual data entry" },
  { feature: "After-Hours Coverage", ai: "✅ Included", human: "❌ Requires overtime/night shift" },
  { feature: "Speed to Answer", ai: "< 1 second", human: "3–15 seconds avg" },
  { feature: "Training Time", ai: "48 hours", human: "2–4 weeks" },
  { feature: "Empathy & Nuance", ai: "⚠️ Good, improving", human: "✅ Natural" },
  { feature: "Sick Days / Turnover", ai: "✅ None", human: "❌ Avg 15 days/year" },
];

const AIvsHumanReceptionist = () => {
  useSEO({
    title: "AI vs Human Receptionist: Full Comparison | BrightLaunchIQ",
    description: "AI receptionists cost 70% less, never miss calls, and book appointments 24/7. See the full side-by-side comparison with human receptionists.",
    canonical: "https://brightlaunchiq.com/learning-center/business-growth/ai-vs-human-receptionist",
    keywords: "AI vs human receptionist, AI receptionist comparison, virtual receptionist vs human, AI phone answering vs staff",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ai-vs-human-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "AI Receptionist vs Human Receptionist: The Complete Comparison",
        "url": "https://brightlaunchiq.com/learning-center/business-growth/ai-vs-human-receptionist",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is an AI receptionist better than a human receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "For most service businesses, yes. AI receptionists cost 70% less, never miss calls, and provide 24/7 coverage with instant appointment booking." } },
          { "@type": "Question", "name": "Can an AI receptionist replace a human?", "acceptedAnswer": { "@type": "Answer", "text": "AI receptionists handle the majority of routine calls. Most businesses use a hybrid approach where AI handles volume and humans handle complex situations." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("ai-vs-human-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Comparison</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">AI Receptionist vs Human Receptionist: The Complete Comparison</h1>
            <p className="text-lg text-muted-foreground mb-12">Choosing between an <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> and a human receptionist? This guide breaks down cost, performance, and ROI so you can make the right call.</p>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Which Is Better: AI or Human Receptionist?</h2>
              <p className="text-muted-foreground mb-6"><strong>For most service businesses, an AI receptionist delivers better results at 70% lower cost.</strong> AI excels at consistency, 24/7 availability, and instant appointment booking — while human receptionists still hold an edge in complex emotional conversations.</p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="text-left p-4 font-display font-bold text-foreground">Feature</th>
                      <th className="text-left p-4 font-display font-bold text-primary">AI Receptionist</th>
                      <th className="text-left p-4 font-display font-bold text-foreground">Human Receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="p-4 font-medium text-foreground">{row.feature}</td>
                        <td className="p-4 text-muted-foreground">{row.ai}</td>
                        <td className="p-4 text-muted-foreground">{row.human}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-started">See the BrightLaunchIQ Difference — Start Free Trial <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Much Can You Save with an AI Receptionist?</h2>
              <p className="text-muted-foreground mb-4"><strong>The average business saves $2,200–$3,500 per month by switching from a human receptionist to AI.</strong> That's $26,400–$42,000 annually — not counting the revenue recovered from calls that previously went to voicemail.</p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Which Industries Benefit Most from AI Receptionists?</h2>
              <p className="text-muted-foreground mb-4"><strong>Service-based industries with high call volumes and appointment-driven revenue see the greatest ROI.</strong> Top performers include:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { name: "HVAC Contractors", href: "/industries/hvac-contractors" },
                  { name: "Dental Clinics", href: "/industries/dental-clinics" },
                  { name: "Personal Injury Lawyers", href: "/industries/personal-injury-lawyers" },
                  { name: "Residential Real Estate", href: "/industries/residential-real-estate" },
                  { name: "Emergency Plumbers", href: "/industries/emergency-plumbers" },
                  { name: "Medical Spas", href: "/industries/medical-spas" },
                ].map((ind) => (
                  <Link key={ind.name} to={ind.href} className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors text-muted-foreground hover:text-primary">
                    <ArrowRight className="w-4 h-4" /> {ind.name}
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Is an AI Receptionist Better Than a Human?</h2>
              <p className="text-muted-foreground mb-4"><strong>For routine call handling, appointment booking, and lead capture — yes.</strong> AI provides 100% consistency, zero sick days, and handles unlimited simultaneous calls. For complex emotional situations or highly nuanced negotiations, a human touch still matters. The best solution? A hybrid approach where AI handles volume and humans handle exceptions.</p>
            </section>

            <section className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">Can an AI Receptionist Replace a Human Completely?</h2>
              <p className="text-muted-foreground"><strong>AI receptionists handle the vast majority of routine calls without human intervention.</strong> Most businesses don't eliminate their receptionist — they redeploy them to higher-value tasks like client relationships while AI handles the phone.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AIvsHumanReceptionist;
