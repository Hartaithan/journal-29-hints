import type { Hint } from "./hint";
import type { LocalizedContent } from "./locale";

export interface Page {
  slug: number;
  hints: LocalizedContent<Hint>[];
}
