"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesMiddleware = void 0;
const index_1 = require("../routes/index");
const todoItems_1 = require("../routes/todoItems");
// single file where all endpoints are routed
function routesMiddleware(app) {
    app.use("/", index_1.indexRouter);
    app.use("/items", todoItems_1.router);
}
exports.routesMiddleware = routesMiddleware;
