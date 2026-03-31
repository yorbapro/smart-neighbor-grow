import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Auto Repair Shops",
  slug: "auto-repair-shops",
  lossAmount: "160,000",
  lossAmountNum: 160000,
  useCases: ["Appointment Scheduling", "Diagnostic Inquiry Intake", "Repair Status Updates", "Tire & Brake Service Booking", "Recall Notification Follow-Ups", "Tow Coordination"],
  crm: "Shop-Ware",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Mobile Detailers", slug: "mobile-detailers" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Driving Schools", slug: "driving-schools" },
  ],
  whyThisIndustry: "In the auto repair industry, trust, transparency, and timely service are paramount. Auto repair shops rely on a steady stream of new clients and a reputation for reliable diagnostics and efficient repairs. When a potential client calls, they are often in a stressful situation, needing immediate assistance for a breakdown, a quote for a repair, or to schedule routine maintenance. Missing that call doesn\u2019t just mean losing a high-value repair job; it means failing to provide a solution to someone in urgent need of vehicle care. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Shop-Ware \u2014 so you capture the client even when your team is focused on delivering accurate diagnostics.",
  painPoints: [
    {
      title: "The \"Breakdown-on-Demand\" Expectation",
      description: "Drivers often decide to inquire about auto repair services when their vehicle experiences an unexpected issue or when a maintenance light comes on. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next repair shop on their list that offers instant diagnostics, quotes, and seamless scheduling."
    },
    {
      title: "Mechanics are Focused on the \"Bay,\" Not the Phone",
      description: "Your mechanics are often under a hood, diagnosing complex issues, performing intricate repairs, or conducting thorough inspections. They cannot\u2014and should not\u2014be interrupted by ringing phones. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Diagnostics and Scheduling",
      description: "Every new inquiry requires detailed information: vehicle make/model, symptoms, desired services, and preferred dates. Providing accurate quotes and coordinating schedules takes time. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Repair Leads Get Lost",
      description: "Complex diagnostics and major repairs are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule a diagnostic immediately, the client will find another repair shop who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden breakdown or a critical repair inquiry at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Service Flow",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Shop-Ware."
    }
  ],
  dayInTheLife: `8:30 AM \u2014 A potential client calls, their check engine light just came on, and they need a diagnostic appointment today. The BrightLaunchIQ AI Receptionist answers instantly with a professional, knowledgeable tone. It gathers essential intake data (vehicle make/model, year, VIN, symptoms) and checks your real-time availability in your shop management software.\n\n8:35 AM \u2014 The AI identifies an open slot for a diagnostic and books the appointment immediately. The client feels confident in your shop\u2019s efficiency, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your digital intake forms.\n\n11:00 AM \u2014 While your technicians are in the bay, the AI handles three simultaneous calls: one client rescheduling their oil change (handled automatically), another asking about your tire services (answered by the AI), and a third booking a new client for a brake inspection.\n\n5:00 PM \u2014 After your office has closed, a potential client calls to inquire about a quote for a major repair. The AI handles the intake, explains your repair process, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online quote request form.\n\nThroughout the day, every call is transcribed, summarized, and logged in Shop-Ware \u2014 providing a comprehensive record for every client and repair without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist schedule auto repair appointments?", answer: "Yes. The AI captures vehicle make, model, year, and symptom description, then books the appointment into your shop management system." },
    { question: "Does the AI integrate with Shop-Ware?", answer: "Yes. BrightLaunchIQ connects with Shop-Ware to create repair orders, update job statuses, and notify customers when their vehicle is ready." },
    { question: "Can the AI provide repair status updates?", answer: "Yes. The AI looks up job status by customer name or vehicle, then provides estimated completion times and authorizes additional work if needed." },
    { question: "Does the AI handle emergency tow requests?", answer: "Yes. The AI captures the vehicle location, issue description, and driver contact info, then coordinates with your tow partner or in-house service." },
    { question: "How quickly can an auto shop get started?", answer: "Most shops are live within 48 hours. We configure service menus, integrate with Shop-Ware, and customize the AI for your specializations." },
    { question: "What does an AI receptionist cost for auto repair shops?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Shop-Ware integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const AutoRepairShops = () => <IndustryPageTemplate data={data} />;
export default AutoRepairShops;
