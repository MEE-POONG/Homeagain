import { createContext } from 'react';

interface ILanguageContext {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  currentLanguage: 'EN',
  setCurrentLanguage: () => {},
});