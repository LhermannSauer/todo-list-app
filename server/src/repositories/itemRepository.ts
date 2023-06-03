import { TodoItem } from '../models/todoItem';
import { AppDataSource } from '../init/database';

export const todoItemRepo = AppDataSource.getRepository(TodoItem);
