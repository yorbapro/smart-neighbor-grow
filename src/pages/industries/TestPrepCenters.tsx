import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Test Prep Centers",
  slug: "test-prep-centers",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Program Inquiries", "Diagnostic Test Scheduling", "Course Registration", "Tutoring Sessions", "Score Guarantee Questions", "Parent Consultations"],
  crm: "HubSpot",
  sectorLabel: "Education",
  similarBusinesses: [
    { name: "Private Tutors", slug: "private-tutors" },
    { name: "Language Schools", slug: "language-schools" },
    { name: "Music Schools", slug: "music-schools" },
  ],
  whyThisIndustry: "In the competitive world of test prep centers, personalized guidance, effective strategies, and clear communication are crucial for student success. Test prep centers thrive on attracting new students, delivering high-quality instruction, and a reputation for helping students achieve their target scores. When a prospective student or parent calls, they often need immediate assistance with program details, class schedules, tutor availability, or to book a diagnostic test. Missing that call doesn\u2019t just mean losing a potential enrollment; it can impact student outcomes and the center\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"High-Stakes Exam\" Expectation",
      description: "Students and parents often call when they are facing a high-stakes exam (e.g., SAT, ACT, GRE, GMAT) and are under pressure to perform well. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another test prep center that can offer instant, seamless communication and clear information about their needs."
    },
    {
      title: "Instructors are Focused on \"Teaching,\" Not the Phone",
      description: "Your instructors are dedicated to teaching, mentoring, and guiding students through challenging material. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person student support, new inquiries go unanswered, leading to lost enrollments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Program and Scheduling Inquiries",
      description: "\"What\u2019s the difference between your SAT and ACT programs?\" \"Do you offer one-on-one tutoring for the GRE?\" \"When are your next GMAT classes?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book diagnostic tests or consultations directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new prospect calls, interested in SAT prep for their high school student. The BrightLaunchIQ AI Receptionist answers instantly with a professional, reassuring tone. It guides the caller through a quick intake, gathers their academic goals, explains your program options, and offers to schedule a diagnostic test. It then books the test directly into your calendar.\n\n1:00 PM \u2014 While your instructors are teaching classes, the AI handles multiple routine calls: one student confirming their next tutoring session (handled automatically), another asking about your online resources (answered by the AI), and a third inquiring about college application essay review services.\n\n5:00 PM \u2014 After hours, a prospective student calls about a last-minute need for GMAT prep. The AI provides information on accelerated programs, processes the enrollment, and sends access instructions for online materials. It also sends an SMS with relevant center information and a link to your online student portal.`,
  faqs: [
    { question: "Can an AI receptionist enroll students in test prep courses?", answer: "Yes. The AI captures test type (SAT, ACT, GRE), timeline, and schedules diagnostics." },
    { question: "How fast can we go live?", answer: "Most test prep centers are live within 48 hours." },
    { question: "Can the AI handle test prep inquiries?", answer: "Yes. It captures test type (SAT, ACT, GRE), timeline, and schedules diagnostics." },
    { question: "Does the AI integrate with student management software?", answer: "Yes. BrightLaunchIQ connects with leading student management platforms like Mindbody and Acuity Scheduling to manage student profiles, class schedules, and tutor availability." },
    { question: "Can the AI answer questions about course content and success rates?", answer: "Yes. The AI provides detailed information on course curriculum, instructor qualifications, success rates, and program guarantees." },
    { question: "What does an AI receptionist cost for test prep centers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const TestPrepCenters = () => <IndustryPageTemplate data={data} />;
export default TestPrepCenters;
