import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Motorcycle Dealerships",
  slug: "motorcycle-dealers",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Test Ride Scheduling", "Service Appointment Booking", "Parts Inquiry", "Financing Questions", "New Model Information", "Event Registration"],
  crm: "LightspeedEVO",
  sectorLabel: "Auto Services",
  similarBusinesses: [
    { name: "Car Dealerships", slug: "car-dealerships" },
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Tire Shops", slug: "tire-shops" },
  ],
  whyThisIndustry: "In the exhilarating world of motorcycle dealerships, passion, performance, and personalized service are paramount. Dealerships rely on a steady stream of new and returning customers, efficient sales processes, and a reputation for expert knowledge and reliable service. When a prospective buyer or service customer calls, they often need immediate assistance with inventory inquiries, test ride bookings, service appointments, or financing questions. Missing that call doesn\u2019t just mean losing a sale; it can mean losing a long-term customer and impacting the dealership\u2019s growth and community engagement.",
  painPoints: [
    {
      title: "The \"Dream Ride\" Expectation",
      description: "Customers often call when they are excited about a specific model or ready to make a purchase. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly move to the next dealership that offers instant, seamless communication and clear information about their desired motorcycle or service."
    },
    {
      title: "Sales and Service Teams are Focused on the \"Floor,\" Not the Phone",
      description: "Your sales team is dedicated to guiding customers through the buying process, showcasing models, and closing deals. Your service technicians are focused on diagnostics, repairs, and ensuring bikes are road-ready. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person customers, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Inventory and Financing Inquiries",
      description: "\"Do you have the new [model name] in stock?\" \"What are the financing options for a used cruiser?\" \"Can I schedule a test ride for this weekend?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your CRM or scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new customer calls, interested in a specific sport bike model. The BrightLaunchIQ AI Receptionist answers instantly with an enthusiastic, knowledgeable tone. It guides the caller through a quick intake, confirms the desired model, checks real-time inventory, and books a test ride for later that afternoon. It sends a confirmation and a link to your digital waiver.\n\n1:30 PM \u2014 While your sales team is busy on the floor, the AI handles multiple routine calls: one customer rescheduling their service appointment (handled automatically), another asking about your current promotions on riding gear (answered by the AI), and a third inquiring about financing options for a new touring bike.\n\n5:00 PM \u2014 After closing, a customer calls about a roadside assistance need. The AI provides clear instructions for emergency services, advises on next-day service availability, and offers to schedule a follow-up call for the next morning. It also sends an SMS with relevant dealership information and a link to your website.`,
  faqs: [
    { question: "Can the AI receptionist book test rides and service appointments?", answer: "Yes. It handles test ride scheduling, service bookings, and gathers customer details, ensuring a smooth process for both sales and service." },
    { question: "Does the AI integrate with LightspeedEVO or DealerSocket?", answer: "Yes. BrightLaunchIQ connects with leading DMS and CRM systems like LightspeedEVO and DealerSocket to manage schedules, track customer history, and streamline operations." },
    { question: "Can the AI answer questions about specific motorcycle models and inventory?", answer: "Yes. The AI can provide detailed information on various models, check real-time inventory, and answer FAQs about features, specifications, and availability." },
    { question: "Does the AI handle financing inquiries?", answer: "Yes. The AI can answer common financing questions, explain options, and connect callers with your finance department for personalized assistance." },
    { question: "How quickly can a motorcycle dealership get started?", answer: "Most dealerships are live within 48 hours. We configure sales and service offerings, integrate with your systems, and customize for your unique operations." },
    { question: "What does an AI receptionist cost for motorcycle dealerships?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, appointment booking, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const MotorcycleDealers = () => <IndustryPageTemplate data={data} />;
export default MotorcycleDealers;
