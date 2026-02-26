import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import useSEO from "@/hooks/useSEO";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  ClipboardCheck,
  Loader2,
  Building2,
  PhoneIncoming,
  PhoneOff,
  Clock,
  CalendarCheck,
  Headphones,
  AlertTriangle,
  Brain,
  Timer,
} from "lucide-react";

// ---------- Types ----------
interface QuizAnswer {
  businessType: string;
  callVolume: string;
  missedCallFrequency: string;
  afterHoursNeeds: string;
  appointmentBooking: string;
  currentCallHandling: string;
  primaryPainPoint: string;
  aiReceptionistAwareness: string;
  timeline: string;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  consent: boolean;
}

interface QuizResult {
  score: number;
  segment: string;
  headline: string;
  insights: string[];
  recommendations: string[];
}

// ---------- Questions ----------
const questions = [
  {
    key: "businessType" as const,
    icon: Building2,
    question: "What type of business do you run?",
    options: [
      "Home Services (HVAC, Plumbing, Roofing)",
      "Medical / Dental",
      "Legal",
      "Real Estate",
      "Agencies / Consultants",
      "Multi-Location Business",
      "Other",
    ],
  },
  {
    key: "callVolume" as const,
    icon: PhoneIncoming,
    question: "How many phone calls does your business receive per day?",
    options: ["1–10 calls", "11–25 calls", "26–50 calls", "51–100 calls", "100+ calls"],
  },
  {
    key: "missedCallFrequency" as const,
    icon: PhoneOff,
    question: "How often do you miss important customer calls?",
    options: [
      "Rarely (less than 5%)",
      "Occasionally (5–15%)",
      "Frequently (15–30%)",
      "Very Often (30%+)",
      "I don't know",
    ],
  },
  {
    key: "afterHoursNeeds" as const,
    icon: Clock,
    question: "Do you need to answer calls outside of business hours?",
    options: [
      "Yes, it's critical for my business",
      "Sometimes, but not urgent",
      "No, business hours only",
      "Not sure",
    ],
  },
  {
    key: "appointmentBooking" as const,
    icon: CalendarCheck,
    question: "Does your business schedule appointments over the phone?",
    options: [
      "Yes, it's a major part of our business",
      "Yes, occasionally",
      "No, we don't do appointments",
      "We use online booking only",
    ],
  },
  {
    key: "currentCallHandling" as const,
    icon: Headphones,
    question: "How do you currently handle incoming calls?",
    options: [
      "In-house receptionist",
      "Virtual receptionist service",
      "Voicemail",
      "Staff members answer when available",
      "Mix of the above",
    ],
  },
  {
    key: "primaryPainPoint" as const,
    icon: AlertTriangle,
    question: "What's your biggest challenge with phone calls?",
    options: [
      "Missing calls during busy times",
      "After-hours calls going to voicemail",
      "Staff overwhelmed with call volume",
      "Inconsistent call quality",
      "Difficulty scheduling appointments",
      "High cost of current solution",
    ],
  },
  {
    key: "aiReceptionistAwareness" as const,
    icon: Brain,
    question: "How familiar are you with AI receptionist technology?",
    options: [
      "Very familiar, actively researching",
      "Somewhat familiar, curious to learn more",
      "Just heard about it",
      "This is new to me",
    ],
  },
  {
    key: "timeline" as const,
    icon: Timer,
    question: "When are you looking to implement an AI receptionist solution?",
    options: [
      "Immediately (within 1 month)",
      "Soon (1–3 months)",
      "Exploring options (3–6 months)",
      "Just researching for now",
    ],
  },
];

// ---------- Scoring ----------
function calculateScore(answers: QuizAnswer): QuizResult {
  let score = 0;

  // Call volume
  if (["26–50 calls", "51–100 calls", "100+ calls"].includes(answers.callVolume)) score += 20;
  else if (answers.callVolume === "11–25 calls") score += 10;

  // Missed call rate
  if (["Frequently (15–30%)", "Very Often (30%+)"].includes(answers.missedCallFrequency)) score += 25;
  else if (answers.missedCallFrequency === "Occasionally (5–15%)") score += 12;
  else if (answers.missedCallFrequency === "I don't know") score += 15;

  // After-hours
  if (answers.afterHoursNeeds === "Yes, it's critical for my business") score += 15;
  else if (answers.afterHoursNeeds === "Sometimes, but not urgent") score += 8;

  // Appointment booking
  if (answers.appointmentBooking === "Yes, it's a major part of our business") score += 15;
  else if (answers.appointmentBooking === "Yes, occasionally") score += 8;

  // Pain point
  if (answers.primaryPainPoint) score += 15;

  // Timeline
  if (answers.timeline === "Immediately (within 1 month)") score += 10;
  else if (answers.timeline === "Soon (1–3 months)") score += 7;

  score = Math.min(score, 100);

  // Segment
  let segment: string;
  let headline: string;
  if (score >= 80) {
    segment = "High Priority";
    headline = "Your Business is Ready for an AI Receptionist!";
  } else if (score >= 60) {
    segment = "Strong Fit";
    headline = "An AI Receptionist Can Significantly Improve Your Call Handling";
  } else if (score >= 40) {
    segment = "Moderate Opportunity";
    headline = "There's Opportunity to Optimize with an AI Receptionist";
  } else {
    segment = "Exploratory";
    headline = "Let's Explore How an AI Receptionist Could Help Your Business";
  }

  // Insights based on answers
  const insights: string[] = [];
  if (["Frequently (15–30%)", "Very Often (30%+)"].includes(answers.missedCallFrequency)) {
    insights.push("You're missing a significant portion of calls, which directly translates to lost revenue. An AI receptionist answers 100% of calls, 24/7.");
  }
  if (["26–50 calls", "51–100 calls", "100+ calls"].includes(answers.callVolume)) {
    insights.push(`You handle ${answers.callVolume} daily. An AI receptionist handles unlimited simultaneous calls during peak times.`);
  }
  if (answers.afterHoursNeeds === "Yes, it's critical for my business") {
    insights.push("After-hours calls are critical for your business. An AI receptionist ensures you never miss an emergency or opportunity outside office hours.");
  }
  if (answers.primaryPainPoint === "Missing calls during busy times") {
    insights.push("Peak-time missed calls are costing you revenue. An AI receptionist eliminates hold times and captures every lead.");
  }
  if (answers.primaryPainPoint === "High cost of current solution") {
    insights.push("An AI receptionist costs a fraction of hiring staff — no payroll taxes, benefits, or overtime.");
  }
  if (insights.length === 0) {
    insights.push("Even businesses with moderate call volumes benefit from consistent, professional call handling that never takes a day off.");
  }

  // Recommendations
  const recommendations: string[] = [];
  if (answers.afterHoursNeeds !== "No, business hours only") {
    recommendations.push("24/7 AI Receptionist — Never Miss an After-Hours Call Again");
  }
  if (["Yes, it's a major part of our business", "Yes, occasionally"].includes(answers.appointmentBooking)) {
    recommendations.push("AI Receptionist Appointment Scheduling — Books Directly to Your Calendar");
  }
  recommendations.push("Intelligent Call Routing — Urgent Calls Go Straight to Your Team");
  if (answers.callVolume !== "1–10 calls") {
    recommendations.push("Unlimited Simultaneous Call Handling — No Hold Times During Peak Hours");
  }

  return { score, segment, headline, insights, recommendations: recommendations.slice(0, 3) };
}

// ---------- Component ----------
const AIReceptionistAssessment = () => {
  useSEO({
    title: "AI Receptionist Readiness Assessment | BrightLaunchIQ",
    description: "Take our free 2-minute AI Receptionist Readiness Assessment. Discover how much revenue you're losing to missed calls and get a personalized ROI report for your business.",
    canonical: "https://brightlaunchiq.com/ai-receptionist-readiness-assessment",
    keywords: "AI receptionist assessment, AI receptionist readiness, AI receptionist quiz, AI receptionist for small business, AI phone receptionist",
  });

  // Structured data for the assessment page
  useEffect(() => {
    const existingSchemas = document.querySelectorAll('script[data-assessment-schema]');
    existingSchemas.forEach(el => el.remove());

    // FAQPage schema
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-assessment-schema", "faq");
    faqScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an AI Receptionist Readiness Assessment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An AI Receptionist Readiness Assessment is a free, 2-minute quiz that evaluates your business's call handling challenges and scores how much you'd benefit from an AI receptionist. It analyzes your call volume, missed call rate, after-hours needs, and current setup to generate a personalized readiness score from 0–100."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the AI Receptionist Readiness Assessment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The assessment takes approximately 2 minutes to complete. It consists of 9 quick questions about your business call handling, followed by a brief contact form to receive your personalized AI Receptionist Readiness Report."
          }
        },
        {
          "@type": "Question",
          "name": "Is the AI Receptionist Readiness Assessment free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the AI Receptionist Readiness Assessment is completely free. You'll receive an instant readiness score and a detailed report sent to your email with personalized recommendations for your business."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // HowTo schema
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.setAttribute("data-assessment-schema", "howto");
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Take the AI Receptionist Readiness Assessment",
      "description": "Complete a free 2-minute assessment to discover your AI receptionist readiness score and get personalized recommendations.",
      "step": [
        { "@type": "HowToStep", "name": "Answer 9 quick questions", "text": "Tell us about your business type, call volume, missed call rate, and current call handling setup." },
        { "@type": "HowToStep", "name": "Enter your contact details", "text": "Provide your name, email, and business name to receive your personalized report." },
        { "@type": "HowToStep", "name": "Get your readiness score", "text": "Instantly see your AI Receptionist Readiness Score from 0–100 with tailored insights and recommendations." }
      ]
    });
    document.head.appendChild(howToScript);

    return () => {
      const schemas = document.querySelectorAll('script[data-assessment-schema]');
      schemas.forEach(el => el.remove());
    };
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    consent: false,
  });
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = questions.length + 1; // questions + contact form
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const isContactStep = currentStep === questions.length;

  const selectAnswer = useCallback((key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // Auto-advance after short delay
    setTimeout(() => setCurrentStep((s) => Math.min(s + 1, totalSteps - 1)), 300);
  }, [totalSteps]);

  const handleSubmit = async () => {
    if (!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.businessName) {
      setSubmitError("Please fill in all required fields.");
      return;
    }
    if (!contactInfo.consent) {
      setSubmitError("Please agree to receive your readiness report.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const fullAnswers = answers as QuizAnswer;
    const quizResult = calculateScore(fullAnswers);

    try {
      // Save to database
      const { error: dbError } = await supabase.from("ai_receptionist_quiz_responses").insert({
        first_name: contactInfo.firstName.trim(),
        last_name: contactInfo.lastName.trim(),
        email: contactInfo.email.trim().toLowerCase(),
        phone: contactInfo.phone.trim() || null,
        business_name: contactInfo.businessName.trim(),
        business_type: fullAnswers.businessType,
        call_volume: fullAnswers.callVolume,
        missed_call_frequency: fullAnswers.missedCallFrequency,
        after_hours_needs: fullAnswers.afterHoursNeeds,
        appointment_booking: fullAnswers.appointmentBooking,
        current_call_handling: fullAnswers.currentCallHandling,
        primary_pain_point: fullAnswers.primaryPainPoint,
        ai_receptionist_awareness: fullAnswers.aiReceptionistAwareness,
        timeline: fullAnswers.timeline,
        calculated_score: quizResult.score,
        score_segment: quizResult.segment,
        email_consent: contactInfo.consent,
      });

      if (dbError) throw dbError;

      // Send readiness report email
      try {
        await supabase.functions.invoke("send-readiness-report", {
          body: {
            firstName: contactInfo.firstName.trim(),
            lastName: contactInfo.lastName.trim(),
            email: contactInfo.email.trim().toLowerCase(),
            businessName: contactInfo.businessName.trim(),
            score: quizResult.score,
            segment: quizResult.segment,
            headline: quizResult.headline,
            insights: quizResult.insights,
            recommendations: quizResult.recommendations,
            answers: fullAnswers,
          },
        });
      } catch {
        // Non-blocking — results still shown
        console.warn("Readiness report email could not be sent.");
      }

      setResult(quizResult);
    } catch (err: any) {
      setSubmitError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Results view ----------
  if (result) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 12%) 0%, hsl(215, 28%, 7%) 50%, hsl(220, 30%, 3%) 100%)' }}>
        <Header />
        <main id="main-content" className="flex-1 pt-28 pb-20">
          <div className="container max-w-3xl mx-auto">
            {/* Score */}
            <div className="text-center mb-12 animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6">
                <ClipboardCheck className="w-4 h-4" />
                Assessment Complete
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
                Your AI Receptionist Readiness Score
              </h1>
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="hsl(215, 17%, 15%)" strokeWidth="12" />
                  <circle
                    cx="80" cy="80" r="70"
                    fill="none"
                    stroke="hsl(212, 92%, 45%)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={`${(result.score / 100) * 440} 440`}
                    transform="rotate(-90 80 80)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-white">{result.score}</span>
                </div>
              </div>
              <p className="text-lg text-primary font-semibold mb-2">{result.segment}</p>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white/90">{result.headline}</h2>
            </div>

            {/* Insights */}
            <div className="mb-10 p-8 rounded-2xl bg-white/5 border border-white/10 animate-slide-up">
              <h3 className="font-display text-lg font-bold text-white mb-4">Based on Your Answers: Why Your Business Needs an AI Receptionist</h3>
              <ul className="space-y-3">
                {result.insights.map((insight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommendations */}
            <div className="mb-10 p-8 rounded-2xl bg-primary/5 border border-primary/20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display text-lg font-bold text-white mb-4">How the BrightLaunchIQ AI Receptionist Can Help</h3>
              <ul className="space-y-3">
                {result.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm leading-relaxed">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email confirmation */}
            <div className="mb-10 p-6 rounded-2xl bg-btn-green/10 border border-btn-green/20 text-center animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <CheckCircle className="w-6 h-6 text-btn-green mx-auto mb-2" />
              <p className="text-white/80 text-sm">
                We've sent your complete AI Receptionist Readiness Report to <strong className="text-white">{contactInfo.email}</strong>. Check your inbox!
              </p>
            </div>

            {/* Next steps */}
            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-display text-lg font-bold text-white mb-6">Next Steps</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild className="group">
                  <a href="tel:1-877-879-5552">
                    <Phone className="w-5 h-5" />
                    Call Our Live AI Receptionist
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Book a Personalized Demo</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/ai-receptionist">Learn More About AI Receptionist</Link>
                </Button>
              </div>
              <Button variant="ghost" size="lg" asChild className="text-white/60 hover:text-white">
                <Link to="/pricing">View AI Receptionist Pricing</Link>
              </Button>
            </div>

            {/* Educational callout */}
            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-display text-lg font-bold text-white mb-3">What is an AI Receptionist?</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                An AI receptionist is software that answers your business phone calls automatically — 24/7, 365 days a year. It handles appointment booking, lead qualification, call routing, and FAQs, just like a human receptionist but at a fraction of the cost.
              </p>
              <Link to="/ai-receptionist" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Learn more about AI Receptionists <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ---------- Quiz view ----------
  const currentQuestion = !isContactStep ? questions[currentStep] : null;
  const canGoBack = currentStep > 0;
  const currentAnswer = currentQuestion ? answers[currentQuestion.key] : undefined;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, hsl(215, 28%, 12%) 0%, hsl(215, 28%, 7%) 50%, hsl(220, 30%, 3%) 100%)' }}>
      <Header />
      <main id="main-content" className="flex-1 pt-28 pb-20">
        <div className="container max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              <ClipboardCheck className="w-4 h-4" />
              Free 2-Minute Assessment
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Free 2-Minute AI Readiness Audit
            </h1>
            <p className="text-white/60 text-base max-w-lg mx-auto">              Discover your business\'s AI readiness and unlock a personalized ROI report, revealing how an AI receptionist can boost your revenue and efficiency.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-white/60 mb-2">
              <span>
                {isContactStep
                  ? "Final Step — Get Your Results"
                  : `Question ${currentStep + 1} of ${questions.length}`}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/10" />
          </div>

          {/* Question card */}
          <div className="p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 animate-fade-in" key={currentStep}>
            {isContactStep ? (
              <>
                <div className="text-center mb-8">
                  <ClipboardCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    Get Your AI Receptionist Readiness Report
                  </h1>
                  <p className="text-white/60 text-sm">Enter your details and we'll generate your personalized score instantly.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/70 mb-1 block">First Name *</label>
                      <Input
                        value={contactInfo.firstName}
                        onChange={(e) => setContactInfo((p) => ({ ...p, firstName: e.target.value }))}
                        placeholder="John"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70 mb-1 block">Last Name *</label>
                      <Input
                        value={contactInfo.lastName}
                        onChange={(e) => setContactInfo((p) => ({ ...p, lastName: e.target.value }))}
                        placeholder="Smith"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Email Address *</label>
                    <Input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo((p) => ({ ...p, email: e.target.value }))}
                      placeholder="john@mybusiness.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Phone Number (optional)</label>
                    <Input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="(555) 123-4567"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-1 block">Business Name *</label>
                    <Input
                      value={contactInfo.businessName}
                      onChange={(e) => setContactInfo((p) => ({ ...p, businessName: e.target.value }))}
                      placeholder="Smith's HVAC Services"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox
                      id="consent"
                      checked={contactInfo.consent}
                      onCheckedChange={(checked) => setContactInfo((p) => ({ ...p, consent: checked === true }))}
                      className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
                    />
                    <label htmlFor="consent" className="text-sm text-white/60 leading-relaxed cursor-pointer">
                      Yes, send me my personalized AI Receptionist Readiness Report and helpful tips via email. I agree to receive marketing communications from BrightLaunchIQ.
                    </label>
                  </div>

                  {submitError && (
                    <p className="text-destructive text-sm font-medium">{submitError}</p>
                  )}

                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full group mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Calculating Your Score...
                      </>
                    ) : (
                      <>
                        Get My AI Receptionist Readiness Score
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </>
            ) : currentQuestion ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <currentQuestion.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h1 className="font-display text-xl md:text-2xl font-bold text-white">
                    {currentQuestion.question}
                  </h1>
                </div>

                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectAnswer(currentQuestion.key, option)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                        currentAnswer === option
                          ? "bg-primary/20 border-primary text-white"
                          : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="text-sm font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          {/* Navigation */}
          {canGoBack && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Question
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionistAssessment;
