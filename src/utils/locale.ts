import type { AstroGlobal } from "astro";
import { defaultLocale } from "../constants/locale";
import type { Locale } from "../models/locale";

export const getLocale = (astro: AstroGlobal): Locale => {
  return (astro.currentLocale as Locale) ?? defaultLocale;
};
