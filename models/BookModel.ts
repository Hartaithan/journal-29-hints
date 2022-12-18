import { Locale } from "./LocaleModel";

export interface IBook {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  lang: Locale;
}
