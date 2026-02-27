import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Mobile Detailers",
  slug: "mobile-detailers",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Detail Package Booking", "Fleet Account Inquiries", "Ceramic Coating Consultations", "Service Area Confirmation", "Recurring Appointment Setup", "Gift Certificate Orders"],
  crm: "Urable",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Car Rental Agencies", slug: "car-rental-agencies" },
  ],
  faqs: [
    { question: "Can an AI receptionist book mobile detailing appointments?", answer: "Yes. The AI captures vehicle type, desired package, location, and preferred date, then books the appointment into your scheduling system." },
    { question: "Does the AI integrate with Urable?", answer: "Yes. BrightLaunchIQ connects with Urable to manage bookings, track recurring clients, and send appointment reminders automatically." },
    { question: "Can the AI handle fleet account inquiries?", answer: "Yes. The AI captures fleet size, vehicle types, and service frequency, then routes commercial fleet leads to your sales pipeline for custom pricing." },
    { question: "Does the AI upsell premium services?", answer: "Yes. The AI presents ceramic coating, paint correction, and interior restoration options during the booking process, increasing your average ticket." },
    { question: "How quickly can a mobile detailer get started?", answer: "Most detailers are live within 48 hours. We configure service packages, integrate with Urable, and customize the AI for your service territory." },
  ],
};

const MobileDetailers = () => <IndustryPageTemplate data={data} />;
export default MobileDetailers;
