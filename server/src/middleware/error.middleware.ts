import { Express, NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../common/errors';

export function errorMiddleware(app: Express): void {
  app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof NotFoundError) {
      res.status(404).json({ error: error.message });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  });
}
