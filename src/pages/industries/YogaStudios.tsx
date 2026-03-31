import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Yoga Studios",
  slug: "yoga-studios",
  lossAmount: "40,000",
  lossAmountNum: 40000,
  useCases: ["Class Schedule Inquiries", "Membership Options", "Introductory Session Booking", "Yoga Style Explanations", "Workshop Information", "Private Session Booking"],
  crm: "Mindbody",
  sectorLabel: "Fitness & Wellness",
  similarBusinesses: [
    { name: "Pilates Studios", slug: "pilates-studios" },
    { name: "Fitness Centers", slug: "fitness-centers" },
    { name: "Meditation Centers", slug: "meditation-centers" },
  ],
  whyThisIndustry: "In the serene and growing world of wellness, yoga studios provide a sanctuary for physical and mental well-being. Yoga studios rely on a steady stream of new student inquiries, consistent class attendance, and a reputation for fostering a supportive and enriching community. When a prospective student calls, they often need immediate assistance with understanding class schedules, inquiring about membership options, discussing different yoga styles, or scheduling an introductory session. Missing that call doesn\u2019t just mean losing a potential student; it can mean missing out on building a vibrant community and impacting the studio\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Wellness Journey\" Expectation",
      description: "Prospective students often call when they are motivated to start or continue their wellness journey. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another studio that can offer instant, seamless communication and clear information about their classes and offerings."
    },
    {
      title: "Instructors are Focused on \"Teaching,\" Not the Phone",
      description: "Your yoga instructors are dedicated to leading classes, guiding students through poses, and creating a peaceful environment. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person check-ins, new inquiries go unanswered, leading to lost enrollments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Class and Membership Inquiries",
      description: "\"What\u2019s the difference between Vinyasa and Hatha?\" \"How much is an unlimited monthly membership?\" \"Do you offer prenatal yoga?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs, screen potential students, and book classes directly into your studio management software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new student calls, interested in trying a beginner\u2019s yoga class. The BrightLaunchIQ AI Receptionist answers instantly with a calm, welcoming tone. It guides the caller through a quick intake, gathers details about their experience level, explains your introductory offers, and checks class availability. It then books their first class directly into your studio management system.\n\n1:00 PM \u2014 While your instructors are teaching, the AI handles multiple routine calls: one student confirming their upcoming workshop (handled automatically), another asking about private yoga sessions (answered by the AI), and a third inquiring about studio events.\n\n5:00 PM \u2014 After hours, a prospective student calls about a corporate wellness program. The AI provides immediate information on corporate packages, logs an urgent message for the studio manager, and offers to schedule an initial consultation for the next morning. It also sends an SMS with relevant studio information and a link to your online class schedule.`,
  faqs: [
    { question: "Can an AI receptionist book yoga classes?", answer: "Yes. The AI captures student experience levels, class preferences, and availability, then books classes directly into your Mindbody calendar." },
    { question: "Does the AI integrate with yoga studio management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Mindbody, Acuity Scheduling, and WellnessLiving to manage enrollments, schedules, and student records." },
    { question: "Can the AI answer questions about yoga styles?", answer: "Yes. The AI can provide detailed information on various yoga styles, class levels, and what students can expect from each class." },
    { question: "Does the AI handle membership inquiries?", answer: "Yes. The AI can explain different membership options, pricing structures, and assist with enrollment or upgrades." },
    { question: "How quickly can a yoga studio get started?", answer: "Most yoga studios are live within 48 hours. We configure your class offerings, integrate with your systems, and customize for your specific studio needs." },
    { question: "What does an AI receptionist cost for yoga studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const YogaStudios = () => <IndustryPageTemplate data={data} />;
export default YogaStudios;
