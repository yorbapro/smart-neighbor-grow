import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Event Venues",
  slug: "event-venues",
  lossAmount: "300,000",
  lossAmountNum: 300000,
  useCases: ["Venue Tour Scheduling", "Availability & Pricing Inquiries", "Wedding Reception Leads", "Corporate Event Booking", "Vendor Coordination Calls", "Day-Of Event Support"],
  crm: "Tripleseat",
  sectorLabel: "Events & Hospitality",
  similarBusinesses: [
    { name: "Catering Services", slug: "catering-services" },
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Boutique Hotels", slug: "boutique-hotels" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle venue inquiries?", answer: "Yes. The AI captures event type, guest count, preferred dates, and budget, then schedules venue tours with your events team." },
    { question: "Does the AI integrate with Tripleseat?", answer: "Yes. BrightLaunchIQ connects with Tripleseat to create event leads, manage tour schedules, and track proposal pipelines automatically." },
    { question: "Can the AI check date availability?", answer: "Yes. The AI accesses your availability calendar and instantly confirms whether requested dates are open, reducing back-and-forth communication." },
    { question: "Does the AI handle corporate event inquiries?", answer: "Yes. The AI captures company name, event type, A/V requirements, and catering needs, then routes corporate leads to your sales team." },
    { question: "How quickly can a venue get started?", answer: "Most venues are live within 48 hours. We configure event packages, integrate with Tripleseat, and customize the AI for your venue's offerings." },
  ],
};

const EventVenues = () => <IndustryPageTemplate data={data} />;
export default EventVenues;
