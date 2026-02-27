import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Home Inspectors",
  slug: "home-inspectors",
  lossAmount: "85,000",
  lossAmountNum: 85000,
  useCases: ["Inspection Booking", "Report Delivery Follow-Ups", "Realtor Referral Intake", "Radon & Mold Add-On Upsells", "Scheduling Confirmations", "Re-Inspection Coordination"],
  crm: "Spectora",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Property Management", slug: "property-management" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
  ],
  faqs: [
    { question: "Can an AI receptionist book home inspections?", answer: "Yes. The AI checks your availability, captures property address and square footage, and books the inspection directly into your Spectora calendar." },
    { question: "Does the AI integrate with Spectora?", answer: "Yes. BrightLaunchIQ connects with Spectora to schedule inspections, manage add-on services, and trigger report delivery notifications." },
    { question: "Can the AI upsell additional services?", answer: "Yes. The AI offers radon testing, mold inspection, sewer scope, and other add-ons during the booking call, increasing your average ticket value." },
    { question: "Does the AI handle realtor referral calls?", answer: "Yes. The AI identifies realtor partners, provides priority scheduling, and captures referral source data for your marketing tracking." },
    { question: "How quickly can a home inspector get started?", answer: "Most inspectors are live within 48 hours. We configure service menus, integrate with Spectora, and customize the AI for your service area." },
  ],
};

const HomeInspectors = () => <IndustryPageTemplate data={data} />;
export default HomeInspectors;
