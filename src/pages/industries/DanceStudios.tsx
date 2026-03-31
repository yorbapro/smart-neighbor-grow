import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Dance Studios",
  slug: "dance-studios",
  lossAmount: "60,000",
  lossAmountNum: 60000,
  useCases: ["Class Registration", "Class Schedule Questions", "Recital Information", "Private Lesson Booking", "Birthday Party Inquiries", "Trial Class Scheduling", "New Student Intake"],
  crm: "Jackrabbit Dance",
  sectorLabel: "Lifestyle & Personal Services",
  similarBusinesses: [
    { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios" },
    { name: "Martial Arts Studios", slug: "martial-arts-studios" },
    { name: "Music Schools", slug: "music-schools" },
  ],
  whyThisIndustry: "In the vibrant world of dance studios, passion, rhythm, and community are paramount. Studio owners rely on a steady stream of new students, efficient class scheduling, and a reputation for inspiring instruction. When a prospective student or parent calls, they often need immediate assistance with class schedules, trial lesson bookings, or understanding different dance styles. Missing that call doesn\u2019t just mean losing a potential enrollment; it can mean losing a long-term student and impacting the studio\u2019s growth and artistic spirit.",
  painPoints: [
    {
      title: "The \"First Step\" Expectation",
      description: "Prospective students or parents often call when they are motivated to try a new activity. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another studio that can offer instant, seamless booking for a trial lesson and clear information about their programs."
    },
    {
      title: "Instructors are Focused on the \"Floor,\" Not the Phone",
      description: "Your dance instructors are dedicated to teaching, choreographing, and ensuring student safety and progress. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person inquiries, new enrollments go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Program Inquiries and Scheduling FAQs",
      description: "\"What\u2019s the difference between ballet and contemporary?\" \"Do you have classes for 3-year-olds?\" \"What\u2019s the schedule for adult hip-hop?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your class management software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `4:00 PM \u2014 A parent calls, interested in enrolling their child in a beginner\u2019s ballet class. The BrightLaunchIQ AI Receptionist answers instantly with an encouraging, informative tone. It guides the caller through a quick intake, explains the children\u2019s programs, and checks your real-time class schedule. The AI then books a trial lesson, sending a confirmation and a link to your digital waiver.\n\n6:30 PM \u2014 While your instructors are leading classes, the AI handles multiple routine calls: one student rescheduling their private lesson (handled automatically), another asking about upcoming recital dates (answered by the AI), and a third inquiring about dancewear purchases (details gathered and forwarded to the studio shop).\n\n9:00 PM \u2014 After closing, a prospective adult student calls about evening jazz classes. The AI provides detailed program information, advises on next-day availability for a studio tour, and offers to schedule a consultation with an instructor. It also sends an SMS with relevant studio information and a link to your website.\n\nThroughout the day, every call is transcribed, summarized, and logged in Jackrabbit Class \u2014 providing a comprehensive record for every student and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist manage dance class registrations?", answer: "Yes. It captures dance style preference, age, and experience level, and schedules trial classes or full enrollments." },
    { question: "Does the AI integrate with Jackrabbit Class?", answer: "Yes. BrightLaunchIQ connects with Jackrabbit Class to manage schedules, track student progress, and send class reminders automatically." },
    { question: "Can the AI answer questions about different dance styles?", answer: "Yes. The AI can provide detailed information on various styles offered, helping prospective students choose the right program." },
    { question: "Does the AI handle new student intake?", answer: "Yes. The AI guides new students through program options, collects necessary information, and helps them book their first class or consultation." },
    { question: "How quickly can a dance studio get started?", answer: "Most dance studios are live within 48 hours. We configure program details, integrate with Jackrabbit Class, and customize for your studio\u2019s offerings." },
    { question: "What does an AI receptionist cost for dance studios?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, class scheduling, and Jackrabbit Class integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const DanceStudios = () => <IndustryPageTemplate data={data} />;
export default DanceStudios;
