"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelGetBlocksController = exports.handelAddBlockController = void 0;
const block_repositories_1 = require("../repositories/block.repositories");
const async_handler_util_1 = require("../utils/async-handler.util");
exports.handelAddBlockController = (0, async_handler_util_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = (0, block_repositories_1.AddBlockRepo)(data);
    res.status(200).send(result);
}));
exports.handelGetBlocksController = (0, async_handler_util_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = (0, block_repositories_1.GetChainRepo)();
    res.status(200).send(result);
}));
