"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// init import
const middleware_1 = require("./server/src/init/middleware");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
(0, middleware_1.initMiddleware)(app);
const port = process.env.PORT;
app.listen(port || 3000, () => {
    console.log("Server is up UwU...");
});
