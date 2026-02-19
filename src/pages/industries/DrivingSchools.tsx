import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Driving Schools",
  slug: "driving-schools",
  lossAmount: "90,000",
  lossAmountNum: 90000,
  useCases: ["Lesson Package Booking", "Behind-the-Wheel Scheduling", "Teen Driver Program Enrollment", "Defensive Driving Course Sign-Ups", "Road Test Preparation Inquiries", "Instructor Availability Checks"],
  crm: "ScheduleOnce",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Car Rental Agencies", slug: "car-rental-agencies" },
    { name: "Mobile Detailers", slug: "mobile-detailers" },
  ],
  faqs: [
    { question: "Can an AI receptionist enroll students in driving courses?", answer: "Yes. The AI captures student age, license status, and preferred schedule, then enrolls them in the appropriate program and books their first lesson." },
    { question: "Does the AI integrate with ScheduleOnce?", answer: "Yes. BrightLaunchIQ connects with ScheduleOnce to manage instructor calendars, book lessons, and send automated reminders to students." },
    { question: "How much do driving schools lose from missed calls?", answer: "$90,000 or more per year. Parents shopping for teen driving programs will enroll with the first school that answers — responsiveness wins enrollment." },
    { question: "Can the AI handle teen program inquiries from parents?", answer: "Yes. The AI explains program structure, pricing, and state requirements, then captures parent contact info and schedules an orientation session." },
    { question: "Does the AI book behind-the-wheel lessons?", answer: "Yes. The AI checks instructor availability by location and time, then books the lesson and sends pickup location details to the student." },
    { question: "How quickly can a driving school get started?", answer: "Most schools are live within 48 hours. We configure course menus, integrate with ScheduleOnce, and customize the AI for your program offerings." },
  ],
};

const DrivingSchools = () => <IndustryPageTemplate data={data} />;
export default DrivingSchools;
