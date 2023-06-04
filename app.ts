import express from 'express';
import 'reflect-metadata';

import * as dotenv from 'dotenv';
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

import { configServer } from './server/src/init';

const app = express();

configServer(app);

const port = process.env.PORT;

app.listen(port || 3000, () => {
  console.log(`Server is up @ port ${port}...`);
});
