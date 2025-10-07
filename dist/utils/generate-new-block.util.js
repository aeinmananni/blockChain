"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_NEW_BLOCK_HANDLER = void 0;
const block_1 = require("../scripts/block");
const crypto_hash_1 = require("./crypto-hash");
const GENERATE_NEW_BLOCK_HANDLER = (value) => {
    const { chain, data } = value;
    const lastHash = chain[chain.length - 1].hash;
    const difficulty = chain[chain.length - 1].difficulty;
    const nonce = 0;
    const timestamp = Date.now();
    const CreatedData = typeof data === "string" ? data : JSON.stringify(data);
    const hash = (0, crypto_hash_1.CRYPTO_HASH_HANDLER)(lastHash, CreatedData, timestamp, difficulty, nonce);
    const newBlock = (0, block_1.Block)({
        lastHash,
        hash,
        data: CreatedData,
        difficulty,
        nonce,
    });
    return newBlock;
};
exports.GENERATE_NEW_BLOCK_HANDLER = GENERATE_NEW_BLOCK_HANDLER;
