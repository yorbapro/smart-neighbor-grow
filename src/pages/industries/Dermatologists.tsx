import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Dermatologists",
  slug: "dermatologists",
  lossAmount: "140,000",
  lossAmountNum: 140000,
  useCases: ["Procedure Scheduling", "Skincare FAQ", "Referral Management", "Cosmetic Consultation Intake", "Insurance Pre-Authorization", "Post-Procedure Follow-Ups"],
  crm: "Modernizing Medicine",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Medical Spas", slug: "medical-spas" },
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Optometrists", slug: "optometrists" },
  ],
  faqs: [
    { question: "Can an AI receptionist schedule dermatology appointments?", answer: "Yes. The AI books skin checks, cosmetic consultations, Mohs surgery follow-ups, and acne treatment visits directly into your calendar." },
    { question: "Does the AI integrate with Modernizing Medicine?", answer: "Yes. BrightLaunchIQ connects with Modernizing Medicine to manage scheduling, patient records, and referral tracking automatically." },
    { question: "Can the AI answer skincare product questions?", answer: "Yes. The AI provides information about your recommended skincare lines, product availability, and pricing based on your configured catalog." },
    { question: "Does the AI handle dermatology referrals?", answer: "Yes. The AI captures referring physician details, diagnosis codes, and urgency level, then creates the referral record in your system." },
    { question: "How quickly can a dermatology practice get started?", answer: "Most dermatology practices are live within 48 hours. We configure procedure scheduling, integrate with Modernizing Medicine, and customize for your specialties." },
  ],
};

const Dermatologists = () => <IndustryPageTemplate data={data} />;
export default Dermatologists;
