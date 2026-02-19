import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Towing Companies",
  slug: "towing-companies",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Emergency Dispatch Intake", "Roadside Assistance Routing", "Impound Lot Inquiries", "Insurance Claim Coordination", "ETA Updates", "Motor Club Call Handling"],
  crm: "Towbook",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Mobile Detailers", slug: "mobile-detailers" },
    { name: "Driving Schools", slug: "driving-schools" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle emergency tow dispatch?", answer: "Yes. The AI captures vehicle location, issue type, and driver contact info, then dispatches the nearest available truck in real time." },
    { question: "Does the AI integrate with Towbook?", answer: "Yes. BrightLaunchIQ connects with Towbook to create dispatch tickets, track truck availability, and log call details automatically." },
    { question: "How much do towing companies lose from missed calls?", answer: "$200,000 or more per year. Stranded drivers call the first company that answers — a missed call means the job goes to your competitor down the road." },
    { question: "Can the AI handle motor club and insurance calls?", answer: "Yes. The AI processes AAA, insurance roadside, and motor club dispatches, capturing authorization numbers and routing them to available drivers." },
    { question: "Does the AI provide ETA updates?", answer: "Yes. The AI checks driver location and provides callers with estimated arrival times, reducing callback volume and improving customer satisfaction." },
    { question: "How quickly can a towing company get started?", answer: "Most towing companies are live within 48 hours. We configure dispatch workflows, integrate with Towbook, and customize for your service radius." },
  ],
};

const TowingCompanies = () => <IndustryPageTemplate data={data} />;
export default TowingCompanies;
