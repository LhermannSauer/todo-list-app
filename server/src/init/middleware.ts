import { Express, json, urlencoded } from 'express';
import { errorMiddleware } from '../middleware/error.middleware';
import { routesMiddleware } from '../middleware/routes.middleware';

// Single file where all middleware is applied to the app

export function initMiddleware(app: Express): void {
  // express middleware
  app.use(json());
  app.use(urlencoded({ extended: false }));

  // app middleware
  routesMiddleware(app);
  errorMiddleware(app);
}
