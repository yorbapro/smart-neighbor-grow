import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Car Rental Agencies",
  slug: "car-rental-agencies",
  lossAmount: "120,000",
  lossAmountNum: 120000,
  useCases: ["Reservation Booking", "Vehicle Availability Inquiries", "Pickup & Return Coordination", "Insurance Add-On Upsells", "Corporate Account Setup", "Roadside Assistance Routing"],
  crm: "TSD Rental",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Driving Schools", slug: "driving-schools" },
  ],
  faqs: [
    { question: "Can an AI receptionist book car rentals?", answer: "Yes. The AI captures pickup date, return date, vehicle class preference, and driver details, then creates the reservation in your rental management system." },
    { question: "Does the AI integrate with TSD Rental?", answer: "Yes. BrightLaunchIQ connects with TSD Rental to check fleet availability, create reservations, and manage pickup/return logistics." },
    { question: "Can the AI upsell insurance and add-ons?", answer: "Yes. The AI offers collision damage waivers, GPS units, child seats, and other add-ons during the booking process, increasing your revenue per rental." },
    { question: "Does the AI handle corporate account inquiries?", answer: "Yes. The AI captures company name, estimated volume, and billing preferences, then routes corporate leads to your account management team." },
    { question: "How quickly can a car rental agency get started?", answer: "Most agencies are live within 48 hours. We configure vehicle class menus, integrate with TSD Rental, and customize the AI for your locations." },
  ],
};

const CarRentalAgencies = () => <IndustryPageTemplate data={data} />;
export default CarRentalAgencies;
