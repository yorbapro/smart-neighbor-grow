import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Pet Groomers",
  slug: "pet-groomers",
  lossAmount: "60,000",
  lossAmountNum: 60000,
  useCases: ["Grooming Appointment Booking", "Breed-Specific Service Inquiries", "Add-On Upsells (Teeth, Nails)", "Recurring Schedule Setup", "Puppy's First Groom Consultations", "Pickup & Drop-Off Coordination"],
  crm: "Gingr",
  sectorLabel: "Lifestyle & Wellness",
  similarBusinesses: [
    { name: "Veterinary Clinics", slug: "veterinary-clinics" },
    { name: "IT Support & MSPs", slug: "it-support-msps" },
    { name: "Private Tutors", slug: "private-tutors" },
  ],
  whyThisIndustry: "In the thriving world of pet grooming, personalized care, efficient scheduling, and clear communication with pet owners are key to happy clients and wagging tails. Pet groomers rely on a steady stream of new appointments, repeat business, and a reputation for providing excellent care to furry companions. When a pet owner calls, they often need immediate assistance with scheduling a grooming session, asking about specific services (e.g., breed-specific cuts, de-shedding treatments), inquiring about pricing, or understanding vaccination requirements. Missing that call doesn\u2019t just mean losing a potential client; it can lead to missed revenue and impact the salon\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Pampered Pet\" Expectation",
      description: "Pet owners often call when their pet is due for grooming or they have a special occasion coming up. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another grooming salon that can offer instant, seamless communication and clear information about their pet\u2019s needs."
    },
    {
      title: "Groomers are Focused on \"Pups,\" Not the Phone",
      description: "Your pet groomers are dedicated to bathing, cutting, and styling pets, ensuring each animal receives personalized attention and a stress-free experience. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person client check-ins, new inquiries go unanswered, leading to lost appointments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Service-Related Inquiries",
      description: "\"How much for a full groom for a Golden Retriever?\" \"Do you offer de-shedding for long-haired cats?\" \"What are your vaccination requirements?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, wanting to schedule a full groom for their poodle. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, professional tone. It guides the caller through a quick intake, gathers details about their pet\u2019s breed, size, and specific grooming needs, explains your services, and checks your groomer\u2019s availability. It then books the appointment directly into your scheduling system.\n\n1:00 PM \u2014 While your groomers are busy with appointments, the AI handles multiple routine calls: one client confirming their upcoming appointment (handled automatically), another asking about nail trimming services (answered by the AI), and a third inquiring about puppy grooming packages.\n\n5:00 PM \u2014 After hours, a pet owner calls about a last-minute cancellation for their pet\u2019s grooming. The AI processes the cancellation, offers to reschedule, and updates your calendar. It also sends an SMS with relevant salon information and a link to your online booking portal.`,
  faqs: [
    { question: "Can an AI receptionist book grooming appointments?", answer: "Yes. The AI captures pet breed, size, coat type, and desired services, then books the appointment into your Gingr calendar." },
    { question: "Does the AI integrate with pet grooming scheduling software?", answer: "Yes. BrightLaunchIQ connects with leading systems like Groomer\u2019s Helper and PetDesk to manage appointments, client records, and communication." },
    { question: "Can the AI upsell add-on services?", answer: "Yes. The AI offers teeth brushing, nail grinding, de-shedding treatments, and flea baths during the booking process to increase revenue per visit." },
    { question: "Does the AI handle first-time puppy grooming inquiries?", answer: "Yes. The AI explains the puppy introduction process, captures vaccination status, and schedules a gentle first groom with your most experienced groomer." },
    { question: "How quickly can a pet groomer get started?", answer: "Most groomers are live within 48 hours. We configure service menus by breed size, integrate with your systems, and customize for your specialties." },
    { question: "What does an AI receptionist cost for pet groomers?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const PetGroomers = () => <IndustryPageTemplate data={data} />;
export default PetGroomers;
