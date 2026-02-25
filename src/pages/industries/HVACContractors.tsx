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
    { question: "Can an AI receptionist handle emergency HVAC dispatch?", answer: "Yes. BrightLaunchIQ AI Receptionist is specifically designed for the urgent needs of HVAC contractors. It triages emergency calls by severity, captures critical details like location and system issues, and dispatches your on-call technician instantly — 24/7, including holidays. This ensures no emergency call is ever missed, providing peace of mind for both you and your customers." },
    { question: "Does the AI integrate with ServiceTitan, Housecall Pro, or Jobber?", answer: "Yes. BrightLaunchIQ AI Receptionist integrates directly with leading HVAC CRM and field service management software like ServiceTitan, Housecall Pro, and Jobber. This allows the AI to create new jobs, update customer records, and sync scheduling in real time, streamlining your operations and reducing manual data entry." },
    { question: "How much do HVAC contractors lose from missed calls?", answer: "HVAC contractors lose an average of $150,000 or more per year from missed calls. Industry data consistently shows that 85% of callers who reach voicemail will hang up and call a competitor, turning every missed call into permanent lost revenue. BrightLaunchIQ ensures you capture every opportunity." },
    { question: "Can the AI qualify HVAC leads before routing them?", answer: "Absolutely. Our AI is trained to ask specific qualifying questions about system type, issue severity, urgency, and service history. It then intelligently routes high-priority, qualified leads directly to your sales or service team, while scheduling routine calls automatically, ensuring your team focuses on the most valuable opportunities." },
    { question: "Does the AI handle after-hours HVAC calls?", answer: "Yes, the BrightLaunchIQ AI Receptionist provides 24/7 coverage. It answers every call with natural voice technology, expertly handling after-hours emergencies, weekend inquiries, and holiday calls. This eliminates the need for costly overtime or an on-call human receptionist, ensuring your business is always responsive." },
    { question: "How quickly can an HVAC company get started?", answer: "Most HVAC companies are fully live with BrightLaunchIQ AI Receptionist within 48 hours. Our dedicated onboarding team handles all the setup: configuring your custom call flows, integrating with your CRM (ServiceTitan, Housecall Pro, Jobber), and training the AI on your specific services, pricing, and FAQs. You'll be capturing more leads in no time." },
  ],
};

const HVACContractors = () => <IndustryPageTemplate data={data} />;
export default HVACContractors;
