import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Notary Publics",
  slug: "notary-publics",
  lossAmount: "30,000",
  lossAmountNum: 30000,
  useCases: ["Appointment Booking", "Service FAQs", "Mobile Notary Inquiries", "Document Preparation Guidance", "After-Hours Scheduling"],
  crm: "NotaryAct",
  sectorLabel: "Legal & Professional Services",
  similarBusinesses: [
    { name: "Bookkeepers", slug: "bookkeepers" },
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Legal Services", slug: "legal-services" },
  ],
  whyThisIndustry: "In the notary public industry, your reputation is built on trust, precision, and a personal touch. Notary publics rely on a steady flow of new clients and a loyal client base. When a client is ready for a new notarization or a consultation, they want a quick and easy way to book. Missing that call means losing a high-value appointment and potentially a long-term client. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, provides service information, and books appointments directly into your scheduling software \u2014 so you capture the client even when your team is focused on providing essential notary services.",
  painPoints: [
    {
      title: "The \"Trust-on-Demand\" Expectation",
      description: "Clients often decide to book a notarization or a consultation on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly move to the next notary on their list that offers instant, seamless booking."
    },
    {
      title: "Notaries are Focused on the \"Document,\" Not the Phone",
      description: "Your notaries and staff are in the \"zone,\" providing high-touch, personalized care. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy checking out a client, new inquiries go unanswered, leading to lost revenue and a diminished brand image."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "\"Do you offer mobile notary services?\" \"What\u2019s the difference between a notary and a lawyer?\" \"Can I book a notarization for Saturday?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Appointments Get Lost",
      description: "Complex document notarizations, loan signings, and ongoing business agreements are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another notary who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about an urgent document or a weekend appointment request is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with NotaryAct."
    }
  ],
  dayInTheLife: `10:00 AM \u2014 A client calls wanting to book a last-minute notarization for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in your scheduling software, identifies a 2:00 PM opening, and books the appointment immediately.\n\n11:30 AM \u2014 While your front desk is busy preparing a document, the AI handles three simultaneous calls: one client rescheduling their appointment (handled automatically), another asking about your mobile notary services (answered by the AI), and a third booking a series of appointments.\n\n6:00 PM \u2014 After you\u2019ve closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a professional SMS confirmation with a link to your digital intake and waiver forms.\n\nThroughout the day, every call is transcribed, summarized, and logged in NotaryAct \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book notary appointments?", answer: "Yes. The AI checks your real-time availability and books appointments directly into your scheduling system." },
    { question: "Does the AI integrate with NotaryAct?", answer: "Yes. BrightLaunchIQ connects with NotaryAct to manage appointments, track client interactions, and automate communication." },
    { question: "Can the AI answer questions about mobile notary services?", answer: "Yes. The AI provides detailed information on your mobile notary services, pricing, and availability." },
    { question: "Does the AI handle document preparation guidance?", answer: "Yes. The AI can provide guidance on required documents and preparation steps for various notarizations." },
    { question: "How quickly can a notary public get started?", answer: "Most notaries are live within 48 hours. We configure your service offerings, integrate with your scheduling system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for notary publics?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and NotaryAct integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const NotaryPublics = () => <IndustryPageTemplate data={data} />;
export default NotaryPublics;
