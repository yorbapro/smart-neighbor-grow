import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeProblem from "@/components/HomeProblem";
import HomeSolution from "@/components/HomeSolution";
import HomeHowItWorks from "@/components/HomeHowItWorks";
import HomeComparison from "@/components/HomeComparison";
import HomeIdealFor from "@/components/HomeIdealFor";
import HomeResults from "@/components/HomeResults";
import HomePricingPosition from "@/components/HomePricingPosition";
import HomeFAQ from "@/components/HomeFAQ";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "BrightLaunchIQ | 24/7 AI Receptionist for Small Businesses";

    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Never miss another customer call. BrightLaunchIQ's 24/7 AI Receptionist answers, qualifies, and books callers automatically — so every opportunity turns into revenue. Fast setup, no contracts.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }

    const existingKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "AI receptionist, AI answering service, 24/7 AI receptionist, virtual receptionist, AI phone answering, small business AI receptionist, AI call answering, missed call prevention, automated receptionist, business phone answering service";
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
      "description": "BrightLaunchIQ provides a 24/7 AI Receptionist that answers calls, qualifies leads, and books appointments automatically for small and service businesses.",
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
        "AI Receptionist",
        "AI Answering Service",
        "Virtual Receptionist",
        "AI Phone Answering",
        "Small Business Automation"
      ],
      "slogan": "Never Miss Another Customer Call",
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
      "description": "24/7 AI Receptionist for small and service businesses. Answers calls, qualifies leads, and books appointments automatically.",
      "url": "https://brightlaunchiq.com",
      "telephone": "1-877-879-5552",
      "email": "success@BrightLaunchIQ.com",
      "priceRange": "Contact for pricing",
      "areaServed": "United States",
      "serviceType": [
        "AI Receptionist",
        "AI Answering Service",
        "Virtual Receptionist",
        "Automated Call Handling"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Receptionist",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "BrightLaunchIQ AI Receptionist",
              "description": "24/7 AI receptionist that answers every call, qualifies leads, captures caller information, and books appointments automatically."
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
          "name": "Will customers know it's AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most callers don't notice. The AI uses natural, conversational language trained on your business. It sounds professional and human-like, handling conversations just like a real front desk."
          }
        },
        {
          "@type": "Question",
          "name": "Can the AI receptionist transfer calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The AI can transfer urgent or high-priority calls to you or your team in real time. You set the routing rules for which call types get transferred."
          }
        },
        {
          "@type": "Question",
          "name": "Does it integrate with my calendar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrightLaunchIQ integrates with popular calendar and scheduling tools so appointments are booked in real time. No double-bookings, no back-and-forth."
          }
        },
        {
          "@type": "Question",
          "name": "How long does setup take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses are live within a few days. We train the AI on your business — services, FAQs, scheduling preferences, routing rules, and tone. No technical skills needed."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an AI receptionist cost compared to hiring staff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI receptionist costs a fraction of hiring a full-time employee. No payroll taxes, no benefits, no overtime, no training costs, and no turnover. It works 24/7 at a predictable monthly rate."
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
        <HomeSolution />
        <HomeHowItWorks />
        <HomeComparison />
        <HomeIdealFor />
        <HomeResults />
        <HomePricingPosition />
        <HomeFAQ />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
