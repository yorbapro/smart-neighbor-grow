import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Personal Injury Lawyers",
  slug: "personal-injury-lawyers",
  lossAmount: "500,000",
  lossAmountNum: 500000,
  useCases: ["Accident Intake", "Statute of Limitations Check", "Consultation Booking", "Case Status Updates", "Referral Routing", "After-Hours Emergency Intake"],
  crm: "Clio",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Criminal Defense Lawyers", slug: "criminal-defense-lawyers" },
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle personal injury intake calls?", answer: "Yes. The AI captures accident details, injury severity, insurance information, and contact details — then immediately routes qualified leads to your attorneys for consultation." },
    { question: "Does the AI integrate with Clio?", answer: "Yes. BrightLaunchIQ connects directly with Clio to create new matters, schedule consultations, and update case records in real time." },
    { question: "How much do personal injury firms lose from missed calls?", answer: "$500,000 or more per year. Personal injury leads are extremely time-sensitive — the first firm to respond wins the case over 80% of the time." },
    { question: "Can the AI screen cases for statute of limitations?", answer: "Yes. The AI asks qualifying questions about incident dates and jurisdiction, flagging cases that may be approaching statutory deadlines for immediate attorney review." },
    { question: "Does the AI handle after-hours accident calls?", answer: "Yes. The AI operates 24/7, capturing critical accident details and routing urgent cases to your on-call attorney while scheduling non-urgent consultations for business hours." },
    { question: "How quickly can a personal injury firm get started?", answer: "Most personal injury firms are fully live within 48 hours. We configure intake workflows, integrate with Clio, and customize screening questions for your practice areas." },
  ],
};

const PersonalInjuryLawyers = () => <IndustryPageTemplate data={data} />;
export default PersonalInjuryLawyers;
