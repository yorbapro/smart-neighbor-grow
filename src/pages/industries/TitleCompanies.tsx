import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Title Companies",
  slug: "title-companies",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["Closing Scheduling", "Title Search Status", "Document Questions", "Wire Transfer Instructions", "Agent Referrals", "New Order Intake"],
  crm: "Qualia",
  sectorLabel: "Real Estate & Property",
  similarBusinesses: [
    { name: "Residential Real Estate", slug: "residential-real-estate" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
    { name: "Home Inspectors", slug: "home-inspectors" },
  ],
  whyThisIndustry: "In the title insurance industry, precision, compliance, and seamless communication are paramount to successful real estate transactions. Title companies are a critical link in the home-buying and selling process, ensuring clear property ownership and facilitating smooth closings. When a real estate agent, lender, or client calls, they often need immediate updates, document coordination, or scheduling for a closing. Missing that call doesn\u2019t just mean a lost opportunity; it can delay a closing and damage crucial professional relationships. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Qualia \u2014 so you capture the client even when your team is focused on ensuring clear titles.",
  painPoints: [
    {
      title: "The \"Closing-Critical\" Expectation",
      description: "Real estate transactions operate on tight deadlines, and any delay in title services can have significant financial and logistical repercussions. If a call goes to voicemail or an inquiry is met with a generic answering service, agents and lenders will quickly move to a title company that offers instant, informed support and efficient communication."
    },
    {
      title: "Title Professionals are Focused on the \"Details,\" Not the Phone",
      description: "Your title officers, escrow agents, and legal team are meticulously reviewing documents, conducting searches, and ensuring compliance. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Document Coordination and Status Updates",
      description: "Clients, agents, and lenders frequently call for updates on title searches, document requirements, or closing schedules. Answering these repetitive questions and coordinating document exchanges takes up valuable time. Without an intelligent system to handle these FAQs and provide real-time status updates, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Title Orders Get Lost",
      description: "New title orders are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule a new order immediately, the client will find another title company who will."
    },
    {
      title: "After-Hours Delays Go Unanswered",
      description: "A sudden document discrepancy or an urgent closing question at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Transaction Flow",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Qualia."
    }
  ],
  dayInTheLife: `9:30 AM \u2014 A real estate agent calls, needing an immediate update on a title search for an upcoming closing. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It accesses your system (e.g., Qualia, SoftPro) to provide the current status, confirms all necessary documents have been received, and informs the agent of the next steps.\n\n11:00 AM \u2014 While your escrow team is preparing for a closing, the AI handles three simultaneous calls: one lender requesting a payoff statement (handled automatically with secure verification), another client asking about closing costs (answered by the AI), and a third scheduling a new title order.\n\n4:00 PM \u2014 After your office has closed, a potential client calls to inquire about title insurance for a new property. The AI handles the intake, explains your services, and schedules a consultation for the next morning, sending a professional SMS confirmation with a link to your digital intake forms.\n\nThroughout the day, every call is transcribed, summarized, and logged in Qualia \u2014 providing a comprehensive record for every client and transaction without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle title search status inquiries?", answer: "Yes. It provides status updates and schedules callbacks for complex questions." },
    { question: "Does the AI integrate with Qualia?", answer: "Yes. BrightLaunchIQ connects with Qualia to manage new orders, track title searches, and update closing schedules automatically." },
    { question: "Can the AI answer document questions?", answer: "Yes. The AI guides callers on required documents for closing, submission processes, and answers common FAQs related to title insurance." },
    { question: "Does the AI handle agent referrals?", answer: "Yes. The AI identifies referring agents, provides priority service, and captures referral source data for your marketing tracking." },
    { question: "How quickly can a title company get started?", answer: "Most title companies are live within 48 hours. We configure new order intake workflows, integrate with Qualia, and customize the AI for your specific services." },
    { question: "What does an AI receptionist cost for title companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Qualia integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const TitleCompanies = () => <IndustryPageTemplate data={data} />;
export default TitleCompanies;
