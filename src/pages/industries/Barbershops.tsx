import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Barbershops",
  slug: "barbershops",
  lossAmount: "65,000",
  lossAmountNum: 65000,
  useCases: ["Walk-In Wait Time Updates", "Appointment Scheduling", "Barber Availability Checks", "Membership Plan Inquiries", "Group Booking Coordination", "Product Pre-Orders"],
  crm: "Booksy",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Hair Salons", slug: "hair-salons" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Tattoo Studios", slug: "tattoo-studios" },
  ],
  faqs: [
    { question: "Can an AI receptionist manage barbershop appointments?", answer: "Yes. The AI books appointments by barber preference, captures service type, and confirms availability — eliminating phone tag during busy hours." },
    { question: "Does the AI integrate with Booksy?", answer: "Yes. BrightLaunchIQ connects with Booksy to manage schedules, track client preferences, and send booking confirmations automatically." },
    { question: "How much do barbershops lose from missed calls?", answer: "$65,000 or more per year. Barbers are cutting hair when the phone rings — every missed call is a client who walks into the shop down the street." },
    { question: "Can the AI provide walk-in wait times?", answer: "Yes. The AI checks current queue status and provides estimated wait times, helping walk-in clients decide whether to come in or book a future slot." },
    { question: "Does the AI handle membership inquiries?", answer: "Yes. The AI explains membership tiers, pricing, and benefits, then enrolls new members or routes upgrade requests to your team." },
    { question: "How quickly can a barbershop get started?", answer: "Most barbershops are live within 48 hours. We configure barber profiles, integrate with Booksy, and customize for your services." },
  ],
};

const Barbershops = () => <IndustryPageTemplate data={data} />;
export default Barbershops;
