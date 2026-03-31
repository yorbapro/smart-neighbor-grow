import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Hair Salons",
  slug: "hair-salons",
  lossAmount: "95,000",
  lossAmountNum: 95000,
  useCases: ["Appointment Booking", "Color Consultation Requests", "Stylist Availability Checks", "Product Order Inquiries", "Bridal Party Coordination", "Recurring Appointment Setup"],
  crm: "Vagaro",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Barbershops", slug: "barbershops" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Medical Spas", slug: "medical-spas" },
  ],
  whyThisIndustry: "In the beauty and grooming industry, your reputation is built on style, precision, and a personal touch. Hair salons and barbershops rely on a steady flow of appointments and a loyal client base. When a client is ready for a new look or a routine trim, they want a quick and easy way to book. Missing that call means losing a high-value appointment and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Vagaro — so you capture the client even when your team is focused on creative delivery.",
  painPoints: [
    {
      title: "The 'Style-on-Demand' Expectation",
      description: "Clients often decide to book a hair appointment on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next salon on their list."
    },
    {
      title: "Stylists are Focused on the 'Cut', Not the Phone",
      description: "Your stylists and barbers are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about treatments, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Salon Leads Get Lost",
      description: "Bridal parties and specialized color services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another salon who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden style concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Vagaro."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute haircut for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Vagaro, identifies a 2:00 PM opening with your lead stylist, and books the session immediately.

11:30 AM — While your front desk is busy preparing a bridal party, the AI handles three simultaneous calls: one client rescheduling their color (handled automatically), another asking about your extension options (answered by the AI), and a third booking a series of blowouts.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a stylish SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Vagaro — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book salon appointments?", answer: "Yes. The AI checks stylist availability, captures service type and preferences, and books appointments directly into your Vagaro calendar." },
    { question: "Does the AI integrate with Vagaro?", answer: "Yes. BrightLaunchIQ syncs with Vagaro to manage bookings, track client history, and send automated appointment reminders." },
    { question: "Can the AI handle bridal party bookings?", answer: "Yes. The AI captures party size, service requests, and preferred dates, then coordinates multi-stylist availability for group appointments." },
    { question: "Does the AI upsell additional services?", answer: "Yes. The AI suggests add-ons like deep conditioning, scalp treatments, and blowouts during the booking process to increase ticket value." },
    { question: "How quickly can a salon get started?", answer: "Most salons are live within 48 hours. We configure service menus, integrate with Vagaro, and customize the AI for your stylists." },
    { question: "What does an AI receptionist cost for hair salons?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Vagaro integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const HairSalons = () => <IndustryPageTemplate data={data} />;
export default HairSalons;
