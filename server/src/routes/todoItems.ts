import { Router, Request, Response, NextFunction } from "express";
import * as _ from "lodash";

import { TodoItem } from "../models/todoItem";

export const router = Router();

const items: TodoItem[] = [
  {
    id: 1,
    title: "Title1",
    description: "Description1",
    dateCreated: new Date(),
    isResolved: false,
    priority: 1,
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
    dateCreated: new Date(),
    isResolved: false,
    priority: 2,
  },
];

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json(items);
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  const item = items.find((i) => i.id === +req.params.id);

  if (!item) return res.status(404).send("Item with the given ID not found");

  res.json(item);
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const itemDTO: Omit<TodoItem, "id" | "dateCreated" | "isResolved"> = _.pick(
    req.body,
    ["title", "description", "priority", "dateDue"]
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

router.put("/:id", (req: Request, res: Response, next: NextFunction) => {
  const itemDTO: Omit<Partial<TodoItem>, "id" | "dateCreated"> = _.pick(
    req.body,
    ["title", "description", "priority", "dateDue", "isResolved"]
  );

  const item = items.find((i) => i.id === +req.params.id);

  if (!item) return res.status(404).send("Item with the given ID not found");

  _.assign(item, itemDTO);

  res.json(item);
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
  const item = items.find((i) => i.id === +req.params.id);

  if (!item) return res.status(404).send("Item with the given ID not found");

  items.splice(items.indexOf(item), 1);

  res.status(204).send(true);
});
