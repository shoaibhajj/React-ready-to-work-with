 import { z } from 'zod';

 // تعريف الشكل العام للنموذج
 export const todoSchema = z.object({
		todo: z.string().min(3, 'Task is required'),
		completed: z.boolean(),
		userId: z.number().min(1, 'User ID is required')
 });

 // تعريف نوع TypeScript المستخرج من Zod
 export type TodoForm = z.infer<typeof todoSchema>;
