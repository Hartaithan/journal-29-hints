import type { LocalizedContent } from "./locale";

export interface Hint {
  title: string;
  content: string;
}

export type LocalizedHint = LocalizedContent<Hint>;
