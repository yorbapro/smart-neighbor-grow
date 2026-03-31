import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Cybersecurity Firms",
  slug: "cybersecurity-firms",
  lossAmount: "350,000",
  lossAmountNum: 350000,
  useCases: ["Security Audit Scheduling", "Incident Response Triage", "Compliance Inquiry Handling", "Vulnerability Assessment Leads", "Managed Security Service Inquiries", "Security Training Registration"],
  crm: "HubSpot",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "IT Support & MSPs", slug: "it-support-msps" },
    { name: "Software Development Agencies", slug: "software-development-agencies" },
    { name: "SaaS & Tech Startups", slug: "saas-tech-startups" },
  ],
  whyThisIndustry: "In the cybersecurity industry, your reputation is built on security, precision, and a personal touch. Cybersecurity firms rely on a steady flow of new clients and a loyal client base. When a client is ready for a new security audit or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value audit and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into HubSpot — so you capture the client even when your team is focused on security delivery.",
  painPoints: [
    {
      title: "The 'Security-on-Demand' Expectation",
      description: "Clients often decide to book a cybersecurity audit or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next firm on their list."
    },
    {
      title: "Security Experts are Focused on the 'Security', Not the Phone",
      description: "Your security experts and firm staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Security Leads Get Lost",
      description: "Security audits and specialized cybersecurity services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another firm who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden security concern or a breach at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with HubSpot."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute consultation for their new security audit for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in HubSpot, identifies a 2:00 PM opening with your lead security expert, and books the consultation immediately.

11:30 AM — While your front desk is busy preparing an audit, the AI handles three simultaneous calls: one client rescheduling their consultation (handled automatically), another asking about your specialized security options (answered by the AI), and a third booking a series of consultations.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a secure SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in HubSpot — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist schedule security audits?", answer: "Yes. The AI qualifies the lead by asking about their infrastructure and compliance needs, then schedules an audit on your HubSpot calendar." },
    { question: "Does the AI integrate with HubSpot?", answer: "Yes. BrightLaunchIQ connects with HubSpot to create new lead records, log call summaries, and manage consultation schedules automatically." },
    { question: "Can the AI handle incident response triage?", answer: "Yes. The AI triages security incidents by severity and urgency, capturing key breach details and scheduling immediate consultations with your response team." },
    { question: "Does the AI answer service-specific questions?", answer: "Yes. The AI provides information about your security services, pricing, and audit timelines based on your configured firm data." },
    { question: "How quickly can a cybersecurity firm get started?", answer: "Most firms are live within 48 hours. We configure security intake workflows, integrate with HubSpot, and customize for your security audit process." },
    { question: "What does an AI receptionist cost for cybersecurity firms?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and HubSpot integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const CybersecurityFirms = () => <IndustryPageTemplate data={data} />;
export default CybersecurityFirms;
