import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Lash & Brow Studios",
  slug: "lash-brow-studios",
  lossAmount: "40,000",
  lossAmountNum: 40000,
  useCases: ["Appointment Booking", "Service Inquiries", "Artist Availability", "Aftercare Questions", "Gift Certificate Sales"],
  crm: "Vagaro",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Nail Salons", slug: "nail-salons" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Hair Salons & Barbershops", slug: "hair-salons" },
  ],
  whyThisIndustry: "In the intricate world of lash and brow artistry, precision, personalized service, and a luxurious client experience are paramount. Lash and brow artists rely on a steady stream of loyal clients, meticulous scheduling, and a reputation for enhancing natural beauty. When a client calls, they often need immediate assistance with appointment booking, service inquiries, or checking artist availability. Missing that call doesn\u2019t just mean losing a service; it can mean losing a long-term client and disrupting the studio\u2019s carefully curated ambiance.",
  painPoints: [
    {
      title: "The \"Perfect Look\" Expectation",
      description: "Clients often seek lash and brow services for special occasions or to maintain their desired aesthetic. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly move to the next studio that offers instant, seamless booking and a clear understanding of their desired look."
    },
    {
      title: "Artists are Focused on the \"Client,\" Not the Phone",
      description: "Your lash and brow artists are focused on the delicate work of enhancing features, ensuring client comfort, and delivering flawless results. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person clients, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Service Inquiries and Aftercare FAQs",
      description: "\"Do you offer volume lashes?\" \"What\u2019s the difference between microblading and microshading?\" \"How do I care for my new lash extensions?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `1:00 PM \u2014 A new client calls, interested in a full set of classic lash extensions. The BrightLaunchIQ AI Receptionist answers instantly with a sophisticated, welcoming tone. It guides the caller through a quick intake, confirms the desired service and checks your real-time schedule. The AI then books the appointment, sending a confirmation and a link to your digital intake form.\n\n3:30 PM \u2014 While your artists are busy with clients, the AI handles multiple routine calls: one client rescheduling their appointment (handled automatically), another asking about your brow lamination services (answered by the AI), and a third booking a series of touch-up appointments for the month.\n\n7:00 PM \u2014 After closing, a client calls about aftercare instructions for their new microblading. The AI provides detailed, pre-approved aftercare guidance, advises on next-day availability for follow-up questions, and offers to schedule a consultation for a friend. It also sends an SMS with relevant studio information.\n\nThroughout the day, every call is transcribed, summarized, and logged in Vagaro \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist manage lash and brow appointments?", answer: "Yes. It handles service selection, artist preference, and scheduling, eliminating phone tag during busy hours." },
    { question: "Does the AI integrate with Vagaro or Mindbody?", answer: "Yes. BrightLaunchIQ connects with leading salon management systems like Vagaro and Mindbody to manage schedules, client history, and streamline operations." },
    { question: "Can the AI answer questions about different lash and brow services?", answer: "Yes. The AI can provide detailed information on various services, pricing, and aftercare, guiding clients to their perfect choice." },
    { question: "How quickly can a lash and brow studio get started?", answer: "Most studios are live within 48 hours. We configure service offerings, integrate with your systems, and customize for your unique operations." },
    { question: "What does an AI receptionist cost for lash and brow studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, appointment booking, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const LashAndBrowStudios = () => <IndustryPageTemplate data={data} />;
export default LashAndBrowStudios;
