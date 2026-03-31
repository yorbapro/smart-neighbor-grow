import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Financial Advisors",
  slug: "financial-advisors",
  lossAmount: "120,000",
  lossAmountNum: 120000,
  useCases: ["Consultation Scheduling", "Portfolio Questions", "Retirement Planning", "New Client Intake", "Event Registration", "Referral Follow-Up"],
  crm: "Wealthbox",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Insurance Agents", slug: "insurance-agents" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" }
  ],
  whyThisIndustry: "Financial advisors rely on consistent client communication and efficient scheduling to provide essential financial services. When a client has a financial concern or needs a routine consultation, they need a quick and professional response. Missing calls for financial advisors means lost new client consultations, frustrated clients, and a direct impact on financial health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Wealthbox — so you capture the client even when your team is focused on financial filings.",
  painPoints: [
    {
      title: "Financial Concerns Demand Instant Scheduling",
      description: "Clients seeking financial care often do so because of sudden financial changes or market deadlines. If your front desk is busy or the call goes to voicemail, they will quickly call the next advisor that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling client check-ins, financial filings, and assisting the advisors. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office clients."
    },
    {
      title: "Inconsistent New Patient Intake and Financial Filing",
      description: "Qualifying new clients and gathering their initial information, including financial details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Financial Consultations Get Lost",
      description: "Financial consultations and specialized financial services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another financial advisor who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden financial concern or a market deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Wealthbox."
    }
  ],
  dayInTheLife: `8:30 AM — A new client calls, needing an urgent consultation for a sudden financial concern. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, financial provider, and the nature of their financial concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with Wealthbox. Simultaneously, it sends an SMS to the client, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled financial filing (answered via Wealthbox integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized financial program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Wealthbox — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle financial planning inquiries?", answer: "Yes. It captures financial goals and schedules consultations with your team." },
    { question: "Does the AI integrate with Wealthbox?", answer: "Yes. BrightLaunchIQ connects with Wealthbox to manage scheduling, client records, and portfolio inquiries automatically." },
    { question: "Can the AI handle event registrations?", answer: "Yes. The AI captures attendee details, processes registrations for your webinars or seminars, and provides event information including dates and locations." },
    { question: "Does the AI answer retirement planning questions?", answer: "Yes. The AI provides information about your retirement services, 401k rollovers, and pension planning based on your configured advisory data." },
    { question: "How quickly can a financial advisory firm get started?", answer: "Most financial advisory firms are live within 48 hours. We configure intake workflows, integrate with Wealthbox, and customize for your investment strategies." },
    { question: "What does an AI receptionist cost for financial advisors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Wealthbox integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const FinancialAdvisors = () => <IndustryPageTemplate data={data} />;
export default FinancialAdvisors;
