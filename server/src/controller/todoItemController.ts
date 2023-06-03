import { todoItemRepo } from '../repositories/itemRepository';
import { TodoItem } from '../models/todoItem';

interface TodoItemDTO {
  title: string;
  description: string;
  dateCreated: Date;
  isResolved: boolean;
  priority: number;
}

export class TodoItemController {
  static getItems = async (): Promise<TodoItem[]> => {
    return await todoItemRepo.find();
  };

  static getItemById = async (id: number): Promise<TodoItem> => {
    const item = await todoItemRepo.findOneBy({ id });

    if (!item) throw new Error('TodoItem not found');

    return item;
  };
}
