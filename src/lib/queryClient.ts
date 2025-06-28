import { useLanguageStore } from '@/store/useLanguageStore';
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
	queries: {
		queryKeyHashFn: queryKey => {
			const lang = useLanguageStore.getState().language;
				return JSON.stringify([lang, ...queryKey]);
			}
		}
  });

export default queryClient;


