import type { AstroGlobal } from "astro";
import { defaultLocale } from "../constants/locale";
import type { Locale } from "../models/locale";

export const getLocale = (astro: AstroGlobal): Locale => {
  console.log("astro", astro.currentLocale);
  return (astro.currentLocale as Locale) ?? defaultLocale;
};
