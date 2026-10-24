// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lakam4150-commits.github.io",
  base: "/my-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
