// BrightLaunchIQ Product Tiers - Stripe Price IDs and Configuration

export type ProductTier = "localLift" | "leadLine" | "launchPad360";

export interface ProductConfig {
  id: ProductTier;
  name: string;
  tagline: string;
  setupPrice: number;
  monthlyPrice: number;
  setupPriceId: string;
  monthlyPriceId: string;
  trialDays: number;
  features: string[];
  dailyCost: string;
  highlighted?: boolean;
}

export const PRODUCTS: Record<ProductTier, ProductConfig> = {
  localLift: {
    id: "localLift",
    name: "LocalLift™",
    tagline: "The Foundation",
    setupPrice: 1500,
    monthlyPrice: 299,
    setupPriceId: "price_1SrM2NCUVmu4OLZneWNhhb7K",
    monthlyPriceId: "price_1Sxt2ACUVmu4OLZn801dJhrz",
    trialDays: 14,
    dailyCost: "$9.97",
    features: [
      "AEO optimization & visibility",
      "Local search dominance",
      "AI assistant discoverability",
      "Monthly performance audits",
      "14-Day Visibility Guarantee",
    ],
  },
  leadLine: {
    id: "leadLine",
    name: "LeadLine™",
    tagline: "AI Voice Assistant",
    setupPrice: 1500,
    monthlyPrice: 399,
    setupPriceId: "price_1SxsJSCUVmu4OLZnt5E5JP3o",
    monthlyPriceId: "price_1SxsKaCUVmu4OLZnAWqwpSn9",
    trialDays: 14,
    dailyCost: "$13.30",
    features: [
      "24/7 AI voice assistant",
      "Instant lead qualification",
      "Automated appointment booking",
      "CRM integration",
      "Custom conversation scripts",
      "14-Day Speed to Lead Guarantee",
    ],
  },
  launchPad360: {
    id: "launchPad360",
    name: "LaunchPad 360™",
    tagline: "The Growth Engine",
    setupPrice: 1500,
    monthlyPrice: 500,
    setupPriceId: "price_1SmQCECUVmu4OLZn8JQo9bnb",
    monthlyPriceId: "price_1SmQCVCUVmu4OLZnzHzOpbjz",
    trialDays: 14,
    dailyCost: "$16.60",
    highlighted: true,
    features: [
      "Custom AI infrastructure build",
      "500+ targeted local leads",
      "Multi-channel outreach (calls, SMS, email, LinkedIn)",
      "60-minute strategy session",
      "Automated inbox triage",
      "Monthly success audits",
      "14-Day Speed to Lead Guarantee",
    ],
  },
};

export const getProductByTier = (tier: ProductTier): ProductConfig => {
  return PRODUCTS[tier];
};

export const getAllProducts = (): ProductConfig[] => {
  return Object.values(PRODUCTS);
};
