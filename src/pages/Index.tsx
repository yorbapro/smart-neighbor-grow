import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeProblem from "@/components/HomeProblem";
import HomeGrowthSystems from "@/components/HomeGrowthSystems";
import HomeCostSavings from "@/components/HomeCostSavings";
import Testimonials from "@/components/Testimonials";
import SecurityPillar from "@/components/SecurityPillar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "BrightLaunchIQ | AI-Powered Revenue Infrastructure for Local Businesses";

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "BrightLaunchIQ builds AI-powered revenue systems for local and service businesses. AI receptionists, AI sales agents, SEO authority, and conversion infrastructure — integrated into one growth system.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "AI revenue infrastructure, AI receptionist, AI sales agent, AI lead generation, AI for local business, small business automation, AI phone answering, virtual receptionist AI, AI sales automation, answer engine optimization, AEO, AI growth system";
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

    // Organization Schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.id = "organization-schema";
    orgScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://brightlaunchiq.com/#organization",
      "name": "BrightLaunchIQ",
      "alternateName": "Bright Launch IQ",
      "description": "BrightLaunchIQ builds AI-powered revenue infrastructure for local and service businesses. AI receptionists, AI sales agents, SEO authority, and conversion infrastructure integrated into one seamless growth system.",
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
        "AI Revenue Infrastructure",
        "AI Receptionist",
        "AI Sales Agent",
        "Answer Engine Optimization",
        "AI for Local Business",
        "Revenue Automation"
      ],
      "slogan": "AI-Powered Revenue Infrastructure for Local Businesses",
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
      "description": "AI-powered revenue infrastructure for local and service businesses. AI receptionists, outbound sales agents, SEO authority, and conversion systems integrated into one growth engine.",
      "url": "https://brightlaunchiq.com",
      "telephone": "1-877-879-5552",
      "email": "success@BrightLaunchIQ.com",
      "priceRange": "Starting at $497/month",
      "areaServed": ["Sacramento", "Stockton", "Fresno", "Bakersfield", "Monterey", "Henderson", "Culver City"],
      "serviceType": [
        "AI Receptionist",
        "AI Sales Automation",
        "AI Outbound Sales",
        "Answer Engine Optimization",
        "Revenue Infrastructure"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Revenue Infrastructure",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LeadLine AI",
              "description": "24/7 AI receptionist that answers every call, qualifies leads, and books appointments automatically."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LeadLine AI Proactive",
              "description": "AI-powered outbound sales engine that follows up, reactivates, and drives revenue automatically."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "LaunchPad 360™",
              "description": "Complete AI-powered growth engine — inbound, outbound, SEO, funnels, and automation integrated into one system."
            }
          }
        ]
      }
    });
    document.head.appendChild(localBusinessScript);

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
          "name": "What is AI revenue infrastructure?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI revenue infrastructure is a complete system that captures, qualifies, books, follows up, and converts leads automatically using artificial intelligence. BrightLaunchIQ integrates AI receptionists, AI sales agents, SEO authority, and conversion funnels into one seamless growth system."
          }
        },
        {
          "@type": "Question",
          "name": "What is an AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI receptionist is an artificial intelligence system that answers phone calls, qualifies leads, and books appointments automatically—just like a human receptionist, but available 24/7/365. LeadLine AI answers calls within 1-2 rings, handles complex conversations naturally, and costs less than hiring staff."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost compared to hiring staff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiring a receptionist costs $45,000-$65,000/year. An SDR costs $60,000+ plus commissions. BrightLaunchIQ replaces fragmented tools and payroll with one integrated AI-powered growth system, starting at a fraction of the cost of a single hire."
          }
        },
        {
          "@type": "Question",
          "name": "Is my customer data safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All data is encrypted in transit and at rest using AES-256 encryption — the same standard used by major banks. We do not train public AI models on your business data and maintain a strict zero-training policy on client data."
          }
        },
        {
          "@type": "Question",
          "name": "Can AI replace my sales team?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI doesn't replace your sales team—it amplifies them. Our AI handles the repetitive work of answering calls, qualifying leads, and follow-up, while your team focuses on relationship building and closing deals."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      const schemas = ['organization-schema', 'localbusiness-schema', 'faq-schema'];
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
        <HomeProblem />
        <HomeGrowthSystems />
        <HomeCostSavings />
        <Testimonials />
        <SecurityPillar />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
