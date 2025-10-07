"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISVALID_CHAIN_HANDLER = void 0;
const crypto_hash_1 = require("./crypto-hash");
const ISVALID_CHAIN_HANDLER = (chain, genesisi) => {
    if (JSON.stringify(chain[0]) !== JSON.stringify(genesisi))
        return false;
    for (let i = 1; i < chain.length; i++) {
        const block = chain[i];
        const actualLastHash = chain[i - 1].hash;
        const { hash, lastHash, timestamp, data, difficulty, nonce } = block;
        if (lastHash !== actualLastHash)
            return false;
        if (hash !== (0, crypto_hash_1.CRYPTO_HASH_HANDLER)(lastHash, data, timestamp, difficulty, nonce))
            return false;
    }
    return true;
};
exports.ISVALID_CHAIN_HANDLER = ISVALID_CHAIN_HANDLER;
