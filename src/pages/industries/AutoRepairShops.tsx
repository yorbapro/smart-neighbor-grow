import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Auto Repair Shops",
  slug: "auto-repair-shops",
  lossAmount: "160,000",
  lossAmountNum: 160000,
  useCases: ["Appointment Scheduling", "Diagnostic Inquiry Intake", "Repair Status Updates", "Tire & Brake Service Booking", "Recall Notification Follow-Ups", "Tow Coordination"],
  crm: "Shop-Ware",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Mobile Detailers", slug: "mobile-detailers" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Driving Schools", slug: "driving-schools" },
  ],
  faqs: [
    { question: "Can an AI receptionist schedule auto repair appointments?", answer: "Yes. The AI captures vehicle make, model, year, and symptom description, then books the appointment into your shop management system." },
    { question: "Does the AI integrate with Shop-Ware?", answer: "Yes. BrightLaunchIQ connects with Shop-Ware to create repair orders, update job statuses, and notify customers when their vehicle is ready." },
    { question: "How much do auto repair shops lose from missed calls?", answer: "$160,000 or more per year. When a car breaks down, drivers call the first shop that answers — missed calls go straight to your competition." },
    { question: "Can the AI provide repair status updates?", answer: "Yes. The AI looks up job status by customer name or vehicle, then provides estimated completion times and authorizes additional work if needed." },
    { question: "Does the AI handle emergency tow requests?", answer: "Yes. The AI captures the vehicle location, issue description, and driver contact info, then coordinates with your tow partner or in-house service." },
    { question: "How quickly can an auto shop get started?", answer: "Most shops are live within 48 hours. We configure service menus, integrate with Shop-Ware, and customize the AI for your specializations." },
  ],
};

const AutoRepairShops = () => <IndustryPageTemplate data={data} />;
export default AutoRepairShops;
