import { todoItemRepo } from '../repositories/itemRepository';
import { TodoItem } from '../models/todoItem';
import { InvalidParameterError, NotFoundError } from '../common/errors';

interface TodoItemDTO {
  title: string;
  description: string;
  datecrated: Date;
  dateDue?: Date;
  isResolved: boolean;
  priority: number;
}

export class TodoItemController {
  static getItems = async (): Promise<TodoItem[]> => {
    return await todoItemRepo.find();
  };

  static getItemById = async (id: number): Promise<TodoItem> => {
    const item = await todoItemRepo.findOneBy({ id });

    if (!item) throw new NotFoundError('TodoItem');

    return item;
  };

  static addItem = async (request: TodoItemDTO) => {
    if (request.priority > 3)
      throw new InvalidParameterError('Incorrect priority');

    request.datecrated = new Date();
    request.isResolved = false;

    const item = todoItemRepo.create(request);

    await todoItemRepo.save(item);

    return item;
  };

  static removeItemById = async (id: number): Promise<boolean> => {
    const result = await todoItemRepo.delete({ id });

    return typeof result.affected === 'number';
  };

  static updateItem = async (id: number, request: TodoItemDTO) => {
    if (request.priority > 3)
      throw new InvalidParameterError('Incorrect priority');

    let item = await this.getItemById(id);

    item.title = request.title || item.title;
    item.description = request.description || item.description;
    item.dateDue = request.dateDue || item.dateDue;
    item.priority = request.priority || item.priority;
    item.isResolved = request.isResolved || item.isResolved;

    item = todoItemRepo.merge(item, request);
    await todoItemRepo.save(item);

    return item;
  };
}
