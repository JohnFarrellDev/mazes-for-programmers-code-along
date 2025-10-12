import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
        basicMazeGeneration: resolve(__dirname, "./basic-maze-generation.html"),
      },
    },
  },
});
