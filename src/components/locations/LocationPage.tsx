import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  Check,
  Zap,
  MessageSquare,
  Mail,
  Smartphone,
  Building,
  Globe
} from "lucide-react";

export interface LocationContact {
  phone: string;
  phoneDisplay: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationPageProps {
  city: string;
  state: string;
  areaCode: string;
  specialty: string;
  industries: string[];
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  localStats: {
    population: string;
    businesses: string;
    growthRate: string;
  };
  testimonialIndustry: string;
  nearbyAreas: string[];
  contact: LocationContact;
  faqs: LocationFAQ[];
  slug: string;
}

const LocationPage = ({
  city,
  state,
  areaCode,
  specialty,
  industries,
  description,
  heroHeadline,
  heroSubheadline,
  localStats,
  testimonialIndustry,
  nearbyAreas,
  contact,
  faqs,
  slug,
}: LocationPageProps) => {
  useEffect(() => {
    // LocalBusiness structured data for SEO
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.id = "local-business-schema";
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://brightlaunchiq.com/locations/${slug}#business`,
      "name": `BrightLaunchIQ ${city}`,
      "description": `AI lead generation and sales automation for ${city}, ${state} businesses. ${specialty}. Human-guided AI that responds to leads in under 60 seconds.`,
      "url": `https://brightlaunchiq.com/locations/${slug}`,
      "telephone": contact.phone,
      "email": contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contact.address,
        "addressLocality": contact.city,
        "addressRegion": contact.state,
        "postalCode": contact.zip,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "",
        "longitude": ""
      },
      "areaServed": [
        {
          "@type": "City",
          "name": city,
          "containedInPlace": {
            "@type": "State",
            "name": state
          }
        },
        ...nearbyAreas.map(area => ({
          "@type": "City",
          "name": area
        }))
      ],
      "serviceType": [
        "AI Lead Generation",
        "AI Sales Automation",
        "Sales Implementation",
        specialty
      ],
      "priceRange": "$500-$1500",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/brightlaunchiq"
      ]
    });
    document.head.appendChild(localBusinessScript);

    // FAQPage structured data for AEO
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(faqScript);

    // Service structured data for GEO
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.id = "service-schema";
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `AI Lead Generation in ${city}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": `BrightLaunchIQ ${city}`
      },
      "areaServed": {
        "@type": "City",
        "name": city
      },
      "description": `Human-guided AI lead generation and sales automation for ${city} businesses. We respond to leads in under 60 seconds and automate 70% of sales tasks.`,
      "serviceType": "AI Sales Automation"
    });
    document.head.appendChild(serviceScript);

    return () => {
      const localBiz = document.getElementById("local-business-schema");
      const faq = document.getElementById("faq-schema");
      const service = document.getElementById("service-schema");
      if (localBiz) document.head.removeChild(localBiz);
      if (faq) document.head.removeChild(faq);
      if (service) document.head.removeChild(service);
    };
  }, [city, state, specialty, contact, faqs, nearbyAreas, slug]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">{city}, {state} • {areaCode} Area</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {heroHeadline}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {heroSubheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/get-started">
                    Start Your 30-Day Launch
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`tel:${contact.phone}`}>
                    <Phone className="mr-2" size={18} />
                    {contact.phoneDisplay}
                  </a>
                </Button>
              </div>

              {/* Local Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-card/50 backdrop-blur rounded-xl p-4 border border-border">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">{localStats.population}</p>
                </div>
                <div className="bg-card/50 backdrop-blur rounded-xl p-4 border border-border">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">{localStats.businesses}</p>
                </div>
                <div className="bg-card/50 backdrop-blur rounded-xl p-4 border border-border">
                  <Zap className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">{localStats.growthRate}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Contact Card */}
        <section className="py-8 bg-secondary">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-secondary-foreground">
              <div className="flex items-center gap-3">
                <Building className="w-5 h-5 text-primary" />
                <span className="text-sm">{contact.address}, {contact.city}, {contact.state} {contact.zip}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${contact.phone}`} className="text-sm hover:text-primary transition-colors">
                  {contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${contact.email}`} className="text-sm hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About This Location */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                  {specialty}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Boost Your Business in {city}
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Elevate your online presence in {city} with expert website content tailored for small business success by BrightLaunchIQ.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  {description}
                </p>
                <div className="space-y-3">
                  <p className="font-semibold text-foreground">Industries We Serve in {city}:</p>
                  {industries.map((industry) => (
                    <div key={industry} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Content Solutions for {city} Businesses
                </h3>
                <p className="text-muted-foreground mb-6">
                  Transform your online presence with tailored content solutions designed to enhance visibility and drive growth:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, label: "Custom Web Content" },
                    { icon: TrendingUp, label: "SEO Copywriting" },
                    { icon: MessageSquare, label: "Blog Posts" },
                    { icon: Mail, label: "Email Sequences" },
                    { icon: Users, label: "Social Content" },
                    { icon: Phone, label: "24/7 AI Support" },
                  ].map((channel) => (
                    <div key={channel.label} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                      <channel.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{channel.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem & Solution */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Empowering {city} Small Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                We understand the unique challenges of small businesses in {city}. 
                Our expert team delivers personalized content solutions that drive results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Custom Content</h3>
                <p className="text-muted-foreground text-sm">Tailored website content that captures your brand essence</p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">SEO Optimized</h3>
                <p className="text-muted-foreground text-sm">Boost your search rankings with expertly written copy</p>
              </div>

              <div className="bg-background border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Drive Growth</h3>
                <p className="text-muted-foreground text-sm">Transform visibility into leads and lasting success</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQ Section for AEO */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                  {city} AI Lead Generation FAQ
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Questions About AI Sales in {city}
                </h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Start Your {city} Launch in 30 Days
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join local {testimonialIndustry.toLowerCase()} businesses already using AI lead generation 
              to close more deals with less effort.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-background/10 backdrop-blur rounded-2xl p-6 mb-8">
              <div className="text-center px-6">
                <p className="text-4xl font-display font-bold">$1,500</p>
                <p className="text-sm opacity-80">One-time setup</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-foreground/30" />
              <div className="text-center px-6">
                <p className="text-4xl font-display font-bold">$500/mo</p>
                <p className="text-sm opacity-80">Your 24/7 digital teammate</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-foreground/30" />
              <div className="text-center px-6">
                <p className="text-4xl font-display font-bold">$16.60</p>
                <p className="text-sm opacity-80">Per day cost</p>
              </div>
            </div>

            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/get-started">
                Get Your Free AI Growth Report
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Also Serving Nearby Areas
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyAreas.map((area) => (
                  <span 
                    key={area}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Looking for AI lead generation in another city?
              </p>
              <Link to="/#locations" className="text-primary hover:underline font-medium">
                View All Locations →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
