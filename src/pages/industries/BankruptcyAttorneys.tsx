import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Bankruptcy Attorneys",
  slug: "bankruptcy-attorneys",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Confidential Intake", "Financial Assessment", "Consultation Scheduling", "Creditor Communication", "Filing Status Updates", "After-Hours Support"],
  crm: "Clio",
  sectorLabel: "Legal & Professional Services",
  similarBusinesses: [
    { name: "Family Law Attorneys", slug: "family-law-attorneys" },
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Workers Compensation Lawyers", slug: "workers-compensation-lawyers" },
  ],
  whyThisIndustry: "In the challenging field of bankruptcy law, clients often reach out during periods of significant financial distress and emotional vulnerability. When someone is considering bankruptcy, they need immediate, empathetic, and clear guidance. Missing that initial call doesn\u2019t just mean losing a potential client; it means failing to provide a lifeline to someone in urgent need of legal relief. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Clio \u2014 so you capture the client even when your team is focused on delivering exceptional legal counsel.",
  painPoints: [
    {
      title: "The \"Urgency of Financial Distress\" for New Leads",
      description: "Individuals and businesses facing bankruptcy are often under immense pressure, with deadlines for filings, creditor calls, and the threat of asset seizure. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another firm that can offer immediate, compassionate assistance."
    },
    {
      title: "Attorneys are Focused on the \"Case,\" Not the Phone",
      description: "Your legal team is dedicated to complex filings, court appearances, and negotiating with creditors. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Sensitive Intake and Qualification",
      description: "Every new inquiry requires a delicate balance of empathy and qualification. You need to understand the client\u2019s financial situation, assess their eligibility for different bankruptcy chapters, and gather sensitive personal information. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Cases Get Lost",
      description: "Complex bankruptcy filings, business reorganizations, and debt negotiation cases are high-value and essential for firm stability. If you don\u2019t capture the lead details and book immediately, the client will find another attorney who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about an impending foreclosure or a weekend wage garnishment is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Clio."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, overwhelmed by debt and seeking information about Chapter 7 bankruptcy. The BrightLaunchIQ AI Receptionist answers instantly with a calm, professional, and empathetic tone. It gathers essential intake data (type of debt, urgency, initial financial overview) and identifies this as a high-priority lead.\n\n9:05 AM \u2014 The AI checks your lead attorney\u2019s calendar and offers a specific time for a confidential initial consultation. The client feels heard and supported, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\u2019s digital intake questionnaire, emphasizing the confidentiality of their information.\n\n2:00 PM \u2014 While your team is in court, the AI handles multiple routine calls: a current client checking on their filing status (answered via CRM integration), a creditor seeking information (routed correctly), and a new lead for Chapter 13 bankruptcy (qualified and scheduled). Every interaction is transcribed and synced with your case management software (like Clio or PracticePanther).\n\nThroughout the day, every call is transcribed, summarized, and logged in Clio \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle bankruptcy inquiries?", answer: "Yes. The AI is programmed for empathy, gathering essential financial details while maintaining client privacy and escalating urgent matters to your team." },
    { question: "Does the AI integrate with Clio?", answer: "Yes. BrightLaunchIQ connects with Clio to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI screen potential cases?", answer: "Yes. The AI asks qualifying questions to understand the nature of the inquiry, assess financial eligibility, and determine urgency before routing to your team." },
    { question: "Does the AI book consultations?", answer: "Yes. The AI checks attorney availability and books confidential consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "How quickly can a bankruptcy firm get started?", answer: "Most firms are live within 48 hours. We configure your service offerings, integrate with your case management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for bankruptcy attorneys?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Clio integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const BankruptcyAttorneys = () => <IndustryPageTemplate data={data} />;
export default BankruptcyAttorneys;
