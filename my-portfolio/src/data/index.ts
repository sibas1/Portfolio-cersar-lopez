import es from "./es";
import en from "./en";

const translations = { es, en } as const;

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export { es, en };
