import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import useSEO from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { getArticleBySlug, articles, articlePath, HUB_PATH, pillarNames } from "@/data/ai-receptionists-101";

const AIReceptionists101Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  // Always call hooks, even if article not found
  useSEO({
    title: article?.seoTitle || "Article Not Found | BrightLaunchIQ",
    description: article?.metaDescription || "",
    canonical: article ? `https://brightlaunchiq.com${articlePath(article.slug)}` : undefined,
    keywords: article?.keyword,
  });

  // Inject schema
  useEffect(() => {
    if (!article) return;
    const schemaId = "article-101-schema";
    document.getElementById(schemaId)?.remove();

    const schemas: object[] = [];

    // Article schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.metaDescription,
      "author": { "@type": "Organization", "name": "BrightLaunchIQ" },
      "publisher": { "@type": "Organization", "name": "BrightLaunchIQ" },
      "url": `https://brightlaunchiq.com${articlePath(article.slug)}`,
      "isPartOf": {
        "@type": "CollectionPage",
        "name": "AI Receptionists 101",
        "url": "https://brightlaunchiq.com/ai-receptionist/resources/ai-receptionists-101",
      },
    });

    // FAQ schema
    if (article.schemaType.includes("faq")) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": article.question,
          "acceptedAnswer": { "@type": "Answer", "text": article.tldr },
        }],
      });
    }

    // Breadcrumb schema
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://brightlaunchiq.com/" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://brightlaunchiq.com/ai-receptionist/resources" },
        { "@type": "ListItem", "position": 3, "name": "AI Receptionists 101", "item": "https://brightlaunchiq.com/ai-receptionist/resources/ai-receptionists-101" },
        { "@type": "ListItem", "position": 4, "name": article.title },
      ],
    });

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = schemaId;
    script.textContent = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => { document.getElementById(schemaId)?.remove(); };
  }, [article]);

  if (!article) return <Navigate to={HUB_PATH} replace />;

  const prevArticle = articles.find((a) => a.id === article.id - 1);
  const nextArticle = articles.find((a) => a.id === article.id + 1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content" className="pt-24">
        <div className="container"><Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/ai-receptionist/resources" },
          { label: "AI Receptionists 101", href: HUB_PATH },
          { label: article.title },
        ]} /></div>

        <article className="py-10 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {/* Meta bar */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Link to={HUB_PATH} className="hover:text-primary transition-colors">AI Receptionists 101</Link>
                <ChevronRight className="w-3 h-3" />
                <span>Pillar {article.pillarNumber}: {article.pillar}</span>
                <span className="ml-auto font-mono">Article {article.id} of 24</span>
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {article.title}
              </h1>

              {/* TL;DR */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8">
                <p className="text-sm font-semibold text-primary mb-1">The Bottom Line</p>
                <p className="text-foreground">{article.tldr}</p>
              </div>

              {/* Sections */}
              {article.sections.map((section, si) => (
                <div key={si} className="mb-8">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                    {section.heading}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line mb-3">
                    {section.content.split("**").map((part, i) =>
                      i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                    )}
                  </div>
                  {section.listItems && (
                    <ul className="space-y-3 mb-3">
                      {section.listItems.map((item, li) => (
                        <li key={li} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>
                            {item.split("**").map((part, i) =>
                              i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.tableData && (
                    <div className="overflow-x-auto mb-3">
                      <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                        <thead>
                          <tr className="bg-muted">
                            {section.tableData.headers.map((h, i) => (
                              <th key={i} className="text-left p-3 font-semibold text-foreground border-b border-border">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.tableData.rows.map((row, ri) => (
                            <tr key={ri} className="border-b border-border last:border-0">
                              {row.map((cell, ci) => (
                                <td key={ci} className="p-3 text-muted-foreground">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              {/* References */}
              {article.references && article.references.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">References</h3>
                  <ul className="space-y-1">
                    {article.references.map((ref, ri) => (
                      <li key={ri}>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          {ref.label} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Keep Learning */}
              <div className="bg-muted/50 rounded-xl p-6 mb-8 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Keep Learning</h3>
                <p className="text-muted-foreground text-sm mb-4">Ready for the next step?</p>
                <div className="flex flex-col gap-2">
                  {article.keepLearning.map((kl, ki) => (
                    <Link
                      key={ki}
                      to={kl.slug ? articlePath(kl.slug) : HUB_PATH}
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      {kl.text}
                    </Link>
                  ))}
                  <Link to={HUB_PATH} className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mt-1">
                    <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                    Back to AI Receptionists 101 Hub
                  </Link>
                </div>
              </div>

              {/* Prev/Next navigation */}
              <div className="flex justify-between items-center border-t border-border pt-6">
                {prevArticle ? (
                  <Link to={articlePath(prevArticle.slug)} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">#{prevArticle.id}: {prevArticle.title.slice(0, 40)}…</span>
                    <span className="sm:hidden">Previous</span>
                  </Link>
                ) : <div />}
                {nextArticle ? (
                  <Link to={articlePath(nextArticle.slug)} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <span className="hidden sm:inline">#{nextArticle.id}: {nextArticle.title.slice(0, 40)}…</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : <div />}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Ready to See It in Action?</h3>
                <p className="text-muted-foreground text-sm mb-5">Get started with BrightLaunchIQ's AI Receptionist today.</p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/ai-receptionist/get-started">Get Started <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default AIReceptionists101Article;
