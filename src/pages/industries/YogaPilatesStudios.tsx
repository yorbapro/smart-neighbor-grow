import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Yoga & Pilates Studios",
  slug: "yoga-pilates-studios",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Class Registration", "Membership Enrollment", "Private Session Booking", "Teacher Training Inquiries", "Workshop Sign-Ups", "Schedule & Pricing Questions"],
  crm: "Mindbody",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Day Spas", slug: "day-spas" },
    { name: "Holistic Health", slug: "holistic-health" },
    { name: "Hair Salons", slug: "hair-salons" },
  ],
  faqs: [
    { question: "Can an AI receptionist register students for classes?", answer: "Yes. The AI checks class availability, captures student preferences, and registers them directly into your Mindbody schedule." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage class rosters, sell memberships, and track student attendance automatically." },
    { question: "How much do yoga studios lose from missed calls?", answer: "$70,000 or more per year. New students exploring studios will sign up with the first one that responds — speed converts trial members into regulars." },
    { question: "Can the AI handle membership questions?", answer: "Yes. The AI explains membership tiers, pricing, class limits, and cancellation policies, then enrolls new members or routes billing inquiries." },
    { question: "Does the AI book private sessions?", answer: "Yes. The AI checks instructor availability, captures session goals, and books one-on-one or small group privates with confirmations sent to both parties." },
    { question: "How quickly can a yoga studio get started?", answer: "Most studios are live within 48 hours. We configure class schedules, integrate with Mindbody, and customize the AI for your studio offerings." },
  ],
};

const YogaPilatesStudios = () => <IndustryPageTemplate data={data} />;
export default YogaPilatesStudios;
