import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import useSEO from "@/hooks/useSEO";
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
  Globe,
  Star,
  Shield,
  Quote
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

export interface LocationTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  metricLabel: string;
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
  testimonial?: LocationTestimonial;
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
  testimonial,
}: LocationPageProps) => {
  
  // Default testimonial if not provided
  const localTestimonial = testimonial || {
    name: "Local Business Owner",
    role: "Owner",
    company: `${testimonialIndustry} Business`,
    quote: `BrightLaunchIQ transformed how we connect with customers in ${city}. Their human-guided AI approach means our outreach feels personal, not robotic. We've seen a significant increase in qualified leads.`,
    metric: "3x",
    metricLabel: "More Leads"
  };

  // SEO: proper canonical, title, and meta description
  useSEO({
    title: `AI Lead Generation ${city} ${state} | BrightLaunchIQ`,
    description: `AI lead generation and sales automation for ${city} businesses. Human-guided AI for ${specialty.toLowerCase()} in the ${areaCode} area. 60-second response.`,
    canonical: `https://brightlaunchiq.com/locations/${slug}`,
    keywords: `AI lead generation ${city}, sales automation ${city} ${state}, ${specialty}, ${areaCode}`,
  });

  useEffect(() => {
    // Remove existing schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // LocalBusiness structured data with enhanced E-E-A-T signals
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.id = "local-business-schema";
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://brightlaunchiq.com/locations/${slug}#business`,
      "name": `BrightLaunchIQ ${city}`,
      "description": `Human-guided AI lead generation and sales automation for ${city}, ${state} businesses. ${specialty}. Expert-supervised AI that responds to leads in under 60 seconds while keeping your brand voice authentic.`,
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
        "Human-Guided AI",
        "Answer Engine Optimization",
        specialty
      ],
      "priceRange": "$500-$1500/month",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      },
      "sameAs": [
        "https://www.linkedin.com/company/brightlaunchiq"
      ]
    });
    document.head.appendChild(localBusinessScript);

    // Review Schema for E-E-A-T
    const reviewScript = document.createElement("script");
    reviewScript.type = "application/ld+json";
    reviewScript.id = "review-schema";
    reviewScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": `BrightLaunchIQ ${city}`,
        "@id": `https://brightlaunchiq.com/locations/${slug}#business`
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": localTestimonial.name
      },
      "reviewBody": localTestimonial.quote
    });
    document.head.appendChild(reviewScript);

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
        "name": `BrightLaunchIQ ${city}`,
        "@id": `https://brightlaunchiq.com/locations/${slug}#business`
      },
      "areaServed": {
        "@type": "City",
        "name": city
      },
      "description": `Human-guided AI lead generation and sales automation for ${city} businesses. Our expert team supervises every AI interaction to ensure authentic, brand-aligned communication. We respond to leads in under 60 seconds.`,
      "serviceType": "AI Sales Automation",
      "offers": {
        "@type": "Offer",
        "price": "500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "500",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      }
    });
    document.head.appendChild(serviceScript);

    // BreadcrumbList Schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "breadcrumb-schema";
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://brightlaunchiq.com/locations" },
        { "@type": "ListItem", "position": 3, "name": `${city}, ${state}`, "item": `https://brightlaunchiq.com/locations/${slug}` }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // Organization Schema for authority
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.id = "org-schema";
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BrightLaunchIQ",
      "description": "Human-guided AI for business growth. We help local businesses respond first, automate the busywork, and win more customers.",
      "url": "https://brightlaunchiq.com",
      "knowsAbout": [
        "AI Lead Generation",
        "AI Sales Automation",
        "Answer Engine Optimization",
        "Human-Guided AI",
        "Small Business Automation",
        `${city} Business Services`
      ]
    });
    document.head.appendChild(orgScript);

    return () => {
      ['local-business-schema', 'review-schema', 'faq-schema', 'service-schema', 'breadcrumb-schema', 'org-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [city, state, specialty, contact, faqs, nearbyAreas, slug, localTestimonial]);

  useSEO({
    title: `AI Lead Generation ${city} ${state} | BrightLaunchIQ`,
    description: `AI lead generation and sales automation for ${city} businesses. Human-guided AI for ${specialty.toLowerCase()} in the ${areaCode} area. 60-second response.`,
    canonical: `https://brightlaunchiq.com/locations/${slug}`,
    keywords: `AI lead generation ${city}, sales automation ${city} ${state}, ${specialty}, ${areaCode}`,
  });

  useEffect(() => {
    // Remove existing schemas
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // LocalBusiness structured data with enhanced E-E-A-T signals
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.id = "local-business-schema";
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://brightlaunchiq.com/locations/${slug}#business`,
      "name": `BrightLaunchIQ ${city}`,
      "description": `Human-guided AI lead generation and sales automation for ${city}, ${state} businesses. ${specialty}. Expert-supervised AI that responds to leads in under 60 seconds while keeping your brand voice authentic.`,
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
        "Human-Guided AI",
        "Answer Engine Optimization",
        specialty
      ],
      "priceRange": "$500-$1500/month",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      },
      "sameAs": [
        "https://www.linkedin.com/company/brightlaunchiq"
      ]
    });
    document.head.appendChild(localBusinessScript);

    // Review Schema for E-E-A-T
    const reviewScript = document.createElement("script");
    reviewScript.type = "application/ld+json";
    reviewScript.id = "review-schema";
    reviewScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": `BrightLaunchIQ ${city}`,
        "@id": `https://brightlaunchiq.com/locations/${slug}#business`
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": localTestimonial.name
      },
      "reviewBody": localTestimonial.quote
    });
    document.head.appendChild(reviewScript);

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
        "name": `BrightLaunchIQ ${city}`,
        "@id": `https://brightlaunchiq.com/locations/${slug}#business`
      },
      "areaServed": {
        "@type": "City",
        "name": city
      },
      "description": `Human-guided AI lead generation and sales automation for ${city} businesses. Our expert team supervises every AI interaction to ensure authentic, brand-aligned communication. We respond to leads in under 60 seconds.`,
      "serviceType": "AI Sales Automation",
      "offers": {
        "@type": "Offer",
        "price": "500",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "500",
          "priceCurrency": "USD",
          "unitText": "MONTH"
        }
      }
    });
    document.head.appendChild(serviceScript);

    // BreadcrumbList Schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "breadcrumb-schema";
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com/" },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://brightlaunchiq.com/locations" },
        { "@type": "ListItem", "position": 3, "name": `${city}, ${state}`, "item": `https://brightlaunchiq.com/locations/${slug}` }
      ]
    });
    document.head.appendChild(breadcrumbScript);

    // Organization Schema for authority
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.id = "org-schema";
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BrightLaunchIQ",
      "description": "Human-guided AI for business growth. We help local businesses respond first, automate the busywork, and win more customers.",
      "url": "https://brightlaunchiq.com",
      "knowsAbout": [
        "AI Lead Generation",
        "AI Sales Automation",
        "Answer Engine Optimization",
        "Human-Guided AI",
        "Small Business Automation",
        `${city} Business Services`
      ]
    });
    document.head.appendChild(orgScript);

    return () => {
      ['local-business-schema', 'review-schema', 'faq-schema', 'service-schema', 'breadcrumb-schema', 'org-schema'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, [city, state, specialty, contact, faqs, nearbyAreas, slug, localTestimonial]);

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
                  <Link to="/aeo-audit">
                    Free AI Visibility Audit
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

        {/* Local Testimonial - E-E-A-T Signal */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-foreground font-medium mb-6 leading-relaxed">
                  "{localTestimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{localTestimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{localTestimonial.role}, {localTestimonial.company}</p>
                    <p className="text-sm text-muted-foreground">{city}, {state}</p>
                  </div>
                  <div className="bg-primary/10 rounded-xl px-6 py-3 text-center">
                    <p className="font-display text-2xl font-bold text-primary">{localTestimonial.metric}</p>
                    <p className="text-xs text-muted-foreground">{localTestimonial.metricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About This Location */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
                  {specialty}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Human-Guided AI for {city} Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Get connected to a real expert who understands {city}. Our local focus means smarter answers and faster growth for your business.
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

              <div className="bg-background border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Our {city} Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Expert-supervised AI solutions designed for local business growth:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: "AI Lead Generation" },
                    { icon: Clock, label: "<60s Response" },
                    { icon: Users, label: "Human Oversight" },
                    { icon: Globe, label: "AEO Optimization" },
                    { icon: MessageSquare, label: "Multi-Channel" },
                    { icon: MapPin, label: "Local Expertise" },
                    { icon: TrendingUp, label: "ROI Focused" },
                    { icon: Shield, label: "30-Day Guarantee" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why {city} Businesses Choose BrightLaunchIQ
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine the power of AI with human expertise to deliver results you can trust.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Human-in-the-Loop</h3>
                <p className="text-muted-foreground text-sm">Expert consultants guide every AI system so interactions feel real, never robotic.</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Under 60s Response</h3>
                <p className="text-muted-foreground text-sm">50% of sales go to first responders. Our AI never misses a lead.</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">ROI Guaranteed</h3>
                <p className="text-muted-foreground text-sm">If we don't deliver results in 30 days, we work for free until we do.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local FAQ Section for AEO */}
        <section className="py-16 md:py-24 bg-card">
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
                  <div key={index} className="bg-background border border-border rounded-xl p-6">
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

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your {city} Business?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get a free AI Visibility Audit to see how your business appears to AI search engines. 
              Join local {testimonialIndustry.toLowerCase()} businesses already winning with human-guided AI.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-background/10 backdrop-blur rounded-2xl p-6 mb-8">
              <div className="text-center px-6">
                <p className="text-4xl font-display font-bold">$1,500</p>
                <p className="text-sm opacity-80">One-time setup</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-foreground/30" />
              <div className="text-center px-6">
                <p className="text-4xl font-display font-bold">$500/mo</p>
                <p className="text-sm opacity-80">Human-guided AI team</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-primary-foreground/30" />
              <div className="text-center px-6">
                <p className="text-4xl font-display font-bold">$16.60</p>
                <p className="text-sm opacity-80">Per day cost</p>
              </div>
            </div>

            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/aeo-audit">
                Get Your Free AI Visibility Audit
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LocationPage;
