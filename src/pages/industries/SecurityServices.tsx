import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Security Services",
  slug: "security-services",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["Quote Requests", "Security Assessment Scheduling", "Alarm Response Inquiries", "Event Security Planning", "Patrol Service Information", "Emergency Dispatch"],
  crm: "TrackTik",
  sectorLabel: "Business Services",
  similarBusinesses: [
    { name: "Private Investigators", slug: "private-investigators" },
    { name: "IT Support & MSPs", slug: "it-support-msps" },
    { name: "Locksmiths", slug: "locksmiths" },
  ],
  whyThisIndustry: "In the critical field of security services, rapid response, vigilant monitoring, and clear communication with clients are paramount for protecting assets and ensuring safety. Security service providers rely on a steady stream of new client inquiries, efficient deployment of personnel, and a reputation for reliable, professional protection. When a prospective client calls, they often need immediate assistance with understanding security solutions, requesting quotes for services, inquiring about alarm response times, or scheduling a security assessment. Missing that call doesn\u2019t just mean losing a potential client; it can mean leaving valuable assets vulnerable and impacting the company\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Protection Need\" Expectation",
      description: "Clients often call when they have an immediate security concern (e.g., recent break-in, threat assessment, event security) and are seeking urgent protection. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another security provider that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Security Personnel are Focused on \"Protection,\" Not the Phone",
      description: "Your security personnel are dedicated to patrolling properties, monitoring surveillance systems, and responding to incidents. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your dispatch center is understaffed or busy with active alerts, new inquiries go unanswered, leading to lost contracts and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Service Offerings and Quote Inquiries",
      description: "\"Do you offer armed guards?\" \"How much does a commercial alarm system cost?\" \"Can you provide security for my event next month?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and generate preliminary quotes, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, needing a quote for commercial property security. The BrightLaunchIQ AI Receptionist answers instantly with a professional, authoritative tone. It guides the caller through a quick intake, gathers details about their property, explains your security solutions, and generates a preliminary quote. It then offers to schedule a comprehensive security assessment.\n\n1:00 PM \u2014 While your security teams are deployed, the AI handles multiple routine calls: one client confirming their upcoming event security details (handled automatically), another asking about remote monitoring services (answered by the AI), and a third inquiring about personal protection services.\n\n5:00 PM \u2014 After hours, a prospective client calls about a recent security breach at their business. The AI provides immediate advice on incident response, logs an urgent message for a security consultant, and offers to schedule an emergency assessment for the next morning. It also sends an SMS with relevant company information and a link to your online service request form.`,
  faqs: [
    { question: "Can an AI receptionist generate quotes for security services?", answer: "Yes. The AI captures property details, security needs, and service preferences, then generates preliminary quotes or routes complex requests to your sales team." },
    { question: "Does the AI integrate with security management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like TrackTik and SecurityTrax to manage client intake, service requests, and personnel deployment." },
    { question: "Can the AI answer questions about security solutions?", answer: "Yes. The AI can provide detailed information on various security solutions, alarm systems, patrol services, and response times." },
    { question: "Does the AI handle emergency security calls?", answer: "Yes. The AI operates 24/7, capturing critical details about emergencies and routing urgent cases to your on-call security personnel." },
    { question: "How quickly can a security services company get started?", answer: "Most security services companies are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your specific security solutions." },
    { question: "What does an AI receptionist cost for security services?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time dispatcher." },
  ],
};

const SecurityServices = () => <IndustryPageTemplate data={data} />;
export default SecurityServices;
