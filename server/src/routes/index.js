"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
exports.indexRouter = (0, express_1.Router)();
const imagepath = "https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg";
exports.indexRouter.get("/", (req, res, next) => {
    return res.send(`<div style='background-color:#233353; height:84vh; padding-top:7.5%'>
                    <h1 style="text-align:center;font-family='Verdana'; color:#aeaeae">Hi Dude</h1>
                    <img style="border-radius:50%;display:block; width:25%; margin:auto" src='${imagepath}'/>
                    </div>`);
});
exports.indexRouter.get("/error", (req, res, next) => {
    throw new Error("perhaps");
});
