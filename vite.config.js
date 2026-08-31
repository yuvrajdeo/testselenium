import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/testselenium/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
  },
  preview: {
    port: 3000,
  },
});