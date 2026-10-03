import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, ".") },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      // multi-page site: every standalone HTML page is an entry
      input: {
        main: resolve(__dirname, "index.html"),
        vaultshield: resolve(__dirname, "vaultshield.html"),
        vesper: resolve(__dirname, "vesper.html"),
      },
    },
  },
});
