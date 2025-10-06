"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRYPTO_HASH_HANDLER = void 0;
const crypto_1 = __importDefault(require("crypto"));
const CRYPTO_HASH_HANDLER = (...args) => {
    const hash = crypto_1.default.createHash('sha256');
    const result = args.reduce((a, b) => {
        return a + String(b);
    }, 0);
    hash.update(result);
    return hash.digest('hex');
};
exports.CRYPTO_HASH_HANDLER = CRYPTO_HASH_HANDLER;
