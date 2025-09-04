export type Locale = "ru" | "en";

export type LocalizedContent<T = string> = Record<Locale, T>;
