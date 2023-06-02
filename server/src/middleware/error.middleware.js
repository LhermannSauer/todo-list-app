"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
function errorMiddleware(app) {
    app.use((error, req, res, next) => {
        res.status(500).json({ error: "Internal Server Error" });
    });
}
exports.errorMiddleware = errorMiddleware;
