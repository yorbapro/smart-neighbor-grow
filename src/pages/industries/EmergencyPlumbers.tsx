import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Emergency Plumbers",
  slug: "emergency-plumbers",
  lossAmount: "120,000",
  lossAmountNum: 120000,
  useCases: ["Burst Pipe Triage", "After-Hours Dispatch", "Quote Intake", "Water Heater Emergencies", "Drain Cleaning Scheduling", "Insurance Claim Routing"],
  crm: "Jobber",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Contractors", slug: "hvac-contractors" },
    { name: "Electricians", slug: "electricians" },
    { name: "Garage Door Repair", slug: "garage-door-repair" },
  ],
  faqs: [
    { question: "Can an AI receptionist triage emergency plumbing calls?", answer: "Yes. The AI identifies emergency severity — burst pipes, gas leaks, sewage backups — and immediately dispatches your on-call plumber while capturing the caller's location and details." },
    { question: "Does the AI integrate with Jobber?", answer: "Yes. BrightLaunchIQ connects directly with Jobber to create work orders, schedule appointments, and update customer records automatically." },
    { question: "Can the AI provide plumbing quotes to callers?", answer: "Yes. The AI can provide ballpark pricing based on your configured service rates and capture detailed job information for your team to follow up with accurate quotes." },
    { question: "Does the AI handle after-hours plumbing calls?", answer: "Yes. The AI answers 24/7 with natural voice technology, ensuring every burst pipe, leak, or emergency is captured and routed — even at 3 AM." },
    { question: "How fast can a plumbing company go live?", answer: "Most plumbing companies are fully operational within 48 hours. We configure emergency triage flows, integrate with Jobber, and customize the AI for your service area." },
  ],
};

const EmergencyPlumbers = () => <IndustryPageTemplate data={data} />;
export default EmergencyPlumbers;
