import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Workers' Compensation Lawyers",
  slug: "workers-compensation-lawyers",
  lossAmount: "180,000",
  lossAmountNum: 180000,
  useCases: ["Confidential Intake", "Injury Assessment", "Consultation Scheduling", "Claim Status Updates", "Employer Communication", "After-Hours Support"],
  crm: "Clio",
  sectorLabel: "Legal & Professional Services",
  similarBusinesses: [
    { name: "Personal Injury Lawyers", slug: "personal-injury-lawyers" },
    { name: "Bankruptcy Attorneys", slug: "bankruptcy-attorneys" },
    { name: "Social Security Disability Lawyers", slug: "social-security-disability-lawyers" },
  ],
  whyThisIndustry: "In the specialized field of workers\' compensation law, injured workers often call in pain, confusion, and financial distress. They need immediate, clear guidance on their rights and the complex claims process. Missing that initial call doesn\u2019t just mean losing a potential client; it means failing to provide crucial support to someone navigating a difficult and often overwhelming situation. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Clio \u2014 so you capture the client even when your team is focused on delivering exceptional legal counsel.",
  painPoints: [
    {
      title: "The \"Urgency of Injury\" for New Leads",
      description: "Workers who have suffered an injury on the job are often in physical pain, unable to work, and worried about their financial future. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another firm that can offer immediate, empathetic assistance and clear next steps."
    },
    {
      title: "Attorneys are Focused on the \"Case,\" Not the Phone",
      description: "Your legal team is dedicated to managing existing claims, negotiating with insurance companies, and representing clients in hearings. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Sensitive Intake and Qualification",
      description: "Every new inquiry requires a delicate balance of empathy and qualification. You need to understand the nature of the injury, how it occurred, the employer involved, and assess the potential for a valid claim. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Cases Get Lost",
      description: "Complex workers\' compensation claims, appeals, and litigation cases are high-value and essential for firm stability. If you don\u2019t capture the lead details and book immediately, the client will find another attorney who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about a severe injury or a weekend claim deadline is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Clio."
    }
  ],
  dayInTheLife: `9:15 AM \u2014 A potential client calls, having just suffered a workplace injury and unsure of their next steps. The BrightLaunchIQ AI Receptionist answers instantly with a calm, professional, and empathetic tone. It gathers essential intake data (type of injury, date of incident, employer, initial medical treatment) and identifies this as a high-priority lead.\n\n9:20 AM \u2014 The AI checks your lead attorney\u2019s calendar and offers a specific time for a confidential initial consultation. The client feels heard and supported, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\u2019s digital intake questionnaire, emphasizing the confidentiality of their information.\n\n3:00 PM \u2014 While your team is in a deposition, the AI handles multiple routine calls: a current client checking on their claim status (answered via CRM integration), a medical provider seeking information (routed correctly), and a new lead for a repetitive stress injury claim (qualified and scheduled). Every interaction is transcribed and synced with your case management software.\n\nThroughout the day, every call is transcribed, summarized, and logged in Clio \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle workers\' compensation inquiries?", answer: "Yes. The AI is programmed for empathy, gathering essential injury and employment details while maintaining client privacy and escalating urgent matters to your team." },
    { question: "Does the AI integrate with Clio?", answer: "Yes. BrightLaunchIQ connects with Clio to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI screen potential cases?", answer: "Yes. The AI asks qualifying questions to understand the nature of the injury, how it occurred, and assess the potential for a valid claim before routing to your team." },
    { question: "Does the AI book consultations?", answer: "Yes. The AI checks attorney availability and books confidential consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "How quickly can a workers\' compensation firm get started?", answer: "Most firms are live within 48 hours. We configure your service offerings, integrate with your case management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for workers\' compensation lawyers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Clio integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const WorkersCompensationLawyers = () => <IndustryPageTemplate data={data} />;
export default WorkersCompensationLawyers;
