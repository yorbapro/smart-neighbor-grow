import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Electricians",
  slug: "electricians",
  lossAmount: "90,000",
  lossAmountNum: 90000,
  useCases: ["Power Outage Triage", "Panel Upgrade Inquiries", "Safety Inspection Scheduling", "EV Charger Consultations", "Generator Install Leads", "Emergency Dispatch"],
  crm: "Housecall Pro",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Contractors", slug: "hvac-contractors" },
    { name: "Emergency Plumbers", slug: "emergency-plumbers" },
    { name: "Garage Door Repair", slug: "garage-door-repair" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle electrical emergency calls?", answer: "Yes. The AI triages power outages, sparking outlets, and other emergencies by severity, then dispatches your on-call electrician with full caller details." },
    { question: "Does the AI integrate with Housecall Pro?", answer: "Yes. BrightLaunchIQ integrates with Housecall Pro to create jobs, schedule appointments, and update customer records in real time." },
    { question: "Can the AI handle EV charger installation inquiries?", answer: "Yes. The AI captures vehicle type, electrical panel specs, and installation preferences, then schedules a site assessment with your team." },
    { question: "Does the AI work after hours for electricians?", answer: "Yes. The AI answers 24/7, handling emergency calls, panel upgrade inquiries, and inspection requests — even on weekends and holidays." },
    { question: "How fast can an electrical company go live?", answer: "Most electrical companies are live within 48 hours. We configure emergency triage, integrate with Housecall Pro, and train the AI on your services." },
  ],
};

const Electricians = () => <IndustryPageTemplate data={data} />;
export default Electricians;
