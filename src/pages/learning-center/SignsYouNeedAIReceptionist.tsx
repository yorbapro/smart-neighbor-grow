import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";

const signs = [
  { title: "You're Missing More Than 5 Calls Per Week", body: "Every missed call is a missed opportunity. If your team can't answer every ring, an AI receptionist ensures zero calls go to voicemail." },
  { title: "Your After-Hours Leads Vanish", body: "Over 40% of service calls happen outside business hours. Without 24/7 coverage, you're handing revenue to competitors who answer." },
  { title: "Your Front Desk Is Overwhelmed", body: "When your receptionist juggles walk-ins, calls, and admin tasks, call quality suffers. An AI receptionist handles overflow seamlessly." },
  { title: "Your Lead Response Time Exceeds 5 Minutes", body: "Speed-to-lead data shows that responding within 5 minutes makes you 21x more likely to qualify the lead. AI responds instantly." },
  { title: "You're Spending Over $3,000/Month on Answering Services", body: "Traditional answering services charge per call with inconsistent quality. An AI receptionist delivers better results at a fraction of the cost." },
];

const SignsYouNeedAIReceptionist = () => {
  useSEO({
    title: "5 Signs You Need an AI Receptionist | BrightLaunchIQ",
    description: "Missing calls, slow lead response, overwhelmed staff? These 5 signs mean it's time for an AI receptionist. Take the readiness quiz.",
    canonical: "https://brightlaunchiq.com/learning-center/business-growth/signs-you-need-ai-receptionist",
    keywords: "signs you need AI receptionist, missed calls business, AI phone answering, virtual receptionist signs",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "signs-article-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "5 Signs You Need an AI Receptionist",
      "description": "Discover the warning signs that your business needs an AI receptionist to stop losing revenue.",
      "url": "https://brightlaunchiq.com/learning-center/business-growth/signs-you-need-ai-receptionist",
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
    });
    document.head.appendChild(script);
    return () => { document.getElementById("signs-article-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Business Growth</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">5 Signs You Need an AI Receptionist</h1>
            <p className="text-lg text-muted-foreground mb-12">If any of these sound familiar, your business is leaving money on the table. An <Link to="/ai-receptionist" className="text-primary hover:underline">AI receptionist</Link> can fix it.</p>

            <div className="space-y-8 mb-12">
              {signs.map((sign, i) => (
                <section key={i} className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-2">Sign #{i + 1}: {sign.title}</h2>
                      <p className="text-muted-foreground"><strong>{sign.body.split(".")[0]}.</strong> {sign.body.split(".").slice(1).join(".")}</p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="prose-section mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Should You Do Next?</h2>
              <p className="text-muted-foreground mb-6"><strong>Take a free readiness assessment to find out exactly how much revenue you're losing to missed calls.</strong> It takes 2 minutes and gives you a personalized action plan.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist-readiness-assessment">Take the Readiness Assessment <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/aeo-audit">Get a Free AEO Audit</Link>
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

export default SignsYouNeedAIReceptionist;
