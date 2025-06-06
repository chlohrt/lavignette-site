import { defineUserConfig } from "vuepress";
import path from "path";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/lavignette-site/",
  sidebar: false,
  lang: "en-US",
  title: "❦ La Vignette Festival ❦",
  description: "La Vignette presentation page",
  clientConfigFile: path.resolve(__dirname, "./client/config.ts"),
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "icon", href: "/assets/image/favicon_vignette.ico" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Advent+Pro:ital,wght@0,100..900;1,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Gafata&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  theme,
  bundlerConfig: {
    viteOptions: {
      optimizeDeps: {
        include: ["esp-web-tools"],
      },
    },
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
