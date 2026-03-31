import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Auto Body Shops",
  slug: "auto-body-shops",
  lossAmount: "85,000",
  lossAmountNum: 85000,
  useCases: ["Estimate Scheduling", "Insurance Claims", "Repair Status Updates", "Paint Matching", "Collision Repair Inquiries", "Rental Car Coordination"],
  crm: "CCC ONE",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Tire Shops", slug: "tire-shops" },
  ],
  whyThisIndustry: "In the auto body repair industry, empathy, efficiency, and clear communication are crucial during a stressful time for clients. Auto body shops rely on a steady stream of new clients, often after an accident, and a reputation for high-quality repairs and seamless insurance coordination. When a potential client calls, they are often in distress, needing immediate guidance on towing, estimates, and repair timelines. Missing that call doesn\u2019t just mean losing a high-value repair job; it means failing to provide crucial support when it\u2019s needed most. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into CCC ONE \u2014 so you capture the client even when your team is focused on delivering high-quality repairs.",
  painPoints: [
    {
      title: "The \"Post-Accident Urgency\" Expectation",
      description: "Clients often call auto body shops immediately after an accident or when their vehicle is undrivable. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next shop on their list that offers instant assistance, towing coordination, and clear next steps."
    },
    {
      title: "Technicians are Focused on the \"Repair,\" Not the Phone",
      description: "Your auto body technicians are meticulously repairing vehicles, color-matching paint, and ensuring structural integrity. They cannot\u2014and should not\u2014be interrupted by ringing phones. If your front desk is overwhelmed or unavailable, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness during critical moments."
    },
    {
      title: "Complex Insurance Coordination and Estimate Scheduling",
      description: "Every new inquiry requires detailed information: accident details, insurance policy information, vehicle damage, and desired services. Providing accurate estimates and coordinating with insurance companies takes time. A slow or inconsistent intake process risks losing a client who needs immediate attention or spending valuable time on unqualified leads."
    },
    {
      title: "High-Value Collision Repair Leads Get Lost",
      description: "Collision repairs and specialized bodywork are high-value and essential for business stability. If you don\u2019t capture the lead details and schedule an estimate immediately, the client will find another auto body shop who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden accident or a critical repair inquiry at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Repair Flow",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with CCC ONE."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential client calls, having just been in a fender bender. Their car is drivable but needs an estimate. The BrightLaunchIQ AI Receptionist answers instantly with a professional, empathetic tone. It gathers essential intake data (accident details, insurance provider, vehicle make/model, VIN, damage description) and checks your real-time availability for estimates.\n\n9:05 AM \u2014 The AI identifies an open slot for an estimate and books the appointment immediately. The client feels relieved by your shop\u2019s efficiency and empathy, and the appointment is booked. The AI then sends a secure SMS confirmation with a link to your digital intake forms and instructions for their insurance claim.\n\n11:00 AM \u2014 While your technicians are in the bay, the AI handles three simultaneous calls: one client rescheduling their repair (handled automatically), another asking about your paintless dent repair services (answered by the AI), and a third booking a new client for a collision repair estimate.\n\n5:00 PM \u2014 After your office has closed, a potential client calls needing a tow for their non-drivable vehicle. The AI handles the intake, coordinates with your preferred towing service, and schedules a call-back for the next morning, sending a professional SMS confirmation with towing details.\n\nThroughout the day, every call is transcribed, summarized, and logged in CCC ONE \u2014 providing a comprehensive record for every client and repair without any manual data entry.`,
  faqs: [
    { question: "Can the AI handle insurance claim calls?", answer: "Yes. It captures claim numbers, damage details, and schedules estimates." },
    { question: "How fast can we go live?", answer: "Most auto body shops are live within 48 hours." },
    { question: "Can an AI receptionist schedule auto body estimates?", answer: "Yes. The AI captures vehicle damage details, insurance information, and books the estimate directly into your shop management system." },
    { question: "Does the AI integrate with CCC ONE?", answer: "Yes. BrightLaunchIQ connects with CCC ONE to create repair orders, update job statuses, and notify customers about their vehicle\u2019s progress." },
    { question: "Can the AI provide repair status updates?", answer: "Yes. The AI looks up job status by customer name or vehicle, then provides estimated completion times and authorizes additional work if needed." },
    { question: "Does the AI handle towing coordination?", answer: "Yes. The AI captures the vehicle location, issue description, and driver contact info, then coordinates with your tow partner or in-house service." },
    { question: "What does an AI receptionist cost for auto body shops?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CCC ONE integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const AutoBodyShops = () => <IndustryPageTemplate data={data} />;
export default AutoBodyShops;
