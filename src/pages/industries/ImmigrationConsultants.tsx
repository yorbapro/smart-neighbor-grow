import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Immigration Consultants",
  slug: "immigration-consultants",
  lossAmount: "140,000",
  lossAmountNum: 140000,
  useCases: ["Visa Qualification Screening", "Multilingual Intake", "Interview Preparation Scheduling", "Document Checklist FAQ", "Case Status Updates", "Consultation Booking"],
  crm: "Docketwise",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle immigration intake calls?", answer: "Yes. The AI conducts multilingual intake conversations, captures visa type, country of origin, and eligibility details — then routes qualified leads to your consultants." },
    { question: "Does the AI integrate with Docketwise?", answer: "Yes. BrightLaunchIQ connects with Docketwise to create new cases, schedule consultations, and manage document checklists automatically." },
    { question: "How much do immigration consultants lose from missed calls?", answer: "$140,000 or more per year. Immigration clients often face urgent deadlines — a missed call can mean a lost case and a client who turns to a competitor." },
    { question: "Can the AI handle multilingual calls?", answer: "Yes. The AI supports multiple languages including Spanish, Mandarin, and more, ensuring non-English-speaking callers receive the same quality intake experience." },
    { question: "Does the AI screen for visa eligibility?", answer: "Yes. The AI asks qualifying questions about visa type, employment status, family ties, and timeline to pre-screen applicants before scheduling attorney consultations." },
    { question: "How quickly can an immigration practice get started?", answer: "Most immigration practices are live within 48 hours. We configure multilingual intake flows, integrate with Docketwise, and customize visa qualification screening." },
  ],
};

const ImmigrationConsultants = () => <IndustryPageTemplate data={data} />;
export default ImmigrationConsultants;
