import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Property Management Companies",
  slug: "property-management",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Maintenance Request Intake", "Tenant Inquiry Routing", "Lease Renewal Reminders", "Vacancy Listing Inquiries", "Emergency After-Hours Dispatch", "Rent Payment Support"],
  crm: "AppFolio",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Commercial Real Estate", slug: "commercial-real-estate" },
    { name: "Home Inspectors", slug: "home-inspectors" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle tenant maintenance requests?", answer: "Yes. The AI captures issue details, unit numbers, and urgency level, then creates work orders in your property management software automatically." },
    { question: "Does the AI integrate with AppFolio?", answer: "Yes. BrightLaunchIQ connects with AppFolio to log maintenance tickets, update tenant records, and manage vacancy inquiries directly." },
    { question: "How much do property managers lose from missed calls?", answer: "$150,000 or more per year. Missed vacancy inquiries and delayed maintenance responses lead to longer vacancies and tenant turnover." },
    { question: "Can the AI handle after-hours emergencies?", answer: "Yes. The AI triages emergency calls — burst pipes, lockouts, fires — and immediately dispatches your on-call maintenance team while logging the incident." },
    { question: "Does the AI answer prospective tenant questions?", answer: "Yes. The AI provides unit availability, pricing, pet policies, and amenity details, then schedules property tours for qualified prospects." },
    { question: "How quickly can a property management company get started?", answer: "Most companies launch within 48 hours. We configure emergency triage protocols, integrate with AppFolio, and customize for your portfolio." },
  ],
};

const PropertyManagement = () => <IndustryPageTemplate data={data} />;
export default PropertyManagement;
