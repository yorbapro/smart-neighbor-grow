import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        // Output directory of `vite build`
        staticDir: path.resolve(__dirname, "dist"),
        // Primary funnel pages + key product pages
        routes: [
          "/",
          "/pricing",
          "/get-started",
          "/products/launchpad-360",
          "/products/locallift",
          "/products/custom-ai-workflows",
          "/aeo-audit",
          "/contact",
          "/about",
          "/faq",
        ],
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
