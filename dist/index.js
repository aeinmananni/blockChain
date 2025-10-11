"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv-safe/config");
// import "./scripts/avrage-work";
const port = process.env.PORT || undefined;
app_1.default.listen(port, () => console.log(`Listening on Port : ${port}`));
