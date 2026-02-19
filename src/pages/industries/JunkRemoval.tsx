import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Junk Removal",
  slug: "junk-removal",
  lossAmount: "40,000",
  lossAmountNum: 40000,
  useCases: ["Same-Day Booking", "Pricing FAQ", "Commercial Bid Intake", "Estate Cleanout Leads", "Construction Debris Scheduling", "Donation Pickup Coordination"],
  crm: "Workiz",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "House Cleaning Services", slug: "house-cleaning" },
    { name: "Landscapers", slug: "landscapers" },
    { name: "Pest Control Services", slug: "pest-control" },
  ],
  faqs: [
    { question: "Can an AI receptionist book same-day junk removal?", answer: "Yes. The AI checks your crew availability and books same-day pickups instantly, capturing item descriptions and property access details." },
    { question: "Does the AI integrate with Workiz?", answer: "Yes. BrightLaunchIQ connects with Workiz to create jobs, schedule pickups, and manage your dispatch calendar in real time." },
    { question: "How much do junk removal companies lose from missed calls?", answer: "$40,000 or more per year. Customers looking for junk removal want it done today — if you don't answer, they'll call the next company." },
    { question: "Can the AI provide junk removal pricing?", answer: "Yes. The AI asks about load size, item types, and location, then provides pricing estimates based on your configured rates." },
    { question: "Does the AI handle commercial junk removal bids?", answer: "Yes. The AI captures project scope, timeline, and access details for commercial cleanouts, then routes the lead to your estimating team." },
    { question: "How quickly can a junk removal company go live?", answer: "Most junk removal companies are live within 48 hours. We configure same-day booking flows, integrate with Workiz, and customize for your pricing." },
  ],
};

const JunkRemoval = () => <IndustryPageTemplate data={data} />;
export default JunkRemoval;
