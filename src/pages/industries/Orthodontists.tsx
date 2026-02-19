import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Orthodontists",
  slug: "orthodontists",
  lossAmount: "180,000",
  lossAmountNum: 180000,
  useCases: ["Consultation Intake", "Emergency Bracket Repairs", "Payment Plan FAQ", "Treatment Progress Inquiries", "Retainer Replacement Orders", "Referral Coordination"],
  crm: "Ortho2",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Optometrists", slug: "optometrists" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle orthodontic consultations?", answer: "Yes. The AI captures patient age, dental concerns, insurance details, and scheduling preferences, then books the initial consultation directly into your Ortho2 calendar." },
    { question: "Does the AI integrate with Ortho2?", answer: "Yes. BrightLaunchIQ connects with Ortho2 to manage scheduling, treatment tracking, and payment plan inquiries automatically." },
    { question: "How much do orthodontists lose from missed calls?", answer: "$180,000 or more per year. The average orthodontic case is worth $5,000–$8,000 — every missed consultation call is a potential five-figure loss." },
    { question: "Can the AI handle emergency bracket repairs?", answer: "Yes. The AI assesses the urgency — broken bracket, poking wire, lost retainer — and schedules same-day or next-day repair appointments." },
    { question: "Does the AI answer payment plan questions?", answer: "Yes. The AI explains your financing options, monthly payment estimates, and insurance coverage details based on your configured pricing." },
    { question: "How fast can an orthodontic practice go live?", answer: "Most orthodontic practices are live within 48 hours. We configure consultation intake, integrate with Ortho2, and customize for your treatment offerings." },
  ],
};

const Orthodontists = () => <IndustryPageTemplate data={data} />;
export default Orthodontists;
