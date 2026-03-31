import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Towing Companies",
  slug: "towing-companies",
  lossAmount: "200,000",
  lossAmountNum: 200000,
  useCases: ["Emergency Dispatch Intake", "Roadside Assistance Routing", "Impound Lot Inquiries", "Insurance Claim Coordination", "ETA Updates", "Motor Club Call Handling"],
  crm: "Towbook",
  sectorLabel: "Automotive",
  similarBusinesses: [
    { name: "Auto Repair Shops", slug: "auto-repair-shops" },
    { name: "Mobile Detailers", slug: "mobile-detailers" },
    { name: "Driving Schools", slug: "driving-schools" },
  ],
  whyThisIndustry: "In the towing industry, rapid response, clear communication, and efficient dispatch are paramount. Towing companies rely on a steady stream of urgent calls, reliable service, and a reputation for quick, professional assistance. When a customer calls, they often need immediate help with roadside assistance, vehicle recovery, or accident towing. Missing that call doesn\u2019t just mean losing a job; it can leave a customer stranded and impact your reputation for reliability.",
  painPoints: [
    {
      title: "The \"Emergency-on-Demand\" Expectation",
      description: "Customers often call in stressful, time-sensitive situations, needing immediate assistance. If their call goes to voicemail or they encounter a generic answering service, they will quickly seek out another company that can offer immediate, empathetic, and professional assistance to address their urgent needs."
    },
    {
      title: "Dispatchers are Focused on the \"Road,\" Not the Phone",
      description: "Your dispatchers and drivers are dedicated to managing active tows, navigating traffic, and ensuring safety. They cannot\u2014and should not\u2014be interrupted by every incoming call. If your lines are busy or your team is overwhelmed, new service requests go unanswered, leading to lost revenue and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Service Inquiries and Location FAQs",
      description: "\"How much for a tow from downtown to the north side?\" \"Do you handle heavy-duty trucks?\" \"How long until you can get here?\" Answering these repetitive questions takes up valuable time. Without an intelligent system to handle these FAQs, gather precise location details, and dispatch efficiently, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `8:00 PM \u2014 A stranded motorist calls after a flat tire. The BrightLaunchIQ AI Receptionist answers instantly with a calm, reassuring tone. It guides the caller through a quick intake, gathers essential details like vehicle type, precise location (via SMS link), and the nature of the breakdown. The AI then checks your real-time dispatcher availability and dispatches the nearest tow truck, providing the customer with an ETA.\n\n10:30 PM \u2014 While your dispatchers are managing multiple active calls, the AI handles several routine inquiries: one customer asking about impound lot hours (answered automatically), another inquiring about battery jump-start services (qualified and scheduled), and a third requesting a quote for a long-distance tow (details gathered and forwarded to sales).\n\n2:00 AM \u2014 A police officer calls for an accident tow. The AI quickly identifies the caller, gathers incident details, and dispatches the appropriate heavy-duty recovery unit, confirming arrival time and providing a reference number.\n\nThroughout the day, every call is transcribed, summarized, and logged in Towbook \u2014 providing a comprehensive record for every customer and interaction without any manual data entry.`,
  faqs: [
    { question: "Can an AI receptionist handle emergency tow dispatch?", answer: "Yes. The AI captures vehicle location, issue type, and driver contact info, then dispatches the nearest available truck in real time." },
    { question: "Does the AI integrate with Towbook?", answer: "Yes. BrightLaunchIQ connects with Towbook to create dispatch tickets, track truck availability, and log call details automatically." },
    { question: "Can the AI handle motor club and insurance calls?", answer: "Yes. The AI processes AAA, insurance roadside, and motor club dispatches, capturing authorization numbers and routing them to available drivers." },
    { question: "Does the AI provide ETA updates?", answer: "Yes. The AI checks driver location and provides callers with estimated arrival times, reducing callback volume and improving customer satisfaction." },
    { question: "How quickly can a towing company get started?", answer: "Most towing companies are live within 48 hours. We configure dispatch workflows, integrate with Towbook, and customize for your service radius." },
    { question: "What does an AI receptionist cost for towing companies?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, emergency dispatch intake, and Towbook integration. That\u2019s a fraction of the cost of a full-time dispatcher." },
  ],
};

const TowingCompanies = () => <IndustryPageTemplate data={data} />;
export default TowingCompanies;
