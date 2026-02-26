import IndustryPageTemplate, { IndustryPageData } from "@/components/industries/IndustryPageTemplate";

const data: IndustryPageData = {
  name: "Notary Publics",
  slug: "notary-publics",
  lossAmount: "25,000",
  lossAmountNum: 25000,
  useCases: ["Mobile Notary Booking", "Document FAQ", "Travel Fee Inquiries", "Signing Agent Scheduling", "Apostille Service FAQ", "After-Hours Booking"],
  crm: "Snapdocs",
  sectorLabel: "Legal & Professional",
  similarBusinesses: [
    { name: "CPAs & Tax Professionals", slug: "cpas-tax-professionals" },
    { name: "Estate Planning Attorneys", slug: "estate-planning-attorneys" },
    { name: "Private Investigators", slug: "private-investigators" },
  ],
  faqs: [
    { question: "Can an AI receptionist book mobile notary appointments?", answer: "Yes. The AI captures document type, signer count, location, and preferred time — then schedules mobile notary visits directly into your calendar." },
    { question: "Does the AI integrate with Snapdocs?", answer: "Yes. BrightLaunchIQ connects with Snapdocs to manage scheduling, track assignments, and update client records automatically." },
    { question: "How much do notary publics lose from missed calls?", answer: "$25,000 or more per year. Notary clients need immediate service — if they can't reach you, they'll book with the next available notary within minutes." },
    { question: "Can the AI handle travel fee inquiries?", answer: "Yes. The AI calculates and communicates travel fees based on your configured rates and the caller's location, providing instant transparent pricing." },
    { question: "Does the AI answer document requirement questions?", answer: "Yes. The AI explains required identification, document types accepted, and preparation steps callers need to complete before their notary appointment." },
    { question: "How quickly can a notary public get started?", answer: "Most notary practices are live within 48 hours. We configure mobile booking workflows, integrate with NotaryGadget, and customize travel fee calculations." },
  ],
};

const NotaryPublics = () => <IndustryPageTemplate data={data} />;
export default NotaryPublics;
