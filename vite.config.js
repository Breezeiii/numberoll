import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
      "@lib": "/lib"
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      name: "numberoll",
      fileName: "numberoll"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
