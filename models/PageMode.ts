import { Locale } from "./LocaleModel";

export interface IPage {
  id: number;
  created_at: string;
  updated_at: string;
  value: number;
  label: string;
  book_id: number;
  lang: Locale;
}

export type IPagePayload = Pick<IPage, "value" | "label" | "book_id" | "lang">;
