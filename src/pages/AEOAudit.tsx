import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Search, 
  ArrowRight, 
  Bot, 
  Mic, 
  MapPin, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Loader2,
  Sparkles
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const auditFormSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(50),
  website: z.string().trim().max(255).optional(),
  services: z.string().trim().min(1, "Services description is required").max(500),
});

interface PlatformScore {
  name: string;
  score: number;
  status: "poor" | "fair" | "good" | "excellent";
}

interface Recommendation {
  priority: "high" | "medium" | "low";
  action: string;
  impact: string;
}

interface AuditResult {
  overallScore: number;
  platforms: PlatformScore[];
  strengths: string[];
  weaknesses: string[];
  recommendations: Recommendation[];
  competitorInsight: string;
  potentialScore: number;
}

const AEOAudit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    city: "",
    state: "",
    website: "",
    services: "",
  });

  useEffect(() => {
    document.title = "Free AEO Audit - Check Your AI Search Visibility | BrightLaunchIQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get a free AI search engine audit. See how your business ranks on ChatGPT, Gemini, Perplexity, and voice search. Discover your AEO score and actionable improvements.");
    }

    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = auditFormSchema.safeParse(formData);
    if (!validation.success) {
      toast.error(validation.error.errors[0].message);
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke("aeo-audit", {
        body: formData,
      });

      if (error) {
        throw new Error(error.message || "Failed to generate audit");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data);
      toast.success("Audit complete! See your results below.");
    } catch (err) {
      console.error("Audit error:", err);
      toast.error(err instanceof Error ? err.message : "Failed to generate audit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    if (score >= 25) return "text-orange-500";
    return "text-red-500";
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      excellent: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      good: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      fair: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      poor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
    };
    return colors[status as keyof typeof colors] || colors.poor;
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      high: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
      low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    };
    return colors[priority as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-subtle">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Free AI-Powered Analysis</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Free AEO Audit Tool
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how your business ranks on AI search engines. Get instant insights for ChatGPT, Gemini, Perplexity, and voice search.
            </p>
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Enter Your Business Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g., Smith Plumbing Co."
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Input
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="e.g., Plumbing, HVAC, Legal"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g., Sacramento"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g., CA"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input
                    id="website"
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourbusiness.com"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="services">Main Services *</Label>
                  <Textarea
                    id="services"
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    placeholder="Describe your main services (e.g., emergency plumbing repair, water heater installation, drain cleaning)"
                    rows={3}
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Analyzing Your AI Visibility...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 w-5 h-5" />
                      Get My Free AEO Audit
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {result && (
        <section className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Overall Score */}
              <div className="bg-card border border-border rounded-2xl p-8 mb-8 text-center">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Your AEO Score
                </h2>
                <div className={`font-display text-7xl md:text-8xl font-bold mb-4 ${getScoreColor(result.overallScore)}`}>
                  {result.overallScore}
                </div>
                <p className="text-muted-foreground mb-6">out of 100</p>
                
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="text-muted-foreground">Potential with optimization:</span>
                  <span className="font-bold text-accent">{result.potentialScore}/100</span>
                </div>
              </div>

              {/* Platform Scores */}
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Platform-by-Platform Breakdown
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {result.platforms.map((platform) => (
                    <div key={platform.name} className="bg-secondary/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{platform.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(platform.status)}`}>
                          {platform.status}
                        </span>
                      </div>
                      <div className="flex items-end gap-2">
                        <span className={`text-3xl font-bold ${getScoreColor(platform.score)}`}>
                          {platform.score}
                        </span>
                        <span className="text-muted-foreground text-sm mb-1">/100</span>
                      </div>
                      <div className="mt-2 bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${platform.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h3 className="font-display text-lg font-bold text-foreground">Strengths</h3>
                  </div>
                  <ul className="space-y-3">
                    {result.strengths.map((strength, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <h3 className="font-display text-lg font-bold text-foreground">Areas for Improvement</h3>
                  </div>
                  <ul className="space-y-3">
                    {result.weaknesses.map((weakness, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Priority Recommendations
                </h3>
                <div className="space-y-4">
                  {result.recommendations.map((rec, i) => (
                    <div key={i} className="bg-secondary/30 rounded-xl p-4">
                      <div className="flex items-start gap-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getPriorityBadge(rec.priority)}`}>
                          {rec.priority}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">{rec.action}</p>
                          <p className="text-sm text-muted-foreground">
                            <TrendingUp className="w-4 h-4 inline mr-1" />
                            {rec.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitor Insight */}
              <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 mb-8">
                <h3 className="font-display text-xl font-bold mb-4">
                  Competitive Landscape
                </h3>
                <p className="text-secondary-foreground/90">{result.competitorInsight}</p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 text-center">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to Dominate AI Search?
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
                  Let BrightLaunchIQ implement these optimizations for you. Our LocalLift™ service can boost your score from {result.overallScore} to {result.potentialScore}+.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                    <Link to="/get-started">
                      Get Started with LocalLift™
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <Link to="/products/locallift">
                      Learn More About AEO
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      {!result && (
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">
                What is Answer Engine Optimization?
              </h2>
              <p className="text-lg text-secondary-foreground/80">
                AEO ensures your business is the answer when customers ask AI assistants about services like yours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">AI Search Engines</h3>
                <p className="text-secondary-foreground/80 text-sm">
                  ChatGPT, Gemini, and Perplexity are replacing traditional Google searches for many queries.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Voice Search</h3>
                <p className="text-secondary-foreground/80 text-sm">
                  Siri, Alexa, and Google Assistant need optimized content to recommend your business.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Local Citations</h3>
                <p className="text-secondary-foreground/80 text-sm">
                  AI models cite businesses they trust. Building your Entity Graph makes you citable.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default AEOAudit;
