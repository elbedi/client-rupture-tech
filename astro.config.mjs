// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://rupture.tech",

  redirects: {
    "/home": "/",
  },

  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes("/legal/"),
    }),
  ],
});
