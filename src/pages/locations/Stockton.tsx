import { useEffect } from "react";
import LocationPage from "@/components/locations/LocationPage";

const Stockton = () => {
  useEffect(() => {
    document.title = "AI Lead Generation Stockton | BrightLaunchIQ";
    window.scrollTo(0, 0);
  }, []);

  return (
    <LocationPage
      city="Stockton"
      areaCode="209"
      specialty="AI Logistics & New Business Growth"
      industries={["Logistics companies", "Shipping & distribution", "Warehousing", "Transportation services", "Service contractors"]}
      description="Stockton is California's critical logistics hub, connecting the Central Valley to global markets. Local distribution and logistics companies use our AI sales implementation to find new shipping partners and manage high-volume account prospecting automatically."
      heroHeadline="Stockton AI Sales & Logistics Lead Generation"
      heroSubheadline="24/7 lead tracking for 209 logistics and distribution businesses. Never miss a shipping contract inquiry again."
      localStats={{
        population: "320,000+ city / 770,000+ metro",
        businesses: "15,000+ logistics-related businesses",
        growthRate: "Port handles 8M+ tons annually"
      }}
      testimonialIndustry="Logistics & Distribution"
      nearbyAreas={["Lodi", "Tracy", "Manteca", "Modesto", "Lathrop"]}
    />
  );
};

export default Stockton;
