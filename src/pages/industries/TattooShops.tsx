import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Tattoo Shops",
  slug: "tattoo-shops",
  lossAmount: "55,000",
  lossAmountNum: 55000,
  useCases: ["Consultation Booking", "Style Inquiries", "Pricing Information", "Aftercare Instructions", "Walk-in Availability", "Artist Portfolio Access"],
  crm: "TattooPro",
  sectorLabel: "Beauty & Wellness",
  similarBusinesses: [
    { name: "Piercing Studios", slug: "piercing-studios" },
    { name: "Salons & Spas", slug: "salons-spas" },
    { name: "Art Galleries", slug: "art-galleries" },
  ],
  whyThisIndustry: "In the artistic and personal world of tattooing, clear communication, efficient booking, and a welcoming client experience are crucial for a thriving studio. Tattoo shops rely on a steady stream of new client inquiries, consistent appointment bookings, and a reputation for exceptional artistry and professionalism. When a prospective client calls, they often need immediate assistance with understanding styles, requesting consultations, inquiring about pricing, or scheduling an appointment. Missing that call doesn\u2019t just mean losing a potential client; it can mean missing out on unique artistic opportunities and impacting the shop\u2019s growth and reputation.",
  painPoints: [
    {
      title: "The \"Artistic Vision\" Expectation",
      description: "Clients often call when they have a specific tattoo idea in mind and are looking for an artist who can bring their vision to life. If they have to wait for a callback or navigate a complex phone tree, they\u2019ll quickly seek out another studio that can offer instant, seamless communication and clear information about their artists and booking process."
    },
    {
      title: "Artists are Focused on \"Art,\" Not the Phone",
      description: "Your tattoo artists are dedicated to their craft, focusing on design, tattooing, and ensuring client comfort. They cannot\u2014and should not\u2014be interrupted by every ringing phone. If your front desk is understaffed or busy with in-person clients, new inquiries go unanswered, leading to lost bookings and a diminished reputation for responsiveness."
    },
    {
      title: "Complex Consultation and Pricing Inquiries",
      description: "\"Do you do realism?\" \"How much is a full sleeve?\" \"Can I get a consultation with [Artist Name]?\" Answering these repetitive questions and coordinating consultations takes up valuable time. Without an intelligent system to handle these FAQs, screen potential clients, and book consultations directly into your scheduling software, your team is bogged down by administrative noise."
    }
  ],
  dayInTheLife: `9:00 AM \u2014 A new client calls, interested in a custom tattoo. The BrightLaunchIQ AI Receptionist answers instantly with a friendly, professional tone. It guides the caller through a quick intake, gathers details about their desired style and placement, explains your consultation process, and checks artist availability. It then books a consultation directly into your scheduling system.\n\n1:00 PM \u2014 While your artists are tattooing, the AI handles multiple routine calls: one client confirming their upcoming appointment (handled automatically), another asking about aftercare instructions (answered by the AI), and a third inquiring about piercing services.\n\n5:00 PM \u2014 After hours, a prospective client calls about a walk-in availability. The AI provides immediate advice on walk-in policies, logs an urgent message for the studio manager, and offers to schedule an appointment for the next available slot. It also sends an SMS with relevant studio information and a link to your online portfolio.`,
  faqs: [
    { question: "Can an AI receptionist book tattoo consultations?", answer: "Yes. The AI captures client tattoo ideas, style preferences, and availability, then books consultations directly into your TattooPro calendar." },
    { question: "Does the AI integrate with tattoo shop management software?", answer: "Yes. BrightLaunchIQ connects with leading systems like TattooPro and InkBook to manage appointments, client records, and artist schedules." },
    { question: "Can the AI answer questions about tattoo styles and pricing?", answer: "Yes. The AI can provide detailed information on various tattoo styles, pricing structures, artist specialties, and aftercare instructions." },
    { question: "Does the AI handle walk-in inquiries?", answer: "Yes. The AI can provide information on walk-in policies, current wait times, and offer to schedule an appointment for the next available slot." },
    { question: "How quickly can a tattoo shop get started?", answer: "Most tattoo shops are live within 48 hours. We configure your service offerings, integrate with your systems, and customize for your unique artistic process." },
    { question: "What does an AI receptionist cost for tattoo shops?", answer: "BrightLaunchIQ AI Receptionist starts at $497/month for the Core plan, which includes 24/7 call answering, lead qualification, and CRM integration. That\u2019s a fraction of the cost of a full-time receptionist." },
  ],
};

const TattooShops = () => <IndustryPageTemplate data={data} />;
export default TattooShops;
