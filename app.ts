import express from "express";

// init import
import { initMiddleware } from "./server/src/init/middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initMiddleware(app);

const port = process.env.PORT;

app.listen(port || 3000, () => {
  console.log("Server is up UwU...");
});
