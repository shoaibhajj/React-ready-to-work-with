import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { todoSchema, type TodoForm } from '@/schemas/todoSchema';
import { useUpdateOne } from '@/lib/hooks/useCrud';
import type { Todo } from '@/types/todo';
import { Button } from '../ui/button';

type Props = {
	initialData?: Todo;
};

export default function UpdateTodo({ initialData }: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<TodoForm>({
		resolver: zodResolver(todoSchema),
		defaultValues: initialData ?? { todo: '', completed: false, userId: 0 }
	});

	const mutation = useUpdateOne<Todo, TodoForm>(['todos'], `https://dummyjson.com/todos/${initialData?.id}`);

	const onSubmit = (data: TodoForm) => {
		mutation.mutate(data, {
			onSuccess: () => {
				reset();
				alert('Updated!');
			}
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost" className="bg-white">
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Todo</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<input {...register('todo')} placeholder="Todo" className="input" />
					{errors.todo && <p className="text-red-500">{errors.todo.message}</p>}

					<input
						type="number"
						{...register('userId', { valueAsNumber: true })}
						placeholder="User ID"
						className="input"
					/>
					{errors.userId && <p className="text-red-500">{errors.userId.message}</p>}

					<label className="flex items-center gap-2">
						<input type="checkbox" {...register('completed')} />
						Completed
					</label>

					<button type="submit" className="btn btn-primary w-full ">
						Update
					</button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
