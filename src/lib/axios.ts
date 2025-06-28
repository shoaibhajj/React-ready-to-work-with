import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
	headers: {
		'Content-Type': 'application/json'
	}
});

axiosInstance.interceptors.request.use(
	config => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error);
	}
);

export default axiosInstance;
