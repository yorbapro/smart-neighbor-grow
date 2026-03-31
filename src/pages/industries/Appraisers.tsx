import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Appraisers",
  slug: "appraisers",
  lossAmount: "85,000",
  lossAmountNum: 85000,
  useCases: ["Appraisal Scheduling", "Order Intake", "Status Updates", "Rush Requests", "Commercial Appraisals", "Client Follow-Up"],
  crm: "Anow",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
    { name: "Home Inspectors", slug: "home-inspectors" },
  ],
  whyThisIndustry: "In the appraisal industry, accuracy, objectivity, and timely reporting are essential for real estate transactions. Appraisers provide critical valuations for lenders, buyers, and sellers, and their availability and responsiveness directly impact closing timelines. When a client calls, they often need to schedule an appraisal quickly to meet deadlines or inquire about specific property types. Missing that call doesn\u2019t just mean losing a high-value appraisal; it can delay a home sale or refinance and impact your professional reputation. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Anow \u2014 so you capture the client even when your team is focused on delivering accurate valuations.",
  painPoints: [
    {
      title: "The \"Deadline-Driven Valuation\" Expectation",
      description: "Lenders, real estate agents, and homeowners often need appraisals completed within tight deadlines to keep transactions on track. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next appraiser on their list who can offer instant scheduling and clear communication."
    },
    {
      title: "Appraisers are Focused on the \"Property,\" Not the Phone",
      description: "Your appraisers are often in the field, meticulously inspecting properties, analyzing market data, and compiling detailed reports. They cannot\u2014and should not\u2014be interrupted by ringing phones. If your office is understaffed or busy, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "\"Do you appraise commercial properties?\" \"What\u2019s your availability next week?\" \"How long does a typical appraisal take?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your scheduling software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Appraisal Leads Get Lost",
      description: "Comprehensive property appraisals are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule an appraisal immediately, the client will find another appraiser who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden need for a rush appraisal or a critical follow-up at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Report Delivery",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Anow."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A lender calls, needing to schedule a residential appraisal for a new loan application. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It checks your real-time availability in Anow, identifies an opening, and books the appraisal immediately.\n\n11:30 AM \u2014 While your appraisers are on-site, the AI handles three simultaneous calls: one client rescheduling their appraisal (handled automatically), another asking about your specialized services like estate appraisals (answered by the AI), and a third inquiring about your service area.\n\n6:00 PM \u2014 After your office has closed, a real estate agent calls to inquire about a rush appraisal for a pending sale. The AI handles the intake, explains your rush service options, and schedules a consultation for the next morning, sending a professional SMS confirmation with a link to your digital intake forms.\n\nThroughout the day, every call is transcribed, summarized, and logged in Anow \u2014 providing a comprehensive record for every client and appraisal without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book home appraisals?", answer: "Yes. The AI checks your availability, captures property address and type, and books the appraisal directly into your Anow calendar." },
    { question: "Does the AI integrate with Anow?", answer: "Yes. BrightLaunchIQ connects with Anow to schedule appraisals, manage report delivery, and trigger client notifications." },
    { question: "Can the AI qualify appraisal leads?", answer: "Yes. The AI gathers property details, appraisal purpose, and client urgency, then routes qualified leads to available appraisers." },
    { question: "Does the AI handle lender referral calls?", answer: "Yes. The AI identifies referring lenders, provides priority scheduling, and captures referral source data for your marketing tracking." },
    { question: "How quickly can an appraisal firm get started?", answer: "Most appraisal firms are live within 48 hours. We configure service menus, integrate with Anow, and customize the AI for your service area." },
    { question: "What does an AI receptionist cost for appraisers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Anow integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Appraisers = () => <IndustryPageTemplate data={data} />;
export default Appraisers;
