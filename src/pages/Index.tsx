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
    document.title = "AI Receptionist for Small Business | 24/7 AI Phone Answering — BrightLaunchIQ";

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setMeta("description", "BrightLaunchIQ AI Receptionist answers every call 24/7, qualifies leads, and books appointments automatically. The best AI receptionist for small business — HVAC, plumbing, dental, legal, and more. Setup in days, no contracts.");
    setMeta("keywords", "AI receptionist, AI receptionist for small business, AI answering service, 24/7 AI receptionist, virtual receptionist AI, AI phone answering, AI call answering service, automated receptionist, best AI receptionist, AI receptionist cost, AI receptionist for contractors, AI receptionist for HVAC, AI receptionist for dentists, AI receptionist for law firms, AI receptionist for healthcare, AI receptionist for plumbers, AI receptionist vs virtual receptionist, AI receptionist vs answering service, how does AI receptionist work, small business AI phone answering, automated phone answering for small business, AI front desk, never miss a call AI, after hours answering service AI, AI appointment booking, missed call prevention");
    setMeta("author", "BrightLaunchIQ");
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    setMeta("og:title", "AI Receptionist for Small Business | 24/7 AI Phone Answering — BrightLaunchIQ", true);
    setMeta("og:description", "Never miss another customer call. BrightLaunchIQ AI Receptionist answers 24/7, qualifies leads, and books appointments automatically. Best AI receptionist for HVAC, dental, legal, and service businesses.", true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://brightlaunchiq.com", true);
    setMeta("og:site_name", "BrightLaunchIQ", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "AI Receptionist for Small Business | BrightLaunchIQ");
    setMeta("twitter:description", "24/7 AI receptionist that answers every call, qualifies leads, and books appointments. Setup in days. No contracts.");

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brightlaunchiq.com/");

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
      "alternateName": ["Bright Launch IQ", "BrightLaunch IQ"],
      "description": "BrightLaunchIQ is the leading AI receptionist provider for small businesses. Our 24/7 AI phone answering service answers calls, qualifies leads, books appointments, and routes urgent calls automatically for HVAC, plumbing, dental, legal, and service businesses.",
      "url": "https://brightlaunchiq.com",
      "logo": "https://brightlaunchiq.com/logo.png",
      "telephone": "1-877-879-5552",
      "email": "success@BrightLaunchIQ.com",
      "foundingDate": "2023",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "knowsAbout": [
        "AI Receptionist",
        "AI Receptionist for Small Business",
        "AI Phone Answering Service",
        "AI Answering Service",
        "Virtual Receptionist AI",
        "AI Call Answering",
        "Automated Receptionist",
        "AI Appointment Booking",
        "AI Front Desk",
        "24/7 AI Receptionist",
        "AI Receptionist for HVAC",
        "AI Receptionist for Dentists",
        "AI Receptionist for Law Firms",
        "AI Receptionist for Contractors",
        "AI Receptionist for Healthcare",
        "AI Receptionist for Plumbers",
        "Missed Call Prevention"
      ],
      "slogan": "Never Miss Another Customer Call",
      "sameAs": [
        "https://www.linkedin.com/company/brightlaunchiq"
      ]
    });
    document.head.appendChild(orgScript);

    // SoftwareApplication Schema (for Google rich results)
    const softwareScript = document.createElement("script");
    softwareScript.type = "application/ld+json";
    softwareScript.id = "software-schema";
    softwareScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "BrightLaunchIQ AI Receptionist",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud-based",
      "description": "AI receptionist that answers phone calls 24/7 for small businesses. Handles appointment booking, lead qualification, call routing, FAQ answering, and after-hours coverage. Works for HVAC, plumbing, dental offices, law firms, medical practices, and all service businesses.",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "offerCount": "2"
      },
      "featureList": [
        "24/7 AI call answering",
        "Appointment booking and calendar integration",
        "Lead qualification and scoring",
        "Intelligent call routing and transfer",
        "After-hours and overflow coverage",
        "CRM integration (Salesforce, HubSpot, Zoho)",
        "Call transcription and summaries",
        "SMS and email confirmations",
        "Custom branded greeting",
        "Multi-location support",
        "HIPAA-ready configurations"
      ],
      "brand": {
        "@type": "Organization",
        "name": "BrightLaunchIQ"
      }
    });
    document.head.appendChild(softwareScript);

    // LocalBusiness Schema
    const localBusinessScript = document.createElement("script");
    localBusinessScript.type = "application/ld+json";
    localBusinessScript.id = "localbusiness-schema";
    localBusinessScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://brightlaunchiq.com/#localbusiness",
      "name": "BrightLaunchIQ",
      "description": "Best AI receptionist for small business. 24/7 AI phone answering service that answers calls, qualifies leads, books appointments, and routes urgent calls for HVAC, plumbing, dental, legal, and service businesses.",
      "url": "https://brightlaunchiq.com",
      "telephone": "1-877-879-5552",
      "email": "success@BrightLaunchIQ.com",
      "priceRange": "$$",
      "areaServed": "United States",
      "serviceType": [
        "AI Receptionist",
        "AI Answering Service",
        "Virtual Receptionist",
        "AI Phone Answering",
        "Automated Call Handling",
        "AI Appointment Booking"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Receptionist Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Receptionist Standard",
              "description": "24/7 AI receptionist with call answering, appointment booking, lead qualification, and CRM integration for small businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Receptionist Premium",
              "description": "Advanced AI receptionist with smart call routing, multi-calendar integration, advanced lead qualification, and dedicated optimization support."
            }
          }
        ]
      }
    });
    document.head.appendChild(localBusinessScript);

    // Comprehensive FAQ Schema — targets People Also Ask + chatbot answers
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-schema";
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI receptionist is an artificial intelligence system that answers phone calls for your business automatically — just like a human receptionist, but available 24/7/365. It handles appointment booking, lead qualification, call routing, FAQ answering, and after-hours coverage. BrightLaunchIQ's AI receptionist answers within seconds, sounds natural and professional, and costs a fraction of hiring staff."
          }
        },
        {
          "@type": "Question",
          "name": "How much does an AI receptionist cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI receptionist services typically cost between $199-$499 per month, compared to $35,000-$55,000+ per year for a full-time human receptionist. BrightLaunchIQ offers Standard and Premium plans with predictable monthly pricing — no per-call fees, no overtime, no payroll taxes. Most businesses see ROI within the first month by capturing just 1-2 additional jobs."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best AI receptionist for small business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best AI receptionist for small business should offer 24/7 call answering, appointment booking, lead qualification, CRM integration, and natural-sounding conversations. BrightLaunchIQ is purpose-built for small service businesses like HVAC, plumbing, dental offices, law firms, and contractors. It sets up in days, requires no technical skills, and includes ongoing optimization."
          }
        },
        {
          "@type": "Question",
          "name": "Will customers know they're talking to AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most callers don't notice. Modern AI receptionists like BrightLaunchIQ use natural, conversational language trained on your specific business. The AI knows your services, pricing, hours, and FAQs. It handles complex conversations naturally, and many callers assume they're speaking with a real person at your front desk."
          }
        },
        {
          "@type": "Question",
          "name": "Can an AI receptionist transfer calls to a live person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrightLaunchIQ's AI receptionist can transfer urgent or high-priority calls to you or your team in real time. You set the routing rules for which call types get transferred — emergencies, VIP clients, or specific requests go straight to a live person. Everything else is handled and organized by the AI."
          }
        },
        {
          "@type": "Question",
          "name": "Does an AI receptionist work with my calendar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrightLaunchIQ integrates with popular calendar and scheduling tools including Google Calendar, Outlook, Calendly, and industry-specific systems. Appointments are booked in real time with no double-bookings. Callers receive SMS and email confirmations automatically."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to set up an AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most businesses are live with BrightLaunchIQ within a few days. Setup includes training the AI on your business — services, FAQs, scheduling preferences, routing rules, and tone. No technical skills are required. The BrightLaunchIQ team handles everything from configuration to testing."
          }
        },
        {
          "@type": "Question",
          "name": "Is an AI receptionist good for HVAC and plumbing companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI receptionists are ideal for HVAC, plumbing, electrical, and home service companies. These businesses miss 60-80% of inbound calls because technicians are on job sites. BrightLaunchIQ answers every call instantly, books service appointments, captures emergency details, and routes urgent calls — even at 2 AM when a customer's basement is flooding."
          }
        },
        {
          "@type": "Question",
          "name": "Can an AI receptionist handle multiple locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. BrightLaunchIQ supports multiple locations with different routing rules, business hours, and schedules for each. Whether you have two locations or twenty, the AI handles them all from a single system with unified reporting and analytics."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an AI receptionist and a virtual receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A virtual receptionist is a remote human answering calls, typically costing $250-$500+/month with limited hours and per-call fees. An AI receptionist like BrightLaunchIQ is software that answers calls automatically 24/7 at a flat monthly rate. AI receptionists offer instant answering (no hold times), unlimited simultaneous calls, and consistent quality — at a fraction of the cost."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an AI receptionist and an answering service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional answering services use human operators in call centers who take messages and follow scripts. AI receptionists like BrightLaunchIQ go further — they answer instantly (no hold times), book appointments directly into your calendar, qualify leads with custom questions, and route urgent calls. AI receptionists cost less, work 24/7, and handle unlimited simultaneous calls."
          }
        },
        {
          "@type": "Question",
          "name": "Is an AI receptionist HIPAA compliant for healthcare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BrightLaunchIQ offers HIPAA-ready configurations for medical offices, dental practices, and healthcare providers. This includes encrypted call handling, secure data storage, and compliant patient information handling. Contact our team to discuss specific compliance requirements for your practice."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // HowTo Schema
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.id = "howto-schema";
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Set Up an AI Receptionist for Your Business",
      "description": "Get a 24/7 AI receptionist answering your business calls in just a few days with BrightLaunchIQ.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Train the AI on your business",
          "text": "We configure the AI with your services, FAQs, routing rules, tone, and scheduling preferences."
        },
        {
          "@type": "HowToStep",
          "name": "AI answers calls 24/7",
          "text": "The AI receptionist answers every call with natural voice conversations, just like a real front desk."
        },
        {
          "@type": "HowToStep",
          "name": "You get organized leads",
          "text": "Receive transcripts, summaries, call routing, and booked appointments — all automatically."
        }
      ]
    });
    document.head.appendChild(howToScript);

    // Speakable Schema for voice assistants
    const speakableScript = document.createElement("script");
    speakableScript.type = "application/ld+json";
    speakableScript.id = "speakable-schema";
    speakableScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI Receptionist for Small Business | BrightLaunchIQ",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".hero-subheadline"]
      },
      "url": "https://brightlaunchiq.com/"
    });
    document.head.appendChild(speakableScript);

    return () => {
      const schemas = ['organization-schema', 'software-schema', 'localbusiness-schema', 'faq-schema', 'howto-schema', 'speakable-schema'];
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
