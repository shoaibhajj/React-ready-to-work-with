import TodoDialog from '@/components/todos/AddTodoDialog';
import TodoList from '@/components/todos/TodoList';
import { useGetAll } from '@/lib/hooks/useCrud';
import type { Todo } from '@/types/todo';
import { useTranslation } from 'react-i18next';

export default function TodosPage() {
	const { t } = useTranslation();
	const { data: todos, isLoading, isError } = useGetAll<{ todos: Todo[] }>(['todos'], 'https://dummyjson.com/todos');

	if (isLoading) return <div className="p-6 text-center">{t('loading')}...</div>;
	if (isError) return <div className="p-6 text-center text-red-500">{t('error_loading_todos')}</div>;

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">{t('todos')}</h1>
			<TodoDialog initialData={undefined} />
			<div className="min-h-screen flex justify-center items-center">
				<TodoList todos={todos?.todos || []} isLoading={isLoading} />
			</div>
		</div>
	);
}
