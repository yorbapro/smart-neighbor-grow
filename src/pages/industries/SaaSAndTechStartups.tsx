import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "SaaS & Tech Startups",
  slug: "saas-tech-startups",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Demo Scheduling", "Technical Support Triage", "Pricing Inquiry Handling", "Feature Request Intake", "Partnership Requests", "User Onboarding Support"],
  crm: "HubSpot",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "Software Development Agencies", slug: "software-development-agencies" },
    { name: "Cybersecurity Firms", slug: "cybersecurity-firms" },
    { name: "IT Support & MSPs", slug: "it-support-msps" },
  ],
  whyThisIndustry: "In the SaaS and tech startup industry, your reputation is built on innovation, speed, and a personal touch. SaaS and tech startups rely on a steady flow of new users and a loyal client base. When a user is ready for a new feature or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value user and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into HubSpot — so you capture the user even when your team is focused on code delivery.",
  painPoints: [
    {
      title: "The 'Innovation-on-Demand' Expectation",
      description: "Users often decide to book a SaaS feature or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next startup on their list."
    },
    {
      title: "Developers are Focused on the 'Code', Not the Phone",
      description: "Your developers and startup staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value User Leads Get Lost",
      description: "Feature consultations and specialized SaaS services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the user will find another startup who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden feature concern or a deadline at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with HubSpot."
    }
  ],
  dayInTheLife: `10:00 AM — A user calls wanting to book a last-minute consultation for their new feature for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in HubSpot, identifies a 2:00 PM opening with your lead developer, and books the consultation immediately.

11:30 AM — While your front desk is busy preparing a feature, the AI handles three simultaneous calls: one user rescheduling their consultation (handled automatically), another asking about your specialized SaaS options (answered by the AI), and a third booking a series of consultations.

6:00 PM — After you've closed for the day, a user calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends an innovative SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in HubSpot — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist schedule product demos?", answer: "Yes. The AI qualifies the lead by asking about their team size and goals, then schedules a demo on your HubSpot calendar." },
    { question: "Does the AI integrate with HubSpot?", answer: "Yes. BrightLaunchIQ connects with HubSpot to create new lead records, log call summaries, and manage demo schedules automatically." },
    { question: "Can the AI handle technical support triage?", answer: "Yes. The AI triages support requests by severity and urgency, capturing key issue details and scheduling immediate consultations with your support team." },
    { question: "Does the AI answer pricing questions?", answer: "Yes. The AI provides information about your SaaS tiers, pricing, and feature sets based on your configured startup data." },
    { question: "How quickly can a SaaS startup get started?", answer: "Most startups are live within 48 hours. We configure demo intake workflows, integrate with HubSpot, and customize for your product discovery process." },
    { question: "What does an AI receptionist cost for SaaS startups?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and HubSpot integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const SaaSAndTechStartups = () => <IndustryPageTemplate data={data} />;
export default SaaSAndTechStartups;
