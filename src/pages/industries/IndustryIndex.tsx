import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface IndustryLink {
  name: string;
  slug: string;
  loss: string;
}

const sectors: { label: string; industries: IndustryLink[] }[] = [
  {
    label: "Home Services",
    industries: [
      { name: "HVAC Contractors", slug: "hvac-contractors", loss: "$150k" },
      { name: "Emergency Plumbers", slug: "emergency-plumbers", loss: "$120k" },
      { name: "Roofing Companies", slug: "roofing-companies", loss: "$250k" },
      { name: "Electricians", slug: "electricians", loss: "$90k" },
      { name: "Pest Control Services", slug: "pest-control", loss: "$60k" },
      { name: "Locksmiths", slug: "locksmiths", loss: "$45k" },
      { name: "Garage Door Repair", slug: "garage-door-repair", loss: "$75k" },
      { name: "Landscapers", slug: "landscapers", loss: "$55k" },
      { name: "Junk Removal", slug: "junk-removal", loss: "$40k" },
      { name: "House Cleaning Services", slug: "house-cleaning", loss: "$35k" },
    ],
  },
  {
    label: "Medical & Health",
    industries: [
      { name: "Dental Clinics", slug: "dental-clinics", loss: "$200k" },
      { name: "Chiropractors", slug: "chiropractors", loss: "$80k" },
      { name: "Veterinary Clinics", slug: "veterinary-clinics", loss: "$110k" },
      { name: "Physical Therapy Centers", slug: "physical-therapy", loss: "$95k" },
      { name: "Mental Health Counselors", slug: "mental-health-counselors", loss: "$70k" },
      { name: "Medical Spas", slug: "medical-spas", loss: "$130k" },
      { name: "Optometrists", slug: "optometrists", loss: "$65k" },
      { name: "Dermatologists", slug: "dermatologists", loss: "$140k" },
      { name: "Orthodontists", slug: "orthodontists", loss: "$180k" },
      { name: "Holistic Health", slug: "holistic-health", loss: "$50k" },
    ],
  },
  {
    label: "Legal & Professional",
    industries: [
      { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers", loss: "$500k" },
      { name: "Family Law Attorneys", slug: "family-law-attorneys", loss: "$220k" },
      { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers", loss: "$300k" },
      { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys", loss: "$160k" },
      { name: "Immigration Consultants", slug: "immigration-consultants", loss: "$140k" },
      { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals", loss: "$110k" },
      { name: "Notary Publics", slug: "notary-publics", loss: "$25k" },
      { name: "Private Investigators", slug: "private-investigators", loss: "$85k" },
    ],
  },
  {
    label: "Real Estate & Property",
    industries: [
      { name: "Residential Real Estate", slug: "residential-real-estate", loss: "$180k" },
      { name: "Property Management", slug: "property-management", loss: "$120k" },
      { name: "Commercial Real Estate", slug: "commercial-real-estate", loss: "$400k" },
      { name: "Mortgage Brokers", slug: "mortgage-brokers", loss: "$200k" },
      { name: "Home Inspectors", slug: "home-inspectors", loss: "$45k" },
    ],
  },
  {
    label: "Automotive",
    industries: [
      { name: "Auto Repair Shops", slug: "auto-repair-shops", loss: "$110k" },
      { name: "Mobile Detailers", slug: "mobile-detailers", loss: "$30k" },
      { name: "Towing Companies", slug: "towing-companies", loss: "$90k" },
      { name: "Car Rental Agencies", slug: "car-rental-agencies", loss: "$60k" },
      { name: "Driving Schools", slug: "driving-schools", loss: "$40k" },
    ],
  },
  {
    label: "Beauty & Wellness",
    industries: [
      { name: "Hair Salons", slug: "hair-salons", loss: "$50k" },
      { name: "Barbershops", slug: "barbershops", loss: "$35k" },
      { name: "Day Spas", slug: "day-spas", loss: "$70k" },
      { name: "Tattoo Studios", slug: "tattoo-studios", loss: "$55k" },
      { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios", loss: "$45k" },
    ],
  },
  {
    label: "Events & Hospitality",
    industries: [
      { name: "Catering Services", slug: "catering-services", loss: "$150k" },
      { name: "Event Venues", slug: "event-venues", loss: "$300k" },
      { name: "Wedding Planners", slug: "wedding-planners", loss: "$120k" },
      { name: "Boutique Hotels", slug: "boutique-hotels", loss: "$85k" },
    ],
  },
  {
    label: "Other Services",
    industries: [
      { name: "IT Support & MSPs", slug: "it-support-msps", loss: "$140k" },
      { name: "Pet Groomers", slug: "pet-groomers", loss: "$40k" },
      { name: "Private Tutors", slug: "private-tutors", loss: "$30k" },
    ],
  },
];

const IndustryIndex = () => {
  useSEO({
    title: "AI Receptionist by Industry | BrightLaunchIQ",
    description: "Explore how BrightLaunchIQ's AI Receptionist serves 50+ industries — from HVAC and dental to law firms and real estate. 24/7 call answering built for your business.",
    canonical: "https://brightlaunchiq.com/industries",
    keywords: "AI receptionist industries, AI phone answering by industry, virtual receptionist for small business",
  });

  useEffect(() => {
    const existing = document.getElementById("industries-index-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "industries-index-schema";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "AI Receptionist by Industry",
      "description": "50+ industry-specific AI Receptionist solutions by BrightLaunchIQ.",
      "url": "https://brightlaunchiq.com/industries",
      "provider": { "@type": "Organization", "name": "BrightLaunchIQ" },
    });
    document.head.appendChild(script);
    return () => { document.getElementById("industries-index-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-hero-dark overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(187,92%,42%,0.12),transparent_60%)]" />
          <div className="container relative z-10">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} className="mb-8 text-white/60" />
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
              AI Receptionist for <span className="text-primary">Every Industry</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              50+ industry-specific solutions. Purpose-built AI that speaks your language, integrates with your tools, and never misses a call.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            {sectors.map((sector) => (
              <div key={sector.label} className="mb-16 last:mb-0">
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  {sector.label}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {sector.industries.map((ind) => (
                    <Link
                      key={ind.slug}
                      to={`/industries/${ind.slug}`}
                      className="group flex items-center justify-between p-4 bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all"
                    >
                      <div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">{ind.name}</span>
                        <span className="block text-xs text-muted-foreground mt-1">Avg. loss: {ind.loss}/yr</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-hero-dark">
          <div className="container text-center">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-4">Don't See Your Industry?</h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Our AI Receptionist adapts to any business that relies on incoming calls. Talk to us — we'll customize it for you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryIndex;
