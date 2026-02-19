import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Private Tutors",
  slug: "private-tutors",
  lossAmount: "55,000",
  lossAmountNum: 55000,
  useCases: ["Session Booking", "Subject & Grade Level Matching", "Test Prep Consultation Requests", "Parent Progress Update Calls", "Recurring Schedule Setup", "Group Tutoring Coordination"],
  crm: "TutorCruncher",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "Driving Schools", slug: "driving-schools" },
    { name: "IT Support & MSPs", slug: "it-support-msps" },
    { name: "Pet Groomers", slug: "pet-groomers" },
  ],
  faqs: [
    { question: "Can an AI receptionist book tutoring sessions?", answer: "Yes. The AI captures student grade level, subject, and scheduling preferences, then books sessions with the best-matched tutor." },
    { question: "Does the AI integrate with TutorCruncher?", answer: "Yes. BrightLaunchIQ connects with TutorCruncher to manage tutor schedules, track student progress, and handle billing inquiries." },
    { question: "How much do tutoring businesses lose from missed calls?", answer: "$55,000 or more per year. Parents shopping for tutors will enroll with the first service that responds — especially before exam seasons." },
    { question: "Can the AI match students with the right tutor?", answer: "Yes. The AI asks about subject, learning style, and schedule, then recommends available tutors who specialize in the student's needs." },
    { question: "Does the AI handle test prep inquiries?", answer: "Yes. The AI captures target test (SAT, ACT, GRE), current scores, and goal scores, then schedules a diagnostic assessment session." },
    { question: "How quickly can a tutoring service get started?", answer: "Most tutoring services are live within 48 hours. We configure subject menus, integrate with TutorCruncher, and customize for your teaching specialties." },
  ],
};

const PrivateTutors = () => <IndustryPageTemplate data={data} />;
export default PrivateTutors;
