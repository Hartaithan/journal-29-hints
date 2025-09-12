import type { LocalizedContent } from "../models/locale";

const strings = {
  title: "Journal 29 Hints",
  page: "Page",
  pages: "Pages",
  hidden: "Hidden",
};

export const translations: LocalizedContent<typeof strings> = {
  en: strings,
  ru: {
    title: "Дневник 29 Подсказки",
    page: "Страница",
    pages: "Страниц",
    hidden: "Скрыто",
  },
};
