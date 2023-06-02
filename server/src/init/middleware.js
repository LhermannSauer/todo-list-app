"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMiddleware = void 0;
const express_1 = require("express");
const error_middleware_1 = require("../middleware/error.middleware");
const routes_middleware_1 = require("../middleware/routes.middleware");
// Single file where all middleware is applied to the app
function initMiddleware(app) {
    // express middleware
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: false }));
    // app middleware
    (0, error_middleware_1.errorMiddleware)(app);
    (0, routes_middleware_1.routesMiddleware)(app);
}
exports.initMiddleware = initMiddleware;
