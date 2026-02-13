// BrightLaunchIQ Product Tiers - Revenue Infrastructure

export type ProductTier = "leadlineCore" | "leadlineGrowth" | "leadlinePro" | "proactiveLaunch" | "proactiveScale" | "proactiveDominate" | "lp360Growth" | "lp360Scale" | "lp360Dominate";

export type ProductFamily = "leadline" | "proactive" | "launchpad360";

export interface ProductConfig {
  id: ProductTier;
  family: ProductFamily;
  name: string;
  tierName: string;
  tagline: string;
  monthlyPrice: number;
  features: string[];
  usageMinutes: string;
  usageCalls: string;
  highlighted?: boolean;
  cta: string;
  isApplication?: boolean;
}

// LeadLine AI — Inbound AI Receptionist
export const LEADLINE_TIERS: ProductConfig[] = [
  {
    id: "leadlineCore",
    family: "leadline",
    name: "LeadLine AI",
    tierName: "Core",
    tagline: "AI Receptionist for Inbound Calls",
    monthlyPrice: 497,
    usageMinutes: "Up to 500 minutes/month",
    usageCalls: "Handles up to 250 calls/month",
    cta: "Get Started",
    features: [
      "24/7 AI call answering",
      "Lead capture & routing",
      "Secure infrastructure",
      "Call transcripts + summaries",
    ],
  },
  {
    id: "leadlineGrowth",
    family: "leadline",
    name: "LeadLine AI",
    tierName: "Growth",
    tagline: "AI Receptionist for Inbound Calls",
    monthlyPrice: 997,
    usageMinutes: "Up to 1,500 minutes/month",
    usageCalls: "Handles up to 750 calls/month",
    highlighted: true,
    cta: "Scale My Calls",
    features: [
      "Everything in Core, plus:",
      "Appointment booking",
      "CRM integration",
      "Analytics dashboard",
    ],
  },
  {
    id: "leadlinePro",
    family: "leadline",
    name: "LeadLine AI",
    tierName: "Pro",
    tagline: "AI Receptionist for Inbound Calls",
    monthlyPrice: 1497,
    usageMinutes: "Up to 2,500 minutes/month",
    usageCalls: "Handles up to 1,200 calls/month",
    cta: "Replace My Front Desk",
    features: [
      "Everything in Growth, plus:",
      "Multi-location support",
      "Advanced analytics",
      "Priority optimization",
    ],
  },
];

// LeadLine AI Proactive — Outbound AI Sales Engine
export const PROACTIVE_TIERS: ProductConfig[] = [
  {
    id: "proactiveLaunch",
    family: "proactive",
    name: "LeadLine AI Proactive",
    tierName: "Launch",
    tagline: "Automated Outbound Revenue Engine",
    monthlyPrice: 997,
    usageMinutes: "Up to 1,000 outbound minutes/month",
    usageCalls: "Handles up to 500 outbound calls/month",
    cta: "Launch Outbound",
    features: [
      "Cold & warm outbound campaigns",
      "Missed-call callbacks",
      "Sales conversation engine",
      "Revenue tracking",
    ],
  },
  {
    id: "proactiveScale",
    family: "proactive",
    name: "LeadLine AI Proactive",
    tierName: "Scale",
    tagline: "Automated Outbound Revenue Engine",
    monthlyPrice: 2000,
    usageMinutes: "Up to 3,000 outbound minutes/month",
    usageCalls: "Handles up to 1,500 outbound calls/month",
    highlighted: true,
    cta: "Scale Outbound",
    features: [
      "Everything in Launch, plus:",
      "Objection handling AI",
      "Multi-channel sequences",
      "Advanced CRM automation",
    ],
  },
  {
    id: "proactiveDominate",
    family: "proactive",
    name: "LeadLine AI Proactive",
    tierName: "Dominate",
    tagline: "Automated Outbound Revenue Engine",
    monthlyPrice: 3500,
    usageMinutes: "Up to 6,000 outbound minutes/month",
    usageCalls: "Handles up to 3,000 outbound calls/month",
    cta: "Dominate Outbound",
    features: [
      "Everything in Scale, plus:",
      "Dedicated account manager",
      "Custom playbooks",
      "Executive reporting",
    ],
  },
];

// LaunchPad 360™ — Complete AI Revenue System
export const LAUNCHPAD_TIERS: ProductConfig[] = [
  {
    id: "lp360Growth",
    family: "launchpad360",
    name: "LaunchPad 360™",
    tierName: "Growth",
    tagline: "The Complete AI Revenue System",
    monthlyPrice: 2997,
    usageMinutes: "Includes LeadLine AI Growth + LocalLift",
    usageCalls: "Funnel infrastructure included",
    cta: "Apply for Growth",
    isApplication: true,
    features: [
      "LeadLine AI (Growth tier)",
      "LocalLift SEO & authority",
      "Funnel infrastructure",
      "CRM automation",
    ],
  },
  {
    id: "lp360Scale",
    family: "launchpad360",
    name: "LaunchPad 360™",
    tierName: "Scale",
    tagline: "The Complete AI Revenue System",
    monthlyPrice: 4997,
    usageMinutes: "Inbound Pro + Outbound Scale included",
    usageCalls: "Advanced SEO + funnel optimization",
    highlighted: true,
    cta: "Apply for Scale",
    isApplication: true,
    features: [
      "LeadLine AI Pro (Inbound)",
      "Proactive Scale (Outbound)",
      "Advanced SEO & authority",
      "Funnel optimization",
      "Revenue dashboards",
    ],
  },
  {
    id: "lp360Dominate",
    family: "launchpad360",
    name: "LaunchPad 360™",
    tierName: "Dominate",
    tagline: "The Complete AI Revenue System",
    monthlyPrice: 8500,
    usageMinutes: "Inbound Pro+ & Outbound Dominate",
    usageCalls: "Full SEO authority buildout",
    cta: "Apply for Dominate",
    isApplication: true,
    features: [
      "LeadLine AI Pro+ (Inbound)",
      "Proactive Dominate (Outbound)",
      "Full SEO authority buildout",
      "Advanced automations",
      "Executive reporting",
      "Dedicated success team",
    ],
  },
];

export const getAllTiers = () => ({
  leadline: LEADLINE_TIERS,
  proactive: PROACTIVE_TIERS,
  launchpad360: LAUNCHPAD_TIERS,
});
