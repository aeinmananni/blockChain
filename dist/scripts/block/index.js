"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const Block = (v) => {
    return Object.assign({ timestamp: Date.now() }, v);
};
exports.Block = Block;
