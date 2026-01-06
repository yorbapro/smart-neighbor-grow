import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "BrightLaunchIQ | AI Lead Generation & Sales Implementation for Local Business";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "AI lead generation and sales implementation for local businesses. Get a 24/7 digital teammate that books meetings while you sleep. $500/mo. 14-day guarantee. Serving Sacramento, Stockton, Fresno, Bakersfield.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    // Add keywords meta
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "AI lead generation, AI sales implementation, AI sales automation, automated sales engine, digital teammate, local business AI, answer engine optimization, AEO, Sacramento AI sales, Stockton AI, Fresno AI, Bakersfield AI, LaunchPad 360";
    if (!existingKeywords) {
      const keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      keywordsMeta.content = keywordsContent;
      document.head.appendChild(keywordsMeta);
    }

    // Add structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BrightLaunchIQ",
        "description": "AI lead generation and sales implementation for local businesses. Human-Guided AI sales automation that delivers a 24/7 digital teammate.",
        "url": "https://brightlaunchiq.com",
        "telephone": "1-800-LAUNCH-IQ",
        "email": "success@BrightLaunchIQ.com",
        "areaServed": ["Sacramento", "Stockton", "Fresno", "Bakersfield", "Central Valley"],
        "serviceType": ["AI Lead Generation", "AI Sales Implementation", "Sales Automation", "Answer Engine Optimization"],
        "priceRange": "$500-$2000/month",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Sales Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "LaunchPad 360™",
                "description": "Complete AI sales implementation with 14-day launch guarantee"
              },
              "price": "500",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "500",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            }
          ]
        }
      });
      document.head.appendChild(script);

      // Add FAQ structured data
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does AI lead generation work for small businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI lead generation works by scanning millions of data points to find intent signals. For example, if a potential customer in your city searches for a service you provide, the AI identifies them as a high-priority prospect and starts a helpful, automated conversation immediately."
            }
          },
          {
            "@type": "Question",
            "name": "What is AI sales implementation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI sales implementation is the process of building and installing automated sales systems directly into your existing business ecosystem. Unlike generic SaaS tools, we create custom infrastructure that integrates with your CRM."
            }
          },
          {
            "@type": "Question",
            "name": "How much does AI lead generation cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At $500/month, you gain a 24/7 digital worker for just $16.60 per day. Compare this to a human hire costing $80,000+/year, and the ROI is immediate."
            }
          }
        ]
      });
      document.head.appendChild(faqScript);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <About />
        <FAQ />
        <Locations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
