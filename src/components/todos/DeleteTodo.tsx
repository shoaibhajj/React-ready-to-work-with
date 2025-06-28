import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useDeleteOne } from '@/lib/hooks/useCrud';
import type { Todo } from '@/types/todo';

type Props = {
	id: number;
	disabled?: boolean;
};

export default function DeleteTodo({ id, disabled }: Props) {
	const deleteTodo = useDeleteOne<Todo>(['todos'], `https://dummyjson.com/todos/${id}`);

	const handleDelete = () => {
		deleteTodo.mutate(undefined, {
			onSuccess: () => {
				alert('Deleted!');
			}
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="text-red-500 hover:underline" disabled={disabled}>
					Delete
				</button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Confirm Deletion</DialogTitle>
				</DialogHeader>
				<p>Are you sure you want to delete this todo?</p>
				<DialogFooter className="mt-4 flex justify-end gap-2">
					<button className="btn" onClick={() => document.activeElement?.dispatchEvent(new Event('click'))}>
						Cancel
					</button>
					<button onClick={handleDelete} className="btn btn-destructive">
						Delete
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
