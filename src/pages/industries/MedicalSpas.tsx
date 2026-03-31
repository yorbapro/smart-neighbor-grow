import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Medical Spas",
  slug: "medical-spas",
  lossAmount: "130,000",
  lossAmountNum: 130000,
  useCases: ["Treatment Booking", "Injectable Pricing FAQ", "Membership Inquiries", "Package Upsells", "Post-Treatment Follow-Ups", "Gift Card Purchases"],
  crm: "Mindbody",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Dermatologists", slug: "dermatologists" },
    { name: "Day Spas", slug: "day-spas" },
    { name: "Dental Clinics", slug: "dental-clinics" },
  ],
  whyThisIndustry: "Medical spas provide a range of aesthetic and wellness treatments, often in a high-touch and personalized environment. When a client is seeking a new treatment or has a question about their care, they need a quick and professional response. Missing calls for medical spas means lost new client consultations, frustrated clients, and a direct impact on practice revenue and client satisfaction. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Mindbody — so you capture the client even when your staff are focused on care.",
  painPoints: [
    {
      title: "Aesthetic Inquiries Demand Instant Response",
      description: "Clients seeking aesthetic treatments are often motivated by a desire for self-improvement and are likely to contact multiple providers. If your phone goes unanswered or to voicemail, these high-value leads will quickly move to a competitor."
    },
    {
      title: "Staff are Focused on Client Care, Not on the Phone",
      description: "Your medical spa staff are often busy providing treatments, conducting consultations, and assisting the doctor. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-office clients."
    },
    {
      title: "Inconsistent New Client Intake and Triage",
      description: "Not every call is for a new treatment. Some are for routine follow-ups, wellness checks, or prescription refills. Without an intelligent system to pre-qualify leads and schedule appointments, your team spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Aesthetic Consultations Get Lost",
      description: "Aesthetic consultations and specialized treatment programs are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the client will find another medical spa who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden reaction or a post-treatment concern at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, client details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Mindbody."
    }
  ],
  dayInTheLife: `8:00 AM — A new client calls, interested in a consultation for a new aesthetic treatment. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about their interests, age, and any immediate safety concerns.

8:02 AM — Recognizing a high-priority new client inquiry, the AI immediately dispatches the call details to your on-call aesthetician, including all collected information. Simultaneously, it sends an SMS to the client, confirming their call has been received and providing an estimated response time.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a scheduled treatment (answered via Mindbody integration), a vendor looking for accounts payable (routed correctly), and a new lead for a specialized aesthetic program (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Mindbody — providing a comprehensive record for every client and patient without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book med spa treatments?", answer: "Yes. The AI schedules Botox, fillers, laser treatments, and facials directly into your Mindbody calendar while capturing client preferences and treatment history." },
    { question: "Does the AI integrate with Mindbody?", answer: "Yes. BrightLaunchIQ connects with Mindbody to manage bookings, memberships, and client records automatically." },
    { question: "Can the AI answer injectable pricing questions?", answer: "Yes. The AI provides pricing for Botox, Juvederm, and other injectables based on your configured rates, along with current promotions and package deals." },
    { question: "Does the AI handle membership inquiries?", answer: "Yes. The AI explains membership tiers, benefits, and pricing, then captures interested leads for your team to close or enrolls them directly." },
    { question: "How quickly can a med spa get started?", answer: "Most medical spas are live within 48 hours. We configure treatment booking flows, integrate with Mindbody, and customize for your service menu." },
    { question: "What does an AI receptionist cost for medical spas?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Mindbody integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const MedicalSpas = () => <IndustryPageTemplate data={data} />;
export default MedicalSpas;
