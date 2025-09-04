import type { LocalizedContent } from "./locale";
import type { Page } from "./page";

export interface Book {
  slug: string;
  title: LocalizedContent;
  pages: Page[];
}

export interface Content {
  books: Book[];
}
