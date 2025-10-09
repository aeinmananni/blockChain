"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_NEW_BLOCK_HANDLER = void 0;
const genesis_config_1 = require("../config/genesis.config");
const block_1 = require("../scripts/block");
const adJustDifficulty_util_1 = require("./adJustDifficulty.util");
const crypto_hash_1 = require("./crypto-hash");
const GENERATE_NEW_BLOCK_HANDLER = (value) => {
    const { chain, data } = value;
    const lastBlock = chain[chain.length - 1];
    const lastHash = lastBlock.hash;
    let { difficulty } = lastBlock;
    let nonce = 0;
    let timestamp;
    let hash;
    const CreatedData = typeof data === "string" ? data : JSON.stringify(data);
    do {
        nonce++;
        timestamp = Date.now();
        difficulty = (0, adJustDifficulty_util_1.ADJUST_DIFFICULTY)(lastBlock, timestamp);
        hash = (0, crypto_hash_1.CRYPTO_HASH_HANDLER)(lastHash, CreatedData, timestamp, difficulty, nonce);
    } while (hash.substring(0, difficulty) !== "0".repeat(difficulty) &&
        difficulty >= genesis_config_1.INITIAL_DIFFICULTY);
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
