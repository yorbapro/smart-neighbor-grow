import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Catering Services",
  slug: "catering-services",
  lossAmount: "175,000",
  lossAmountNum: 175000,
  useCases: ["Event Quote Requests", "Menu Customization Inquiries", "Tasting Appointment Booking", "Dietary Restriction Capture", "Day-Of Coordination Calls", "Corporate Account Setup"],
  crm: "Total Party Planner",
  sectorLabel: "Events & Hospitality",
  similarBusinesses: [
    { name: "Event Venues", slug: "event-venues" },
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Boutique Hotels", slug: "boutique-hotels" },
  ],
  faqs: [
    { question: "Can an AI receptionist capture catering leads?", answer: "Yes. The AI captures event date, guest count, menu preferences, and budget range, then routes qualified leads to your sales team for custom proposals." },
    { question: "Does the AI integrate with Total Party Planner?", answer: "Yes. BrightLaunchIQ connects with Total Party Planner to create event records, manage tasting schedules, and track proposal status." },
    { question: "How much do catering companies lose from missed calls?", answer: "$175,000 or more per year. Event planners and brides request quotes from multiple caterers — the first to respond wins the booking." },
    { question: "Can the AI handle dietary restriction inquiries?", answer: "Yes. The AI captures specific dietary needs — vegan, gluten-free, kosher, allergy restrictions — and ensures they're documented for the culinary team." },
    { question: "Does the AI book tasting appointments?", answer: "Yes. The AI schedules menu tastings, confirms guest count for the tasting, and sends reminder notifications with location details." },
    { question: "How quickly can a catering company get started?", answer: "Most caterers are live within 48 hours. We configure menu packages, integrate with Total Party Planner, and customize for your event specialties." },
  ],
};

const CateringServices = () => <IndustryPageTemplate data={data} />;
export default CateringServices;
