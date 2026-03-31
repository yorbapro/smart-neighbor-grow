import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Staffing Agencies",
  slug: "staffing-agencies",
  lossAmount: "100,000",
  lossAmountNum: 100000,
  useCases: ["Job Seeker Intake", "Client Inquiries", "Interview Scheduling", "Temp Assignment Updates", "Reference Checks", "Follow-Up Calls"],
  crm: "Bullhorn",
  sectorLabel: "B2B & Education",
  similarBusinesses: [
    { name: "IT Support & MSPs", slug: "it-support-msps" },
    { name: "Business Consultants", slug: "business-consultants" },
    { name: "Insurance Agents", slug: "insurance-agents" }
  ],
  whyThisIndustry: "In the HR and recruitment industry, your reputation is built on people, precision, and a personal touch. HR and recruitment agencies rely on a steady flow of new candidates and a loyal client base. When a candidate is ready for a new job or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value candidate and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Bullhorn — so you capture the candidate even when your team is focused on interview delivery.",
  painPoints: [
    {
      title: "The 'People-on-Demand' Expectation",
      description: "Candidates often decide to book a job interview or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next agency on their list."
    },
    {
      title: "Recruiters are Focused on the 'Candidate', Not the Phone",
      description: "Your recruiters and agency staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Candidate Leads Get Lost",
      description: "Candidate intakes and specialized recruitment services are high-value and essential for practice stability. If you don't capture the lead details and schedule an interview immediately, the candidate will find another recruitment agency who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden job concern or a deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, candidate details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Bullhorn."
    }
  ],
  dayInTheLife: `10:00 AM — A candidate calls wanting to book a last-minute interview for their new job for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Bullhorn, identifies a 2:00 PM opening with your lead recruiter, and books the interview immediately.

11:30 AM — While your front desk is busy preparing a candidate, the AI handles three simultaneous calls: one candidate rescheduling their interview (handled automatically), another asking about your specialized recruitment options (answered by the AI), and a third booking a series of interviews.

6:00 PM — After you've closed for the day, a candidate calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a professional SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Bullhorn — providing a comprehensive record for every candidate and case without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle job seeker intake?", answer: "Yes. It captures skills, experience, and availability to pre-qualify candidates." },
    { question: "Does the AI integrate with Bullhorn?", answer: "Yes. BrightLaunchIQ connects with Bullhorn to manage job seeker intake, client inquiries, and interview scheduling automatically." },
    { question: "Can the AI handle reference checks?", answer: "Yes. The AI captures reference details, schedules calls with referees, and provides information about your reference check process based on your configured agency data." },
    { question: "Does the AI answer service-specific questions?", answer: "Yes. The AI provides information about your recruitment services, pricing, and placement timelines based on your configured agency data." },
    { question: "How quickly can a staffing agency get started?", answer: "Most staffing agencies are live within 48 hours. We configure intake workflows, integrate with Bullhorn, and customize for your candidate qualification process." },
    { question: "What does an AI receptionist cost for staffing agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Bullhorn integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const StaffingAgencies = () => <IndustryPageTemplate data={data} />;
export default StaffingAgencies;
