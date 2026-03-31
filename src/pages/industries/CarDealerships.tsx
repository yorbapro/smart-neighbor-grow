import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Car Dealerships",
  slug: "car-dealerships",
  lossAmount: "250,000",
  lossAmountNum: 250000,
  useCases: ["Sales Lead Qualification", "Test Drive Scheduling", "Service Appointment Booking", "Parts Inquiry Handling", "Trade-In Valuation Intake", "Customer Follow-Up"],
  crm: "DealerSocket",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Auto Body Shops", slug: "auto-body-shops" },
    { name: "Mortgage Brokers", slug: "mortgage-brokers" },
  ],
  whyThisIndustry: "In the competitive automotive sales and service industry, every customer interaction is an opportunity to build loyalty and drive revenue. Car dealerships rely on efficient lead management, seamless service scheduling, and a reputation for exceptional customer experience. When a potential buyer or service client calls, they expect immediate, knowledgeable assistance. Missing that call doesn\u2019t just mean losing a sale or a service appointment; it means failing to connect with a customer in a high-value market. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into DealerSocket \u2014 so you capture the client even when your team is focused on closing deals.",
  painPoints: [
    {
      title: "The \"Instant Gratification\" Expectation",
      description: "Car buyers and service clients often call when they are ready to act \u2013 whether it\u2019s to inquire about a specific vehicle, schedule a test drive, or book a critical repair. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next dealership that offers instant information and seamless booking."
    },
    {
      title: "Sales and Service Teams are Focused on the \"Floor,\" Not the Phone",
      description: "Your sales team is engaging with customers on the lot, negotiating deals, and demonstrating vehicles. Your service team is diagnosing issues, performing repairs, and managing the service bay. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your reception is overwhelmed or unavailable, new inquiries go unanswered, leading to lost sales, missed service revenue, and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Lead Qualification and Service Scheduling",
      description: "Every new inquiry requires detailed information: vehicle preferences, budget, trade-in details, service needs, and preferred dates. Providing accurate information and coordinating schedules takes time. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Sales & Service Leads Get Lost",
      description: "New car sales and major service appointments are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule an appointment immediately, the client will find another dealership who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A sudden interest in a new model or a critical service inquiry at 8 PM is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with DealerSocket."
    }
  ],
  dayInTheLife: `9:30 AM \u2014 A potential buyer calls, interested in a new SUV they saw online. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (vehicle model, trim, desired features, budget, trade-in status) and checks your inventory and sales team availability.\n\n9:38 AM \u2014 The AI identifies an open slot for a test drive and books the appointment immediately with the appropriate sales associate. The client feels confident in your dealership\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your digital credit application.\n\n11:00 AM \u2014 While your sales team is closing deals, the AI handles three simultaneous calls: one client rescheduling their service appointment (handled automatically), another asking about your current lease specials (answered by the AI), and a third booking a new client for a brake inspection.\n\n6:00 PM \u2014 After your showroom has closed, a potential service client calls needing an urgent repair. The AI handles the intake, explains your emergency service options, and schedules a call-back for the next morning, sending a professional SMS confirmation with details on after-hours drop-off.\n\nThroughout the day, every call is transcribed, summarized, and logged in DealerSocket \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle buyer and service inquiries?", answer: "Yes. The AI distinguishes between sales and service calls, captures vehicle preferences or repair details, and routes each lead to the appropriate department." },
    { question: "Does the AI integrate with DealerSocket?", answer: "Yes. BrightLaunchIQ syncs directly with DealerSocket to create new leads, update customer profiles, and trigger automated follow-up campaigns." },
    { question: "Can the AI schedule test drives and service appointments?", answer: "Yes. The AI checks sales associate and service bay availability and books appointments directly into your calendar, sending confirmation details to both parties." },
    { question: "Does the AI work after hours and on weekends?", answer: "Yes. Dealerships operate on customer schedules. The AI answers 24/7, capturing leads from evening and weekend inquiries when most staff are unavailable." },
    { question: "How quickly can a car dealership get started?", answer: "Most dealerships are live within 48 hours. We configure lead routing rules, integrate with DealerSocket, and customize the AI for your sales and service offerings." },
    { question: "What does an AI receptionist cost for car dealerships?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and DealerSocket integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const CarDealerships = () => <IndustryPageTemplate data={data} />;
export default CarDealerships;
