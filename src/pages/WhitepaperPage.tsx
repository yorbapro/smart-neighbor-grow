import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2, Calendar, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import whitepaperMetadata from "./resources/whitepaper_metadata.json";
import { Helmet } from "react-helmet-async";

const WhitepaperPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const meta = whitepaperMetadata.find((m) => m.slug === slug);

  useEffect(() => {
    if (!meta) {
      setError(true);
      setLoading(false);
      return;
    }

    const fetchContent = async () => {
      try {
        const response = await fetch(`/whitepapers/${meta.fileName}`);
        if (!response.ok) throw new Error("Failed to fetch content");
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error("Error loading whitepaper:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
    window.scrollTo(0, 0);
  }, [slug, meta]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !meta) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Whitepaper Not Found</h1>
        <p className="text-muted-foreground mb-8">The whitepaper you are looking for does not exist or has been moved.</p>
        <Button asChild>
          <Link to="/case-studies">Back to Case Studies</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{meta.title} | BrightLaunchIQ Authority Papers</title>
        <meta name="description" content={meta.summary} />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Authority Papers
          </Link>

          <div className="space-y-6 mb-12">
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Feb 2026</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 12 min read</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1" /> BrightLaunchIQ Research</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {meta.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="outline" size="sm" className="rounded-full">
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl prose-img:shadow-xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to implement these insights?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how BrightLaunchIQ's AI Receptionist can transform your business operations and capture every opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full px-8">
                <Link to="/get-started">Get Started Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                <Link to="/ai-receptionist-readiness-assessment">Take AI Readiness Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhitepaperPage;
