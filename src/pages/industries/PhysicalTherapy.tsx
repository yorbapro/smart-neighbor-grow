import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Physical Therapy Centers",
  slug: "physical-therapy",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["New Patient Intake", "Post-Op Scheduling", "Insurance FAQ", "Recurring Session Booking", "Home Exercise Plan Inquiries", "Referral Coordination"],
  crm: "WebPT",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Dental Clinics", slug: "dental-clinics" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle physical therapy intake?", answer: "Yes. The AI captures injury details, referral information, insurance data, and scheduling preferences, then books the initial evaluation directly into your calendar." },
    { question: "Does the AI integrate with WebPT?", answer: "Yes. BrightLaunchIQ connects with WebPT to schedule sessions, manage patient records, and coordinate care plans automatically." },
    { question: "Can the AI answer physical therapy insurance questions?", answer: "Yes. The AI provides coverage details, visit limits, co-pay estimates, and authorization requirements based on your configured insurance data." },
    { question: "Does the AI manage recurring PT appointments?", answer: "Yes. The AI schedules multi-week treatment plans, handles rescheduling, and sends session reminders to reduce no-shows and dropoffs." },
    { question: "How fast can a PT center go live?", answer: "Most physical therapy centers are live within 48 hours. We configure intake workflows, integrate with WebPT, and customize for your specialties." },
  ],
};

const PhysicalTherapy = () => <IndustryPageTemplate data={data} />;
export default PhysicalTherapy;
