import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Yoga & Pilates Studios",
  slug: "yoga-pilates-studios",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Class Registration", "Membership Enrollment", "Private Session Booking", "Teacher Training Inquiries", "Workshop Sign-Ups", "Schedule & Pricing Questions"],
  crm: "Mindbody",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Day Spas", slug: "day-spas" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Hair Salons", slug: "hair-salons" },
  ],
  whyThisIndustry: "In the yoga and wellness industry, your reputation is built on mindfulness, balance, and a personal touch. Yoga and Pilates studios rely on a steady flow of new students and a loyal client base. When a student is ready to start their yoga journey or book a class, they want a quick and easy way to book. Missing that call means losing a high-value student and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Mindbody — so you capture the student even when your team is focused on mindful delivery.",
  painPoints: [
    {
      title: "The 'Mindfulness-on-Demand' Expectation",
      description: "Students often decide to book a yoga class or join a studio on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next studio on their list."
    },
    {
      title: "Instructors are Focused on the 'Practice', Not the Phone",
      description: "Your instructors and studio staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about classes, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Membership Leads Get Lost",
      description: "Membership enrollments and specialized teacher training programs are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the student will find another studio who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden wellness concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, student details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Mindbody."
    }
  ],
  dayInTheLife: `10:00 AM — A student calls wanting to book a last-minute yoga class for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Mindbody, identifies a 2:00 PM opening with your lead instructor, and books the class immediately.

11:30 AM — While your front desk is busy preparing a group class, the AI handles three simultaneous calls: one student rescheduling their membership (handled automatically), another asking about your teacher training options (answered by the AI), and a third booking a series of private sessions.

6:00 PM — After you've closed for the day, a student calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a mindful SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Mindbody — providing a comprehensive record for every student and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist register students for classes?", answer: "Yes. The AI checks class availability, captures student preferences, and registers them directly into your Mindbody schedule." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage class rosters, sell memberships, and track student attendance automatically." },
    { question: "Can the AI handle membership questions?", answer: "Yes. The AI explains membership tiers, pricing, class limits, and cancellation policies, then enrolls new members or routes billing inquiries." },
    { question: "Does the AI book private sessions?", answer: "Yes. The AI checks instructor availability, captures session goals, and books one-on-one or small group privates with confirmations sent to both parties." },
    { question: "How quickly can a yoga studio get started?", answer: "Most studios are live within 48 hours. We configure class schedules, integrate with Mindbody, and customize the AI for your studio offerings." },
    { question: "What does an AI receptionist cost for yoga studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Mindbody integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const YogaPilatesStudios = () => <IndustryPageTemplate data={data} />;
export default YogaPilatesStudios;
