"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const _ = __importStar(require("lodash"));
exports.router = (0, express_1.Router)();
const items = [
    {
        id: 1,
        title: "Title1",
        description: "Description1",
        dateCreated: new Date(),
        isResolved: false,
        priority: 1,
    },
    {
        id: 2,
        title: "Title2",
        description: "Description2",
        dateCreated: new Date(),
        isResolved: false,
        priority: 2,
    },
];
exports.router.get("/", (req, res, next) => {
    res.json(items);
});
exports.router.get("/:id", (req, res, next) => {
    const item = items.find((i) => i.id === +req.params.id);
    if (!item)
        return res.status(404).send("Item with the given ID not found");
    res.json(item);
});
exports.router.post("/", (req, res, next) => {
    const itemDTO = _.pick(req.body, ["title", "description", "priority", "dateDue"]);
    const newItem = Object.assign(Object.assign({}, itemDTO), { id: items.length, isResolved: false, dateCreated: new Date() });
    items.push(newItem);
    res.status(201).json(newItem);
});
exports.router.put("/:id", (req, res, next) => {
    const itemDTO = _.pick(req.body, ["title", "description", "priority", "dateDue", "isResolved"]);
    const item = items.find((i) => i.id === +req.params.id);
    if (!item)
        return res.status(404).send("Item with the given ID not found");
    _.assign(item, itemDTO);
    res.json(item);
});
exports.router.delete("/:id", (req, res, next) => {
    const item = items.find((i) => i.id === +req.params.id);
    if (!item)
        return res.status(404).send("Item with the given ID not found");
    items.splice(items.indexOf(item), 1);
    res.status(204).send(true);
});
