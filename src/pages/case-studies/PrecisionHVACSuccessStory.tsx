import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, TrendingUp, DollarSign, Play } from "lucide-react";

const stats = [
  { icon: TrendingDown, label: "Missed Calls", value: "-98%", color: "text-primary" },
  { icon: TrendingUp, label: "ROI", value: "450%", color: "text-primary" },
  { icon: DollarSign, label: "Booked Revenue", value: "+$18k/mo", color: "text-primary" },
];

const PrecisionHVACSuccessStory = () => {
  useSEO({
    title: "Precision HVAC Case Study: 450% ROI with AI Receptionist | BrightLaunchIQ",
    description: "How Precision HVAC eliminated 98% of missed calls and added $18k/month in booked revenue with BrightLaunchIQ's AI receptionist.",
    canonical: "https://brightlaunchiq.com/case-studies/precision-hvac-success-story",
    keywords: "AI receptionist case study, HVAC AI receptionist, missed calls case study, AI phone answering results",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "case-study-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Precision HVAC: How an AI Receptionist Delivered 450% ROI",
      "description": "Case study: Precision HVAC eliminated 98% of missed calls and added $18k/month in booked revenue.",
      "url": "https://brightlaunchiq.com/case-studies/precision-hvac-success-story",
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      "about": {
        "@type": "Product",
        "name": "BrightLaunchIQ AI Receptionist",
        "url": "https://brightlaunchiq.com/ai-receptionist",
      },
    });
    document.head.appendChild(script);
    return () => { document.getElementById("case-study-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb /></div>

        <article className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">Case Study</span>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Precision HVAC: How an AI Receptionist Delivered 450% ROI</h1>

                <section className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Was the Challenge?</h2>
                  <p className="text-muted-foreground mb-4"><strong>Precision HVAC was losing an estimated $22,000 per month in revenue due to missed calls during peak season and after business hours.</strong> With a team of 12 technicians and a single front-desk receptionist, incoming calls routinely went to voicemail during lunch breaks, service rush hours, and evenings.</p>
                  <p className="text-muted-foreground">The owner, Mark Torres, knew the problem but couldn't justify hiring a second full-time receptionist at $3,200/month plus benefits. Traditional answering services had proven unreliable — callers complained about scripted responses and inability to book appointments.</p>
                </section>

                <section className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Solution Did They Choose?</h2>
                  <p className="text-muted-foreground mb-4"><strong>Precision HVAC deployed BrightLaunchIQ's <Link to="/ai-receptionist" className="text-primary hover:underline">AI Receptionist</Link> Growth tier with CRM integration and after-hours coverage.</strong> The AI was trained on HVAC-specific terminology, pricing questions, and emergency triage protocols within 48 hours of onboarding.</p>
                </section>

                <section className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">What Were the Results?</h2>
                  <p className="text-muted-foreground mb-4"><strong>Within 60 days, missed calls dropped by 98% and monthly booked revenue increased by $18,000.</strong></p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Before:</strong> 35-40 missed calls/week → <strong>After:</strong> Less than 1 missed call/week</li>
                    <li>• <strong>Before:</strong> No after-hours bookings → <strong>After:</strong> 28% of new jobs booked after 6pm</li>
                    <li>• <strong>Before:</strong> 8-minute average response time → <strong>After:</strong> Instant pickup on every call</li>
                    <li>• <strong>Before:</strong> $3,200/mo receptionist cost → <strong>After:</strong> $997/mo AI receptionist (69% savings)</li>
                  </ul>
                </section>

                {/* Video Testimonial Placeholder */}
                <section className="mb-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Video Testimonial</h2>
                  <div className="rounded-xl overflow-hidden border border-border bg-muted">
                    <AspectRatio ratio={16 / 9}>
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <Play className="w-8 h-8 text-primary" />
                          </div>
                          <p className="text-muted-foreground text-sm">Video Testimonial Coming Soon</p>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                </section>

                <blockquote className="border-l-4 border-primary pl-6 py-4 my-10 bg-card rounded-r-xl">
                  <p className="text-lg italic text-foreground mb-3">"BrightLaunchIQ didn't just answer phones; they grew our business while we slept."</p>
                  <cite className="text-sm text-muted-foreground not-italic">— Mark Torres, Owner, Precision HVAC</cite>
                </blockquote>

                <section className="bg-card border border-border rounded-xl p-8 text-center">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Ready for Results Like These?</h2>
                  <p className="text-muted-foreground mb-6"><strong>See how an AI receptionist can transform your business. Take the free readiness assessment.</strong></p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/ai-receptionist-readiness-assessment">Get My Free AI Score <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/ai-receptionist">Explore AI Receptionist</Link>
                    </Button>
                  </div>
                </section>
              </div>

              {/* Results Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">Results at a Glance</h3>
                    <div className="space-y-4">
                      {stats.map((stat) => (
                        <div key={stat.label} className="flex items-center gap-4 p-3 bg-background rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <stat.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">{stat.label}</p>
                            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">Company Profile</h3>
                    <dl className="space-y-3 text-sm">
                      <div><dt className="text-muted-foreground">Industry</dt><dd className="font-medium text-foreground">HVAC Services</dd></div>
                      <div><dt className="text-muted-foreground">Team Size</dt><dd className="font-medium text-foreground">12 Technicians</dd></div>
                      <div><dt className="text-muted-foreground">Location</dt><dd className="font-medium text-foreground">Sacramento, CA</dd></div>
                      <div><dt className="text-muted-foreground">AI Tier</dt><dd className="font-medium text-foreground">Growth ($997/mo)</dd></div>
                      <div><dt className="text-muted-foreground">Time to ROI</dt><dd className="font-medium text-foreground">30 Days</dd></div>
                    </dl>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrecisionHVACSuccessStory;
