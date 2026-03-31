import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Fence Companies",
  slug: "fence-companies",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Estimate Scheduling", "Material Questions", "Permit Inquiries", "Repair Requests", "Commercial Fencing Leads", "Gate Installation"],
  crm: "Jobber",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Landscapers", slug: "landscapers" },
    { name: "General Contractors", slug: "general-contractors" },
    { name: "Concrete Contractors", slug: "concrete-contractors" },
  ],
  whyThisIndustry: "In the fence installation and repair industry, customer service, quick estimates, and reliable scheduling are key to winning bids. Fence companies rely on a steady stream of new inquiries and a reputation for quality craftsmanship. When a potential client calls, they often need immediate assistance with property security, aesthetic upgrades, or repair estimates. Missing that call doesn\u2019t just mean losing a potential project; it means failing to capture a significant revenue opportunity. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Jobber \u2014 so you capture the client even when your team is focused on delivering exceptional fence installation services.",
  painPoints: [
    {
      title: "The \"Security-on-Demand\" Expectation",
      description: "Clients seeking fence services often have urgent needs related to property security, privacy, or pet containment. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another company that can offer immediate, knowledgeable, and professional assistance to discuss their needs."
    },
    {
      title: "Installers are Focused on the \"Build,\" Not the Phone",
      description: "Your installation crews are dedicated to site preparation, material handling, and precise fence construction. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost bids and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Project Scope",
      description: "Every new inquiry requires a detailed understanding of the client\u2019s needs, property layout, material preferences, and budget. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t align with your expertise."
    },
    {
      title: "High-Value Projects Get Lost",
      description: "Large-scale perimeter fencing, custom gate installations, and commercial security projects are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another company who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about an urgent security fence repair or a weekend project consultation is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Jobber."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, needing a new privacy fence installed quickly. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (project type, property size, material preference, urgency) and identifies this as a high-priority lead.\n\n9:05 AM \u2014 The AI checks your lead estimator\u2019s calendar and offers a specific time for an on-site estimate. The client feels confident in your company\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your company\u2019s digital project questionnaire, allowing the client to provide more details.\n\n1:00 PM \u2014 While your crew is on a job site, the AI handles multiple routine calls: a supplier confirming a material delivery (routed correctly), a current client asking for a project update (answered via CRM integration), and a new lead for a commercial security fence (qualified and scheduled). Every interaction is transcribed and synced with your project management software (like Jobber).\n\nThroughout the day, every call is transcribed, summarized, and logged in Jobber \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle lead qualification for fence companies?", answer: "Yes. The AI is programmed to gather essential project details, material preferences, and timeline information to qualify leads and streamline your sales process." },
    { question: "Does the AI integrate with Jobber?", answer: "Yes. BrightLaunchIQ connects with Jobber to manage client intake, schedule consultations, and log all communication details securely." },
    { question: "Can the AI schedule on-site estimates?", answer: "Yes. The AI checks your estimator\u2019s availability and books on-site consultations directly into your calendar, sending secure confirmations to clients." },
    { question: "Does the AI handle material inquiries?", answer: "Yes. The AI can answer questions about different fencing materials (wood, vinyl, chain-link, aluminum) and provide general material information." },
    { question: "How quickly can a fence company get started?", answer: "Most companies are live within 48 hours. We configure your service offerings, integrate with your project management system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for fence companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Jobber integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const FenceCompanies = () => <IndustryPageTemplate data={data} />;
export default FenceCompanies;
