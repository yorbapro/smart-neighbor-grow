import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Bot } from "lucide-react";

const benefits = [
  { title: "24/7 Availability", detail: "Never miss a call again — even at 2am on a holiday." },
  { title: "70% Cost Savings", detail: "An AI receptionist costs a fraction of a human hire, with no benefits, training, or sick days." },
  { title: "Instant Lead Capture", detail: "Every caller's info is logged and categorized before they hang up." },
  { title: "Consistent Call Quality", detail: "The 500th call of the day sounds exactly like the first." },
  { title: "Automatic Appointment Booking", detail: "Appointments are booked directly into your calendar in real time." },
  { title: "Zero Hold Times", detail: "Unlimited simultaneous calls — no one waits in a queue." },
  { title: "CRM Auto-Logging", detail: "Call data flows directly into your CRM without manual entry." },
  { title: "Staff Productivity Boost", detail: "Your team focuses on revenue-generating work, not answering phones." },
  { title: "Scalable On Demand", detail: "Handle 10 calls or 10,000 — without hiring anyone." },
  { title: "After-Hours Revenue", detail: "Capture the 40% of leads that call outside business hours." },
];

const AIReceptionistBenefits = () => {
  useSEO({
    title: "10 Benefits of an AI Receptionist for Your Business | BrightLaunchIQ",
    description: "AI receptionists cut costs by 70%, eliminate missed calls, and book appointments 24/7. Here are 10 proven benefits with real business impact.",
    canonical: "https://brightlaunchiq.com/learning-center/business-growth/ai-receptionist-benefits",
    keywords: "AI receptionist benefits, advantages of AI receptionist, AI phone answering benefits, virtual receptionist advantages",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "benefits-schema";
    script.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "10 Benefits of an AI Receptionist for Your Business",
        "url": "https://brightlaunchiq.com/learning-center/business-growth/ai-receptionist-benefits",
        "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What are the benefits of an AI receptionist?", "acceptedAnswer": { "@type": "Answer", "text": "The top benefits include 24/7 availability, 70% cost savings vs human receptionists, instant lead capture, consistent call quality, automatic appointment booking, zero hold times, and CRM auto-logging." } },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => { document.getElementById("benefits-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>
        <div className="container max-w-6xl mx-auto py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Foundations</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">10 Benefits of an AI Receptionist for Your Business</h1>
              <p className="text-lg text-muted-foreground mb-12">An <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> does more than answer phones. Here are the ten ways it transforms your bottom line.</p>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Are the Top Benefits of an AI Receptionist?</h2>
                <p className="text-muted-foreground mb-6"><strong>The top benefits are 24/7 availability, 70% cost savings, instant lead capture, consistent call quality, and automatic appointment booking — with zero hold times and full CRM integration.</strong></p>

                {/* Quick Benefits Checklist */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Quick Benefits Checklist</h3>
                  <div className="space-y-3">
                    {benefits.map((b) => (
                      <div key={b.title} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">{b.title}</p>
                          <p className="text-sm text-muted-foreground">{b.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">How Much Money Can an AI Receptionist Save?</h2>
                <p className="text-muted-foreground"><strong>Most businesses save $2,200–$3,500 per month by replacing or supplementing a human receptionist with AI.</strong> That's $26,400–$42,000 per year — before counting the additional revenue from calls that would have been missed. A single recovered HVAC job ($450) or legal consultation ($500) can pay for an entire month of service.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Does It Actually Improve Customer Experience?</h2>
                <p className="text-muted-foreground"><strong>Yes — 68% of callers who reach voicemail hang up and call a competitor instead.</strong> An AI receptionist answers every call instantly, greets callers by name when integrated with your CRM, and provides accurate, consistent answers. No hold music. No "please call back during business hours." Just immediate, professional service.</p>
              </section>

              <section className="mb-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Will It Help My Team Be More Productive?</h2>
                <p className="text-muted-foreground"><strong>Absolutely — businesses report their staff reclaims 15–20 hours per week when AI handles routine calls.</strong> Your team stops playing phone tag and starts focusing on high-value work: closing deals, serving clients, and growing the business.</p>
              </section>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">Ready to stop the busy signal?</h3>
                <p className="text-sm text-muted-foreground mb-4">See these benefits in action for your business.</p>
                <Button variant="hero" size="default" className="w-full" asChild>
                  <Link to="/get-started">Start Free Trial <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionistBenefits;
