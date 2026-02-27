import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Roofing Companies",
  slug: "roofing-companies",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Storm Damage Intake", "Insurance Claim Leads", "Inspection Booking", "Material Estimate Requests", "Warranty Inquiries", "Emergency Tarp Dispatch"],
  crm: "AccuLynx",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "HVAC Contractors", slug: "hvac-contractors" },
    { name: "Electricians", slug: "electricians" },
    { name: "Garage Door Repair", slug: "garage-door-repair" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle storm damage call surges?", answer: "Yes. The AI scales instantly to handle hundreds of simultaneous calls during storm events, capturing every lead while your team focuses on inspections and repairs." },
    { question: "Does the AI integrate with AccuLynx?", answer: "Yes. BrightLaunchIQ syncs directly with AccuLynx to create new leads, schedule inspections, and update job statuses automatically." },
    { question: "Can the AI qualify insurance claim leads?", answer: "Yes. The AI captures damage details, insurance carrier information, and property addresses, then flags high-value insurance claim leads for immediate follow-up." },
    { question: "Does the AI book roof inspections?", answer: "Yes. The AI schedules inspections directly into your calendar or AccuLynx, confirming availability and sending appointment reminders to homeowners." },
    { question: "How quickly can a roofing company get started?", answer: "Most roofing companies launch within 48 hours. We configure storm surge workflows, integrate with AccuLynx, and customize the AI for your service territory." },
  ],
};

const RoofingCompanies = () => <IndustryPageTemplate data={data} />;
export default RoofingCompanies;
