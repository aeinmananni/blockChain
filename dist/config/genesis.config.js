"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENESIS = exports.MINE_RATE = exports.INITIAL_DIFFICULTY = void 0;
/**
 * محافظت از Genesis Block:

بهتره Genesis همیشه ثابت باشه (با Object.freeze یا ساختار readonly) تا کسی نتونه تغییرش بده.
 *
 *
 */
exports.INITIAL_DIFFICULTY = 3;
exports.MINE_RATE = 1000; // milliseconds
exports.GENESIS = {
    timestamp: Date.now(),
    lastHash: "Gen-lastHash",
    hash: "Gen-hash",
    data: "Gen-data",
    difficulty: exports.INITIAL_DIFFICULTY,
    nonce: 0,
};
