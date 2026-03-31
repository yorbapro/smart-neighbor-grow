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
  whyThisIndustry: "Emergency plumbers operate in a high-stakes, time-sensitive environment. When a pipe bursts at 2 AM, homeowners aren't calling for a quote; they're calling for immediate relief. Every missed call is not just a lost job, but a potential disaster for the customer and a significant revenue loss for your business. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Jobber — so you capture the job even when your hands are full.",
  painPoints: [
    {
      title: "The 2 AM Burst Pipe Scenario",
      description: "When a customer has water flooding their home, they're calling every plumber in the area until someone answers. If your line goes to voicemail, they've already moved on to your competitor."
    },
    {
      title: "Technicians are Hands-On, Not Phone-On",
      description: "Your skilled plumbers are focused on fixing complex issues, often in challenging conditions. They can't be on the phone scheduling new appointments or triaging calls while actively working on a job."
    },
    {
      title: "Dispatching Chaos During Peak Hours",
      description: "Heavy rain, freezing temperatures, or holiday weekends can trigger a surge in emergency calls. Your human dispatchers can quickly become overwhelmed, leading to long hold times and miscommunications."
    },
    {
      title: "High-Value Emergency Jobs Get Lost",
      description: "A water heater explosion or a main line backup is a high-ticket emergency. Without 24/7 coverage, these high-value jobs go to whoever picks up the phone first."
    },
    {
      title: "Manual Intake Slows Down Response Time",
      description: "Juggling call notes, customer details, and dispatching manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Jobber."
    },
    {
      title: "Inconsistent Triage Leads to Dispatch Errors",
      description: "Not all calls are emergencies. Without a consistent, intelligent system to triage calls, your on-call technicians waste time on routine inquiries while true emergencies wait."
    }
  ],
  dayInTheLife: `3:00 AM — A customer's water heater explodes. They call your number. The BrightLaunchIQ AI Receptionist answers instantly, 24/7. It calmly gathers critical information: the nature of the emergency, the customer's address, contact details, and any immediate safety concerns.

3:02 AM — Recognizing a high-priority emergency, the AI immediately dispatches the call to your on-call technician's mobile device, providing all collected details. Simultaneously, it sends a confirmation SMS to the customer, letting them know help is on the way.

10:30 AM — While your team is busy on job sites, the AI handles multiple routine calls: a client checking the status of a drain cleaning (answered via Jobber integration), a vendor looking for accounts payable (routed correctly), and a new lead for a bathroom remodel (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Jobber — providing a complete record for follow-up and billing without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist triage emergency plumbing calls?", answer: "Yes. The AI identifies emergency severity — burst pipes, gas leaks, sewage backups — and immediately dispatches your on-call plumber while capturing the caller's location and details." },
    { question: "Does the AI integrate with Jobber?", answer: "Yes. BrightLaunchIQ connects directly with Jobber to create work orders, schedule appointments, and update customer records automatically." },
    { question: "Can the AI provide plumbing quotes to callers?", answer: "Yes. The AI can provide ballpark pricing based on your configured service rates and capture detailed job information for your team to follow up with accurate quotes." },
    { question: "Does the AI handle after-hours plumbing calls?", answer: "Yes. The AI answers 24/7 with natural voice technology, ensuring every burst pipe, leak, or emergency is captured and routed — even at 3 AM." },
    { question: "How fast can a plumbing company go live?", answer: "Most plumbing companies are fully operational within 48 hours. We configure emergency triage flows, integrate with Jobber, and customize the AI for your service area." },
    { question: "What does an AI receptionist cost for plumbing companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Jobber integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const EmergencyPlumbers = () => <IndustryPageTemplate data={data} />;
export default EmergencyPlumbers;
