export type Locale = "ru" | "en";

export interface IMainStrings {
  title: string;
  welcome: string;
  locale: string;
}

export interface ILocaleObject {
  [key: Locale | string]: IMainStrings;
}
