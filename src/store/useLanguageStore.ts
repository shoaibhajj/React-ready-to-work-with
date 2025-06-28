import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'ar';

type LanguageStore = {
	language: Language;
	setLanguage: (lang: Language) => void;
};

export const useLanguageStore = create(
	persist<LanguageStore>(
		set => ({
			language: 'en',
			setLanguage: lang => set({ language: lang })
		}),
		{
			name: 'language-storage' // اسم المفتاح في localStorage
		}
	)
);
