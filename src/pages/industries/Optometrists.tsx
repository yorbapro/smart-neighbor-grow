import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Optometrists",
  slug: "optometrists",
  lossAmount: "65,000",
  lossAmountNum: 65000,
  useCases: ["Eye Exam Scheduling", "Contact Lens Reorders", "Insurance Verification", "Frame Selection Appointments", "Prescription Inquiries", "Emergency Eye Care Routing"],
  crm: "RevolutionEHR",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Chiropractors", slug: "chiropractors" },
  ],
  faqs: [
    { question: "Can an AI receptionist schedule eye exams?", answer: "Yes. The AI books comprehensive eye exams, contact lens fittings, and follow-up visits directly into your RevolutionEHR calendar." },
    { question: "Does the AI integrate with RevolutionEHR?", answer: "Yes. BrightLaunchIQ connects with RevolutionEHR to manage scheduling, patient records, and insurance verification automatically." },
    { question: "Can the AI handle contact lens reorders?", answer: "Yes. The AI captures lens brand, prescription details, and quantity, then processes the reorder or routes it to your dispensary team." },
    { question: "Does the AI verify vision insurance?", answer: "Yes. The AI checks insurance eligibility, coverage details, and copay information based on your configured carrier data." },
    { question: "How fast can an optometry practice go live?", answer: "Most optometry practices are live within 48 hours. We configure exam scheduling, integrate with RevolutionEHR, and customize for your services." },
  ],
};

const Optometrists = () => <IndustryPageTemplate data={data} />;
export default Optometrists;
