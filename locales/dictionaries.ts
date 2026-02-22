import 'server-only';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  // nl: () => import('./nl.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'nl' | string) => {
  // Safe fallback to 'en' if locale isn't recognized
  if (locale in dictionaries) {
    return dictionaries[locale as keyof typeof dictionaries]();
  }
  return dictionaries['en']();
};