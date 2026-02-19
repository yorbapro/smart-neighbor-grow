import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Criminal Defense Lawyers",
  slug: "criminal-defense-lawyers",
  lossAmount: "300,000",
  lossAmountNum: 300000,
  useCases: ["Jail Call Intake", "Arraignment Reminders", "Immediate Case Intake", "Bond Hearing Scheduling", "Case Status Updates", "24/7 Emergency Routing"],
  crm: "PracticePanther",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Immigration Consultants", slug: "immigration-consultants" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle criminal defense intake calls?", answer: "Yes. The AI captures charge details, court dates, custody status, and contact information — then immediately alerts your attorney for urgent cases like active arrests." },
    { question: "Does the AI integrate with PracticePanther?", answer: "Yes. BrightLaunchIQ connects with PracticePanther to create new matters, schedule consultations, and track case deadlines automatically." },
    { question: "How much do criminal defense firms lose from missed calls?", answer: "$300,000 or more per year. Defendants and their families call multiple attorneys — the first to answer and provide reassurance wins the retainer." },
    { question: "Can the AI handle jail calls?", answer: "Yes. The AI is configured to handle collect calls from correctional facilities, capturing essential case details and routing to your on-call attorney immediately." },
    { question: "Does the AI send arraignment reminders?", answer: "Yes. The AI tracks court dates and sends automated reminders to clients about upcoming arraignments, hearings, and required court appearances." },
    { question: "How quickly can a criminal defense firm get started?", answer: "Most criminal defense firms are live within 48 hours. We configure emergency intake protocols, integrate with PracticePanther, and set up 24/7 attorney routing." },
  ],
};

const CriminalDefenseLawyers = () => <IndustryPageTemplate data={data} />;
export default CriminalDefenseLawyers;
