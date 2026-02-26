import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";

const WhitepaperPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [executiveSummary, setExecutiveSummary] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWhitepaper = async () => {
      setLoading(true);
      setError(null);
      try {
        const fileName = slug?.replace(/-/g, "_") + ".md";
        const response = await fetch(`/whitepapers/${fileName}`);
        if (!response.ok) {
          throw new Error(`Failed to load whitepaper: ${response.statusText}`);
        }
        const text = await response.text();
        setMarkdown(text);

        // Extract title and executive summary for SEO
        const lines = text.split("\n");
        const extractedTitle = lines[0].replace(/^#\s*/, "").trim();
        setTitle(extractedTitle);

        let summary = "";
        let inSummary = false;
        for (const line of lines) {
          if (line.includes("Executive Summary")) {
            inSummary = true;
            continue;
          }
          if (inSummary && line.trim() !== "") {
            summary += line.trim() + " ";
            if (summary.length >= 160) break; // Meta description limit
          }
          if (inSummary && line.trim() === "") {
            break; // End of summary paragraph
          }
        }
        setExecutiveSummary(summary.trim().substring(0, 160));

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchWhitepaper();
    }
  }, [slug]);

  useSEO({
    title: title ? `${title} | BrightLaunchIQ Case Study` : "BrightLaunchIQ Case Study",
    description: executiveSummary || "Learn how BrightLaunchIQ AI Receptionist transforms businesses with real-world case studies and authority papers.",
    canonical: slug ? `https://brightlaunchiq.com/case-studies/${slug}` : "https://brightlaunchiq.com/case-studies",
    keywords: `${title}, AI Receptionist, AI Voice Agent, Case Study, Whitepaper, BrightLaunchIQ`,
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 container py-16">
          <h1 className="text-3xl font-bold text-red-500">Error Loading Whitepaper</h1>
          <p className="text-muted-foreground">{error}</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container">
          <Breadcrumb />
        </div>

        <article className="py-12 md:py-16">
          <div className="container max-w-4xl mx-auto prose prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default WhitepaperPage;
