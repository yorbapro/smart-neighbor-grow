import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Pest Control Services",
  slug: "pest-control",
  lossAmount: "60,000",
  lossAmountNum: 60000,
  useCases: ["Seasonal Intake", "Recurring Service Scheduling", "Pricing FAQ", "Termite Inspection Booking", "Emergency Bee/Wasp Calls", "Commercial Contract Inquiries"],
  crm: "PestRoutes",
  sectorLabel: "Home Services",
  similarBusinesses: [
    { name: "Landscapers", slug: "landscapers" },
    { name: "House Cleaning Services", slug: "house-cleaning" },
    { name: "HVAC Contractors", slug: "hvac-contractors" },
  ],
  faqs: [
    { question: "Can an AI receptionist handle pest control calls?", answer: "Yes. The AI identifies the pest type, captures property details, and schedules treatment appointments — handling everything from routine spraying to emergency infestations." },
    { question: "Does the AI integrate with PestRoutes?", answer: "Yes. BrightLaunchIQ connects with PestRoutes to create service tickets, schedule recurring treatments, and update customer accounts automatically." },
    { question: "Can the AI answer pest control pricing questions?", answer: "Yes. The AI provides pricing ranges based on your configured rates for common services like general spraying, termite treatments, and rodent control." },
    { question: "Does the AI handle recurring pest control scheduling?", answer: "Yes. The AI manages recurring appointment scheduling, sends reminders, and handles rescheduling requests without any manual intervention." },
    { question: "How quickly can a pest control company go live?", answer: "Most pest control companies launch within 48 hours. We configure seasonal workflows, integrate with PestRoutes, and customize for your service offerings." },
  ],
};

const PestControl = () => <IndustryPageTemplate data={data} />;
export default PestControl;
