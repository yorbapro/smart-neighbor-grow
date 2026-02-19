import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "HVAC Contractors",
  slug: "hvac-contractors",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Emergency Dispatch", "Lead Qualification", "Maintenance Scheduling", "After-Hours Triage", "Seasonal Campaign Intake", "Service Agreement Renewals"],
  crm: "ServiceTitan",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Solar Installers", slug: "solar-installers" },
    { name: "Insulation Contractors", slug: "insulation-contractors" },
    { name: "Emergency Plumbers", slug: "emergency-plumbers" },
    { name: "Electricians", slug: "electricians" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle emergency HVAC dispatch?", answer: "Yes. The AI triages emergency calls by severity, captures location and system details, and dispatches your on-call technician instantly — 24/7, including holidays." },
    { question: "Does the AI integrate with ServiceTitan?", answer: "Yes. BrightLaunchIQ integrates directly with ServiceTitan to create new jobs, update customer records, and sync scheduling in real time." },
    { question: "How much do HVAC contractors lose from missed calls?", answer: "$150,000 or more per year on average. Industry data shows that 85% of callers who reach voicemail never call back, turning every missed call into permanent lost revenue." },
    { question: "Can the AI qualify HVAC leads before routing them?", answer: "Yes. The AI asks qualifying questions about system type, issue severity, and service history, then routes high-priority leads to your team while scheduling routine calls automatically." },
    { question: "Does the AI handle after-hours HVAC calls?", answer: "Yes. The AI answers every call 24/7 with natural voice technology, handling after-hours emergencies, weekend inquiries, and holiday calls without overtime costs." },
    { question: "How quickly can an HVAC company get started?", answer: "Most HVAC companies are fully live within 48 hours. Our team configures your call flows, integrates with ServiceTitan, and trains the AI on your specific services." },
  ],
};

const HVACContractors = () => <IndustryPageTemplate data={data} />;
export default HVACContractors;
