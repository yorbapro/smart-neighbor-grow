import { useEffect } from "react";

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
  keywords?: string;
  author?: string;
  speakable?: string[];
}

const useSEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "https://brightlaunchiq.com/og-image.png",
  twitterCard = "summary_large_image",
  keywords,
  author = "BrightLaunchIQ",
  speakable,
}: SEOConfig) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("author", author);

    // Open Graph tags
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:site_name", "BrightLaunchIQ", true);
    if (canonical) {
      setMeta("og:url", canonical, true);
    }

    // Twitter Card tags
    setMeta("twitter:card", twitterCard);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:site", "@BrightLaunchIQ");

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Speakable Schema for voice assistants
    if (speakable && speakable.length > 0) {
      const existingSpeakable = document.getElementById("speakable-schema");
      if (existingSpeakable) existingSpeakable.remove();

      const speakableScript = document.createElement("script");
      speakableScript.type = "application/ld+json";
      speakableScript.id = "speakable-schema";
      speakableScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": speakable,
        },
        "url": canonical || window.location.href,
      });
      document.head.appendChild(speakableScript);
    }

    return () => {
      const speakableEl = document.getElementById("speakable-schema");
      if (speakableEl) speakableEl.remove();
    };
  }, [title, description, canonical, ogType, ogImage, twitterCard, keywords, author, speakable]);
};

export default useSEO;