import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Personal Trainers",
  slug: "personal-trainers",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Session Booking", "Program Inquiries", "Free Consultation Scheduling", "Cancellation/Rescheduling", "Package Questions", "Referral Follow-Up"],
  crm: "Mindbody",
  sectorLabel: "Lifestyle & Wellness",
  similarBusinesses: [
    { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios" },
    { name: "Martial Arts Studios", slug: "martial-arts-studios" },
    { name: "Dance Studios", slug: "dance-studios" }
  ],
  whyThisIndustry: "In the fitness and wellness industry, your reputation is built on motivation, results, and a personal touch. Fitness centers and personal trainers rely on a steady flow of new members and a loyal client base. When a client is ready to start their fitness journey or book a session, they want a quick and easy way to book. Missing that call means losing a high-value membership and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Mindbody — so you capture the client even when your team is focused on workout delivery.",
  painPoints: [
    {
      title: "The 'Fitness-on-Demand' Expectation",
      description: "Clients often decide to book a fitness session or join a gym on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next gym on their list."
    },
    {
      title: "Trainers are Focused on the 'Workout', Not the Phone",
      description: "Your trainers and gym staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about classes, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Membership Leads Get Lost",
      description: "Membership enrollments and specialized training programs are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another gym who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden fitness concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Mindbody."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute personal training session for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Mindbody, identifies a 2:00 PM opening with your lead trainer, and books the session immediately.

11:30 AM — While your front desk is busy preparing a group class, the AI handles three simultaneous calls: one client rescheduling their membership (handled automatically), another asking about your nutrition coaching options (answered by the AI), and a third booking a series of personal training sessions.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a motivating SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Mindbody — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can the AI schedule training sessions?", answer: "Yes. It handles session booking, program inquiries, and free consultations." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage scheduling, client records, and program inquiries automatically." },
    { question: "Can the AI handle cancellations?", answer: "Yes. The AI processes cancellations and rescheduling requests according to your policy, updating your calendar and notifying the trainer immediately." },
    { question: "Does the AI answer service-specific questions?", answer: "Yes. The AI provides information about your training programs, pricing, and class schedules based on your configured gym data." },
    { question: "How quickly can a personal trainer get started?", answer: "Most personal trainers are live within 48 hours. We configure intake workflows, integrate with Mindbody, and customize for your fitness programs." },
    { question: "What does an AI receptionist cost for personal trainers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Mindbody integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const PersonalTrainers = () => <IndustryPageTemplate data={data} />;
export default PersonalTrainers;
