import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Family Law Attorneys",
  slug: "family-law-attorneys",
  lossAmount: "220,000",
  lossAmountNum: 220000,
  useCases: ["Divorce Intake", "Case Routing", "Retainer FAQ", "Custody Consultation Scheduling", "Mediation Coordination", "After-Hours Intake"],
  crm: "MyCase",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Immigration Consultants", slug: "immigration-consultants" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle family law intake calls?", answer: "Yes. The AI conducts sensitive, empathetic intake conversations covering divorce, custody, and support matters while capturing essential case details for attorney review." },
    { question: "Does the AI integrate with MyCase?", answer: "Yes. BrightLaunchIQ connects with MyCase to create new matters, schedule consultations, and manage client communications automatically." },
    { question: "Can the AI route cases by practice area?", answer: "Yes. The AI identifies whether callers need divorce, custody, adoption, or support services and routes them to the appropriate attorney or team member." },
    { question: "Does the AI answer retainer fee questions?", answer: "Yes. The AI provides information about your fee structure, retainer requirements, payment plans, and consultation costs based on your configured pricing." },
    { question: "How quickly can a family law firm get started?", answer: "Most family law firms are live within 48 hours. We configure sensitive intake flows, integrate with MyCase, and customize routing for your practice areas." },
  ],
};

const FamilyLawAttorneys = () => <IndustryPageTemplate data={data} />;
export default FamilyLawAttorneys;
