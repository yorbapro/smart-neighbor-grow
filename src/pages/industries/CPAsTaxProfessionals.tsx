import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "CPAs & Tax Professionals",
  slug: "cpas-tax-professionals",
  lossAmount: "110,000",
  lossAmountNum: 110000,
  useCases: ["Tax Appointment Scheduling", "Document Drop-off FAQ", "Pricing Inquiries", "Extension Filing Reminders", "New Client Intake", "Seasonal Overflow Handling"],
  crm: "TaxDome",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Notary Publics", slug: "notary-publics" },
    { name: "Private Investigators", slug: "private-investigators" },
  ],
  whyThisIndustry: "Accounting and CPA firms rely on consistent client communication and efficient scheduling to provide essential financial services. When a client has a tax concern or needs a routine consultation, they need a quick and professional response. Missing calls for accounting firms means lost new client consultations, frustrated clients, and a direct impact on financial health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into TaxDome — so you capture the client even when your team is focused on filings.",
  painPoints: [
    {
      title: "Financial Concerns Demand Instant Scheduling",
      description: "Clients seeking accounting care often do so because of sudden financial changes or tax deadlines. If your front desk is busy or the call goes to voicemail, they will quickly call the next firm that can see them today."
    },
    {
      title: "Staff Overload During Peak Hours",
      description: "Your front desk staff is often juggling client check-ins, tax filings, and assisting the accountants. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office clients."
    },
    {
      title: "Inconsistent New Patient Intake and Tax Filing",
      description: "Qualifying new clients and gathering their initial information, including tax details, is crucial. Without a consistent, intelligent system to handle these inquiries, your team spends valuable time on repetitive data entry."
    },
    {
      title: "High-Value Tax Consultations Get Lost",
      description: "Tax consultations and specialized financial services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another accounting firm who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden tax concern or a filing deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with TaxDome."
    }
  ],
  dayInTheLife: `8:30 AM — A new client calls, needing an urgent consultation for a sudden tax concern. The BrightLaunchIQ AI Receptionist answers instantly, gathers their contact details, tax provider, and the nature of their financial concern.

8:32 AM — Recognizing a high-priority service request, the AI immediately identifies an immediate opening in your schedule and books the consultation, integrating directly with TaxDome. Simultaneously, it sends an SMS to the client, confirming their appointment and providing a clinic ETA.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled tax filing (answered via TaxDome integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized financial program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in TaxDome — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle CPA intake calls?", answer: "Yes. The AI captures business type, revenue range, service needs, and urgency — then schedules appointments with the appropriate tax professional on your team." },
    { question: "Does the AI integrate with TaxDome?", answer: "Yes. BrightLaunchIQ connects with TaxDome to schedule appointments, manage document requests, and update client records automatically." },
    { question: "Can the AI handle seasonal call overflow?", answer: "Yes. The AI scales instantly during tax season, handling unlimited concurrent calls so no prospect ever reaches voicemail during your busiest months." },
    { question: "Does the AI answer document drop-off questions?", answer: "Yes. The AI provides your office hours, document requirements, accepted formats, and drop-off procedures based on your configured practice information." },
    { question: "How quickly can a CPA firm get started?", answer: "Most CPA firms are live within 48 hours. We configure intake workflows, integrate with TaxDome, and customize seasonal overflow handling for tax season." },
    { question: "What does an AI receptionist cost for accounting firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and TaxDome integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const CPAsTaxProfessionals = () => <IndustryPageTemplate data={data} />;
export default CPAsTaxProfessionals;
