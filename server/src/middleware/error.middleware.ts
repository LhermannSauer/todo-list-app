import { Express, NextFunction, Request, Response } from "express";

export function errorMiddleware(app: Express): void {
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: "Internal Server Error" });
  });
}
