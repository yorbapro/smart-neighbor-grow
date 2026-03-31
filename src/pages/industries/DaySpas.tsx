import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Day Spas",
  slug: "day-spas",
  lossAmount: "130,000",
  lossAmountNum: 130000,
  useCases: ["Spa Package Booking", "Couples Treatment Coordination", "Gift Certificate Orders", "Membership Enrollment", "Therapist Availability Checks", "Post-Treatment Follow-Ups"],
  crm: "Mindbody",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Hair Salons", slug: "hair-salons" },
    { name: "Medical Spas", slug: "medical-spas" },
    { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios" },
  ],
  whyThisIndustry: "In the world of wellness, the experience begins the moment a client reaches out. Day spas and massage therapy practices rely on creating a serene, professional atmosphere. When a client calls to book a moment of relaxation, a missed call or a clunky automated menu can shatter that tranquility before they even step through your door. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Mindbody — so you capture the client even when your team is focused on treatment delivery.",
  painPoints: [
    {
      title: "The Need for Immediate Relaxation",
      description: "Clients often book spa treatments as a response to stress or a sudden need for self-care. If they have to wait for a callback or navigate a complex phone tree, the 'stress-relief' they were seeking is replaced by frustration."
    },
    {
      title: "Staff are Focused on the 'Zen', Not the Phone",
      description: "Your therapists and estheticians are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about treatments, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Spa Leads Get Lost",
      description: "Spa packages and specialized wellness services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another spa who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden wellness concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Mindbody."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute 60-minute massage for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Mindbody, identifies a 2:00 PM opening with your lead therapist, and books the session immediately.

11:30 AM — While your front desk is busy preparing a relaxation room for a bridal party, the AI handles three simultaneous calls: one client rescheduling their facial (handled automatically), another asking about your gift card options (answered by the AI), and a third booking a series of acupuncture sessions.

6:00 PM — After you've closed for the day, a stressed professional calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a calming SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Mindbody — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book spa treatments?", answer: "Yes. The AI captures service preferences, therapist requests, and timing, then books directly into your Mindbody schedule." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage appointments, sell packages, and track client visit history directly." },
    { question: "Can the AI sell gift certificates?", answer: "Yes. The AI captures recipient details, package selection, and payment method, then processes gift certificate orders during the call." },
    { question: "Does the AI handle couples bookings?", answer: "Yes. The AI coordinates dual-therapist availability, captures both guests' preferences, and books synchronized treatment times." },
    { question: "How quickly can a day spa get started?", answer: "Most spas are live within 48 hours. We configure treatment menus, integrate with Mindbody, and customize the AI for your brand experience." },
    { question: "What does an AI receptionist cost for day spas?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Mindbody integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const DaySpas = () => <IndustryPageTemplate data={data} />;
export default DaySpas;
