import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Holistic Health",
  slug: "holistic-health",
  lossAmount: "50,000",
  lossAmountNum: 50000,
  useCases: ["Discovery Call Scheduling", "Workshop Registration", "Service FAQ", "Membership Inquiries", "Supplement Reorders", "Retreat Booking"],
  crm: "Jane App",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Chiropractors", slug: "chiropractors" },
    { name: "Physical Therapy Centers", slug: "physical-therapy" },
    { name: "Mental Health Counselors", slug: "mental-health-counselors" },
  ],
  faqs: [
    { question: "Can an AI receptionist book holistic health appointments?", answer: "Yes. The AI schedules acupuncture, naturopathic consultations, nutritional counseling, and energy healing sessions directly into your Jane App calendar." },
    { question: "Does the AI integrate with Jane App?", answer: "Yes. BrightLaunchIQ connects with Jane App to manage scheduling, client records, and intake forms automatically." },
    { question: "Can the AI handle workshop registrations?", answer: "Yes. The AI captures attendee details, processes registrations, and provides event information including dates, locations, and pricing." },
    { question: "Does the AI answer questions about holistic services?", answer: "Yes. The AI explains your service offerings, treatment approaches, session durations, and pricing based on your configured practice information." },
    { question: "How quickly can a holistic practice get started?", answer: "Most holistic health practices are live within 48 hours. We configure discovery call workflows, integrate with Jane App, and customize for your modalities." },
  ],
};

const HolisticHealth = () => <IndustryPageTemplate data={data} />;
export default HolisticHealth;
