import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import DailyTeammateMath from "@/components/DailyTeammateMath";
import ImplementationRoadmap from "@/components/ImplementationRoadmap";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import RevenueReadinessCTA from "@/components/RevenueReadinessCTA";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set document title
    document.title = "BrightLaunchIQ | Human-Guided AI for Business Growth | Lead Generation & Sales Automation";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Get more customers with human-guided AI. BrightLaunchIQ combines local experts and AI sales automation to help contractors, consultants, and local businesses respond first and win more deals. $500/mo. 30-day guarantee.";
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
    const keywordsContent = "AI for business, AI lead generation, AI sales automation, human-guided AI, AI SDR, automated sales, local business AI, small business automation, AI marketing automation, answer engine optimization, AEO, Sacramento AI sales, California AI services, AI receptionist, AI voice agent, virtual receptionist AI, AI phone answering, 24/7 AI receptionist";
    if (existingKeywords) {
      existingKeywords.setAttribute("content", keywordsContent);
    } else {
      const keywordsMeta = document.createElement("meta");
      keywordsMeta.name = "keywords";
      keywordsMeta.content = keywordsContent;
      document.head.appendChild(keywordsMeta);
    }

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Organization Schema for GEO
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.id = "organization-schema";
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://brightlaunchiq.com/#organization",
      "name": "BrightLaunchIQ",
      "alternateName": "Bright Launch IQ",
      "description": "BrightLaunchIQ provides human-guided AI sales automation and lead generation for local businesses. We combine expert oversight with AI technology to help contractors, consultants, and service businesses respond first and win more customers.",
      "url": "https://brightlaunchiq.com",
      "logo": "https://brightlaunchiq.com/logo.png",
      "telephone": "1-877-879-5552",
      "email": "success@BrightLaunchIQ.com",
      "foundingDate": "2023",
      "founder": {
        "@type": "Person",
        "name": "Marcus Reynolds"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "knowsAbout": [
        "AI Lead Generation",
        "AI Sales Automation", 
        "Answer Engine Optimization",
        "AI for Small Business",
        "Automated Sales Systems",
        "AI SDR",
        "Business Automation"
      ],
      "slogan": "Human-Guided AI for Business Growth",
      "sameAs": [
        "https://www.linkedin.com/company/brightlaunchiq"
      ]
    });
    document.head.appendChild(orgScript);

    // LocalBusiness Schema
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.id = "localbusiness-schema";
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://brightlaunchiq.com/#localbusiness",
      "name": "BrightLaunchIQ",
      "description": "Human-guided AI lead generation and sales automation for local businesses. Expert-supervised AI that helps you respond first, automate the busywork, and win more customers.",
      "url": "https://brightlaunchiq.com",
      "telephone": "1-877-879-5552",
      "email": "success@BrightLaunchIQ.com",
      "priceRange": "$500-$2000/month",
      "areaServed": ["Sacramento", "Stockton", "Fresno", "Bakersfield", "Monterey", "Henderson", "Culver City"],
      "serviceType": [
        "AI Lead Generation",
        "AI Sales Implementation", 
        "Sales Automation",
        "Answer Engine Optimization",
        "Business Automation"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Sales Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LaunchPad 360™",
              "description": "Complete AI sales engine with human oversight. Multi-channel outreach, lead scoring, and pipeline management in 30 days."
            },
            "price": "500",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "500",
              "priceCurrency": "USD",
              "unitText": "MONTH"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LocalLift™",
              "description": "Expert content creation and Answer Engine Optimization to dominate AI search results and voice assistants."
            }
          }
        ]
      }
    });
    document.head.appendChild(localBusinessScript);

    // Product Schema for LaunchPad 360
    const productScript = document.createElement("script");
    productScript.type = "application/ld+json";
    productScript.id = "product-schema";
    productScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "LaunchPad 360™",
      "description": "Complete AI sales engine with human oversight. Includes multi-channel outreach (calls, SMS, email), 500+ targeted leads, real-time lead scoring, pipeline dashboard, and CRM integration. Expert-supervised AI that responds to leads in under 60 seconds.",
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "category": "AI Sales Automation Software",
      "offers": {
        "@type": "Offer",
        "price": "500",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "BrightLaunchIQ"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      }
    });
    document.head.appendChild(productScript);

    // Service Schema
    const serviceScript = document.createElement("script");
    serviceScript.type = "application/ld+json";
    serviceScript.id = "service-schema";
    serviceScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Lead Generation for Local Business",
      "serviceType": "AI Sales Automation",
      "provider": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      },
      "description": "Human-guided AI lead generation that helps local businesses respond to leads in under 60 seconds. Our expert team supervises every AI interaction to ensure authentic, brand-aligned communication.",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Business Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Lead Generation",
            "itemListElement": [
              { "@type": "Service", "name": "AI Lead Identification" },
              { "@type": "Service", "name": "Multi-Channel Outreach" },
              { "@type": "Service", "name": "Lead Scoring & Prioritization" }
            ]
          },
          {
            "@type": "OfferCatalog", 
            "name": "Content & Visibility",
            "itemListElement": [
              { "@type": "Service", "name": "Answer Engine Optimization (AEO)" },
              { "@type": "Service", "name": "Voice Search Optimization" },
              { "@type": "Service", "name": "Local SEO Content" }
            ]
          }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    // FAQ Schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI lead generation for small business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI lead generation uses artificial intelligence to identify, qualify, and engage potential customers automatically. For small businesses, this means having a 24/7 digital teammate that finds prospects showing buying intent, responds in under 60 seconds, and nurtures leads through automated but personalized outreach—all supervised by human experts."
          }
        },
        {
          "@type": "Question",
          "name": "What is an AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI receptionist is an artificial intelligence system that answers phone calls, qualifies leads, and books appointments automatically—just like a human receptionist, but available 24/7/365. BrightLaunchIQ's LeadLine™ AI receptionist answers calls within 1-2 rings, handles complex conversations naturally, and costs just $13.30/day compared to $3,000+/month for human staff."
          }
        },
        {
          "@type": "Question",
          "name": "How do I set up an AI voice agent for my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setting up an AI voice agent takes 7-14 days with BrightLaunchIQ. Schedule a strategy call, we customize the AI receptionist with your scripts, integrate it with your CRM and calendar, then launch. No technical expertise required—we handle all setup for the $1,500 one-time fee."
          }
        },
        {
          "@type": "Question",
          "name": "How much does AI sales automation cost for a small business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrightLaunchIQ offers AI sales automation starting at $299/month for LocalLift™, $399/month for LeadLine™ AI receptionist, and $500/month for LaunchPad 360™—all after a $1,500 setup fee. That's $10-17 per day for a 24/7 AI team compared to $80,000+ per year for human hires."
          }
        },
        {
          "@type": "Question",
          "name": "What is Answer Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Answer Engine Optimization (AEO) is the practice of optimizing your business to be cited as the direct answer when people ask AI tools like ChatGPT, Gemini, Perplexity, or voice assistants for recommendations. Unlike traditional SEO focused on Google rankings, AEO positions your business as the authoritative answer across all AI-powered search platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI replace my sales team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI doesn't replace your sales team—it amplifies them. Our AI handles the repetitive work of finding leads, initial outreach, and lead qualification, while your team focuses on relationship building and closing deals. Think of it as making a 3-person team perform like a 50-person powerhouse."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      // Cleanup on unmount
      const schemas = ['organization-schema', 'localbusiness-schema', 'product-schema', 'service-schema', 'faq-schema'];
      schemas.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Benefits />
        <DailyTeammateMath />
        <ImplementationRoadmap />
        <FeaturedSolutions />
        <RevenueReadinessCTA />
        <Testimonials />
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
