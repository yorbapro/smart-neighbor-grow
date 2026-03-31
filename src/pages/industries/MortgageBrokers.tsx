import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Mortgage Brokers",
  slug: "mortgage-brokers",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Pre-Approval Inquiry", "Loan Application Support", "Rate Quote Requests", "Document Collection Guidance", "Refinance Lead Qualification", "Appointment Scheduling"],
  crm: "Jungo",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Financial Advisors", slug: "financial-advisors" },
    { name: "Insurance Agents", slug: "insurance-agents" },
  ],
  whyThisIndustry: "In the competitive mortgage industry, every lead is a potential homebuyer\u2019s dream. Mortgage brokers rely on a steady flow of new applications and a reputation for efficient, personalized service. When a potential client calls, they are often at a critical stage in their home-buying journey, seeking immediate answers and guidance. Missing that call doesn\u2019t just mean losing a high-value loan; it means failing to help someone secure their future. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Jungo \u2014 so you capture the client even when your team is focused on securing approvals.",
  painPoints: [
    {
      title: "The \"Dream Home-on-Demand\" Expectation",
      description: "Homebuyers often decide to inquire about mortgage options or pre-approval on a whim or when they finally have a free moment. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next broker on their list who can offer instant, informed support."
    },
    {
      title: "Brokers are Focused on the \"Deal,\" Not the Phone",
      description: "Your mortgage team is dedicated to processing applications, securing approvals, and navigating complex financial landscapes. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Product Matching",
      description: "Every new inquiry requires careful screening to understand the client\u2019s financial situation, credit history, loan type preferences, and timeline. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads that don\u2019t fit your offerings."
    },
    {
      title: "High-Value Mortgage Leads Get Lost",
      description: "Mortgage applications and refinance opportunities are high-value and essential for brokerage stability. If you don\u2019t capture the lead details and schedule a consultation immediately, the client will find another broker who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A sudden interest in a new home or an urgent refinance inquiry at 8 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Loan Processing",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Jungo."
    }
  ],
  dayInTheLife: `9:15 AM \u2014 A potential client calls, excited about a new home and needing pre-approval. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (loan amount, credit score range, property type, urgency) and identifies this as a high-priority lead.\n\n9:20 AM \u2014 The AI checks your lead broker\u2019s calendar and offers a specific time for a confidential initial consultation. The client feels confident in your firm\u2019s responsiveness, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your firm\u2019s digital application and document upload portal.\n\n3:00 PM \u2014 While your team is in a closing, the AI handles multiple routine calls: a current client checking on their application status (answered via CRM integration), a real estate agent seeking a referral (routed correctly), and a new lead for a refinance opportunity (qualified and scheduled). Every interaction is transcribed and synced with your CRM (like Salesforce or Jungo).\n\nThroughout the day, every call is transcribed, summarized, and logged in Jungo \u2014 providing a comprehensive record for every client and loan without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist qualify mortgage leads?", answer: "Yes. The AI captures loan amount, credit score range, and property type, then routes qualified leads to the appropriate broker on your team." },
    { question: "Does the AI integrate with Jungo?", answer: "Yes. BrightLaunchIQ syncs with Jungo to create new opportunities, update deal stages, and log all call interactions automatically." },
    { question: "Can the AI schedule pre-approval consultations?", answer: "Yes. The AI coordinates consultation times with prospects and brokers, confirms availability, and sends calendar invitations with application details." },
    { question: "Does the AI handle refinance inquiries?", answer: "Yes. The AI captures refinance criteria \u2014 current rate, desired loan amount, property value \u2014 and routes serious inquiries to senior brokers immediately." },
    { question: "How quickly can a mortgage brokerage get started?", answer: "Most brokerages are live within 48 hours. We configure lead routing, integrate with Jungo, and customize the AI for your loan products." },
    { question: "What does an AI receptionist cost for mortgage brokers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Jungo integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const MortgageBrokers = () => <IndustryPageTemplate data={data} />;
export default MortgageBrokers;
