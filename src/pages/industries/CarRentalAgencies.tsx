import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Car Rental Agencies",
  slug: "car-rental-agencies",
  lossAmount: "120,000",
  lossAmountNum: 120000,
  useCases: ["Reservation Booking", "Vehicle Availability Inquiries", "Booking Modifications", "Pricing Questions", "Roadside Assistance", "Corporate Account Inquiries"],
  crm: "TSD Rental",
  sectorLabel: "Auto Services",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Towing Companies", slug: "towing-companies" },
    { name: "Motorcycle Dealers", slug: "motorcycle-dealers" },
  ],
  whyThisIndustry: "In the dynamic world of car rental agencies, customer convenience, fleet management, and efficient booking processes are paramount. Agencies rely on a steady stream of reservations, seamless pick-ups and drop-offs, and a reputation for reliable vehicles and excellent service. When a prospective renter calls, they often need immediate assistance with availability inquiries, booking modifications, pricing questions, or roadside assistance. Missing that call doesn\u2019t just mean losing a rental; it can mean losing a repeat customer and impacting the agency\u2019s operational efficiency.",
  painPoints: [
    {
      title: "The \"On-Demand\" Expectation",
      description: "Customers often call when they are planning a trip, have an immediate need for a vehicle, or are experiencing an issue with their current rental. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another agency that can offer instant, seamless booking, clear information about vehicle availability, and immediate support."
    },
    {
      title: "Agents are Focused on the \"Counter,\" Not the Phone",
      description: "Your rental agents are dedicated to assisting in-person customers, processing paperwork, inspecting vehicles, and managing the fleet. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your counter is busy or understaffed, new reservations go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Availability and Pricing Inquiries",
      description: "\"Do you have an SUV available next weekend?\" \"What\u2019s the daily rate for a compact car?\" \"Can I extend my rental by two days?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your reservation software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new customer calls, needing a mid-size sedan for a business trip next week. The BrightLaunchIQ AI Receptionist answers instantly with a professional, helpful tone. It guides the caller through a quick intake, confirms the desired vehicle class and dates, checks your real-time inventory, and books the reservation. The AI then sends a confirmation and a link to your digital check-in form.\n\n1:30 PM \u2014 While your agents are busy assisting customers at the counter, the AI handles multiple routine calls: one customer modifying their pick-up time (handled automatically), another asking about your current promotions on luxury vehicles (answered by the AI), and a third inquiring about insurance options for their rental.\n\n5:00 PM \u2014 After closing, a customer calls about a flat tire on their rental. The AI provides clear instructions for roadside assistance, advises on next-day vehicle exchange availability, and offers to schedule a follow-up call for the next morning. It also sends an SMS with relevant agency information and a link to your website.\n\nThroughout the day, every call is transcribed, summarized, and logged in TSD Rental \u2014 providing a comprehensive record for every customer and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist book car rentals?", answer: "Yes. The AI captures pickup date, return date, vehicle class preference, and driver details, then creates the reservation in your rental management system." },
    { question: "Does the AI integrate with TSD Rental?", answer: "Yes. BrightLaunchIQ connects with TSD Rental to check fleet availability, create reservations, and manage pickup/return logistics." },
    { question: "Can the AI upsell insurance and add-ons?", answer: "Yes. The AI offers collision damage waivers, GPS units, child seats, and and other add-ons during the booking process, increasing your revenue per rental." },
    { question: "Does the AI handle corporate account inquiries?", answer: "Yes. The AI captures company name, estimated volume, and billing preferences, then routes corporate leads to your account management team." },
    { question: "How quickly can a car rental agency get started?", answer: "Most agencies are live within 48 hours. We configure vehicle class menus, integrate with TSD Rental, and customize the AI for your locations." },
    { question: "What does an AI receptionist cost for car rental agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, appointment booking, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const CarRentalAgencies = () => <IndustryPageTemplate data={data} />;
export default CarRentalAgencies;
