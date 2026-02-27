import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Mortgage Brokers",
  slug: "mortgage-brokers",
  lossAmount: "275,000",
  lossAmountNum: 275000,
  useCases: ["Pre-Qualification Intake", "Rate Lock Inquiries", "Refinance Lead Capture", "Application Status Updates", "Document Upload Reminders", "Realtor Partner Routing"],
  crm: "Encompass",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Commercial Real Estate", slug: "commercial-real-estate" },
    { name: "Home Inspectors", slug: "home-inspectors" },
  ],
  faqs: [
    { question: "Can an AI receptionist capture mortgage leads?", answer: "Yes. The AI collects income range, purchase price, credit score estimate, and timeline, then routes pre-qualified leads to available loan officers." },
    { question: "Does the AI integrate with Encompass?", answer: "Yes. BrightLaunchIQ connects with Encompass to create new loan files, update borrower records, and trigger milestone notifications." },
    { question: "Can the AI handle refinance inquiries?", answer: "Yes. The AI captures current rate, loan balance, and property value to determine refinance eligibility, then books a consultation with your team." },
    { question: "Does the AI provide rate information?", answer: "Yes. The AI shares your current published rates and programs, then schedules a detailed consultation for personalized quotes and lock-in options." },
    { question: "How quickly can a mortgage brokerage get started?", answer: "Most brokerages launch within 48 hours. We configure lead qualification scripts, integrate with Encompass, and customize for your loan programs." },
  ],
};

const MortgageBrokers = () => <IndustryPageTemplate data={data} />;
export default MortgageBrokers;
