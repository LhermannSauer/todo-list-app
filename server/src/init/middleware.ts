import { Express } from "express";
import { errorMiddleware } from "../middleware/error.middleware";
import { routesMiddleware } from "../middleware/routes.middleware";

export function initMiddleware(app: Express): void {
  errorMiddleware(app);
  routesMiddleware(app);
}
