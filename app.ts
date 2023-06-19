import express from 'express';
import 'reflect-metadata';
import fs from 'fs';

import * as dotenv from 'dotenv';
if (fs.existsSync(`./.env.${process.env.NODE_ENV}`)) {
  dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });
} else {
  throw new Error('Configuration file not found!');
}

import { configServer } from './server/src/init';

const app = express();

configServer(app);

const port = process.env.PORT;

app.listen(port || 3000, () => {
  console.log(`Server is up @ port ${port}...`);
});
