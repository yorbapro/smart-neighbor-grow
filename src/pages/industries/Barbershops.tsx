import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Barbershops",
  slug: "barbershops",
  lossAmount: "65,000",
  lossAmountNum: 65000,
  useCases: ["Appointment Booking", "Style Consultations", "Barber Availability Checks", "Membership Plan Inquiries", "Walk-In Wait Time Updates", "Product Pre-Orders"],
  crm: "Booksy",
  sectorLabel: "Lifestyle & Personal Services",
  similarBusinesses: [
    { name: "Hair Salons", slug: "hair-salons" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Tattoo Studios", slug: "tattoo-studios" },
  ],
  whyThisIndustry: "In the vibrant world of barbershops, style, precision, and a welcoming atmosphere are key. Barbers rely on a steady stream of loyal clients, efficient scheduling, and a reputation for top-notch cuts and grooming. When a client calls, they often need immediate assistance with appointment booking, style consultations, or checking availability. Missing that call doesn\u2019t just mean losing a haircut; it can mean losing a long-term client and impacting the shop\u2019s bustling rhythm.",
  painPoints: [
    {
      title: "The \"Fresh Cut-on-Demand\" Expectation",
      description: "Clients often decide to get a haircut on a whim or when they finally have a free moment. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly move to the next barber on their list that offers instant, seamless booking and a clear understanding of their needs."
    },
    {
      title: "Barbers are Focused on the \"Chair,\" Not the Phone",
      description: "Your barbers are artists, focused on delivering perfect fades, shaves, and styles. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with walk-ins, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Style FAQs",
      description: "\"Do you do skin fades?\" \"What are your rates for a beard trim?\" \"Can I book with [specific barber] for Saturday?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, looking for a specific barber and a last-minute appointment. The BrightLaunchIQ AI Receptionist answers instantly with a cool, confident tone. It guides the caller through a quick intake, confirms the desired service and barber, and checks your real-time schedule. The AI then books the appointment, sending a confirmation and a link to your digital intake form.\n\n11:30 AM \u2014 While your barbers are busy with a full house, the AI handles multiple routine calls: one client rescheduling their appointment (handled automatically), another asking about your hot towel shave services (answered by the AI), and a third booking a series of appointments for the month.\n\n6:00 PM \u2014 After closing, a client calls about a forgotten item. The AI provides clear instructions for retrieving lost items, advises on next-day availability, and offers to schedule a follow-up call for the next morning. It also sends an SMS with relevant shop information.\n\nThroughout the day, every call is transcribed, summarized, and logged in Booksy \u2014 providing a comprehensive record for every client and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist manage barbershop appointments?", answer: "Yes. The AI books appointments by barber preference, captures service type, and confirms availability \u2014 eliminating phone tag during busy hours." },
    { question: "Does the AI integrate with Booksy?", answer: "Yes. BrightLaunchIQ connects with Booksy to manage schedules, track client preferences, and send booking confirmations automatically." },
    { question: "Can the AI provide walk-in wait times?", answer: "Yes. The AI checks current queue status and provides estimated wait times, helping walk-in clients decide whether to come in or book a future slot." },
    { question: "Does the AI handle membership inquiries?", answer: "Yes. The AI explains membership tiers, pricing, and benefits, then enrolls new members or routes upgrade requests to your team." },
    { question: "How quickly can a barbershop get started?", answer: "Most barbershops are live within 48 hours. We configure barber profiles, integrate with Booksy, and customize for your services." },
    { question: "What does an AI receptionist cost for barbershops?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, appointment booking, and Booksy integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Barbershops = () => <IndustryPageTemplate data={data} />;
export default Barbershops;
