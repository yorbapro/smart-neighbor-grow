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
  setupFee?: number;
  setupFeatures?: string[];
  features: string[];
  usageMinutes: string;
  usageCalls: string;
  highlighted?: boolean;
  cta: string;
  isApplication?: boolean;
}

// BrightLaunchIQ AI Receptionist — Inbound AI Receptionist
export const LEADLINE_TIERS: ProductConfig[] = [
  {
    id: "leadlineCore",
    family: "leadline",
    name: "BrightLaunchIQ AI Receptionist",
    tierName: "Core",
    tagline: "Your AI receptionist that answers, qualifies, and routes — so you never miss a lead",
    monthlyPrice: 497,
    setupFee: 1500,
    setupFeatures: [
      "Script customization",
      "Call routing configuration",
      "Knowledge base ingestion",
      "Initial testing",
      "Basic optimization pass",
    ],
    usageMinutes: "Up to 500 minutes/month",
    usageCalls: "Handles up to 250 calls/month",
    cta: "Get Started",
    features: [
      "24/7 AI call answering — never miss a lead",
      "Lead capture & smart qualification",
      "Intelligent call routing & escalation",
      "Custom voice persona & script design",
      "Call transcripts + sentiment analysis",
      "Encrypted, secure infrastructure",
    ],
  },
  {
    id: "leadlineGrowth",
    family: "leadline",
    name: "BrightLaunchIQ AI Receptionist",
    tierName: "Growth",
    tagline: "An AI receptionist that books appointments, syncs your CRM, and automates follow-up",
    monthlyPrice: 997,
    setupFee: 2500,
    setupFeatures: [
      "Calendar integration",
      "CRM integration",
      "Booking logic setup",
      "Automation configuration",
      "Testing booking flows",
    ],
    usageMinutes: "Up to 1,500 minutes/month",
    usageCalls: "Handles up to 750 calls/month",
    highlighted: false,
    cta: "Scale My Calls",
    features: [
      "Everything in Core, plus:",
      "Appointment booking & calendar sync",
      "CRM integration (HubSpot, Salesforce, etc.)",
      "Analytics dashboard & ROI reporting",
      "Automated SMS/email confirmations",
      "Zapier & Slack integrations",
    ],
  },
  {
    id: "leadlinePro",
    family: "leadline",
    name: "BrightLaunchIQ AI Receptionist",
    tierName: "Pro",
    tagline: "A fully custom AI receptionist with multi-location routing, advanced analytics, and priority support",
    monthlyPrice: 1497,
    setupFee: 5000,
    setupFeatures: [
      "Advanced reporting setup",
      "Multi-location routing",
      "Custom voice configuration",
      "Advanced analytics configuration",
      "Priority optimization cycle",
    ],
    usageMinutes: "Up to 2,500 minutes/month",
    usageCalls: "Handles up to 1,200 calls/month",
    cta: "Replace My Front Desk",
    features: [
      "Everything in Growth, plus:",
      "Multi-location call routing",
      "Custom AI voice cloning",
      "Advanced analytics & executive reporting",
      "Priority optimization & dedicated support",
      "Revenue attribution modeling",
    ],
  },
];

// BrightLaunchIQ AI Sales Agent — Outbound AI Sales Engine
export const PROACTIVE_TIERS: ProductConfig[] = [
  {
    id: "proactiveLaunch",
    family: "proactive",
    name: "BrightLaunchIQ AI Sales Agent",
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
    name: "BrightLaunchIQ AI Sales Agent",
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
    name: "BrightLaunchIQ AI Sales Agent",
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
    usageMinutes: "Includes AI Receptionist Growth + LocalLift",
    usageCalls: "Funnel infrastructure included",
    cta: "Apply for Growth",
    isApplication: true,
    features: [
      "AI Receptionist (Growth tier)",
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
      "AI Receptionist Pro (Inbound)",
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
      "AI Receptionist Pro+ (Inbound)",
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
