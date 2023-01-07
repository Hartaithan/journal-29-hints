import { ILocaleObject } from "../models/LocaleModel";

const template = {
  title: "",
  admin: "",
  welcome: "",
  locale: "",
  notFound: "",
};

export type MainLocales = typeof template;

export const main: ILocaleObject = {
  en: {
    ...template,
    title: "Journal 29 Hints",
    admin: "Admin Panel",
    welcome: "Welcome to",
    locale: "Locale:",
    notFound: "Page not found",
  },
  ru: {
    ...template,
    title: "Дневник 29 Подсказки",
    admin: "Админ. панель",
    welcome: "Добро пожаловать в",
    locale: "Локаль:",
    notFound: "Страницы не существует",
  },
};
