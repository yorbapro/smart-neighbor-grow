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
    document.title = "BrightLaunchIQ | Human-Guided AI Sales for Local Business";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get more customers with Human-Guided AI. BrightLaunchIQ combines automated sales systems with human expertise to fill your calendar 24/7.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Get more customers with Human-Guided AI. BrightLaunchIQ combines automated sales systems with human expertise to fill your calendar 24/7.";
      document.head.appendChild(meta);
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
        "description": "Human-Guided AI sales automation for local businesses",
        "url": "https://brightlaunchiq.com",
        "telephone": "1-800-LAUNCH-IQ",
        "email": "success@BrightLaunchIQ.com",
        "areaServed": ["Sacramento", "Stockton", "Fresno", "Bakersfield"],
        "serviceType": ["AI Lead Generation", "Sales Automation", "Marketing Automation"]
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>

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
    </>
  );
};

export default Index;
