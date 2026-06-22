'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'cs' | 'en';

interface LangCtx {
  lang: Lang;
  toggle: () => void;
}

const Ctx = createContext<LangCtx>({ lang: 'cs', toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('cs');

  useEffect(() => {
    const stored = localStorage.getItem('kb-lang') as Lang | null;
    if (stored === 'cs' || stored === 'en') setLang(stored);
  }, []);

  const toggle = () => {
    setLang((l) => {
      const next = l === 'cs' ? 'en' : 'cs';
      localStorage.setItem('kb-lang', next);
      return next;
    });
  };

  return <Ctx.Provider value={{ lang, toggle }}>{children}</Ctx.Provider>;
}

export const useLanguage = () => useContext(Ctx);
