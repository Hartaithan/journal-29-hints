import { Locale } from "../models/LocaleModel";

const template = {
  title: "",
  admin: "",
  welcome: "",
  locale: "",
  notFound: "",
  pageNotFound: "",
  signIn: "",
  signOut: "",
  submit: "",
  inputs: {
    email: {
      label: "",
      placeholder: "",
    },
    password: {
      label: "",
      placeholder: "",
    },
  },
};

export type MainLocales = typeof template;

export interface ILocaleObject {
  [key: Locale | string]: MainLocales;
}

export const main: ILocaleObject = {
  en: {
    ...template,
    title: "Journal 29 Hints",
    admin: "Admin Panel",
    welcome: "Welcome to",
    locale: "Locale",
    notFound: "Not found",
    pageNotFound: "Page not found",
    signIn: "Sign in",
    signOut: "Sign out",
    submit: "Submit",
    inputs: {
      email: {
        label: "Mail",
        placeholder: "Enter email",
      },
      password: {
        label: "Password",
        placeholder: "Enter password",
      },
    },
  },
  ru: {
    ...template,
    title: "Дневник 29 Подсказки",
    admin: "Админ. панель",
    welcome: "Добро пожаловать в",
    locale: "Локаль",
    notFound: "Значение не найдено",
    pageNotFound: "Страницы не существует",
    signIn: "Войти",
    signOut: "Выйти",
    submit: "Отправить",
    inputs: {
      email: {
        label: "Почта",
        placeholder: "Введите почту",
      },
      password: {
        label: "Пароль",
        placeholder: "Введите пароль",
      },
    },
  },
};
