import { defineConfig } from "astro/config";
import { defaultLocale } from "./src/constants/locale";

export default defineConfig({
  i18n: {
    locales: ["en", "ru"],
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
