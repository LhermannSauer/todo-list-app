import { NextFunction, Request, Response, Router } from "express";

export const indexRouter = Router();

const imagepath =
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg";

indexRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.send(`<div style='background-color:#233353; height:84vh; padding-top:7.5%'>
                    <h1 style="text-align:center;font-family='Verdana'; color:#aeaeae">Hi Dude</h1>
                    <img style="border-radius:50%;display:block; width:25%; margin:auto" src='${imagepath}'/>
                    </div>`);
});

indexRouter.get("/error", (req: Request, res: Response, next: NextFunction) => {
  throw new Error("perhaps");
});
