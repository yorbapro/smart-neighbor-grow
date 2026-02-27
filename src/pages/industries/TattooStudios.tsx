import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Tattoo Studios",
  slug: "tattoo-studios",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["Consultation Booking", "Custom Design Inquiries", "Artist Availability Checks", "Touch-Up Scheduling", "Deposit Collection Routing", "Aftercare Follow-Ups"],
  crm: "DaySmart",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Barbershops", slug: "barbershops" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Hair Salons", slug: "hair-salons" },
  ],
  faqs: [
    { question: "Can an AI receptionist book tattoo consultations?", answer: "Yes. The AI captures design ideas, placement preferences, and size estimates, then schedules a consultation with the appropriate artist." },
    { question: "Does the AI integrate with DaySmart?", answer: "Yes. BrightLaunchIQ connects with DaySmart to manage artist schedules, track client consultations, and send appointment reminders." },
    { question: "Can the AI match clients with the right artist?", answer: "Yes. The AI asks about style preferences — traditional, realism, fine line, blackwork — and routes to the artist who specializes in that style." },
    { question: "Does the AI handle touch-up requests?", answer: "Yes. The AI captures original tattoo details and scheduling preferences, then books touch-up appointments during available slots." },
    { question: "How quickly can a tattoo studio get started?", answer: "Most studios are live within 48 hours. We configure artist profiles, integrate with TattooPro, and customize for your studio's specialties." },
  ],
};

const TattooStudios = () => <IndustryPageTemplate data={data} />;
export default TattooStudios;
