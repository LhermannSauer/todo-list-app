import { Express, NextFunction, Request, Response } from "express";
import { indexRouter } from "../routes/index";
import { router } from "../routes/todoItems";

export function routesMiddleware(app: Express): void {
  app.use("/", indexRouter);
  app.use("/items", router);
}
