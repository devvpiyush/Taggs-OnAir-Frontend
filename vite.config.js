import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@icon": path.resolve(__dirname, "./src/assets/icons"),
      "@util": path.resolve(__dirname, "./src/utils"),
      "@hook": path.resolve(__dirname, "./src/hooks"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@style": path.resolve(__dirname, "./src/styles"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@page": path.resolve(__dirname, "./src/pages"),
    },
  },
});
