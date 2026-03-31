import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Driving Schools",
  slug: "driving-schools",
  lossAmount: "90,000",
  lossAmountNum: 90000,
  useCases: ["Lesson Package Booking", "Behind-the-Wheel Scheduling", "Teen Driver Program Enrollment", "Defensive Driving Course Sign-Ups", "Road Test Preparation Inquiries", "Instructor Availability Checks"],
  crm: "ScheduleOnce",
  sectorLabel: "Education",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Car Rental Agencies", slug: "car-rental-agencies" },
    { name: "Mobile Detailers", slug: "mobile-detailers" },
  ],
  whyThisIndustry: "In the driving school industry, clear communication, flexible scheduling, and a focus on student safety are paramount. Driving schools rely on a steady stream of new students, from teenagers getting their first license to adults seeking refresher courses, and a reputation for effective instruction. When a potential student or parent calls, they often need immediate information on course offerings, package pricing, instructor availability, or to schedule their first lesson. Missing that call doesn\u2019t just mean losing a new student; it means failing to provide crucial guidance on the road to safe driving. BrightLaunchIQ\u2019s AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into ScheduleOnce \u2014 so you capture the client even when your team is focused on delivering exceptional driving education.",
  painPoints: [
    {
      title: "The \"Urgent License Need\" Expectation",
      description: "Students often call driving schools when they are eager to get their license, facing a deadline for a permit test, or needing to quickly schedule road test preparation. If their call goes to voicemail or they encounter a generic answering service, they\u2019ll quickly move to the next school on their list that offers instant information, clear scheduling, and a responsive approach to their urgent needs."
    },
    {
      title: "Instructors are Focused on the \"Road,\" Not the Phone",
      description: "As a driving instructor, your primary focus is on providing hands-on, safe instruction during lessons. You cannot\u2014and should not\u2014be interrupted by every ringing phone. If you are busy with a student or unavailable, new inquiries go unanswered, leading to lost students and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Course-Specific FAQs",
      description: "Every new inquiry requires detailed information: type of license (learner\u2019s, full), course packages (beginner, advanced, defensive driving), instructor availability, vehicle type, and payment options. Managing a dynamic schedule, especially across multiple instructors and vehicles, and answering repetitive questions about state regulations or course prerequisites takes valuable time. A slow or inconsistent intake process risks losing a student who needs immediate attention or spending valuable time on unqualified inquiries."
    },
    {
      title: "High-Value Enrollments Get Lost",
      description: "Full driving courses, advanced defensive driving, and road test preparation packages are high-value and essential for business stability. If you don\u2019t capture the lead details and book immediately, the client will find another driving school who will."
    },
    {
      title: "After-Hours Opportunities Go Unanswered",
      description: "A late-night inquiry about a driving course or a weekend road test prep request is a major concern. Without 24/7 coverage, these high-value opportunities go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Operations",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with ScheduleOnce."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A potential student calls, eager to start their driving lessons. The BrightLaunchIQ AI Receptionist answers instantly with a professional, encouraging tone. It gathers essential intake data (license type, experience level, preferred lesson times) and checks your real-time instructor and vehicle availability in your scheduling software.\n\n9:05 AM \u2014 The AI identifies an open slot for their first lesson and books the appointment immediately. The student feels confident in your school\u2019s efficiency and responsiveness, and the appointment is confirmed via SMS with a link to your online registration forms.\n\n11:00 AM \u2014 While your instructors are out on lessons, the AI handles three simultaneous calls: one student rescheduling their lesson (handled automatically), another asking about your defensive driving courses (answered by the AI), and a third booking a new student for a road test preparation package.\n\n5:00 PM \u2014 After your office has closed, a potential student calls needing information on your payment plans. The AI handles the intake, explains your pricing structure, and schedules a call-back for the next morning, sending a professional SMS confirmation with a link to your online payment portal.\n\nThroughout the day, every call is transcribed, summarized, and logged in ScheduleOnce \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist enroll students in driving courses?", answer: "Yes. The AI captures student age, license status, and preferred schedule, then enrolls them in the appropriate program and books their first lesson." },
    { question: "Does the AI integrate with ScheduleOnce?", answer: "Yes. BrightLaunchIQ connects with ScheduleOnce to manage instructor calendars, book lessons, and send automated reminders to students." },
    { question: "Can the AI handle teen program inquiries from parents?", answer: "Yes. The AI explains program structure, pricing, and state requirements, then captures parent contact info and schedules an orientation session." },
    { question: "Does the AI book behind-the-wheel lessons?", answer: "Yes. The AI checks instructor availability by location and time, then books the lesson and sends pickup location details to the student." },
    { question: "How quickly can a driving school get started?", answer: "Most schools are live within 48 hours. We configure course menus, integrate with ScheduleOnce, and customize the AI for your program offerings." },
    { question: "What does an AI receptionist cost for driving schools?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and ScheduleOnce integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const DrivingSchools = () => <IndustryPageTemplate data={data} />;
export default DrivingSchools;
