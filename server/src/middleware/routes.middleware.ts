import { Express } from "express";
import { indexRouter } from "../routes/index";
import { router } from "../routes/todoItems";

// single file where all endpoints are routed

export function routesMiddleware(app: Express): void {
  app.use("/", indexRouter);
  app.use("/items", router);
}
