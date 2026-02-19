import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Commercial Real Estate Brokers",
  slug: "commercial-real-estate",
  lossAmount: "350,000",
  lossAmountNum: 350000,
  useCases: ["Tenant Rep Inquiry Capture", "Lease Negotiation Scheduling", "Property Tour Booking", "Investment Inquiry Routing", "Broker Opinion of Value Requests", "Market Report Distribution"],
  crm: "Salesforce",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Property Management", slug: "property-management" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
  ],
  faqs: [
    { question: "Can an AI receptionist qualify commercial real estate leads?", answer: "Yes. The AI captures property requirements, budget ranges, and timeline urgency, then routes qualified leads to the appropriate broker on your team." },
    { question: "Does the AI integrate with Salesforce?", answer: "Yes. BrightLaunchIQ syncs with Salesforce to create new opportunities, update deal stages, and log all call interactions automatically." },
    { question: "How much do CRE brokers lose from missed calls?", answer: "$350,000 or more per year. Commercial deals involve high commissions — a single missed investor or tenant call can cost tens of thousands in lost fees." },
    { question: "Can the AI schedule property tours?", answer: "Yes. The AI coordinates tour times with prospects and brokers, confirms availability, and sends calendar invitations with property details." },
    { question: "Does the AI handle investor inquiries?", answer: "Yes. The AI captures investment criteria — cap rate targets, property type, geography — and routes serious investors to senior brokers immediately." },
    { question: "How quickly can a CRE brokerage get started?", answer: "Most brokerages are live within 48 hours. We configure lead routing, integrate with Salesforce, and customize the AI for your market specialization." },
  ],
};

const CommercialRealEstate = () => <IndustryPageTemplate data={data} />;
export default CommercialRealEstate;
