import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Locksmiths",
  slug: "locksmiths",
  lossAmount: "45,000",
  lossAmountNum: 45000,
  useCases: ["Emergency Lockout Dispatch", "Commercial Re-key Inquiries", "Auto Key Replacement", "Access Control Consultations", "Safe Installation Leads", "After-Hours Dispatch"],
  crm: "Workiz",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Garage Door Repair", slug: "garage-door-repair" },
    { name: "Electricians", slug: "electricians" },
    { name: "Emergency Plumbers", slug: "emergency-plumbers" },
  ],
  whyThisIndustry: "Locksmiths provide critical services, often in emergency situations where customers are locked out or need immediate security solutions. When a customer is stranded, they need a rapid response. Missing calls for locksmiths means lost emergency jobs, frustrated customers, and a direct impact on safety and revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Workiz — so you capture the job even when your technicians are on the road.",
  painPoints: [
    {
      title: "Emergency Lockouts Demand Instant Response",
      description: "Customers locked out of their homes, cars, or businesses are in urgent need of assistance. If your phone goes unanswered or to voicemail, they will quickly call the next locksmith on their list."
    },
    {
      title: "Technicians are on the Road, Not on the Phone",
      description: "Your skilled locksmiths are often mobile, driving to various locations, working on complex lock mechanisms, or dealing with security installations. They cannot safely or efficiently answer calls, schedule appointments, or handle customer inquiries while on the move."
    },
    {
      title: "Inefficient Lead Qualification and Dispatch",
      description: "Not every call is an emergency lockout. Some are for routine rekeying, security upgrades, or key duplication. Without an intelligent system to pre-qualify leads and dispatch jobs, your team spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Commercial Re-key Leads Get Lost",
      description: "Commercial re-key projects and access control consultations are high-value and long-term. If you don't capture the lead details and schedule a consultation immediately, the business will find another locksmith who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A lockout at 11 PM is a major concern. Without 24/7 coverage, these high-value emergency service calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, lead details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Workiz."
    }
  ],
  dayInTheLife: `11:30 PM — A homeowner calls your business, distressed about being locked out. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the situation, the address, and confirms if it's a safe location.

11:32 PM — Recognizing a high-priority emergency, the AI immediately dispatches the call details to your on-call locksmith, including all collected information. Simultaneously, it sends an SMS to the homeowner, confirming their call has been received and providing an estimated arrival time.

10:30 AM — While your team is busy on the road, the AI handles multiple routine calls: a client checking the status of a lock change (answered via Workiz integration), a vendor looking for accounts payable (routed correctly), and a new lead for a commercial access control system (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Workiz — providing a comprehensive record for every customer and lead without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle emergency lockout calls?", answer: "Yes. The AI captures the caller's location, lock type, and urgency level, then dispatches your nearest available locksmith immediately — 24/7." },
    { question: "Does the AI integrate with Workiz?", answer: "Yes. BrightLaunchIQ connects with Workiz to create dispatch tickets, schedule appointments, and track job statuses in real time." },
    { question: "Can the AI handle commercial re-key inquiries?", answer: "Yes. The AI captures property details, number of locks, and scheduling preferences for commercial re-key projects, then routes the lead to your team." },
    { question: "Does the AI handle auto key replacement calls?", answer: "Yes. The AI collects vehicle make, model, year, and key type information, then schedules your mobile locksmith for on-site service." },
    { question: "How fast can a locksmith company go live?", answer: "Most locksmith companies are live within 48 hours. We configure emergency dispatch workflows, integrate with Workiz, and customize for your service area." },
    { question: "What does an AI receptionist cost for locksmith companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Workiz integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const Locksmiths = () => <IndustryPageTemplate data={data} />;
export default Locksmiths;
