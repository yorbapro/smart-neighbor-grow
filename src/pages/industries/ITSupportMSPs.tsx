import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "IT Support & MSPs",
  slug: "it-support-msps",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Help Desk Ticket Creation", "Emergency Outage Escalation", "New Client Onboarding Inquiries", "Password Reset Routing", "Service Contract Questions", "Project Consultation Scheduling"],
  crm: "ConnectWise",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "Private Tutors", slug: "private-tutors" },
    { name: "Pet Groomers", slug: "pet-groomers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
  ],
  whyThisIndustry: "In the world of Managed IT Services, uptime is everything. Your clients rely on you to keep their businesses running smoothly, and when a server goes down or a security breach occurs, every second counts. Missing a call from a client in crisis doesn't just damage your reputation; it can lead to catastrophic downtime and lost revenue for your clients. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into ConnectWise — so you capture the client even when your team is focused on ticket delivery.",
  painPoints: [
    {
      title: "Technical Emergencies Demand Instant Triage",
      description: "When a client's network is down, they don't want to leave a voicemail. They need to know that their issue has been logged and that a technician is on the way."
    },
    {
      title: "High-Value Lead Qualification",
      description: "New business inquiries for MSPs are often complex. If your front desk can't intelligently qualify these leads and schedule a discovery call with a senior engineer, you're losing high-retainer contracts."
    },
    {
      title: "Support Ticket Overload",
      description: "Your technical team should be solving problems, not answering basic status update calls. Repetitive inquiries bog down your most expensive resources and slow down overall service delivery."
    },
    {
      title: "High-Value Project Leads Get Lost",
      description: "Project consultations and specialized IT services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another MSP who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden server outage or a security breach at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with ConnectWise."
    }
  ],
  dayInTheLife: `8:15 AM — A client calls because their entire office is offline. The BrightLaunchIQ AI Receptionist answers instantly, identifies the client via their phone number, and triages the issue as a 'Priority 1' outage.

8:17 AM — Recognizing a high-priority service request, the AI immediately creates a high-priority ticket in your PSA (ConnectWise) and notifies your on-call engineer via SMS. Simultaneously, it sends an SMS to the client, confirming their ticket and providing a technician ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled ticket (answered via ConnectWise integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized IT program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in ConnectWise — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist create help desk tickets?", answer: "Yes. The AI captures issue description, severity level, and affected systems, then creates tickets in ConnectWise with proper priority routing." },
    { question: "Does the AI integrate with ConnectWise?", answer: "Yes. BrightLaunchIQ connects with ConnectWise to create service tickets, check SLA status, and route emergencies to on-call engineers." },
    { question: "Can the AI handle after-hours emergencies?", answer: "Yes. The AI triages severity — full outage vs. single-user issue — and escalates critical incidents to your on-call team immediately." },
    { question: "Does the AI qualify new MSP prospects?", answer: "Yes. The AI captures company size, current infrastructure, pain points, and budget, then schedules discovery calls with your sales team." },
    { question: "How quickly can an MSP get started?", answer: "Most MSPs are live within 48 hours. We configure ticket categories, integrate with ConnectWise, and customize escalation workflows for your SLAs." },
    { question: "What does an AI receptionist cost for MSPs?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and ConnectWise integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const ITSupportMSPs = () => <IndustryPageTemplate data={data} />;
export default ITSupportMSPs;
