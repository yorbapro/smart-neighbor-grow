import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Mental Health Counselors",
  slug: "mental-health-counselors",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Discreet Intake", "Consultation Scheduling", "Crisis Routing", "Insurance Verification", "Telehealth Setup Inquiries", "After-Hours Support Routing"],
  crm: "SimplePractice",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Physical Therapy Centers", slug: "physical-therapy" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle mental health intake calls?", answer: "Yes. The AI conducts discreet, empathetic intake conversations, capturing presenting concerns, insurance details, and scheduling preferences while maintaining strict confidentiality." },
    { question: "Does the AI integrate with SimplePractice?", answer: "Yes. BrightLaunchIQ connects with SimplePractice to schedule sessions, manage client records, and handle intake paperwork automatically." },
    { question: "How much do mental health counselors lose from missed calls?", answer: "$70,000 or more per year. Prospective clients who call during a crisis moment rarely call back — that single missed call often means a lost client." },
    { question: "Can the AI route crisis calls appropriately?", answer: "Yes. The AI is configured to identify crisis indicators and immediately routes those calls to your on-call clinician or the 988 Suicide & Crisis Lifeline." },
    { question: "Is the AI HIPAA-compliant for therapy practices?", answer: "Yes. BrightLaunchIQ is built with HIPAA-compliant infrastructure, ensuring all patient data is encrypted and handled according to federal privacy standards." },
    { question: "How quickly can a counseling practice get started?", answer: "Most counseling practices are live within 48 hours. We configure discreet intake flows, integrate with SimplePractice, and customize crisis routing protocols." },
  ],
};

const MentalHealthCounselors = () => <IndustryPageTemplate data={data} />;
export default MentalHealthCounselors;
