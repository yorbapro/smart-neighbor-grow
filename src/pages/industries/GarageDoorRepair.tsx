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
  whyThisIndustry: "Garage door repair companies often face urgent requests, as a malfunctioning garage door can compromise security and convenience. When a customer's garage door breaks, they need a quick and reliable solution. Missing calls means losing out on immediate repair jobs and new installations, directly impacting your revenue and customer satisfaction. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into ServiceTitan — so you capture the job even when your technicians are on site.",
  painPoints: [
    {
      title: "Security Concerns Demand Immediate Attention",
      description: "A broken garage door can leave a home vulnerable. Customers experiencing such issues are often anxious and will call multiple companies until they reach a live person."
    },
    {
      title: "Technicians are on Site, Not on the Phone",
      description: "Your skilled technicians are busy diagnosing and fixing complex garage door mechanisms, often in varying weather conditions. They cannot effectively manage incoming calls, schedule appointments, or answer routine questions while ensuring safety and quality work."
    },
    {
      title: "Inconsistent Lead Qualification and Scheduling",
      description: "Not all calls are for emergencies. Some are for routine maintenance, new garage door installations, or specific part replacements. Without a consistent, intelligent system to qualify leads and schedule appointments, your office staff spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Installation Leads Get Lost",
      description: "New garage door installations are high-value projects. If you don't capture the lead details and schedule a consultation immediately, the customer will find another garage door company who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A garage door stuck open at 10 PM is a major security concern. Without 24/7 coverage, these high-value emergency repair jobs go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with ServiceTitan."
    }
  ],
  dayInTheLife: `7:00 AM — A homeowner calls your business reporting a garage door that won't close, leaving their home exposed. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the issue, the type of door, the location, and confirms if there are any immediate security concerns.

7:02 AM — Recognizing a high-priority service request, the AI immediately schedules an emergency repair appointment with your available technician, integrating directly with ServiceTitan. Simultaneously, it sends an SMS to the homeowner, confirming their appointment and providing a technician ETA.

10:30 AM — While your team is busy on site, the AI handles multiple routine calls: a client checking the status of a spring replacement (answered via ServiceTitan integration), a vendor looking for accounts payable (routed correctly), and a new lead for a custom garage door installation (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in ServiceTitan — providing a comprehensive record for every customer and lead without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle garage door emergency calls?", answer: "Yes. The AI identifies broken springs, snapped cables, and stuck doors by asking targeted questions, then dispatches your technician with full details." },
    { question: "Does the AI integrate with ServiceTitan?", answer: "Yes. BrightLaunchIQ syncs with ServiceTitan to create work orders, schedule service calls, and update customer records automatically." },
    { question: "Can the AI provide garage door repair quotes?", answer: "Yes. The AI captures door type, issue description, and photos if available, then provides ballpark pricing or schedules an in-person estimate." },
    { question: "Does the AI handle new garage door installation leads?", answer: "Yes. The AI qualifies installation leads by capturing garage dimensions, style preferences, and budget range, then schedules a consultation." },
    { question: "How quickly can a garage door company get started?", answer: "Most garage door companies are live within 48 hours. We configure emergency triage, integrate with ServiceTitan, and customize for your services." },
    { question: "What does an AI receptionist cost for garage door repair companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and ServiceTitan integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const GarageDoorRepair = () => <IndustryPageTemplate data={data} />;
export default GarageDoorRepair;
