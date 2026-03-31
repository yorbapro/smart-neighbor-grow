import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Pilates Studios",
  slug: "pilates-studios",
  lossAmount: "50,000",
  lossAmountNum: 50000,
  useCases: ["Class Booking", "Membership Inquiries", "Introductory Session Scheduling", "Instructor Certifications", "Private Session Booking", "Corporate Wellness Programs"],
  crm: "Mindbody",
  sectorLabel: "Fitness & Wellness",
  similarBusinesses: [
    { name: "Yoga Studios", slug: "yoga-studios" },
    { name: "Gyms & Fitness Centers", slug: "gyms-fitness-centers" },
    { name: "Dance Studios", slug: "dance-studios" },
  ],
  whyThisIndustry: "In the world of Pilates, precise movements, personalized instruction, and a supportive community are key to physical well-being. Pilates studios rely on a steady stream of new client inquiries, consistent class attendance, and a reputation for fostering strength, flexibility, and mindful movement. When a prospective client calls, they often need immediate assistance with understanding class schedules, inquiring about membership options, booking an introductory session, or asking about instructor certifications. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing out on helping someone achieve their fitness goals and impacting the studio\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Wellness Journey\" Expectation",
      description: "Clients often call when they are motivated to start a new fitness regimen or deepen their existing practice. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another studio that can offer instant, seamless communication and clear information about their classes and services."
    },
    {
      title: "Instructors are Focused on \"Flow,\" Not the Phone",
      description: "Your Pilates instructors are dedicated to leading engaging classes, providing hands-on corrections, and ensuring clients maintain proper form. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person client check-ins, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Class Schedules and Membership Inquiries",
      description: "\"What\u2019s your mat Pilates schedule?\" \"Do you offer reformer classes for beginners?\" \"How much is an unlimited membership?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book classes directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in trying a reformer Pilates class. The BrightLaunchIQ AI Receptionist answers instantly with a calm, encouraging tone. It guides the caller through a quick intake, gathers details about their fitness goals, explains your class types, and checks your schedule for introductory sessions. It then books the client directly into an open class slot in your scheduling system.\n\n1:00 PM \u2014 While your instructors are teaching, the AI handles multiple routine calls: one client confirming their upcoming private session (handled automatically), another asking about your prenatal Pilates offerings (answered by the AI), and a third inquiring about purchasing a class package.\n\n5:00 PM \u2014 After hours, a prospective client calls about a corporate wellness program. The AI provides immediate information on your corporate rates, logs an urgent message for the studio manager, and offers to schedule a follow-up call for the next morning. It also sends an SMS with relevant studio information and a link to your online class schedule.`,
  faqs: [
    { question: "Can an AI receptionist book Pilates classes?", answer: "Yes. The AI captures client fitness goals, preferred class types, and availability, then books sessions directly into your Mindbody calendar." },
    { question: "Does the AI integrate with Pilates studio management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Mindbody and Mariana Tek to manage class bookings, client records, and instructor schedules." },
    { question: "Can the AI answer questions about membership options?", answer: "Yes. The AI can provide detailed information on various membership tiers, pricing, and benefits, guiding clients to the best option for their needs." },
    { question: "Does the AI handle introductory session scheduling?", answer: "Yes. The AI can schedule introductory sessions, explain what to expect, and ensure new clients are properly onboarded." },
    { question: "How quickly can a Pilates studio get started?", answer: "Most Pilates studios are live within 48 hours. We configure your class schedules, integrate with your systems, and customize for your unique offerings." },
    { question: "What does an AI receptionist cost for Pilates studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const PilatesStudios = () => <IndustryPageTemplate data={data} />;
export default PilatesStudios;
