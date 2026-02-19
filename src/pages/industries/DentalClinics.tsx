import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Dental Clinics",
  slug: "dental-clinics",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Emergency Triage", "Appointment Rescheduling", "Insurance FAQ", "New Patient Intake", "Recall & Hygiene Reminders", "After-Hours Emergency Routing"],
  crm: "Dentrix",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Orthodontists", slug: "orthodontists" },
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Optometrists", slug: "optometrists" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle dental emergency calls?", answer: "Yes. The AI triages toothaches, broken crowns, and trauma by severity, then routes true emergencies to your on-call dentist while scheduling urgent appointments for everything else." },
    { question: "Does the AI integrate with Dentrix?", answer: "Yes. BrightLaunchIQ connects directly with Dentrix to schedule appointments, verify patient records, and update treatment plans in real time." },
    { question: "How much do dental clinics lose from missed calls?", answer: "$200,000 or more per year. The average new dental patient is worth $1,500+ over their lifetime — every missed call is a patient who books elsewhere." },
    { question: "Can the AI answer dental insurance questions?", answer: "Yes. The AI provides information about accepted insurance plans, coverage details, and out-of-pocket estimates based on your configured data." },
    { question: "Does the AI handle dental appointment rescheduling?", answer: "Yes. The AI manages cancellations, rescheduling, and waitlist placement without any staff intervention, keeping your chairs full." },
    { question: "How quickly can a dental clinic get started?", answer: "Most dental clinics are fully live within 48 hours. We configure emergency triage flows, integrate with Dentrix, and customize the AI for your practice." },
  ],
};

const DentalClinics = () => <IndustryPageTemplate data={data} />;
export default DentalClinics;
