import { Locale } from "../models/LocaleModel";

const template = {
  page: "",
  pages: "",
};

export type BooksLocales = typeof template;

export interface ILocaleObject {
  [key: Locale | string]: BooksLocales;
}

export const pages: ILocaleObject = {
  en: {
    ...template,
    page: "Page",
    pages: "Pages",
  },
  ru: {
    ...template,
    page: "Страница",
    pages: "Страницы",
  },
};
