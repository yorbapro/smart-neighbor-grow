import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Residential Real Estate Agents",
  slug: "residential-real-estate",
  lossAmount: "180,000",
  lossAmountNum: 180000,
  useCases: ["Buyer Inquiry Capture", "Listing Appointment Scheduling", "Open House RSVP Management", "Mortgage Pre-Qualification Routing", "Showing Request Coordination", "Relocation Lead Intake"],
  crm: "Follow Up Boss",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Property Management", slug: "property-management" },
    { name: "Commercial Real Estate", slug: "commercial-real-estate" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle buyer and seller inquiries?", answer: "Yes. The AI distinguishes between buyer and seller calls, captures property preferences or listing details, and routes each lead to the appropriate agent on your team." },
    { question: "Does the AI integrate with Follow Up Boss?", answer: "Yes. BrightLaunchIQ syncs directly with Follow Up Boss to create new contacts, tag lead sources, and trigger automated drip campaigns." },
    { question: "How much do real estate agents lose from missed calls?", answer: "$180,000 or more per year. Buyers and sellers expect immediate responses — a 5-minute delay can cost you the listing or the deal." },
    { question: "Can the AI schedule showings and listing appointments?", answer: "Yes. The AI checks agent availability and books showings or listing presentations directly into your calendar, sending confirmation details to both parties." },
    { question: "Does the AI work after hours and on weekends?", answer: "Yes. Real estate operates on buyers' schedules. The AI answers 24/7, capturing leads from evening and weekend inquiries when most agents are unavailable." },
    { question: "How quickly can a real estate team get started?", answer: "Most teams are live within 48 hours. We configure lead routing rules, integrate with Follow Up Boss, and customize the AI for your market area." },
  ],
};

const ResidentialRealEstate = () => <IndustryPageTemplate data={data} />;
export default ResidentialRealEstate;
