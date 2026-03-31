import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";
const data: IndustryPageData = {
  name: "Travel Agencies",
  slug: "travel-agencies",
  lossAmount: "75,000",
  lossAmountNum: 75000,
  useCases: ["Destination Inquiries", "Booking Modifications", "Emergency Support", "Package Details", "Visa Requirements"],
  crm: "TravelJoy",
  sectorLabel: "Leisure & Hospitality",
  similarBusinesses: [
    { name: "Hotels & Resorts", slug: "hotels-resorts" },
    { name: "Event Planners", slug: "event-planners" },
    { name: "Tour Operators", slug: "tour-operators" },
  ],
  whyThisIndustry: "In the dynamic world of travel agencies, personalized service, meticulous planning, and seamless communication are paramount. Travel agents rely on a steady stream of inquiries, efficient booking processes, and a reputation for creating unforgettable experiences. When a prospective traveler calls, they often need immediate assistance with destination information, package details, booking modifications, or emergency support. Missing that call doesn\u2019t just mean losing a booking; it can mean losing a lifelong client and impacting the agency\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Dream Vacation\" Expectation",
      description: "Clients often call when they are excited about a specific destination or ready to plan their next adventure. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another agency that can offer instant, seamless communication and clear information about their desired trip."
    },
    {
      title: "Agents are Focused on the \"Planning,\" Not the Phone",
      description: "Your travel agents are dedicated to crafting bespoke itineraries, researching destinations, and securing the best deals. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person consultations, new inquiries go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Itinerary and Booking Inquiries",
      description: "\"What are the visa requirements for Italy?\" \"Can I add an extra night to my Paris package?\" \"What\u2019s the best time to visit Thailand?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs and book directly into your CRM or booking software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in a family vacation to the Caribbean. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, knowledgeable tone. It guides the caller through a quick intake, gathers their preferences (destination, dates, budget, activities), and offers to send them a curated list of package options. It then books a follow-up consultation with a travel agent.\n\n1:30 PM \u2014 While your agents are busy finalizing bookings, the AI handles multiple routine calls: one client rescheduling their flight (handled automatically), another asking about your current promotions on cruises (answered by the AI), and a third inquiring about travel insurance options.\n\n5:00 PM \u2014 After closing, a client calls about a lost passport while abroad. The AI provides clear instructions for emergency assistance, advises on next-day contact availability, and offers to connect them with your emergency support line. It also sends an SMS with relevant agency information and emergency contacts.`,
  faqs: [
    { question: "Can an AI receptionist handle booking modifications?", answer: "Yes. It can process changes to flights, hotels, and packages." },
    { question: "Does the AI integrate with travel CRM software?", answer: "Yes. BrightLaunchIQ connects with leading travel management platforms like TravelJoy and Travefy to manage client profiles, itineraries, and booking details." },
    { question: "Can the AI provide emergency travel support?", answer: "Yes. The AI can provide immediate support for urgent travel issues, routing critical calls to your emergency team." },
    { question: "How quickly can a travel agency get started?", answer: "Most travel agencies are live within 48 hours. We configure your services, integrate with your systems, and customize for your unique offerings." },
    { question: "What does an AI receptionist cost for travel agencies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, inquiry handling, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};
const TravelAgencies = () => <IndustryPageTemplate data={data} />;
export default TravelAgencies;
