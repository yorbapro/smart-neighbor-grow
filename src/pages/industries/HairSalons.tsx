import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Hair Salons",
  slug: "hair-salons",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["Appointment Booking", "Color Consultation Requests", "Stylist Availability Checks", "Product Order Inquiries", "Bridal Party Coordination", "Recurring Appointment Setup"],
  crm: "Vagaro",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Barbershops", slug: "barbershops" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Medical Spas", slug: "medical-spas" },
  ],
  faqs: [
    { question: "Can an AI receptionist book salon appointments?", answer: "Yes. The AI checks stylist availability, captures service type and preferences, and books appointments directly into your Vagaro calendar." },
    { question: "Does the AI integrate with Vagaro?", answer: "Yes. BrightLaunchIQ syncs with Vagaro to manage bookings, track client history, and send automated appointment reminders." },
    { question: "Can the AI handle bridal party bookings?", answer: "Yes. The AI captures party size, service requests, and preferred dates, then coordinates multi-stylist availability for group appointments." },
    { question: "Does the AI upsell additional services?", answer: "Yes. The AI suggests add-ons like deep conditioning, scalp treatments, and blowouts during the booking process to increase ticket value." },
    { question: "How quickly can a salon get started?", answer: "Most salons are live within 48 hours. We configure service menus, integrate with Vagaro, and customize the AI for your stylists." },
  ],
};

const HairSalons = () => <IndustryPageTemplate data={data} />;
export default HairSalons;
