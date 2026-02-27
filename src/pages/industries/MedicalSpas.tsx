import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Medical Spas",
  slug: "medical-spas",
  lossAmount: "130,000",
  lossAmountNum: 130000,
  useCases: ["Treatment Booking", "Injectable Pricing FAQ", "Membership Inquiries", "Package Upsells", "Post-Treatment Follow-Ups", "Gift Card Purchases"],
  crm: "Mindbody",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Dental Clinics", slug: "dental-clinics" },
  ],
  faqs: [
    { question: "Can an AI receptionist book med spa treatments?", answer: "Yes. The AI schedules Botox, fillers, laser treatments, and facials directly into your Mindbody calendar while capturing client preferences and treatment history." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage bookings, memberships, and client records automatically." },
    { question: "Can the AI answer injectable pricing questions?", answer: "Yes. The AI provides pricing for Botox, Juvederm, and other injectables based on your configured rates, along with current promotions and package deals." },
    { question: "Does the AI handle membership inquiries?", answer: "Yes. The AI explains membership tiers, benefits, and pricing, then captures interested leads for your team to close or enrolls them directly." },
    { question: "How quickly can a med spa get started?", answer: "Most medical spas are live within 48 hours. We configure treatment booking flows, integrate with Mindbody, and customize for your service menu." },
  ],
};

const MedicalSpas = () => <IndustryPageTemplate data={data} />;
export default MedicalSpas;
