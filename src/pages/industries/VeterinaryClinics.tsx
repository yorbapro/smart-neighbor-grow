import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Veterinary Clinics",
  slug: "veterinary-clinics",
  lossAmount: "110,000",
  lossAmountNum: 110000,
  useCases: ["Urgent Care Triage", "Wellness Exam Scheduling", "Prescription Refill Inquiries", "Boarding Reservations", "Post-Surgery Follow-Ups", "After-Hours Emergency Routing"],
  crm: "Cornerstone",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Pet Groomers", slug: "pet-groomers" },
    { name: "Dental Clinics", slug: "dental-clinics" },
    { name: "Chiropractors", slug: "chiropractors" },
  ],
  whyThisIndustry: "Veterinary clinics provide essential care for pets, often dealing with urgent and emotionally charged situations. When a pet owner has a concern, they need a quick and compassionate response. Missing calls for veterinary clinics means lost emergency appointments, frustrated pet owners, and a direct impact on animal health and practice revenue. BrightLaunchIQ's AI Receptionist answers every call instantly, triages emergencies by severity, and books service appointments directly into Cornerstone — so you capture the patient even when your staff are focused on care.",
  painPoints: [
    {
      title: "Pet Emergencies Demand Instant Response",
      description: "Pet owners calling about sudden illnesses, injuries, or ingestions are often in distress and seeking immediate help. If your phone goes unanswered or to voicemail, they will quickly call the next clinic on their list."
    },
    {
      title: "Staff are Focused on Patient Care, Not on the Phone",
      description: "Your veterinary technicians and front desk staff are often busy assisting with exams, surgeries, and client check-ins. They cannot effectively manage a high volume of incoming calls while providing a high-touch experience for in-clinic patients."
    },
    {
      title: "Inconsistent Appointment Scheduling and Triage",
      description: "Not every call is an emergency. Some are for routine vaccinations, wellness exams, or prescription refills. Without an intelligent system to pre-qualify leads and schedule appointments, your team spends valuable time on administrative tasks."
    },
    {
      title: "High-Value Surgical Leads Get Lost",
      description: "Surgical procedures and dental cleanings are high-value and essential for practice stability. If you don't capture the lead details and schedule a consultation immediately, the pet owner will find another clinic who will."
    },
    {
      title: "After-Hours Emergencies Go Unanswered",
      description: "A sudden illness or injury at 8 PM is a major concern. Without 24/7 coverage, these high-value emergency intake calls go to whoever picks up the phone first."
    },
    {
      title: "Manual Data Entry Slows Down Production",
      description: "Juggling call notes, patient details, and scheduling manually leads to errors and delays. AI automates the entire intake process, syncing everything directly with Cornerstone."
    }
  ],
  dayInTheLife: `8:00 AM — A pet owner calls, distressed about their dog's sudden vomiting. The BrightLaunchIQ AI Receptionist answers instantly, gathers details about the pet's symptoms, age, and any immediate safety concerns.

8:02 AM — Recognizing a high-priority emergency, the AI immediately dispatches the call details to your on-call veterinarian, including all collected information. Simultaneously, it sends an SMS to the pet owner, confirming their call has been received and providing an estimated response time.

10:30 AM — While your team is busy in the clinic, the AI handles multiple routine calls: a client checking the status of a prescription refill (answered via Cornerstone integration), a vendor looking for accounts payable (routed correctly), and a new lead for a dental cleaning (qualified and scheduled).

Throughout the day, every call is transcribed, summarized, and logged in Cornerstone — providing a comprehensive record for every patient and client without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist triage veterinary emergencies?", answer: "Yes. The AI assesses symptom severity — poisoning, trauma, breathing difficulty — and routes true emergencies to your on-call vet while scheduling urgent visits for less critical cases." },
    { question: "Does the AI integrate with Cornerstone?", answer: "Yes. BrightLaunchIQ connects with Cornerstone to schedule appointments, check patient history, and manage prescription refill requests." },
    { question: "Can the AI handle prescription refill requests?", answer: "Yes. The AI captures pet name, medication details, and pharmacy preference, then routes the refill request to your veterinary team for approval." },
    { question: "Does the AI book wellness exams for pets?", answer: "Yes. The AI schedules annual checkups, vaccination appointments, and dental cleanings directly into your Cornerstone calendar." },
    { question: "How quickly can a vet clinic get started?", answer: "Most veterinary clinics are live within 48 hours. We configure emergency triage, integrate with Cornerstone, and customize for your practice." },
    { question: "What does an AI receptionist cost for veterinary clinics?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and Cornerstone integration. That's a fraction of the cost of a full-time receptionist." },
  ],
};

const VeterinaryClinics = () => <IndustryPageTemplate data={data} />;
export default VeterinaryClinics;
