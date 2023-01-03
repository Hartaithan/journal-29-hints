import { Locale } from "./LocaleModel";

export interface IPage {
  id: number;
  created_at: string;
  updated_at: string;
  value: number;
  book_id: number;
  lang: Locale;
}

export type IPagePayload = Pick<IPage, "value" | "book_id" | "lang">;
