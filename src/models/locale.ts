export type Locale = "ru" | "en";

export type LocalizedContent<T = string | null> = Record<Locale, T>;
