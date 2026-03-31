import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Architecture & Engineering Firms",
  slug: "architecture-engineering",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Lead Qualification", "Project Feasibility Inquiries", "Design Consultation Scheduling", "Technical Support", "Client Updates", "Regulatory Questions"],
  crm: "Salesforce",
  sectorLabel: "Specialized B2B & Technical Services",
  similarBusinesses: [
    { name: "Management Consulting", slug: "management-consulting" },
    { name: "Software Development Agencies", slug: "software-development-agencies" },
    { name: "Environmental & Sustainability Consulting", slug: "environmental-sustainability-consulting" },
  ],
  whyThisIndustry: "In the architecture and engineering sectors, precision, innovation, and meticulous project management are paramount. Firms rely on a steady stream of new project inquiries, strong client relationships, and a reputation for delivering complex designs and solutions. When a potential client calls, they often need immediate assistance with project feasibility, design consultations, or technical inquiries. Missing that call doesn\u2019t just mean losing a potential project; it can impact project timelines and client satisfaction.",
  painPoints: [
    {
      title: "The \"Expert Consultation-on-Demand\" Expectation",
      description: "Clients seeking architectural or engineering services often have complex needs and require expert guidance from the first point of contact. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another firm that can offer immediate, knowledgeable, and professional assistance to discuss their project vision and technical requirements."
    },
    {
      title: "Design Teams are Focused on the \"Blueprint,\" Not the Phone",
      description: "Your architects, engineers, and design teams are dedicated to conceptualization, detailed drafting, and technical analysis. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost bids and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Project Scope",
      description: "Every new inquiry requires a detailed understanding of the client\u2019s needs, project type (residential, commercial, industrial), scale, budget, regulatory requirements, and timeline. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t align with your firm\u2019s specialization."
    },
    {
      title: "High-Value Projects Get Lost",
      description: "Large-scale commercial developments, complex infrastructure projects, and specialized engineering analyses are high-value and essential for firm stability. If you don\u2019t capture the lead details and book immediately, the client will find another firm who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about a critical project deadline or a weekend consultation for a new development is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Salesforce."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, interested in designing a new commercial building. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (project type, building size, desired features, budget range, timeline) and identifies this as a high-priority lead.\n\n9:05 AM \u2014 The AI checks your lead architect\u2019s calendar and offers a specific time for an initial design consultation. The client feels confident in your firm\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\u2019s digital project questionnaire, allowing the client to provide more details and preliminary drawings.\n\n1:00 PM \u2014 While your design team is in a client presentation, the AI handles multiple routine calls: a contractor confirming a drawing revision (routed correctly), a current client asking for a project update (answered via CRM integration), and a new lead for a large-scale engineering project (qualified and scheduled). Every interaction is transcribed and synced with your project management software (like Salesforce).\n\nThroughout the day, every call is transcribed, summarized, and logged in Salesforce \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle lead qualification for architecture & engineering firms?", answer: "Yes. The AI is programmed to gather essential project details, scope, and timeline information to qualify leads and streamline your sales process." },
    { question: "Does the AI integrate with Salesforce?", answer: "Yes. BrightLaunchIQ connects with Salesforce to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI schedule design consultations?", answer: "Yes. The AI checks your lead architect\u2019s availability and books consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "Does the AI handle technical inquiries?", answer: "Yes. The AI can answer questions about your firm\u2019s specializations, project types, and general technical capabilities." },
    { question: "How quickly can an architecture & engineering firm get started?", answer: "Most firms are live within 48 hours. We configure your service offerings, integrate with your project management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for architecture & engineering firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Salesforce integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const ArchitectureEngineering = () => <IndustryPageTemplate data={data} />;
export default ArchitectureEngineering;
