import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

type ThemeStore = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
};

export const useThemeStore = create(
	persist<ThemeStore>(
		(set, get) => ({
			theme: 'light',
			setTheme: theme => set({ theme }),
			toggleTheme: () => {
				const current = get().theme;
				set({ theme: current === 'light' ? 'dark' : 'light' });
			}
		}),
		{
			name: 'theme-storage' // اسم المفتاح في localStorage
		}
	)
);
