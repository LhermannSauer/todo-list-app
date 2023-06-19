import { todoItemRepo } from '../repositories/itemRepository';
import { TodoItem } from '../models/todoItem';
import {
  InvalidParameterError,
  NotFoundError,
  ValidationError,
} from '../common/errors';
import { validate, Length } from 'class-validator';

interface TodoItemDTO {
  title: string;
  description: string;
  dateCreated: Date;
  dateDue?: Date;
  isResolved: boolean;
  priority: number;
}

export class TodoItemController {
  static getItems = async (): Promise<TodoItem[]> => {
    return await todoItemRepo.find();
  };

  static getItemById = async (id: number): Promise<TodoItem> => {
    if (!Number.isInteger(id) || id <= 0) throw new InvalidParameterError('ID');

    const item = await todoItemRepo.findOneBy({ id });

    if (!item) throw new NotFoundError('TodoItem');

    return item;
  };

  static addItem = async (todoItemDTO: TodoItemDTO) => {
    todoItemDTO.dateCreated = new Date();
    todoItemDTO.isResolved = false;

    let item = new TodoItem();
    item = { ...item, ...todoItemDTO };

    const errors = await validate(item);
    if (errors.length > 0) {
      throw new ValidationError('Validation failed. Errors: ' + errors);
    }

    item = todoItemRepo.create(item);

    await todoItemRepo.save(item);

    return item;
  };

  static removeItemById = async (id: number): Promise<boolean> => {
    if (!Number.isInteger(id) || id <= 0) throw new InvalidParameterError('ID');

    const result = await todoItemRepo.delete({ id });

    return typeof result.affected === 'number';
  };

  static updateItem = async (id: number, todoItemDTO: TodoItemDTO) => {
    let update = new TodoItem();

    update = { ...update, ...todoItemDTO };
    validate(update, { skipMissingProperties: true }).then((errors) => {
      if (errors.length)
        throw new ValidationError('Validation failed. Errors: ' + errors);
    });

    let item = await this.getItemById(id);

    item.title = todoItemDTO.title || item.title;
    item.description = todoItemDTO.description || item.description;
    item.dateDue = todoItemDTO.dateDue || item.dateDue;
    item.priority = todoItemDTO.priority || item.priority;
    item.isResolved = todoItemDTO.isResolved || item.isResolved;

    item = todoItemRepo.merge(item, todoItemDTO);
    await todoItemRepo.save(item);

    return item;
  };
}
