import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  base: '/SCAAA Website/'
  build: {
    sourcemap: true,
  },
});
