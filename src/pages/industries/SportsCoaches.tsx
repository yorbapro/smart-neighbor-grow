import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Sports Coaches",
  slug: "sports-coaches",
  lossAmount: "50,000",
  lossAmountNum: 50000,
  useCases: ["Program Inquiries", "Trial Session Scheduling", "Athlete Development Discussions", "Schedule Coordination", "Scholarship Information", "Performance Analysis"],
  crm: "TeamSnap",
  sectorLabel: "Education & Training",
  similarBusinesses: [
    { name: "Fitness Trainers", slug: "fitness-trainers" },
    { name: "Dance Studios", slug: "dance-studios" },
    { name: "Martial Arts Studios", slug: "martial-arts-studios" },
  ],
  whyThisIndustry: "In the dynamic world of sports coaching, effective communication, efficient scheduling, and personalized athlete development are crucial for success. Sports coaches rely on a steady stream of new athlete inquiries, consistent training attendance, and a reputation for fostering talent and achieving results. When a prospective athlete or parent calls, they often need immediate assistance with understanding coaching programs, inquiring about schedules, discussing athlete development, or scheduling a trial session. Missing that call doesn\u2019t just mean losing a potential athlete; it can mean missing out on developing future champions and impacting the coaching business\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Peak Performance\" Expectation",
      description: "Athletes and parents often call when they are highly motivated to improve performance or find the right coaching fit. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another coach or program that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Coaches are Focused on \"Training,\" Not the Phone",
      description: "Your sports coaches are dedicated to leading training sessions, analyzing performance, and providing individualized feedback. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your administrative staff is understaffed or busy with active training, new inquiries go unanswered, leading to lost enrollments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Program and Scheduling Inquiries",
      description: "\"What age groups do you coach?\" \"What\u2019s the schedule for advanced soccer training?\" \"Do you offer one-on-one coaching?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs, screen potential athletes, and book trial sessions directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new parent calls, interested in enrolling their child in your youth basketball program. The BrightLaunchIQ AI Receptionist answers instantly with an enthusiastic, professional tone. It guides the caller through a quick intake, gathers details about the child\u2019s age and experience, explains your program philosophy, and checks class availability. It then books a trial session directly into your scheduling system.\n\n1:00 PM \u2014 While your coaches are leading practice, the AI handles multiple routine calls: one athlete confirming their upcoming private lesson (handled automatically), another asking about summer camp dates (answered by the AI), and a third inquiring about scholarship opportunities.\n\n5:00 PM \u2014 After hours, a prospective athlete calls about advanced training for an upcoming competition. The AI provides immediate information on elite programs, logs an urgent message for a head coach, and offers to schedule an initial assessment for the next morning. It also sends an SMS with relevant program information and a link to your online registration forms.`,
  faqs: [
    { question: "Can an AI receptionist handle sports program inquiries?", answer: "Yes. The AI answers questions about age groups, skill levels, training schedules, and program philosophies." },
    { question: "Does the AI integrate with sports management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like TeamSnap, Mindbody, and Coach Logic to manage enrollments, schedules, and athlete records." },
    { question: "Can the AI schedule trial sessions?", answer: "Yes. The AI checks coach availability and books trial sessions directly into your scheduling system." },
    { question: "Does the AI provide information on athlete development?", answer: "Yes. The AI can provide information on your coaching methodologies, athlete development pathways, and success stories." },
    { question: "How quickly can a sports coaching business get started?", answer: "Most sports coaching businesses are live within 48 hours. We configure your program offerings, integrate with your systems, and customize for your specific coaching needs." },
    { question: "What does an AI receptionist cost for sports coaches?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time administrative assistant." },
  ],
};

const SportsCoaches = () => <IndustryPageTemplate data={data} />;
export default SportsCoaches;
