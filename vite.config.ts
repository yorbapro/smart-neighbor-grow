import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isSSR = process.env.BUILD_SSR === "true";

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      ...(isSSR
        ? {
            ssr: "src/entry-server.tsx",
            outDir: "dist/server",
            rollupOptions: {
              output: {
                entryFileNames: "[name].js",
              },
            },
          }
        : {
            outDir: "dist/client",
            rollupOptions: {
              input: path.resolve(__dirname, "index.html"),
            },
          }),
    },
    ssr: {
      noExternal: ["react-router-dom", "react-router"],
    },
  };
});
