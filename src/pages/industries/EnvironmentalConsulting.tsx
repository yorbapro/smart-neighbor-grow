import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Environmental & Sustainability Consulting",
  slug: "environmental-sustainability-consulting",
  lossAmount: "100,000",
  lossAmountNum: 100000,
  useCases: ["Lead Qualification", "Compliance Inquiries", "Sustainability Strategy Consultations", "Environmental Impact Assessments", "Regulatory Questions", "Client Updates"],
  crm: "Salesforce",
  sectorLabel: "Specialized B2B & Technical Services",
  similarBusinesses: [
    { name: "Architecture & Engineering Firms", slug: "architecture-engineering" },
    { name: "Management Consulting", slug: "management-consulting" },
    { name: "Cybersecurity Firms", slug: "cybersecurity-firms" },
  ],
  whyThisIndustry: "In the environmental and sustainability consulting sector, expertise, regulatory compliance, and strategic guidance are crucial for client success. Firms rely on a steady stream of new project inquiries, strong client relationships, and a reputation for delivering impactful solutions. When a potential client calls, they often need immediate assistance with compliance assessments, sustainability strategies, or environmental impact studies. Missing that call doesn\u2019t just mean losing a potential project; it can impact critical timelines and regulatory adherence.",
  painPoints: [
    {
      title: "The \"Expert Guidance-on-Demand\" Expectation",
      description: "Clients seeking environmental or sustainability consulting services often have complex challenges and require expert guidance from the first point of contact. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another firm that can offer immediate, knowledgeable, and professional assistance to discuss their project vision and technical requirements."
    },
    {
      title: "Consultants are Focused on the \"Impact,\" Not the Phone",
      description: "Your environmental scientists, sustainability strategists, and project managers are dedicated to data analysis, field assessments, and report generation. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost bids and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Project Scope",
      description: "Every new inquiry requires a detailed understanding of the client\u2019s needs, project type (e.g., regulatory, energy, waste), scale, budget, and timeline. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t align with your firm\u2019s specialization."
    },
    {
      title: "High-Value Projects Get Lost",
      description: "Large-scale sustainability initiatives, complex regulatory compliance projects, and strategic environmental planning are high-value and essential for firm stability. If you don\u2019t capture the lead details and book immediately, the client will find another firm who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about a critical compliance deadline or a weekend consultation for a new sustainability project is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Salesforce."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, interested in a sustainability audit for their manufacturing facility. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (project type, facility size, specific concerns, budget range, timeline) and identifies this as a high-priority lead.\n\n9:05 AM \u2014 The AI checks your lead consultant\u2019s calendar and offers a specific time for an initial consultation. The client feels confident in your firm\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\u2019s digital project questionnaire, allowing the client to provide more details and preliminary drawings.\n\n1:00 PM \u2014 While your team is conducting a field assessment, the AI handles multiple routine calls: a regulatory agency confirming a permit application (routed correctly), a current client asking for a project update (answered via CRM integration), and a new lead for a large-scale renewable energy project (qualified and scheduled). Every interaction is transcribed and synced with your project management software (like Salesforce).\n\nThroughout the day, every call is transcribed, summarized, and logged in Salesforce \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle lead qualification for environmental & sustainability consulting firms?", answer: "Yes. The AI is programmed to gather essential project details, scope, and timeline information to qualify leads and streamline your sales process." },
    { question: "Does the AI integrate with Salesforce?", answer: "Yes. BrightLaunchIQ connects with Salesforce to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI schedule sustainability strategy consultations?", answer: "Yes. The AI checks your lead consultant\u2019s availability and books consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "Does the AI handle compliance inquiries?", answer: "Yes. The AI can answer questions about regulatory requirements, environmental standards, and your firm\u2019s expertise in compliance." },
    { question: "How quickly can an environmental & sustainability consulting firm get started?", answer: "Most firms are live within 48 hours. We configure your service offerings, integrate with your project management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for environmental & sustainability consulting firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Salesforce integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const EnvironmentalConsulting = () => <IndustryPageTemplate data={data} />;
export default EnvironmentalConsulting;
