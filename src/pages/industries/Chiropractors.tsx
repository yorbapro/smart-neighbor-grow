import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Chiropractors",
  slug: "chiropractors",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["New Patient Consultations", "Recurring Appointment Booking", "Care Plan Reminders", "Insurance Verification", "Walk-In Availability", "After-Hours Inquiries"],
  crm: "ChiroTouch",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Physical Therapy Centers", slug: "physical-therapy" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Dental Clinics", slug: "dental-clinics" },
  ],
  faqs: [
    { question: "Can an AI receptionist book chiropractic appointments?", answer: "Yes. The AI schedules new patient consultations, recurring adjustments, and follow-up visits directly into your ChiroTouch calendar." },
    { question: "Does the AI integrate with ChiroTouch?", answer: "Yes. BrightLaunchIQ connects with ChiroTouch to manage scheduling, patient records, and care plan reminders automatically." },
    { question: "How much do chiropractors lose from missed calls?", answer: "$80,000 or more per year. New patients in acute pain call multiple offices — the first practice to answer wins the patient and their long-term care plan." },
    { question: "Can the AI handle care plan reminders?", answer: "Yes. The AI proactively reminds patients about upcoming appointments, overdue adjustments, and care plan milestones to reduce no-shows." },
    { question: "Does the AI answer chiropractic insurance questions?", answer: "Yes. The AI provides information about accepted plans, coverage limits, and co-pay estimates based on your configured insurance data." },
    { question: "How fast can a chiropractic office go live?", answer: "Most chiropractic offices are live within 48 hours. We configure intake workflows, integrate with ChiroTouch, and customize for your practice." },
  ],
};

const Chiropractors = () => <IndustryPageTemplate data={data} />;
export default Chiropractors;
