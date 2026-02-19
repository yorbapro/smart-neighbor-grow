import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Boutique Hotels",
  slug: "boutique-hotels",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Room Reservation Booking", "Availability & Rate Inquiries", "Special Request Handling", "Group Block Coordination", "Concierge Service Requests", "Event Space Inquiries"],
  crm: "Cloudbeds",
  sectorLabel: "Events & Hospitality",
  similarBusinesses: [
    { name: "Event Venues", slug: "event-venues" },
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Catering Services", slug: "catering-services" },
  ],
  faqs: [
    { question: "Can an AI receptionist book hotel rooms?", answer: "Yes. The AI checks availability, captures guest preferences and dates, and creates reservations directly in your property management system." },
    { question: "Does the AI integrate with Cloudbeds?", answer: "Yes. BrightLaunchIQ connects with Cloudbeds to manage room inventory, process reservations, and handle rate inquiries in real time." },
    { question: "How much do boutique hotels lose from missed calls?", answer: "$250,000 or more per year. Travelers comparing boutique properties will book with the hotel that answers and provides a personal touch first." },
    { question: "Can the AI handle special requests?", answer: "Yes. The AI captures room preferences, dietary needs, celebration details, and accessibility requirements, logging them for your guest services team." },
    { question: "Does the AI manage group bookings?", answer: "Yes. The AI captures group size, date range, and room block requirements, then routes group inquiries to your sales team for custom proposals." },
    { question: "How quickly can a boutique hotel get started?", answer: "Most hotels are live within 48 hours. We configure room types, integrate with Cloudbeds, and customize the AI for your property's unique character." },
  ],
};

const BoutiqueHotels = () => <IndustryPageTemplate data={data} />;
export default BoutiqueHotels;
