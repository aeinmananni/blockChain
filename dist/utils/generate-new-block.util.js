"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_NEW_BLOCK_HANDLER = void 0;
const block_1 = require("../scripts/block");
const GENERATE_NEW_BLOCK_HANDLER = (value) => {
    const { chain, data } = value;
    const lastHash = chain[chain.length - 1].hash;
    const CreatedData = typeof data === "string" ? data : JSON.stringify(data);
    const hash = "Hash " + CreatedData;
    const newBlock = (0, block_1.Block)({ lastHash, hash, data: CreatedData });
    return newBlock;
};
exports.GENERATE_NEW_BLOCK_HANDLER = GENERATE_NEW_BLOCK_HANDLER;
