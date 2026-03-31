import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Business Consultants",
  slug: "business-consultants",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["Discovery Call Scheduling", "Service Inquiries", "Client Follow-Up", "Proposal Requests", "Workshop Registration", "Referral Intake"],
  crm: "HubSpot",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Financial Advisors", slug: "financial-advisors" },
    { name: "Insurance Agents", slug: "insurance-agents" }
  ],
  whyThisIndustry: "In the management consulting industry, your reputation is built on expertise, precision, and a personal touch. Management consulting firms rely on a steady flow of new projects and a loyal client base. When a client is ready for a new project or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value project and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into HubSpot — so you capture the client even when your team is focused on project delivery.",
  painPoints: [
    {
      title: "The 'Expertise-on-Demand' Expectation",
      description: "Clients often decide to book a management consulting project or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next firm on their list."
    },
    {
      title: "Consultants are Focused on the 'Project', Not the Phone",
      description: "Your consultants and firm staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Project Leads Get Lost",
      description: "Project consultations and specialized consulting services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another consulting firm who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden project concern or a deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with HubSpot."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute consultation for their new project for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in HubSpot, identifies a 2:00 PM opening with your lead consultant, and books the consultation immediately.

11:30 AM — While your front desk is busy preparing a project, the AI handles three simultaneous calls: one client rescheduling their consultation (handled automatically), another asking about your specialized consulting options (answered by the AI), and a third booking a series of consultations.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends an expert SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in HubSpot — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can the AI schedule discovery calls?", answer: "Yes. It qualifies prospects and books calls on your calendar." },
    { question: "Does the AI integrate with HubSpot?", answer: "Yes. BrightLaunchIQ connects with HubSpot to manage discovery calls, service inquiries, and client records automatically." },
    { question: "Can the AI handle workshop registrations?", answer: "Yes. The AI captures attendee details, processes registrations for your workshops or seminars, and provides event information including dates and locations." },
    { question: "Does the AI answer service-specific questions?", answer: "Yes. The AI provides information about your consulting services, pricing, and project timelines based on your configured firm data." },
    { question: "How quickly can a consulting firm get started?", answer: "Most consulting firms are live within 48 hours. We configure intake workflows, integrate with HubSpot, and customize for your project discovery process." },
    { question: "What does an AI receptionist cost for consulting firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and HubSpot integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const BusinessConsultants = () => <IndustryPageTemplate data={data} />;
export default BusinessConsultants;
