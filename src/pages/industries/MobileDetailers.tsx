import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Mobile Detailers",
  slug: "mobile-detailers",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Detail Package Booking", "Fleet Account Inquiries", "Ceramic Coating Consultations", "Service Area Confirmation", "Recurring Appointment Setup", "Gift Certificate Orders"],
  crm: "Urable",
  sectorLabel: "Lifestyle & Wellness",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Car Rental Agencies", slug: "car-rental-agencies" },
  ],
  whyThisIndustry: "In the automotive care industry, your reputation is built on precision, care, and a personal touch. Auto detailing and car wash businesses rely on a steady flow of new clients and a loyal client base. When a client is ready for a new detailing session or a car wash, they want a quick and easy way to book. Missing that call means losing a high-value appointment and potentially a long-term client. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Urable — so you capture the client even when your team is focused on careful delivery.",
  painPoints: [
    {
      title: "The 'Car-Care-on-Demand' Expectation",
      description: "Clients often decide to book an auto detailing session or a car wash on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they'll quickly move to the next auto care business on their list."
    },
    {
      title: "Detailers are Focused on the 'Car', Not the Phone",
      description: "Your detailers and auto care staff are in the 'zone', providing high-touch, personalized care. They cannot—and should not—be interrupted by a ringing phone. If your front desk is understaffed or busy, new inquiries go unanswered."
    },
    {
      title: "Complex Scheduling and Service FAQs",
      description: "Answering repetitive questions about services, pricing, and preparation takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your software, your team is bogged down by administrative noise."
    },
    {
      title: "High-Value Detailing Leads Get Lost",
      description: "Ceramic coating and specialized detailing services are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another auto care business who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden car care concern or a booking request at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Urable."
    }
  ],
  dayInTheLife: `10:00 AM — A client calls wanting to book a last-minute detailing session for this afternoon. The BrightLaunchIQ AI Receptionist answers instantly with a professional, welcoming tone. It checks your real-time availability in Urable, identifies a 2:00 PM opening with your lead detailer, and books the session immediately.

11:30 AM — While your front desk is busy preparing a car for detailing, the AI handles three simultaneous calls: one client rescheduling their detailing session (handled automatically), another asking about your specialized detailing options (answered by the AI), and a third booking a series of detailing sessions.

6:00 PM — After you've closed for the day, a client calls to book a Monday morning session. The AI handles the intake, confirms the appointment, and sends a professional SMS confirmation with a link to your digital intake and waiver forms.

Throughout the day, every call is transcribed, summarized, and logged in Urable — providing a comprehensive record for every client and case without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book mobile detailing appointments?", answer: "Yes. The AI captures vehicle type, desired package, location, and preferred date, then books the appointment into your scheduling system." },
    { question: "Does the AI integrate with Urable?", answer: "Yes. BrightLaunchIQ connects with Urable to manage bookings, track recurring clients, and send appointment reminders automatically." },
    { question: "Can the AI handle fleet account inquiries?", answer: "Yes. The AI captures fleet size, vehicle types, and service frequency, then routes commercial fleet leads to your sales pipeline for custom pricing." },
    { question: "Does the AI upsell premium services?", answer: "Yes. The AI presents ceramic coating, paint correction, and interior restoration options during the booking process, increasing your average ticket." },
    { question: "How quickly can a mobile detailer get started?", answer: "Most detailers are live within 48 hours. We configure service packages, integrate with Urable, and customize the AI for your service territory." },
    { question: "What does an AI receptionist cost for mobile detailers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Urable integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const MobileDetailers = () => <IndustryPageTemplate data={data} />;
export default MobileDetailers;
