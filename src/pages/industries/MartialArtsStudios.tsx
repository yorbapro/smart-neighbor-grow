import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Martial Arts Studios",
  slug: "martial-arts-studios",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Class Scheduling", "Trial Lesson Booking", "Membership Inquiries", "Belt Test Information", "Program FAQs", "Event Registration"],
  crm: "Mindbody",
  sectorLabel: "Lifestyle & Personal Services",
  similarBusinesses: [
    { name: "Fitness Centers", slug: "fitness-centers" },
    { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios" },
    { name: "Dance Studios", slug: "dance-studios" },
  ],
  whyThisIndustry: "In the disciplined world of martial arts studios, fostering a strong community, maintaining class schedules, and attracting new students are crucial for growth. Studio owners and instructors are dedicated to teaching, coaching, and empowering their students. When a prospective student or parent calls, they often need immediate assistance with class schedules, trial lesson bookings, membership inquiries, or program details. Missing that call doesn\u2019t just mean losing a potential student; it can mean losing a future black belt and impacting the studio\u2019s vibrant community.",
  painPoints: [
    {
      title: "The \"First Step\" Hesitation",
      description: "Many individuals, especially adults, feel a degree of apprehension when considering martial arts. Their initial call is a critical first step. If they encounter an unanswered phone or a generic voicemail, that hesitation can turn into a lost opportunity, as they\u2019ll quickly move to a more responsive studio."
    },
    {
      title: "Instructors are Focused on the \"Mat,\" Not the Phone",
      description: "Your instructors are on the mat, leading classes, providing one-on-one coaching, and ensuring student safety. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person student check-ins, new inquiries go unanswered, leading to lost enrollment and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Program Inquiries and Schedule Management",
      description: "\"What\u2019s the difference between Taekwondo and Karate?\" \"Do you have classes for 5-year-olds?\" \"What\u2019s the schedule for adult Muay Thai?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your class management software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `4:30 PM \u2014 A parent calls, interested in enrolling their child in a kids\u2019 Taekwondo program. The BrightLaunchIQ AI Receptionist answers instantly with an encouraging, informative tone. It guides the caller through a quick intake, explains the age-appropriate programs, checks the class schedule, and books a free trial lesson. The AI then sends a confirmation and a link to your digital waiver.\n\n6:00 PM \u2014 While your instructors are leading an adult Jiu-Jitsu class, the AI handles multiple routine calls: one student rescheduling their private lesson (handled automatically), another asking about your upcoming belt test dates (answered by the AI), and a third inquiring about family membership discounts.\n\n8:30 PM \u2014 After closing, a prospective student calls about your late-night kickboxing classes. The AI provides detailed schedule information, explains the benefits of the program, and offers to book a trial class for the following week. It also sends an SMS with relevant studio information and a link to your online enrollment portal.\n\nThroughout the day, every call is transcribed, summarized, and logged in Mindbody \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist manage martial arts class schedules?", answer: "Yes. It handles class registration, trial lesson booking, and program inquiries, eliminating phone tag during peak hours." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage schedules, track student progress, and send class reminders automatically." },
    { question: "Can the AI provide belt test information?", answer: "Yes. The AI answers common questions about belt test dates, requirements, and registration processes." },
    { question: "Does the AI handle membership inquiries?", answer: "Yes. The AI explains membership tiers, pricing, and benefits, then enrolls new members or routes upgrade requests to your team." },
    { question: "How quickly can a martial arts studio get started?", answer: "Most martial arts studios are live within 48 hours. We configure program details, integrate with Mindbody, and customize for your studio\u2019s offerings." },
    { question: "What does an AI receptionist cost for martial arts studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, class scheduling, and Mindbody integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const MartialArtsStudios = () => <IndustryPageTemplate data={data} />;
export default MartialArtsStudios;
