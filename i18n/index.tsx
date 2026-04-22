"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale, type TranslationKeys } from "./translations";

type LanguageContextType = {
  locale: Locale;
  toggleLocale: () => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-locale") as Locale;
    if (saved && (saved === "en" || saved === "th")) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "th" : "en";
      localStorage.setItem("portfolio-locale", next);
      return next;
    });
  }, []);

  const t = translations[locale];

  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: "en", toggleLocale, t: translations.en }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
