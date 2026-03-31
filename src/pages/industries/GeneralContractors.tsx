import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "General Contractors",
  slug: "general-contractors",
  lossAmount: "150,000",
  lossAmountNum: 150000,
  useCases: ["Lead Qualification", "Estimate Scheduling", "Subcontractor Coordination", "Client Updates", "Emergency Service Requests", "Project Inquiries"],
  crm: "Buildertrend",
  sectorLabel: "Construction",
  similarBusinesses: [
    { name: "Roofing Companies", slug: "roofing-companies" },
    { name: "Concrete Contractors", slug: "concrete-contractors" },
    { name: "Home Builders", slug: "home-builders" },
  ],
  whyThisIndustry: "In the demanding world of general contracting, managing projects, coordinating trades, and securing new business are constant challenges. General contractors rely on a steady pipeline of qualified leads and a reputation for reliable project delivery. When a potential client calls, they often have complex project ideas and need immediate, expert consultation. Missing that call doesn\u2019t just mean losing a high-value project; it means failing to capture a significant revenue opportunity. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Buildertrend \u2014 so you capture the client even when your team is focused on delivering exceptional construction services.",
  painPoints: [
    {
      title: "The \"Project Vision-on-Demand\" Expectation",
      description: "Clients seeking general contractors often have a clear vision for their renovation, new build, or commercial project. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another contractor who can offer immediate, knowledgeable, and professional assistance to discuss their vision."
    },
    {
      title: "Contractors are Focused on the \"Site,\" Not the Phone",
      description: "Your project managers and site supervisors are dedicated to overseeing construction, coordinating subcontractors, and ensuring quality control. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost bids and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Project Scope",
      description: "Every new inquiry requires a detailed understanding of the client\u2019s needs, budget, timeline, and specific project requirements. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t align with your expertise."
    },
    {
      title: "High-Value Projects Get Lost",
      description: "Large-scale renovations, custom home builds, and commercial construction projects are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another contractor who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about an urgent repair or a weekend project consultation is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Buildertrend."
    }
  ],
  dayInTheLife: `8:30 AM \u2014 A potential client calls, interested in a major home renovation. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (project type, budget range, desired timeline, specific needs) and identifies this as a high-priority lead.\n\n8:35 AM \u2014 The AI checks your lead project manager\u2019s calendar and offers a specific time for an on-site consultation. The client feels confident in your firm\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\u2019s digital project questionnaire, allowing the client to provide more details.\n\n1:00 PM \u2014 While your team is managing a construction site, the AI handles multiple routine calls: a subcontractor confirming a delivery (routed correctly), a current client asking for a project update (answered via CRM integration), and a new lead for a commercial build-out (qualified and scheduled). Every interaction is transcribed and synced with your project management software (like Buildertrend or Procore).\n\nThroughout the day, every call is transcribed, summarized, and logged in Buildertrend \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle lead qualification for general contractors?", answer: "Yes. The AI is programmed to gather essential project details, budget, and timeline information to qualify leads and streamline your sales process." },
    { question: "Does the AI integrate with Buildertrend?", answer: "Yes. BrightLaunchIQ connects with Buildertrend to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI schedule on-site estimates?", answer: "Yes. The AI checks your project manager\u2019s availability and books on-site consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "Does the AI handle subcontractor coordination?", answer: "Yes. The AI can route calls to specific subcontractors, provide project updates, and manage scheduling changes." },
    { question: "How quickly can a general contracting firm get started?", answer: "Most firms are live within 48 hours. We configure your service offerings, integrate with your project management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for general contractors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Buildertrend integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const GeneralContractors = () => <IndustryPageTemplate data={data} />;
export default GeneralContractors;
