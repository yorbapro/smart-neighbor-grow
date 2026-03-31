import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Music Schools",
  slug: "music-schools",
  lossAmount: "60,000",
  lossAmountNum: 60000,
  useCases: ["Lesson Scheduling", "Instrument Questions", "Trial Lesson Booking", "Recital Information", "Program Inquiries", "Registration"],
  crm: "My Music Staff",
  sectorLabel: "Education",
  similarBusinesses: [
    { name: "Dance Studios", slug: "dance-studios" },
    { name: "Private Tutors", slug: "private-tutors" },
    { name: "Language Schools", slug: "language-schools" },
  ],
  whyThisIndustry: "In the vibrant world of music schools, fostering creativity, providing expert instruction, and managing diverse student schedules are key to harmony and growth. Music schools rely on a steady stream of new students, from aspiring beginners to advanced performers, and a reputation for nurturing musical talent. When a potential student or parent calls, they often need immediate information on instrument lessons, class schedules, instructor availability, or to book a trial lesson. Missing that call doesn\u2019t just mean losing a new student; it means failing to strike the right chord with a budding musician.",
  painPoints: [
    {
      title: "The \"Inspiration-Driven Enrollment\" Expectation",
      description: "Students and parents often call music schools when inspiration strikes, or when they finally decide to pursue a new instrument or vocal training. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next school on their list that offers instant information, clear scheduling, and a responsive approach to their musical journey."
    },
    {
      title: "Instructors are Focused on the \"Lesson,\" Not the Phone",
      description: "As a music instructor, your primary focus is on guiding students through scales, chords, and compositions during lessons. You cannot\u2014and should not\u2014be interrupted by every ringing phone. If you are busy with a student or unavailable, new inquiries go unanswered, leading to lost enrollments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Instrument-Specific FAQs",
      description: "Every new inquiry requires detailed information: instrument of choice, skill level, preferred lesson times, instructor specialization, and pricing for individual or group classes. Managing a dynamic schedule across multiple instructors, rooms, and instruments, and answering repetitive questions about curriculum or instrument rentals takes valuable time. A slow or inconsistent intake process risks losing a student who needs immediate attention or spending valuable time on unqualified inquiries."
    }
  ],
  dayInTheLife: `3:00 PM \u2014 A parent calls, their child is eager to start piano lessons. The BrightLaunchIQ AI Receptionist answers instantly with a professional, encouraging tone. It gathers essential intake data (instrument, age, skill level, preferred lesson times) and checks your real-time instructor and room availability in your scheduling software.\n\n3:05 PM \u2014 The AI identifies an open slot for a trial lesson with a piano instructor and books the appointment immediately. The parent feels confident in your school\u2019s efficiency and responsiveness, and the appointment is confirmed via SMS with a link to your online registration forms.\n\n5:00 PM \u2014 While your instructors are teaching, the AI handles three simultaneous calls: one student rescheduling their guitar lesson (handled automatically), another asking about your vocal coaching programs (answered by the AI), and a third booking a new student for a drum class.\n\n8:00 PM \u2014 After your last lesson, a potential client calls needing information on your payment plans for advanced courses. The AI handles the intake, explains your pricing structure, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online payment portal.`,
  faqs: [
    { question: "Can an AI receptionist book music lessons?", answer: "Yes. The AI captures instrument, experience level, and schedules trial lessons." },
    { question: "Does the AI integrate with music school management software?", answer: "Yes. BrightLaunchIQ connects with leading platforms like My Music Staff and Mindbody to manage instructor calendars, book lessons, and track student progress." },
    { question: "Can an AI receptionist handle instrument-specific inquiries?", answer: "Yes. The AI provides detailed information on instrument offerings, class schedules, and instructor specializations." },
    { question: "How quickly can a music school get started?", answer: "Most music schools are live within 48 hours. We configure your services, integrate with your systems, and customize for your unique offerings." },
    { question: "What does an AI receptionist cost for music schools?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const MusicSchools = () => <IndustryPageTemplate data={data} />;
export default MusicSchools;
