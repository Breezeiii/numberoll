import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: "docs"
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@lib": "/lib"
    }
  }
});
