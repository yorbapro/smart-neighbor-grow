import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Private Investigators",
  slug: "private-investigators",
  lossAmount: "85,000",
  lossAmountNum: 85000,
  useCases: ["Discreet Intake", "Service FAQ", "Consultation Scheduling", "Surveillance Case Routing", "Background Check Inquiries", "Confidential After-Hours Intake"],
  crm: "CasePacer",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Notary Publics", slug: "notary-publics" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle private investigation intake calls?", answer: "Yes. The AI conducts discreet, confidential intake conversations — capturing case type, urgency, and relevant details while maintaining strict client anonymity." },
    { question: "Does the AI integrate with CasePacer?", answer: "Yes. BrightLaunchIQ connects with CasePacer to create new cases, schedule consultations, and manage investigation workflows automatically." },
    { question: "Can the AI handle discreet inquiries?", answer: "Yes. The AI is configured for maximum confidentiality, never revealing case details and using secure intake protocols to protect sensitive client information." },
    { question: "Does the AI answer background check questions?", answer: "Yes. The AI explains your background check services, turnaround times, pricing tiers, and required information based on your configured service offerings." },
    { question: "How quickly can a PI firm get started?", answer: "Most private investigation firms are live within 48 hours. We configure discreet intake protocols, integrate with CasePacer, and customize case routing workflows." },
  ],
};

const PrivateInvestigators = () => <IndustryPageTemplate data={data} />;
export default PrivateInvestigators;
