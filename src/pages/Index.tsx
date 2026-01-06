import { Helmet } from "react-helmet-async";
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
  return (
    <>
      <Helmet>
        <title>BrightLaunchIQ | Human-Guided AI Sales for Local Business</title>
        <meta
          name="description"
          content="Get more customers with Human-Guided AI. BrightLaunchIQ combines automated sales systems with human expertise to fill your calendar 24/7. Serving Sacramento, Stockton, Fresno, and Bakersfield."
        />
        <meta
          name="keywords"
          content="AI sales automation, lead generation, small business, local business marketing, Sacramento, Stockton, Fresno, Bakersfield"
        />
        <link rel="canonical" href="https://brightlaunchiq.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="BrightLaunchIQ | Human-Guided AI Sales for Local Business" />
        <meta property="og:description" content="Get more customers with Human-Guided AI. We combine automated sales systems with human expertise to fill your calendar 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://brightlaunchiq.com" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BrightLaunchIQ",
            "description": "Human-Guided AI sales automation for local businesses",
            "url": "https://brightlaunchiq.com",
            "telephone": "1-800-LAUNCH-IQ",
            "email": "success@BrightLaunchIQ.com",
            "areaServed": ["Sacramento", "Stockton", "Fresno", "Bakersfield"],
            "serviceType": ["AI Lead Generation", "Sales Automation", "Marketing Automation"]
          })}
        </script>
      </Helmet>

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
