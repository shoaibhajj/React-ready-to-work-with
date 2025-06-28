import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ErrorElement from '@/pages/error/error';
import MainLayout from '@/Layouts/main';
import TodosPage from '@/pages/todos/TodosPage';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorElement />, // Global error element
		children: [
			{
				path: '',
				element: <MainLayout />,
				children: [
					{
						path: '',
						element: <Home />
					},
					{
						path: '/about',
						element: <About />
					}
				]
			}
		]
	},
	{
		path: '/todos',
		errorElement: <ErrorElement />, // Global error element
		children: [
			{
				path: '',
				element: <MainLayout />,
				children: [
					{
						path: '',
						element: <TodosPage />
					}
				]
			}
		]
	}
]);
