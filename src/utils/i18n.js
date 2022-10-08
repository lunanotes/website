import en from "@/locales/en";
import es from "@/locales/es";

function i18n(key, locale = "en") {
  switch (locale) {
    case "en":
      return en[key];
    case "es":
      return es[key];
  }
}

export default i18n;
