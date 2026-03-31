import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Wedding Planners",
  slug: "wedding-planners",
  lossAmount: "220,000",
  lossAmountNum: 220000,
  useCases: ["Consultation Booking", "Budget & Package Inquiries", "Vendor Referral Requests", "Day-Of Coordination Leads", "Destination Wedding Inquiries", "Timeline & Milestone Updates"],
  crm: "Aisle Planner",
  sectorLabel: "Lifestyle & Wellness",
  similarBusinesses: [
    { name: "Event Venues", slug: "event-venues" },
    { name: "Catering Services", slug: "catering-services" },
    { name: "Boutique Hotels", slug: "boutique-hotels" },
  ],
  whyThisIndustry: "In the event planning and wedding industry, your reputation is built on organization, creativity, and a personal touch. Event planners and wedding coordinators rely on a steady flow of new clients and a loyal client base. When a client is ready to plan their special event or book a consultation, they want a quick and easy way to book. Missing that call means losing a high-value event and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Aisle Planner — so you capture the client even when your team is focused on creative delivery.",
  painPoints: [
    {
      title: "The 'Event-on-Demand' Expectation",
      description: "Clients often decide to book an event planner or wedding coordinator on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next planner on their list."
    },
    {
      title: "Planners are Focused on the 'Event', Not the Phone",
      description: "Your planners and event staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Event Leads Get Lost",
      description: "Wedding planning and specialized event coordination services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another planner who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden event concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Aisle Planner."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute consultation for their wedding for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Aisle Planner, identifies a 2:00 PM opening with your lead planner, and books the consultation immediately.

11:30 AM — While your front desk is busy preparing an event, the AI handles three simultaneous calls: one client rescheduling their consultation (handled automatically), another asking about your specialized planning options (answered by the AI), and a third booking a series of consultations.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends an organized SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Aisle Planner — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist capture wedding planning leads?", answer: "Yes. The AI captures wedding date, guest count, budget range, and planning needs, then schedules a consultation with the appropriate planner." },
    { question: "Does the AI integrate with Aisle Planner?", answer: "Yes. BrightLaunchIQ connects with Aisle Planner to create new client records, manage consultation schedules, and track lead pipelines." },
    { question: "Can the AI explain service packages?", answer: "Yes. The AI walks callers through full-service, partial, and day-of coordination packages, capturing which tier interests them for follow-up." },
    { question: "Does the AI handle vendor referral requests?", answer: "Yes. The AI provides recommended vendor categories and captures specific needs, then routes referral requests to your vendor network." },
    { question: "How quickly can a wedding planner get started?", answer: "Most planners are live within 48 hours. We configure service packages, integrate with Aisle Planner, and customize the AI for your brand." },
    { question: "What does an AI receptionist cost for wedding planners?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Aisle Planner integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const WeddingPlanners = () => <IndustryPageTemplate data={data} />;
export default WeddingPlanners;
