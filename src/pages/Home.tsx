import { useLanguageStore } from '@/store/useLanguageStore';
import { useThemeStore } from '@/store/useThemeStore';
import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t, i18n } = useTranslation();
	const { setLanguage } = useLanguageStore();
	const { theme, toggleTheme } = useThemeStore();

	const switchLang = () => {
		const newLang = i18n.language === 'en' ? 'ar' : 'en';
		i18n.changeLanguage(newLang);
		setLanguage(newLang);
	};

	return (
		<div className="p-4 text-center  gap-4  space-x-4space-y-4">
			<h1 className="text-xl font-bold">{t('welcome')}</h1>
			<p>{t('description')}</p>

			<div className="flex gap-4">
				<button onClick={switchLang} className="px-4 py-2 rounded bg-primary text-white">
					{i18n.language === 'en' ? 'AR' : 'EN'}
				</button>

				<button className="text-white" onClick={toggleTheme}>
					Toggle Theme (current: {theme})
				</button>
			</div>
		</div>
	);
}
