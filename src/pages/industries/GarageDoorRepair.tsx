import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Garage Door Repair",
  slug: "garage-door-repair",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Spring/Cable Triage", "Opener Consultations", "Service Routing", "New Installation Quotes", "Emergency After-Hours Calls", "Warranty Claim Intake"],
  crm: "ServiceTitan",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Locksmiths", slug: "locksmiths" },
    { name: "Electricians", slug: "electricians" },
    { name: "HVAC Contractors", slug: "hvac-contractors" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle garage door emergency calls?", answer: "Yes. The AI identifies broken springs, snapped cables, and stuck doors by asking targeted questions, then dispatches your technician with full details." },
    { question: "Does the AI integrate with ServiceTitan?", answer: "Yes. BrightLaunchIQ syncs with ServiceTitan to create work orders, schedule service calls, and update customer records automatically." },
    { question: "How much do garage door companies lose from missed calls?", answer: "$75,000 or more per year. Homeowners with a broken garage door need same-day service — if you miss the call, they'll find someone who answers." },
    { question: "Can the AI provide garage door repair quotes?", answer: "Yes. The AI captures door type, issue description, and photos if available, then provides ballpark pricing or schedules an in-person estimate." },
    { question: "Does the AI handle new garage door installation leads?", answer: "Yes. The AI qualifies installation leads by capturing garage dimensions, style preferences, and budget range, then schedules a consultation." },
    { question: "How quickly can a garage door company get started?", answer: "Most garage door companies are live within 48 hours. We configure emergency triage, integrate with ServiceTitan, and customize for your services." },
  ],
};

const GarageDoorRepair = () => <IndustryPageTemplate data={data} />;
export default GarageDoorRepair;
