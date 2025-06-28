import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAll, getOne, createOne, updateOne, deleteOne } from '../../api/crud';

export function useGetAll<T>(key: string[], url: string, params?: unknown) {
	return useQuery<T>({
		queryKey: key,
		queryFn: () => getAll<T>(url, params)
	});
}

export function useGetOne<T>(key: string[], url: string) {
	return useQuery<T>({
		queryKey: key,
		queryFn: () => getOne<T>(url)
	});
}

export function useCreateOne<T, D>(key: string[], url: string) {
	const queryClient = useQueryClient();
	return useMutation<T, Error, D>({
		mutationFn: data => createOne<T, D>(url, data),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: key })
	});
}

export function useUpdateOne<T, D>(key: string[], url: string) {
	const queryClient = useQueryClient();
	return useMutation<T, Error, D>({
		mutationFn: data => updateOne<T, D>(url, data),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: key })
	});
}

export function useDeleteOne<T>(key: string[], url: string) {
	const queryClient = useQueryClient();
	return useMutation<T, Error, void>({
		mutationFn: () => deleteOne<T>(url),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: key })
	});
}
