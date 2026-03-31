import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Private Tutors",
  slug: "private-tutors",
  lossAmount: "40,000",
  lossAmountNum: 40000,
  useCases: ["Session Booking", "Subject Inquiries", "Scheduling Changes", "Parent Communication", "Trial Session Scheduling", "After-Hours Enrollment"],
  crm: "Calendly",
  sectorLabel: "Education",
  similarBusinesses: [
    { name: "Music Schools", slug: "music-schools" },
    { name: "Test Prep Centers", slug: "test-prep-centers" },
    { name: "Language Schools", slug: "language-schools" },
  ],
  whyThisIndustry: "In the private tutoring industry, your reputation is built on personalized learning, flexible scheduling, and a supportive approach. Private tutors rely on a steady stream of new students and a loyal client base. When a parent or student is ready to book a session or inquire about services, they want a quick and easy way to connect. Missing that call means losing a valuable learning opportunity and potentially a long-term client. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, provides subject information, and books sessions directly into Calendly \u2014 so you capture the client even when you\u2019re focused on delivering impactful education.",
  painPoints: [
    {
      title: "The \"Learning-on-Demand\" Expectation",
      description: "Parents and students often decide to book a tutoring session or inquire about specific subjects on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly move to the next tutor on their list that offers instant, seamless booking."
    },
    {
      title: "Tutors are Focused on the \"Teaching,\" Not the Phone",
      description: "Your tutors are in the \"zone,\" providing high-touch, personalized instruction. They cannot\u2014and should not\u2014be interrupted by a ringing phone. If you\u2019re busy with a student or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Subject FAQs",
      description: "\"Do you offer SAT prep?\" \"What\u2019s your availability for algebra?\" \"Can I book a session for next Tuesday?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your calendar, you\u2019re bogged down by administrative noise."
    },
    {
      title: "High-Value Sessions Get Lost",
      description: "Long-term tutoring packages, specialized exam prep, and advanced subject instruction are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another tutor who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about an urgent assignment or a weekend study session request is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, student details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Calendly."
    }
  ],
  dayInTheLife: `3:00 PM \u2014 A parent calls wanting to book a last-minute math tutoring session for their child for this evening. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in your scheduling software, identifies a 5:00 PM opening, and books the session immediately.\n\n4:30 PM \u2014 While you\u2019re teaching a student, the AI handles three simultaneous calls: one parent rescheduling their child\u2019s session (handled automatically), another asking about your specialized subject offerings (answered by the AI), and a third booking a series of consultations.\n\n8:00 PM \u2014 After you\u2019ve finished for the day, a student calls to book a Saturday morning session. The AI handles the intake, confirms the appointment, and sends a helpful SMS confirmation with a link to your digital intake and waiver forms.\n\nThroughout the day, every call is transcribed, summarized, and logged in Calendly \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book tutoring sessions?", answer: "Yes. The AI checks your real-time availability and books sessions directly into your scheduling system." },
    { question: "Does the AI integrate with Calendly?", answer: "Yes. BrightLaunchIQ connects with Calendly to manage appointments, track student interactions, and automate communication." },
    { question: "Can the AI answer questions about subjects and programs?", answer: "Yes. The AI provides detailed information on your subject offerings, tutoring programs, and pricing." },
    { question: "Does the AI handle scheduling changes?", answer: "Yes. The AI can manage rescheduling requests and send automated reminders to students and parents." },
    { question: "How quickly can a private tutor get started?", answer: "Most tutors are live within 48 hours. We configure your service offerings, integrate with your scheduling system, and customize the AI for your specific needs." },
    { question: "What does an AI receptionist cost for private tutors?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Calendly integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const PrivateTutors = () => <IndustryPageTemplate data={data} />;
export default PrivateTutors;
