import express from 'express';
import 'dotenv/config';
import { configServer } from './server/src/init';

const app = express();

configServer(app);

const port = process.env.PORT;

app.listen(port || 3000, () => {
	console.log(`Server is up @ port ${port}...`);
});
