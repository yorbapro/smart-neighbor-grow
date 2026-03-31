import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Photography Studios",
  slug: "photography-studios",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Session Booking", "Package Questions", "Pricing Inquiries", "Event Photography", "Portrait Sessions", "Follow-Up Calls"],
  crm: "HoneyBook",
  sectorLabel: "Lifestyle & Wellness",
  similarBusinesses: [
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Event Venues", slug: "event-venues" },
    { name: "Tattoo Studios", slug: "tattoo-studios" }
  ],
  whyThisIndustry: "In the photography and creative industry, your reputation is built on art, precision, and a personal touch. Photography studios rely on a steady flow of new clients and a loyal client base. When a client is ready for a new photo session or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value session and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into HoneyBook — so you capture the client even when your team is focused on creative delivery.",
  painPoints: [
    {
      title: "The 'Art-on-Demand' Expectation",
      description: "Clients often decide to book a photo session or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next studio on their list."
    },
    {
      title: "Photographers are Focused on the 'Art', Not the Phone",
      description: "Your photographers and studio staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Session Leads Get Lost",
      description: "Portrait sessions and specialized photography services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another studio who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden art concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with HoneyBook."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute photo session for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in HoneyBook, identifies a 2:00 PM opening with your lead photographer, and books the session immediately.

11:30 AM — While your front desk is busy preparing a client for a session, the AI handles three simultaneous calls: one client rescheduling their session (handled automatically), another asking about your specialized photography options (answered by the AI), and a third booking a series of sessions.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends an artistic SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in HoneyBook — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle photography booking?", answer: "Yes. It captures session type, date preference, and package selections." },
    { question: "Does the AI integrate with HoneyBook?", answer: "Yes. BrightLaunchIQ connects with HoneyBook to manage session booking, package questions, and pricing inquiries automatically." },
    { question: "Can the AI handle event photography?", answer: "Yes. The AI captures event details, date preference, and package selections, then schedules a consultation with the appropriate photographer." },
    { question: "Does the AI answer service-specific questions?", answer: "Yes. The AI provides information about your photography services, pricing, and session timelines based on your configured studio data." },
    { question: "How quickly can a photography studio get started?", answer: "Most photography studios are live within 48 hours. We configure intake workflows, integrate with HoneyBook, and customize for your photography sessions." },
    { question: "What does an AI receptionist cost for photography studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and HoneyBook integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const PhotographyStudios = () => <IndustryPageTemplate data={data} />;
export default PhotographyStudios;
