import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Wedding Planners",
  slug: "wedding-planners",
  lossAmount: "220,000",
  lossAmountNum: 220000,
  useCases: ["Consultation Booking", "Budget & Package Inquiries", "Vendor Referral Requests", "Day-Of Coordination Leads", "Destination Wedding Inquiries", "Timeline & Milestone Updates"],
  crm: "Aisle Planner",
  sectorLabel: "Events & Hospitality",
  similarBusinesses: [
    { name: "Event Venues", slug: "event-venues" },
    { name: "Catering Services", slug: "catering-services" },
    { name: "Boutique Hotels", slug: "boutique-hotels" },
  ],
  faqs: [
    { question: "Can an AI receptionist capture wedding planning leads?", answer: "Yes. The AI captures wedding date, guest count, budget range, and planning needs, then schedules a consultation with the appropriate planner." },
    { question: "Does the AI integrate with Aisle Planner?", answer: "Yes. BrightLaunchIQ connects with Aisle Planner to create new client records, manage consultation schedules, and track lead pipelines." },
    { question: "Can the AI explain service packages?", answer: "Yes. The AI walks callers through full-service, partial, and day-of coordination packages, capturing which tier interests them for follow-up." },
    { question: "Does the AI handle vendor referral requests?", answer: "Yes. The AI provides recommended vendor categories and captures specific needs, then routes referral requests to your vendor network." },
    { question: "How quickly can a wedding planner get started?", answer: "Most planners are live within 48 hours. We configure service packages, integrate with Aisle Planner, and customize the AI for your brand." },
  ],
};

const WeddingPlanners = () => <IndustryPageTemplate data={data} />;
export default WeddingPlanners;
