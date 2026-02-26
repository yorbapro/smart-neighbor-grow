import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Day Spas",
  slug: "day-spas",
  lossAmount: "130,000",
  lossAmountNum: 130000,
  useCases: ["Spa Package Booking", "Couples Treatment Coordination", "Gift Certificate Orders", "Membership Enrollment", "Therapist Availability Checks", "Post-Treatment Follow-Ups"],
  crm: "Mindbody",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Hair Salons", slug: "hair-salons" },
    { name: "Medical Spas", slug: "medical-spas" },
    { name: "Yoga & Pilates Studios", slug: "yoga-pilates-studios" },
  ],
  faqs: [
    { question: "Can an AI receptionist book spa treatments?", answer: "Yes. The AI captures service preferences, therapist requests, and timing, then books directly into your Mindbody schedule." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage appointments, sell packages, and track client visit history directly." },
    { question: "How much do day spas lose from missed calls?", answer: "$130,000 or more per year. Spa bookings are often impulse decisions — clients who can't book immediately will search for another option." },
    { question: "Can the AI sell gift certificates?", answer: "Yes. The AI captures recipient details, package selection, and payment method, then processes gift certificate orders during the call." },
    { question: "Does the AI handle couples bookings?", answer: "Yes. The AI coordinates dual-therapist availability, captures both guests' preferences, and books synchronized treatment times." },
    { question: "How quickly can a day spa get started?", answer: "Most spas are live within 48 hours. We configure treatment menus, integrate with Mindbody, and customize the AI for your brand experience." },
  ],
};

const DaySpas = () => <IndustryPageTemplate data={data} />;
export default DaySpas;
