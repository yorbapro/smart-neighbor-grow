import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Private Investigators",
  slug: "private-investigators",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Confidential Intake", "Case Feasibility Discussions", "Consultation Scheduling", "Evidence Gathering Inquiries", "Background Check Requests", "Surveillance Coordination"],
  crm: "CaseFleet",
  sectorLabel: "Legal & Professional Services",
  similarBusinesses: [
    { name: "Security Services", slug: "security-services" },
    { name: "Process Servers", slug: "process-servers" },
    { name: "Forensic Accountants", slug: "forensic-accountants" },
  ],
  whyThisIndustry: "In the discreet and critical field of private investigation, confidentiality, meticulous evidence gathering, and clear communication with clients are paramount for successful outcomes. Private investigators rely on a steady stream of new client inquiries, efficient management of complex cases, and a reputation for uncovering the truth. When a prospective client calls, they often need immediate assistance with understanding investigation services, inquiring about case feasibility, discussing confidentiality, or scheduling a consultation. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing crucial evidence and impacting the agency\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Need for Answers\" Expectation",
      description: "Clients often call when they are in a sensitive or urgent situation (e.g., infidelity, missing persons, corporate fraud) and are seeking immediate answers and professional help. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another private investigator that can offer instant, discreet communication and clear information about their services."
    },
    {
      title: "Investigators are Focused on \"Cases,\" Not the Phone",
      description: "Your private investigators are dedicated to surveillance, research, interviews, and evidence collection. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your office is understaffed or busy with active cases, new inquiries go unanswered, leading to lost cases and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Case-Specific and Confidentiality Inquiries",
      description: "\"Can you help me find a missing person?\" \"What are your rates for infidelity investigations?\" \"How do you ensure confidentiality?\" Answering these repetitive questions and coordinating consultations takes up valuable time. Without an intelligent system to handle these FAQs and book consultations directly into your CRM, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, concerned about a potential infidelity. The BrightLaunchIQ AI Receptionist answers instantly with a discreet, professional tone. It guides the caller through a quick intake, gathers details about their concerns, explains your investigation process, and emphasizes confidentiality. It then books a private consultation directly into your agency\u2019s calendar.\n\n1:00 PM \u2014 While your investigators are in the field, the AI handles multiple routine calls: one client confirming their upcoming surveillance update (handled automatically), another asking about background check services (answered by the AI), and a third inquiring about corporate fraud investigations.\n\n5:00 PM \u2014 After hours, a prospective client calls about a missing family member. The AI provides immediate advice on initial steps, logs an urgent message for a lead investigator, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant agency information and a link to your online intake forms.`,
  faqs: [
    { question: "Can an AI receptionist handle confidential inquiries for private investigators?", answer: "Yes. The AI is programmed for discretion, gathering essential case details while maintaining client privacy and escalating urgent matters to your team." },
    { question: "Does the AI integrate with case management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like CaseFleet and Clio to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI screen potential clients for private investigation services?", answer: "Yes. The AI asks qualifying questions to understand the nature of the inquiry, its urgency, and the client\u2019s specific needs before routing to your team." },
    { question: "Does the AI book consultations for private investigators?", answer: "Yes. The AI checks investigator availability and books confidential consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "How quickly can a private investigation firm get started?", answer: "Most firms are live within 48 hours. We configure your service offerings, integrate with your case management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for private investigators?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const PrivateInvestigators = () => <IndustryPageTemplate data={data} />;
export default PrivateInvestigators;
