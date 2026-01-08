import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Zap } from "lucide-react";
import type { LeadData } from "@/pages/GetStarted";

interface LeadCaptureFormProps {
  onSubmit: (data: LeadData) => void;
}

const LeadCaptureForm = ({ onSubmit }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState<LeadData>({
    businessName: "",
    industry: "",
    email: "",
    phone: "",
    monthlyRevenue: "",
    currentLeadSource: "",
    biggestChallenge: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});

  const industries = [
    "Professional Services (Legal, Accounting, Consulting)",
    "Trade Services (HVAC, Solar, Contractors)",
    "Industrial/Logistics",
    "Healthcare/Medical",
    "Real Estate",
    "Technology/SaaS",
    "Retail/E-commerce",
    "Other",
  ];

  const revenueRanges = [
    "Under $100K/year",
    "$100K - $500K/year",
    "$500K - $1M/year",
    "$1M - $5M/year",
    "$5M+/year",
  ];

  const leadSources = [
    "Word of mouth only",
    "Some online presence",
    "Active marketing (ads, SEO)",
    "Dedicated sales team",
    "No consistent lead source",
  ];

  const challenges = [
    "Not enough leads",
    "Leads don't convert",
    "Takes too long to respond",
    "No time for follow-up",
    "Can't scale without hiring",
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LeadData, string>> = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business name is required";
    }
    if (!formData.industry) {
      newErrors.industry = "Please select an industry";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.monthlyRevenue) {
      newErrors.monthlyRevenue = "Please select revenue range";
    }
    if (!formData.currentLeadSource) {
      newErrors.currentLeadSource = "Please select lead source";
    }
    if (!formData.biggestChallenge) {
      newErrors.biggestChallenge = "Please select your challenge";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
          <Zap className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
          Get Your Free AI Growth Report
        </h1>
        <p className="text-muted-foreground">
          Tell us about your business and we'll show you exactly how many leads you're missing—and how to capture them.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Lead capture form">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="businessName">Business Name *</Label>
            <Input
              id="businessName"
              placeholder="Your Company Name"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className={errors.businessName ? "border-destructive" : ""}
            />
            {errors.businessName && (
              <p className="text-sm text-destructive" role="alert" id="businessName-error">{errors.businessName}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry *</Label>
            <Select
              value={formData.industry}
              onValueChange={(value) => setFormData({ ...formData, industry: value })}
            >
              <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-destructive" role="alert" id="industry-error">{errors.industry}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive" role="alert" id="email-error">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-destructive" role="alert" id="phone-error">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyRevenue">Annual Revenue *</Label>
          <Select
            value={formData.monthlyRevenue}
            onValueChange={(value) => setFormData({ ...formData, monthlyRevenue: value })}
          >
            <SelectTrigger className={errors.monthlyRevenue ? "border-destructive" : ""}>
              <SelectValue placeholder="Select revenue range" />
            </SelectTrigger>
            <SelectContent>
              {revenueRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.monthlyRevenue && (
            <p className="text-sm text-destructive" role="alert" id="revenue-error">{errors.monthlyRevenue}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="currentLeadSource">Current Lead Source *</Label>
          <Select
            value={formData.currentLeadSource}
            onValueChange={(value) => setFormData({ ...formData, currentLeadSource: value })}
          >
            <SelectTrigger className={errors.currentLeadSource ? "border-destructive" : ""}>
              <SelectValue placeholder="How do you get leads now?" />
            </SelectTrigger>
            <SelectContent>
              {leadSources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.currentLeadSource && (
            <p className="text-sm text-destructive" role="alert" id="leadsource-error">{errors.currentLeadSource}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="biggestChallenge">Biggest Sales Challenge *</Label>
          <Select
            value={formData.biggestChallenge}
            onValueChange={(value) => setFormData({ ...formData, biggestChallenge: value })}
          >
            <SelectTrigger className={errors.biggestChallenge ? "border-destructive" : ""}>
              <SelectValue placeholder="What's holding you back?" />
            </SelectTrigger>
            <SelectContent>
              {challenges.map((challenge) => (
                <SelectItem key={challenge} value={challenge}>
                  {challenge}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.biggestChallenge && (
            <p className="text-sm text-destructive" role="alert" id="challenge-error">{errors.biggestChallenge}</p>
          )}
        </div>

        <Button type="submit" variant="hero" size="lg" className="w-full">
          Generate My Free Report
          <ArrowRight className="ml-2" size={20} />
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          No credit card required. See your growth potential in 60 seconds.
        </p>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
