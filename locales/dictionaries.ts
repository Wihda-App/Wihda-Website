const dictionaries = {
	en: () => import("/public/en.json").then((module) => module.default),
	ar: () => import("/public/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "nl" | string) => {
	// Safe fallback to 'en' if locale isn't recognized
	if (locale in dictionaries) {
		return dictionaries[locale as keyof typeof dictionaries]();
	}
	return dictionaries["en"]();
};
