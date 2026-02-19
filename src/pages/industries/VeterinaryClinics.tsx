import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Veterinary Clinics",
  slug: "veterinary-clinics",
  lossAmount: "110,000",
  lossAmountNum: 110000,
  useCases: ["Urgent Care Triage", "Wellness Exam Scheduling", "Prescription Refill Inquiries", "Boarding Reservations", "Post-Surgery Follow-Ups", "After-Hours Emergency Routing"],
  crm: "Cornerstone",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Pet Groomers", slug: "pet-groomers" },
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Chiropractors", slug: "chiropractors" },
  ],
  faqs: [
    { question: "Can an AI receptionist triage veterinary emergencies?", answer: "Yes. The AI assesses symptom severity — poisoning, trauma, breathing difficulty — and routes true emergencies to your on-call vet while scheduling urgent visits for less critical cases." },
    { question: "Does the AI integrate with Cornerstone?", answer: "Yes. BrightLaunchIQ connects with Cornerstone to schedule appointments, check patient history, and manage prescription refill requests." },
    { question: "How much do veterinary clinics lose from missed calls?", answer: "$110,000 or more per year. Pet owners are emotionally driven callers — if they can't reach you, they'll drive to the nearest emergency vet." },
    { question: "Can the AI handle prescription refill requests?", answer: "Yes. The AI captures pet name, medication details, and pharmacy preference, then routes the refill request to your veterinary team for approval." },
    { question: "Does the AI book wellness exams for pets?", answer: "Yes. The AI schedules annual checkups, vaccination appointments, and dental cleanings directly into your Cornerstone calendar." },
    { question: "How quickly can a vet clinic get started?", answer: "Most veterinary clinics are live within 48 hours. We configure emergency triage, integrate with Cornerstone, and customize for your practice." },
  ],
};

const VeterinaryClinics = () => <IndustryPageTemplate data={data} />;
export default VeterinaryClinics;
