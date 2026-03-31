import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Language Schools",
  slug: "language-schools",
  lossAmount: "65,000",
  lossAmountNum: 65000,
  useCases: ["Course Registration", "Level Assessment Booking", "Program Questions", "Group Classes", "Private Tutoring", "Corporate Training"],
  crm: "SchoolMint",
  sectorLabel: "B2B & Education",
  similarBusinesses: [
    { name: "Private Tutors", slug: "private-tutors" },
    { name: "Music Schools", slug: "music-schools" },
    { name: "Test Prep Centers", slug: "test-prep-centers" },
  ],
  whyThisIndustry: "In the dynamic world of language schools, effective communication, flexible course options, and a supportive learning environment are key to student success. Language schools rely on a steady stream of new enrollments, from individuals seeking to master a new tongue for travel or business to students needing academic support. When a potential student calls, they often need immediate information on course offerings, class schedules, instructor availability, or to book a placement test. Missing that call doesn\u2019t just mean losing a new student; it means failing to connect with an eager learner on their linguistic journey.",
  painPoints: [
    {
      title: "The \"Global Connection\" Expectation",
      description: "Prospective students often call language schools when they are inspired to travel, pursue international careers, or connect with diverse cultures. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next school on their list that offers instant information, clear program details, and a responsive approach to their language learning goals."
    },
    {
      title: "Instructors are Focused on the \"Classroom,\" Not the Phone",
      description: "As a language instructor, your primary focus is on delivering engaging lessons, facilitating conversation practice, and providing personalized feedback during classes. You cannot\u2014and should not\u2014be interrupted by every ringing phone. If you are busy with a class or unavailable, new inquiries go unanswered, leading to lost enrollments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Course Options and Level-Specific FAQs",
      description: "Every new inquiry requires detailed information: target language, proficiency level, preferred class format (group, private), schedule (intensive, part-time), and pricing. Managing diverse course schedules across multiple languages and levels, and answering repetitive questions about curriculum, cultural immersion programs, or placement tests takes valuable time. A slow or inconsistent intake process risks losing a student who needs immediate attention or spending valuable time on unqualified inquiries."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential student calls, interested in enrolling in a beginner Spanish course. The BrightLaunchIQ AI Receptionist answers instantly with a professional, multilingual tone. It gathers essential intake data (target language, current proficiency, preferred schedule) and checks your real-time course availability in your enrollment system.\n\n9:05 AM \u2014 The AI identifies an open slot in an upcoming Spanish cohort and offers to book a free trial lesson or placement test immediately. The student feels confident in your school\u2019s efficiency and responsiveness, and the appointment is confirmed via SMS with a link to your online registration forms and course catalog.\n\n11:00 AM \u2014 While your instructors are teaching, the AI handles three simultaneous calls: one student rescheduling their placement test (handled automatically), another asking about your French immersion programs (answered by the AI), and a third booking a new student for a private English conversation class.\n\n5:00 PM \u2014 After your office has closed, a potential student calls needing information on your corporate language training programs. The AI handles the intake, explains your customized solutions, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online corporate brochure.`,
  faqs: [
    { question: "Can an AI receptionist book language lessons?", answer: "Yes. The AI captures target language, proficiency level, and schedules placement tests." },
    { question: "Does the AI integrate with student information systems?", answer: "Yes. BrightLaunchIQ connects with leading platforms like ClassJuggler and ActiveCampaign to manage student enrollments, track progress, and automate communications." },
    { question: "Can the AI provide automated course information?", answer: "Yes. The AI can provide detailed information on course offerings, class schedules, instructor qualifications, and cultural immersion programs." },
    { question: "How quickly can a language school get started?", answer: "Most language schools are live within 48 hours. We configure your services, integrate with your systems, and customize for your unique offerings." },
    { question: "What does an AI receptionist cost for language schools?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const LanguageSchools = () => <IndustryPageTemplate data={data} />;
export default LanguageSchools;
