import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Catering Services",
  slug: "catering-services",
  lossAmount: "175,000",
  lossAmountNum: 175000,
  useCases: ["Event Quote Requests", "Menu Customization Inquiries", "Tasting Appointment Booking", "Dietary Restriction Capture", "Day-Of Coordination Calls", "Corporate Account Setup"],
  crm: "Total Party Planner",
  sectorLabel: "Hospitality & Food",
  similarBusinesses: [
    { name: "Event Venues", slug: "event-venues" },
    { name: "Wedding Planners", slug: "wedding-planners" },
    { name: "Boutique Hotels", slug: "boutique-hotels" },
  ],
  whyThisIndustry: "In the catering industry, precision, flexibility, and impeccable service are the hallmarks of success. Catering companies rely on a steady stream of new clients for events ranging from corporate luncheons to grand weddings, and a reputation for flawless execution. When a potential client calls, they often need immediate information on menus, availability, and pricing, or to discuss event details. Missing that call doesn\u2019t just mean losing a high-value event; it means failing to capture a crucial opportunity in a competitive market. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Total Party Planner \u2014 so you capture the client even when your team is focused on delivering exceptional culinary experiences.",
  painPoints: [
    {
      title: "The \"Event-Driven Urgency\" Expectation",
      description: "Clients often call catering services when they are in the midst of planning an event, with specific dates and budgets in mind. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next caterer on their list that offers instant information, clear pricing, and seamless booking for consultations."
    },
    {
      title: "Staff are Focused on the \"Event,\" Not the Phone",
      description: "Your catering staff are constantly on-site, managing events, coordinating logistics, and ensuring client satisfaction. Your kitchen staff are preparing exquisite dishes. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your office is overwhelmed or unavailable, new inquiries go unanswered, leading to lost event bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Menu Customization and Scheduling",
      description: "Every new inquiry requires detailed information: event type, guest count, dietary restrictions, preferred cuisine, and event date. Providing accurate quotes, discussing menu options, and coordinating schedules for tastings and site visits takes time. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Event Leads Get Lost",
      description: "Corporate galas, wedding receptions, and large private parties are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule a consultation immediately, the client will find another caterer who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night event inquiry or a last-minute catering request at 9 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Event Planning",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Total Party Planner."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, planning a corporate gala for 200 guests and needing a quote. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (event type, date, guest count, budget, dietary needs) and checks your real-time availability for consultations.\n\n9:05 AM \u2014 The AI identifies an open slot for a consultation with your event planner and books the appointment immediately. The client feels confident in your company\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your digital menu and event planning guide.\n\n11:00 AM \u2014 While your team is preparing for an upcoming event, the AI handles three simultaneous calls: one client rescheduling their tasting (handled automatically), another asking about your vegan menu options (answered by the AI), and a third booking a new client for a wedding consultation.\n\n5:00 PM \u2014 After your office has closed, a potential client calls needing an urgent quote for a last-minute event. The AI handles the intake, explains your expedited service options, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online inquiry form.\n\nThroughout the day, every call is transcribed, summarized, and logged in Total Party Planner \u2014 providing a comprehensive record for every client and event without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist capture catering leads?", answer: "Yes. The AI captures event date, guest count, menu preferences, and budget range, then routes qualified leads to your sales team for custom proposals." },
    { question: "Does the AI integrate with Total Party Planner?", answer: "Yes. BrightLaunchIQ connects with Total Party Planner to create event records, manage tasting schedules, and track proposal status." },
    { question: "Can the AI handle dietary restriction inquiries?", answer: "Yes. The AI captures specific dietary needs \u2014 vegan, gluten-free, kosher, allergy restrictions \u2014 and ensures they\u2019re documented for the culinary team." },
    { question: "Does the AI book tasting appointments?", answer: "Yes. The AI schedules menu tastings, confirms guest count for the tasting, and sends reminder notifications with location details." },
    { question: "How quickly can a catering company get started?", answer: "Most caterers are live within 48 hours. We configure menu packages, integrate with Total Party Planner, and customize for your event specialties." },
    { question: "What does an AI receptionist cost for catering companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Total Party Planner integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const CateringServices = () => <IndustryPageTemplate data={data} />;
export default CateringServices;
