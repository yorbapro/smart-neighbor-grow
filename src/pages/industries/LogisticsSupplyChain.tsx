import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Logistics & Supply Chain Services",
  slug: "logistics-supply-chain",
  lossAmount: "120,000",
  lossAmountNum: 120000,
  useCases: ["Lead Qualification", "Quote Requests", "Shipment Tracking", "Service Inquiries", "Consultation Scheduling", "Client Updates"],
  crm: "HubSpot",
  sectorLabel: "Specialized B2B & Technical Services",
  similarBusinesses: [
    { name: "Managed IT Services (MSP)", slug: "managed-it-services" },
    { name: "Software Development Agencies", slug: "software-development-agencies" },
    { name: "Cybersecurity Firms", slug: "cybersecurity-firms" },
  ],
  whyThisIndustry: "In the fast-paced world of logistics and supply chain management, efficiency, accuracy, and real-time communication are critical. Logistics companies rely on seamless operations, precise tracking, and a reputation for reliable service. When a client calls, they often need immediate updates on shipments, new quote requests, or assistance with complex routing. Missing that call doesn\u2019t just mean a lost opportunity; it can disrupt an entire supply chain.",
  painPoints: [
    {
      title: "The \"Real-time Information\" Expectation",
      description: "Clients in logistics demand immediate answers regarding their shipments, delivery schedules, and potential delays. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another provider who can offer instant, accurate, and professional assistance to address their urgent needs."
    },
    {
      title: "Operations Teams are Focused on the \"Flow,\" Not the Phone",
      description: "Your dispatchers, warehouse managers, and drivers are dedicated to optimizing routes, managing inventory, and ensuring timely deliveries. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost contracts and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Service Scope",
      description: "Every new inquiry requires a detailed understanding of the client\u2019s shipping needs, cargo type, volume, destination, and timeline. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t align with your service capabilities."
    },
    {
      title: "High-Value Contracts Get Lost",
      description: "Large-scale freight projects, complex warehousing solutions, and long-term logistics partnerships are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another company who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about an urgent shipment or a weekend consultation for a new contract is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with your logistics management software."
    }
  ],
  dayInTheLife: `8:00 AM \u2014 A potential client calls, needing a quote for a large freight shipment. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (cargo type, weight, dimensions, origin, destination, desired delivery date) and identifies this as a high-priority lead.\n\n8:05 AM \u2014 The AI checks your sales team\u2019s calendar and offers a specific time for a detailed consultation. The client feels confident in your company\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your company\u2019s digital quote request form, allowing the client to provide more details.\n\n1:00 PM \u2014 While your operations team is managing a complex delivery, the AI handles multiple routine calls: a carrier confirming a pickup (routed correctly), a current client asking for a shipment update (answered via CRM integration), and a new lead for a long-term warehousing contract (qualified and scheduled). Every interaction is transcribed and synced with your logistics management software (like HubSpot).\n\nThroughout the day, every call is transcribed, summarized, and logged in HubSpot \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle lead qualification for logistics companies?", answer: "Yes. The AI is programmed to gather essential project details, cargo type, and timeline information to qualify leads and streamline your sales process." },
    { question: "Does the AI integrate with HubSpot?", answer: "Yes. BrightLaunchIQ connects with HubSpot to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI schedule consultations for new contracts?", answer: "Yes. The AI checks your sales team\u2019s availability and books consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "Does the AI handle shipment tracking inquiries?", answer: "Yes. The AI can answer questions about shipment status, delivery times, and provide general tracking information." },
    { question: "How quickly can a logistics company get started?", answer: "Most companies are live within 48 hours. We configure your service offerings, integrate with your project management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for logistics companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and HubSpot integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const LogisticsSupplyChain = () => <IndustryPageTemplate data={data} />;
export default LogisticsSupplyChain;
