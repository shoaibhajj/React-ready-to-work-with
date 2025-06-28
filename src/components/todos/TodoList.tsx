import type { Todo } from '@/types/todo';
import { useTranslation } from 'react-i18next';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';

export default function TodoList({ todos, isLoading }: { todos: Todo[]; isLoading: boolean }) {
	const { t } = useTranslation();

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="mx-auto">
			<table className="min-w-full border border-gray-300 rounded-lg text-sm">
				<thead className="bg-gray-100 text-left">
					<tr>
						<th className="px-4 py-2 border-b">{t('id')}</th>
						<th className="px-4 py-2 border-b">{t('task')}</th>
						<th className="px-4 py-2 border-b">{t('completed')}</th>
						<th className="px-4 py-2 border-b">{t('actions')}</th>
					</tr>
				</thead>
				<tbody>
					{todos?.map((todo: Todo) => (
						<tr key={todo.id} className="hover:bg-gray-50">
							<td className="px-4 py-2 border-b">{todo.id}</td>
							<td className="px-4 py-2 border-b">{todo.todo}</td>
							<td className="px-4 py-2 border-b">
								<span
									className={`inline-block px-2 py-1 text-xs rounded-full ${
										todo.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
									}`}
								>
									{todo.completed ? t('done') : t('pending')}
								</span>
							</td>
							<td className="px-4 py-2 border-b">
								<UpdateTodo initialData={todo} />
								<DeleteTodo id={todo.id} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
