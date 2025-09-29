"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENESIS = void 0;
/**
 * محافظت از Genesis Block:

بهتره Genesis همیشه ثابت باشه (با Object.freeze یا ساختار readonly) تا کسی نتونه تغییرش بده.
 *
 *
 */
exports.GENESIS = {
    timestamp: Date.now(),
    lastHash: "Gen-lastHash",
    hash: "Gen-hash",
    data: "Gen-data",
};
