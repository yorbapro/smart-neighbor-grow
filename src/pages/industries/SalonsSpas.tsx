import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Salons & Spas",
  slug: "salons-spas",
  lossAmount: "65,000",
  lossAmountNum: 65000,
  useCases: ["Appointment Booking", "Service Menu Inquiries", "Pricing Information", "Availability Checks", "Gift Card Purchases", "Bridal Packages"],
  crm: "Vagaro",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Barber Shops", slug: "barber-shops" },
    { name: "Nail Salons", slug: "nail-salons" },
    { name: "Med Spas", slug: "med-spas" },
  ],
  whyThisIndustry: "In the beauty and wellness industry, providing a relaxing experience, managing appointments efficiently, and ensuring clear communication with clients are crucial for a thriving business. Salons and spas rely on a steady stream of new client inquiries, consistent appointment bookings, and a reputation for exceptional service. When a prospective client calls, they often need immediate assistance with understanding service menus, inquiring about pricing, checking availability, or scheduling an appointment. Missing that call doesn\u2019t just mean losing a potential client; it can lead to missed revenue and impact the salon/spa\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Instant Gratification\" Expectation",
      description: "Clients often call when they are ready to book a service (e.g., haircut, massage, facial) and are looking for immediate availability. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another salon or spa that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Stylists/Therapists are Focused on \"Clients,\" Not the Phone",
      description: "Your stylists, therapists, and estheticians are dedicated to providing personalized services, ensuring client comfort, and delivering a high-quality experience. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person client check-ins, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Service Menus and Scheduling Inquiries",
      description: "\"Do you offer balayage?\" \"How much is a deep tissue massage?\" \"When can I get a facial next week?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in booking a haircut and color. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, professional tone. It guides the caller through a quick intake, gathers details about their desired service, explains your options, and checks your stylist\u2019s availability. It then books the appointment directly into your scheduling system.\n\n1:00 PM \u2014 While your team is busy with clients, the AI handles multiple routine calls: one client confirming their upcoming massage appointment (handled automatically), another asking about your bridal packages (answered by the AI), and a third inquiring about gift card purchases.\n\n5:00 PM \u2014 After hours, a prospective client calls about a last-minute spa treatment. The AI provides immediate advice on availability, logs an urgent message for the spa manager, and offers to schedule an emergency consultation for the next morning. It also sends an SMS with relevant salon/spa information and a link to your online booking portal.`,
  faqs: [
    { question: "Can an AI receptionist book salon and spa appointments?", answer: "Yes. The AI captures client service preferences, desired dates, and stylist/therapist availability, then books appointments directly into your Vagaro calendar." },
    { question: "Does the AI integrate with salon and spa management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Vagaro, Mindbody, and Booker to manage appointments, client records, and staff schedules." },
    { question: "Can the AI answer questions about service menus and pricing?", answer: "Yes. The AI can provide detailed information on various treatments, pricing, package deals, and special offers." },
    { question: "Does the AI handle gift card purchases and bridal package inquiries?", answer: "Yes. The AI can guide clients through gift card options, explain bridal packages, and route complex requests to your sales team." },
    { question: "How quickly can a salon or spa get started?", answer: "Most salons and spas are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your unique client experience." },
    { question: "What does an AI receptionist cost for salons and spas?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const SalonsSpas = () => <IndustryPageTemplate data={data} />;
export default SalonsSpas;
