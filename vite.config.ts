import { defineConfig } from "vite";

export default defineConfig({
  root: "pages",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
  server: {
    open: "/",
  },
});
