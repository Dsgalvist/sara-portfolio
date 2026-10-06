import { en } from "./en";
import { es } from "./es";

export const languages = ["en", "es"] as const;

export type Language = (typeof languages)[number];

export const content = {
  en,
  es,
};

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}
