import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Manufacturing & Industrial Services",
  slug: "manufacturing-industrial",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Production Inquiry Intake", "Custom Order Requests", "Technical Support Triage", "Supplier Coordination", "Project Status Updates", "Service Agreement FAQs"],
  crm: "Salesforce",
  sectorLabel: "Specialized B2B & Technical Services",
  similarBusinesses: [
    { name: "Logistics & Supply Chain Services", slug: "logistics-supply-chain" },
    { name: "Architecture & Engineering Firms", slug: "architecture-engineering" },
    { name: "Cybersecurity Firms", slug: "cybersecurity-firms" },
  ],
  whyThisIndustry: "In the manufacturing and industrial services sector, operational efficiency, precision, and robust client communication are critical. Companies rely on a steady flow of new project inquiries, strong client relationships, and a reputation for delivering high-quality products and specialized services. When a potential client calls, they often need immediate assistance with production inquiries, custom order requests, or technical support. Missing that call doesn\u2019t just mean losing a potential order; it can disrupt production schedules and impact client satisfaction.",
  painPoints: [
    {
      title: "The \"Production-on-Demand\" Expectation",
      description: "Clients seeking manufacturing or industrial services often have time-sensitive needs and require immediate attention from the first point of contact. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another provider that can offer immediate, knowledgeable, and professional assistance to discuss their production requirements and technical specifications."
    },
    {
      title: "Production Teams are Focused on the \"Floor,\" Not the Phone",
      description: "Your engineers, production managers, and skilled technicians are dedicated to optimizing workflows, overseeing quality control, and executing complex projects. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost orders and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Project Scope",
      description: "Every new inquiry requires a detailed understanding of the client\u2019s needs, product specifications, order volume, material requirements, and delivery timelines. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t align with your production capabilities."
    },
    {
      title: "High-Value Projects Get Lost",
      description: "Large-scale custom fabrication, complex industrial equipment orders, and long-term maintenance contracts are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another provider who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about a critical production issue or a weekend consultation for a new industrial project is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Salesforce."
    }
  ],
  dayInTheLife: `9:30 AM \u2014 A potential client calls, interested in a custom fabrication order. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (product type, material, quantity, desired specifications, timeline) and identifies this as a high-priority lead.\n\n9:35 AM \u2014 The AI checks your sales engineer\u2019s calendar and offers a specific time for an initial consultation. The client feels confident in your company\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your company\u2019s digital RFQ form, allowing the client to provide more detailed blueprints and technical drawings.\n\n2:00 PM \u2014 While your production team is overseeing a critical assembly line, the AI handles multiple routine calls: a supplier confirming a material delivery (routed correctly), a current client asking for a production update (answered via CRM integration), and a new lead for a large-scale industrial maintenance contract (qualified and scheduled). Every interaction is transcribed and synced with your ERP or CRM system (like Salesforce).\n\nThroughout the day, every call is transcribed, summarized, and logged in Salesforce \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle lead qualification for manufacturing & industrial services?", answer: "Yes. The AI is programmed to gather essential project details, product specifications, and timeline information to qualify leads and streamline your sales process." },
    { question: "Does the AI integrate with Salesforce?", answer: "Yes. BrightLaunchIQ connects with Salesforce to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI schedule production consultations?", answer: "Yes. The AI checks your sales engineer\u2019s availability and books consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "Does the AI handle technical support inquiries?", answer: "Yes. The AI can answer questions about product specifications, common troubleshooting, and route complex issues to your technical team." },
    { question: "How quickly can a manufacturing & industrial services company get started?", answer: "Most companies are live within 48 hours. We configure your service offerings, integrate with your ERP/CRM system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for manufacturing & industrial services?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Salesforce integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const ManufacturingIndustrial = () => <IndustryPageTemplate data={data} />;
export default ManufacturingIndustrial;
