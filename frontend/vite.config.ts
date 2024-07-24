import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(process.env);

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["animejs/lib/anime.es.js"],
  },
});
