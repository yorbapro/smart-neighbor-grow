import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const LocationsPage = () => {
  const locations = [
    {
      city: "Sacramento",
      state: "CA",
      areaCode: "916",
      specialty: "AI Sales Strategy & Lead Generation",
      industries: ["Tech startups", "Professional consulting", "Government contractors"],
      description: "California's capital and a fast-growing hub for professional services and tech innovation.",
      slug: "sacramento",
      phone: "(916) 555-0123",
      email: "sacramento@brightlaunchiq.com",
      address: "1215 K Street, Suite 1700, Sacramento, CA 95814",
    },
    {
      city: "Bakersfield",
      state: "CA",
      areaCode: "661",
      specialty: "AI Energy & Industrial Sales",
      industries: ["Energy", "Natural resources", "Heavy industry"],
      description: "Built on energy and hard work, Bakersfield is the economic engine of Kern County.",
      slug: "bakersfield",
      phone: "(661) 555-0123",
      email: "bakersfield@brightlaunchiq.com",
      address: "4900 California Avenue, Tower B, Bakersfield, CA 93309",
    },
    {
      city: "Culver City",
      state: "CA",
      areaCode: "310",
      specialty: "AI Creative & Media Sales",
      industries: ["Entertainment", "Digital media", "Creative agencies"],
      description: "The heart of Silicon Beach and LA's creative technology corridor.",
      slug: "culver-city",
      phone: "(310) 555-0123",
      email: "culvercity@brightlaunchiq.com",
      address: "9665 Wilshire Boulevard, Suite 200, Culver City, CA 90212",
    },
    {
      city: "Henderson",
      state: "NV",
      areaCode: "702",
      specialty: "AI Hospitality & Growth Sales",
      industries: ["Hospitality", "Real estate", "Healthcare"],
      description: "Nevada's second-largest city and a booming hub for business expansion.",
      slug: "henderson",
      phone: "(702) 555-0123",
      email: "henderson@brightlaunchiq.com",
      address: "2300 W Sahara Avenue, Suite 800, Henderson, NV 89102",
    },
    {
      city: "Monterey",
      state: "CA",
      areaCode: "831",
      specialty: "AI Tourism & Ag-Tech Sales",
      industries: ["Tourism", "Agriculture", "Marine research"],
      description: "Where coastal beauty meets agricultural innovation on California's Central Coast.",
      slug: "monterey",
      phone: "(831) 555-0123",
      email: "monterey@brightlaunchiq.com",
      address: "99 Pacific Street, Suite 100, Monterey, CA 93940",
    },
  ];

  useEffect(() => {
    document.title = "Our Locations | BrightLaunchIQ - AI Lead Generation Near You";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Find BrightLaunchIQ offices in Sacramento, Bakersfield, Culver City, Henderson NV, and Monterey. Local AI lead generation expertise for your region."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content">
        <div className="container pt-24">
          <Breadcrumb />
        </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
            Regional Hubs
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Lead Generation <span className="text-primary">Near You</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Local expertise with world-class AI sales implementation. We understand your market 
            because we're in your neighborhood.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-hero transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      {location.city}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {location.state} • {location.areaCode} Area
                    </span>
                  </div>
                </div>

                {/* Specialty */}
                <p className="text-sm font-semibold text-primary mb-3">
                  {location.specialty}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {location.description}
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    {location.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" />
                    {location.email}
                  </div>
                </div>

                {/* Industries */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.industries.slice(0, 2).map((industry) => (
                    <span
                      key={industry}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                {/* View More Link */}
                <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
                  View {location.city} Details
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Don't See Your City?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We serve businesses nationwide. Contact us to discuss 
            AI lead generation solutions for your market.
          </p>
          <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90">
            <Link to="/get-started">Get Started Anywhere</Link>
          </Button>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default LocationsPage;
