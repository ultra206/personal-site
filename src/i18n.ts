import { createI18n } from "vue-i18n";
import esES from "./locales/es-ES.json";
import enEN from "./locales/en-EN.json";

export type AvailableLocales = "es-ES" | "en-EN";

const messages = {
  "es-ES": esES,
  "en-EN": enEN,
};

export const i18n = createI18n({
  legacy: false,
  locale: "es-ES",
  fallbackLocale: "en-EN",
  messages,
});

export default i18n;
