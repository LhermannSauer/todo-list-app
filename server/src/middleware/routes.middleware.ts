import { Express, NextFunction, Request, Response } from "express";
import { indexRouter } from "../routes";

export function routesMiddleware(app: Express): void {
  app.use("/", indexRouter);
}
