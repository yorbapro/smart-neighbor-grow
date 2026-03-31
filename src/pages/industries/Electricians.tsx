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
  whyThisIndustry: "Electricians provide essential services, often dealing with urgent and potentially hazardous situations. When a customer experiences a power outage or an electrical fault, they need immediate assistance. Missed calls for electricians can mean lost emergency jobs, frustrated customers, and a direct impact on safety and revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Housecall Pro — so you capture the job even when your hands are full.",
  painPoints: [
    {
      title: "Emergency Calls Demand Instant Response",
      description: "Electrical emergencies, such as power outages, sparking outlets, or tripped breakers, require immediate attention. If your phone goes unanswered, customers will quickly call the next electrician on their list."
    },
    {
      title: "Technicians are Focused on Safety and Precision",
      description: "Your electricians are often working in complex and dangerous environments, requiring their full concentration. They cannot safely or efficiently answer calls, schedule appointments, or handle customer inquiries while performing intricate electrical work."
    },
    {
      title: "Inefficient Lead Qualification and Scheduling",
      description: "Not every call is an emergency. Some are for routine inspections, new installations, or quotes. Without an intelligent system to pre-qualify leads and schedule appointments, your team spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Installation Leads Get Lost",
      description: "EV charger installations and panel upgrades are high-value projects. If you don't capture the lead details and schedule a consultation immediately, the customer will find another electrician who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sparking outlet at 11 PM is a major safety concern. Without 24/7 coverage, these high-value emergency repair jobs go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Housecall Pro."
    }
  ],
  dayInTheLife: `7:00 PM — A homeowner calls your business reporting a complete power outage. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the issue, the address, and confirms if there are any immediate safety concerns.

7:02 PM — Recognizing a high-priority emergency, the AI immediately dispatches the call details to your on-call electrician, including all collected information. Simultaneously, it sends an SMS to the homeowner, confirming their call has been received and providing an estimated response time.

10:30 AM — While your team is busy on job sites, the AI handles multiple routine calls: a client checking the status of a panel upgrade (answered via Housecall Pro integration), a vendor looking for accounts payable (routed correctly), and a new lead for an EV charger installation (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Housecall Pro — providing a comprehensive record for every customer and lead without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle electrical emergency calls?", answer: "Yes. The AI triages power outages, sparking outlets, and other emergencies by severity, then dispatches your on-call electrician with full caller details." },
    { question: "Does the AI integrate with Housecall Pro?", answer: "Yes. BrightLaunchIQ integrates with Housecall Pro to create jobs, schedule appointments, and update customer records in real time." },
    { question: "Can the AI handle EV charger installation inquiries?", answer: "Yes. The AI captures vehicle type, electrical panel specs, and installation preferences, then schedules a site assessment with your team." },
    { question: "Does the AI work after hours for electricians?", answer: "Yes. The AI answers 24/7, handling emergency calls, panel upgrade inquiries, and inspection requests — even on weekends and holidays." },
    { question: "How fast can an electrical company go live?", answer: "Most electrical companies are live within 48 hours. We configure emergency triage, integrate with Housecall Pro, and train the AI on your services." },
    { question: "What does an AI receptionist cost for electrical companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Housecall Pro integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const Electricians = () => <IndustryPageTemplate data={data} />;
export default Electricians;
