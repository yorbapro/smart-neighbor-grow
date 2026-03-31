import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Tattoo Studios",
  slug: "tattoo-studios",
  lossAmount: "80,000",
  lossAmountNum: 80000,
  useCases: ["Consultation Booking", "Custom Design Inquiries", "Artist Availability Checks", "Touch-Up Scheduling", "Deposit Collection Routing", "Aftercare Follow-Ups"],
  crm: "DaySmart",
  sectorLabel: "Lifestyle & Wellness",
  similarBusinesses: [
    { name: "Barbershops", slug: "barbershops" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Hair Salons", slug: "hair-salons" },
  ],
  whyThisIndustry: "In the tattoo and piercing industry, your reputation is built on art, precision, and a personal touch. Tattoo and piercing studios rely on a steady flow of new clients and a loyal client base. When a client is ready for a new piece of art or a piercing, they want a quick and easy way to book. Missing that call means losing a high-value appointment and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into DaySmart — so you capture the client even when your team is focused on creative delivery.",
  painPoints: [
    {
      title: "The 'Art-on-Demand' Expectation",
      description: "Clients often decide to book a tattoo or piercing on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next studio on their list."
    },
    {
      title: "Artists are Focused on the 'Art', Not the Phone",
      description: "Your artists and studio staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Tattoo Leads Get Lost",
      description: "Custom designs and specialized piercing services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another studio who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden art concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with DaySmart."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute tattoo for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in DaySmart, identifies a 2:00 PM opening with your lead artist, and books the session immediately.

11:30 AM — While your front desk is busy preparing a client for a piercing, the AI handles three simultaneous calls: one client rescheduling their appointment (handled automatically), another asking about your custom design options (answered by the AI), and a third booking a series of piercings.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends an artistic SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in DaySmart — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book tattoo consultations?", answer: "Yes. The AI captures design ideas, placement preferences, and size estimates, then schedules a consultation with the appropriate artist." },
    { question: "Does the AI integrate with DaySmart?", answer: "Yes. BrightLaunchIQ connects with DaySmart to manage artist schedules, track client consultations, and send appointment reminders." },
    { question: "Can the AI match clients with the right artist?", answer: "Yes. The AI asks about style preferences — traditional, realism, fine line, blackwork — and routes to the artist who specializes in that style." },
    { question: "Does the AI handle touch-up requests?", answer: "Yes. The AI captures original tattoo details and scheduling preferences, then books touch-up appointments during available slots." },
    { question: "How quickly can a tattoo studio get started?", answer: "Most studios are live within 48 hours. We configure artist profiles, integrate with DaySmart, and customize for your studio's specialties." },
    { question: "What does an AI receptionist cost for tattoo studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and DaySmart integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const TattooStudios = () => <IndustryPageTemplate data={data} />;
export default TattooStudios;
