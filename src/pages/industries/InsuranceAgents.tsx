import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Insurance Agents",
  slug: "insurance-agents",
  lossAmount: "100,000",
  lossAmountNum: 100000,
  useCases: ["Quote Requests", "Policy Questions", "Claims Intake", "Renewal Reminders", "New Client Onboarding", "Referral Follow-Up"],
  crm: "AgencyZoom",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Financial Advisors", slug: "financial-advisors" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" }
  ],
  whyThisIndustry: "Insurance agencies rely on consistent client communication and efficient scheduling to provide essential insurance services. When a client has an insurance concern or needs a routine consultation, they need a quick and professional response. Missing calls for insurance agencies means lost new client consultations, frustrated clients, and a direct impact on insurance health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into AgencyZoom — so you capture the client even when your team is focused on insurance filings.",
  painPoints: [
    {
      title: "Insurance Concerns Demand Instant Scheduling",
      description: "Clients seeking insurance care often do so because of sudden insurance changes or claim deadlines. If your front desk is busy or the call goes to voicemail, they will quickly call the next agency that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling client check-ins, insurance filings, and assisting the agents. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office clients."
    },
    {
      title: "Inconsistent New Patient Intake and Insurance Filing",
      description: "Qualifying new clients and gathering their initial information, including insurance details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Insurance Consultations Get Lost",
      description: "Insurance consultations and specialized insurance services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another insurance agency who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden insurance concern or a claim deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with AgencyZoom."
    }
  ],
  dayInTheLife: `8:30 AM — A new client calls, needing an urgent consultation for a sudden insurance concern. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, insurance provider, and the nature of their insurance concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with AgencyZoom. Simultaneously, it sends an SMS to the client, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled insurance filing (answered via AgencyZoom integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized insurance program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in AgencyZoom — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle insurance quote requests?", answer: "Yes. It captures coverage needs, vehicle/property details, and schedules consultations." },
    { question: "Does the AI integrate with AgencyZoom?", answer: "Yes. BrightLaunchIQ connects with AgencyZoom to manage quotes, policy updates, and client records automatically." },
    { question: "Can the AI handle claims intake?", answer: "Yes. The AI captures incident details, policy numbers, and photos (via SMS link), then creates the claim record in your system for immediate adjuster review." },
    { question: "Does the AI answer policy coverage questions?", answer: "Yes. The AI provides information about your policy types, coverage limits, deductibles, and exclusions based on your configured agency data." },
    { question: "How quickly can an insurance agency get started?", answer: "Most insurance agencies are live within 48 hours. We configure quote intake workflows, integrate with AgencyZoom, and customize for your carriers." },
    { question: "What does an AI receptionist cost for insurance agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and AgencyZoom integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const InsuranceAgents = () => <IndustryPageTemplate data={data} />;
export default InsuranceAgents;
