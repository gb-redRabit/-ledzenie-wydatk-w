import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
// npm run build
// git add dist -f
// git commit -m "adding dist"
// git subtree push --prefix dist origin gh-pages
