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
}

const sectors: { label: string; industries: IndustryLink[] }[] = [
  {
    label: "Home Services",
    industries: [
      { name: "HVAC Contractors", slug: "hvac-contractors" },
      { name: "Emergency Plumbers", slug: "emergency-plumbers" },
      { name: "Roofing Companies", slug: "roofing-companies" },
      { name: "Electricians", slug: "electricians" },
      { name: "Pest Control Services", slug: "pest-control" },
      { name: "Locksmiths", slug: "locksmiths" },
      { name: "Garage Door Repair", slug: "garage-door-repair" },
      { name: "Landscapers", slug: "landscapers" },
      { name: "Junk Removal", slug: "junk-removal" },
      { name: "House Cleaning Services", slug: "house-cleaning" },
    ],
  },
  {
    label: "Healthcare",
    industries: [
      { name: "Dental Clinics", slug: "dental-clinics" },
      { name: "Chiropractors", slug: "chiropractors" },
      { name: "Veterinary Clinics", slug: "veterinary-clinics" },
      { name: "Physical Therapy Centers", slug: "physical-therapy" },
      { name: "Mental Health Counselors", slug: "mental-health-counselors" },
      { name: "Medical Spas", slug: "medical-spas" },
      { name: "Optometrists", slug: "optometrists" },
      { name: "Dermatologists", slug: "dermatologists" },
      { name: "Orthodontists", slug: "orthodontists" },
      { name: "Holistic Health", slug: "holistic-health" },
    ],
  },
  {
    label: "Professional",
    industries: [
      { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
      { name: "Family Law Attorneys", slug: "family-law-attorneys" },
      { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
      { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
      { name: "Immigration Consultants", slug: "immigration-consultants" },
      { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
      { name: "Notary Publics", slug: "notary-publics" },
      { name: "Private Investigators", slug: "private-investigators" },
    ],
  },
  {
    label: "Real Estate",
    industries: [
      { name: "Residential Real Estate", slug: "residential-real-estate" },
      { name: "Property Management", slug: "property-management" },
      { name: "Commercial Real Estate", slug: "commercial-real-estate" },
      { name: "Mortgage Brokers", slug: "mortgage-brokers" },
      { name: "Home Inspectors", slug: "home-inspectors" },
    ],
  },
  {
    label: "Auto",
    industries: [
      { name: "Auto Repair Shops", slug: "auto-repair-shops" },
      { name: "Mobile Detailers", slug: "mobile-detailers" },
      { name: "Towing Companies", slug: "towing-companies" },
      { name: "Car Rental Agencies", slug: "car-rental-agencies" },
      { name: "Driving Schools", slug: "driving-schools" },
    ],
  },
  {
    label: "Personal Services",
    industries: [
      { name: "Hair Salons", slug: "hair-salons" },
      { name: "Barbershops", slug: "barbershops" },
      { name: "Day Spas", slug: "day-spas" },
      { name: "Tattoo Studios", slug: "tattoo-studios" },
      { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios" },
      { name: "Pet Groomers", slug: "pet-groomers" },
    ],
  },
  {
    label: "Hospitality",
    industries: [
      { name: "Catering Services", slug: "catering-services" },
      { name: "Event Venues", slug: "event-venues" },
      { name: "Wedding Planners", slug: "wedding-planners" },
      { name: "Boutique Hotels", slug: "boutique-hotels" },
    ],
  },
  {
    label: "B2B & Education",
    industries: [
      { name: "IT Support & MSPs", slug: "it-support-msps" },
      { name: "Private Tutors", slug: "private-tutors" },
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
        {/* Hero */}
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

        {/* Industry Card Grid */}
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
                      className="group p-5 bg-card border border-border rounded-xl shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all flex items-center justify-between"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {ind.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-3" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
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
