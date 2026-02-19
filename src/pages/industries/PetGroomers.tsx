import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Pet Groomers",
  slug: "pet-groomers",
  lossAmount: "60,000",
  lossAmountNum: 60000,
  useCases: ["Grooming Appointment Booking", "Breed-Specific Service Inquiries", "Add-On Upsells (Teeth, Nails)", "Recurring Schedule Setup", "Puppy's First Groom Consultations", "Pickup & Drop-Off Coordination"],
  crm: "Gingr",
  sectorLabel: "Business & Technical",
  similarBusinesses: [
    { name: "Veterinary Clinics", slug: "veterinary-clinics" },
    { name: "IT Support & MSPs", slug: "it-support-msps" },
    { name: "Private Tutors", slug: "private-tutors" },
  ],
  faqs: [
    { question: "Can an AI receptionist book grooming appointments?", answer: "Yes. The AI captures pet breed, size, coat type, and desired services, then books the appointment into your Gingr calendar." },
    { question: "Does the AI integrate with Gingr?", answer: "Yes. BrightLaunchIQ connects with Gingr to manage appointments, track pet profiles, and send grooming reminders to pet parents." },
    { question: "How much do pet groomers lose from missed calls?", answer: "$60,000 or more per year. Pet owners book with the first groomer who answers — missed calls mean lost recurring clients." },
    { question: "Can the AI upsell add-on services?", answer: "Yes. The AI offers teeth brushing, nail grinding, de-shedding treatments, and flea baths during the booking process to increase revenue per visit." },
    { question: "Does the AI handle first-time puppy grooming inquiries?", answer: "Yes. The AI explains the puppy introduction process, captures vaccination status, and schedules a gentle first groom with your most experienced groomer." },
    { question: "How quickly can a pet groomer get started?", answer: "Most groomers are live within 48 hours. We configure service menus by breed size, integrate with Gingr, and customize for your specialties." },
  ],
};

const PetGroomers = () => <IndustryPageTemplate data={data} />;
export default PetGroomers;
