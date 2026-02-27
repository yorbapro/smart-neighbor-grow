import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "House Cleaning Services",
  slug: "house-cleaning",
  lossAmount: "35,000",
  lossAmountNum: 35000,
  useCases: ["Recurring Booking", "Deep-Clean Quotes", "Rescheduling Management", "Move-In/Move-Out Cleaning", "Same-Day Service Requests", "Commercial Cleaning Bids"],
  crm: "ZenMaid",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Junk Removal", slug: "junk-removal" },
    { name: "Landscapers", slug: "landscapers" },
    { name: "Pest Control Services", slug: "pest-control" },
  ],
  faqs: [
    { question: "Can an AI receptionist book house cleaning appointments?", answer: "Yes. The AI captures home size, cleaning type, and scheduling preferences, then books recurring or one-time appointments into your calendar." },
    { question: "Does the AI integrate with ZenMaid?", answer: "Yes. BrightLaunchIQ connects with ZenMaid to schedule cleanings, manage recurring clients, and update your team's availability automatically." },
    { question: "Can the AI handle cleaning quote requests?", answer: "Yes. The AI asks about home size, number of rooms, pets, and special requests, then provides pricing estimates based on your configured rates." },
    { question: "Does the AI manage cleaning rescheduling?", answer: "Yes. The AI handles rescheduling requests, cancellations, and rebooking without any manual intervention from your team." },
    { question: "How fast can a cleaning company go live?", answer: "Most cleaning companies are live within 48 hours. We configure booking workflows, integrate with ZenMaid, and customize for your service packages." },
  ],
};

const HouseCleaning = () => <IndustryPageTemplate data={data} />;
export default HouseCleaning;
