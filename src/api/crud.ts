import axiosInstance from '@/lib/axios';

export const getAll = <T>(url: string, params?: unknown): Promise<T> =>
	axiosInstance.get(url, { params }).then(res => res.data);

export const getOne = <T>(url: string): Promise<T> => axiosInstance.get(url).then(res => res.data);

export const createOne = <T, D>(url: string, data: D): Promise<T> =>
	axiosInstance.post(url, data).then(res => res.data);

export const updateOne = <T, D>(url: string, data: D): Promise<T> => axiosInstance.put(url, data).then(res => res.data);

export const deleteOne = <T>(url: string): Promise<T> => axiosInstance.delete(url).then(res => res.data);
