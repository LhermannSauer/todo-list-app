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
  asyncMiddleware(async (req, res, next) => {
    const item = await TodoItemController.getItemById(+req.params.id);
    res.json(item);
  })
);

router.post(
  '/',
  asyncMiddleware(async (req, res, next) => {
    res.json(await TodoItemController.addItem(req.body));
  })
);

router.put(
  '/:id',
  asyncMiddleware(async (req, res, next) => {
    res.json(await TodoItemController.updateItem(+req.params.id, req.body));
  })
);

router.delete(
  '/:id',
  asyncMiddleware(async (req, res, next) => {
    const result = await TodoItemController.removeItemById(+req.params.id);

    res.status(204).send(result);
  })
);
