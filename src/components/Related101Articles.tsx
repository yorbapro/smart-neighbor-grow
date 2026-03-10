import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { articlePath } from "@/data/ai-receptionists-101";

interface RelatedArticle {
  title: string;
  slug: string;
}

interface Props {
  articles: RelatedArticle[];
  className?: string;
}

/**
 * Reusable cross-link block pointing to AI Receptionists 101 articles.
 * Drop into any Learning Center page or industry page to boost internal link equity.
 */
const Related101Articles = ({ articles, className = "" }: Props) => (
  <div className={`bg-muted/50 border border-border rounded-xl p-6 ${className}`}>
    <div className="flex items-center gap-2 mb-3">
      <BookOpen className="w-4 h-4 text-primary" />
      <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">From AI Receptionists 101</h3>
    </div>
    <div className="space-y-2">
      {articles.map((a) => (
        <Link
          key={a.slug}
          to={articlePath(a.slug)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowRight className="w-3 h-3 shrink-0" />
          {a.title}
        </Link>
      ))}
      <Link
        to="/ai-receptionist/resources/ai-receptionists-101"
        className="flex items-center gap-2 text-xs text-muted-foreground/70 hover:text-primary transition-colors mt-2 pt-2 border-t border-border"
      >
        <ArrowRight className="w-3 h-3 shrink-0" />
        View all 24 articles →
      </Link>
    </div>
  </div>
);

export default Related101Articles;
