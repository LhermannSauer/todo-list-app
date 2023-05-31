import { NextFunction, Request, Response, Router } from "express";

export const indexRouter = Router();

indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.send("<h1>Hi Dude</h1>");
});
