import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Veterinarians",
  slug: "veterinarians",
  lossAmount: "70,000",
  lossAmountNum: 70000,
  useCases: ["Appointment Booking", "Service Inquiries", "Pricing Information", "Emergency Protocols", "Pet Nutrition Advice", "Grooming Services"],
  crm: "VetBlue",
  sectorLabel: "Medical & Health",
  similarBusinesses: [
    { name: "Pet Groomers", slug: "pet-groomers" },
    { name: "Animal Shelters", slug: "animal-shelters" },
    { name: "Dog Trainers", slug: "dog-trainers" },
  ],
  whyThisIndustry: "In the compassionate world of veterinary medicine, providing exceptional animal care, managing appointments efficiently, and ensuring clear communication with pet owners are crucial for a thriving practice. Veterinarians rely on a steady stream of new patient inquiries, consistent appointment bookings, and a reputation for expert and empathetic care. When a prospective client calls, they often need immediate assistance with understanding services, inquiring about pricing, checking availability, or scheduling an appointment for their beloved pet. Missing that call doesn\u2019t just mean losing a potential patient; it can lead to delayed care and impact the practice\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Urgent Pet Care\" Expectation",
      description: "Pet owners often call when their animal is sick or injured, which can be a stressful and time-sensitive situation. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another veterinary clinic that can offer instant, seamless communication and clear information about their services."
    },
    {
      title: "Vets are Focused on \"Patients,\" Not the Phone",
      description: "Your veterinarians and veterinary technicians are dedicated to examining animals, performing surgeries, and providing medical treatments. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person patient care, new inquiries go unanswered, leading to lost appointments and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Scheduling and Service-Related Inquiries",
      description: "\"Does my dog need vaccinations?\" \"How much does a dental cleaning cost?\" \"When can I get an appointment for my cat?\" Answering these repetitive questions and coordinating schedules takes up valuable time. Without an intelligent system to handle these FAQs and book appointments directly into your practice management software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, concerned about their dog\u2019s sudden lethargy. The BrightLaunchIQ AI Receptionist answers instantly with a compassionate, professional tone. It guides the caller through a quick intake, gathers details about the pet\u2019s symptoms, explains your emergency protocols, and checks for immediate availability. It then books an urgent appointment directly into your practice management system.\n\n1:00 PM \u2014 While your vets are in surgery, the AI handles multiple routine calls: one client confirming their upcoming vaccination appointment (handled automatically), another asking about pet nutrition advice (answered by the AI), and a third inquiring about grooming services.\n\n5:00 PM \u2014 After hours, a prospective client calls about a new puppy. The AI provides immediate information on puppy care, logs an urgent message for a vet technician, and offers to schedule an initial wellness check for the next morning. It also sends an SMS with relevant practice information and a link to your online new patient forms.`,
  faqs: [
    { question: "Can an AI receptionist book veterinary appointments?", answer: "Yes. The AI captures pet symptoms, service needs, and availability, then books appointments directly into your VetBlue calendar." },
    { question: "Does the AI integrate with veterinary practice management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like VetBlue, eVetPractice, and Covetrus to manage appointments, patient records, and communication." },
    { question: "Can the AI answer questions about pet care?", answer: "Yes. The AI can provide detailed information on vaccinations, dental care, spaying/neutering, and pet nutrition advice." },
    { question: "Does the AI handle emergency pet calls?", answer: "Yes. The AI operates 24/7, capturing critical details about emergencies and routing urgent cases to your on-call veterinarians." },
    { question: "How quickly can a veterinary practice get started?", answer: "Most veterinary practices are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your specific pet care solutions." },
    { question: "What does an AI receptionist cost for veterinarians?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const Veterinarians = () => <IndustryPageTemplate data={data} />;
export default Veterinarians;
