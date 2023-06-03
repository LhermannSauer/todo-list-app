import { Router, Request, Response, NextFunction } from 'express';
import * as _ from 'lodash';

import { TodoItem } from '../models/todoItem';
import { TodoItemController } from '../controller/todoItemController';
import asyncMiddleware from '../middleware/asyncMiddleware';

export const router = Router();

let items: TodoItem[] = [
  {
    id: 1,
    title: 'Title1',
    description: 'Description1',
    dateCreated: new Date(),
    isResolved: false,
    priority: 1,
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Description2',
    dateCreated: new Date(),
    isResolved: false,
    priority: 2,
  },
];

router.get(
  '/',
  asyncMiddleware(async (req, res, next) => {
    res.send(await TodoItemController.getItems());
  })
);

router.get(
  '/:id',
  asyncMiddleware(async (req: Request, res: Response, next: NextFunction) => {
    const item = await TodoItemController.getItemById(+req.params.id);
    res.json(item);
  })
);

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const itemDTO: Omit<TodoItem, 'id' | 'dateCreated' | 'isResolved'> = _.pick(
    req.body,
    ['title', 'description', 'priority', 'dateDue']
  );

  const newItem: TodoItem = {
    ...itemDTO,
    id: items.length,
    isResolved: false,
    dateCreated: new Date(),
  };

  items.push(newItem);

  res.status(201).json(newItem);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  const itemDTO: Omit<Partial<TodoItem>, 'id' | 'dateCreated'> = _.pick(
    req.body,
    ['title', 'description', 'priority', 'dateDue', 'isResolved']
  );

  const item = items.find((i) => i.id === +req.params.id);

  if (!item) return res.status(404).send('Item with the given ID not found');

  _.assign(item, itemDTO);

  res.json(item);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  const totalLength = items.length;

  items = items.filter((item) => item.id !== +req.params.id);

  if (totalLength == items.length) throw Error('Nothing was deleted.');

  res.status(204).send(true);
});
