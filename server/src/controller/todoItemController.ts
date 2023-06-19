import { todoItemRepo } from '../repositories/itemRepository';
import { TodoItem } from '../models/todoItem';
import {
  InvalidParameterError,
  NotFoundError,
  ValidationError,
} from '../common/errors';
import { validate, Length } from 'class-validator';
import _ from 'lodash';

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
    if (!Number.isInteger(id) || id <= 0) throw new InvalidParameterError('ID');

    const item = await todoItemRepo.findOneBy({ id });

    if (!item) throw new NotFoundError('TodoItem');

    return item;
  };

  static addItem = async (todoItemDTO: TodoItemDTO) => {
    todoItemDTO.datecrated = new Date();
    todoItemDTO.isResolved = false;

    let item = new TodoItem();
    _.assign(item, todoItemDTO);
    validate(item).then((errors) => {
      if (errors.length > 0) {
        throw new ValidationError('Validation failed. Errors: ' + errors);
      }
    });
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
    _.assign(update, todoItemDTO);
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
