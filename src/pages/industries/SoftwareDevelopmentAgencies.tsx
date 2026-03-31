import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Software Development Agencies",
  slug: "software-development-agencies",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Project Discovery Scheduling", "Technical Support Triage", "Service Package Inquiries", "Client Onboarding Intake", "Partnership Requests", "Follow-Up Appointment Booking"],
  crm: "HubSpot",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "SaaS & Tech Startups", slug: "saas-tech-startups" },
    { name: "Cybersecurity Firms", slug: "cybersecurity-firms" },
    { name: "IT Support & MSPs", slug: "it-support-msps" },
  ],
  whyThisIndustry: "In the software development industry, your reputation is built on innovation, precision, and a personal touch. Software development agencies rely on a steady flow of new projects and a loyal client base. When a client is ready for a new project or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value project and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into HubSpot — so you capture the client even when your team is focused on code delivery.",
  painPoints: [
    {
      title: "The 'Innovation-on-Demand' Expectation",
      description: "Clients often decide to book a software development project or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next agency on their list."
    },
    {
      title: "Developers are Focused on the 'Code', Not the Phone",
      description: "Your developers and agency staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Project Leads Get Lost",
      description: "Project consultations and specialized development services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another agency who will."
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
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute consultation for their new project for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in HubSpot, identifies a 2:00 PM opening with your lead developer, and books the consultation immediately.

11:30 AM — While your front desk is busy preparing a project, the AI handles three simultaneous calls: one client rescheduling their consultation (handled automatically), another asking about your specialized development options (answered by the AI), and a third booking a series of consultations.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends an innovative SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in HubSpot — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist schedule discovery calls?", answer: "Yes. The AI qualifies the lead by asking about their project scope and budget, then schedules a discovery call on your HubSpot calendar." },
    { question: "Does the AI integrate with HubSpot?", answer: "Yes. BrightLaunchIQ connects with HubSpot to create new lead records, log call summaries, and manage consultation schedules automatically." },
    { question: "Can the AI handle technical support triage?", answer: "Yes. The AI triages support requests by severity and urgency, capturing key issue details and scheduling immediate consultations with your support team." },
    { question: "Does the AI answer service-specific questions?", answer: "Yes. The AI provides information about your development services, pricing, and project timelines based on your configured agency data." },
    { question: "How quickly can a development agency get started?", answer: "Most agencies are live within 48 hours. We configure project intake workflows, integrate with HubSpot, and customize for your development process." },
    { question: "What does an AI receptionist cost for development agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and HubSpot integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const SoftwareDevelopmentAgencies = () => <IndustryPageTemplate data={data} />;
export default SoftwareDevelopmentAgencies;
