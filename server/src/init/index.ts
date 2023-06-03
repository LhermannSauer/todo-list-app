import { Express } from 'express-serve-static-core';
import { initDB } from './database';
import { initMiddleware } from './middleware';

export const configServer = async (app: Express) => {
	initMiddleware(app);
	await initDB();
};
