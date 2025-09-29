"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockChain = void 0;
const generate_new_block_util_1 = require("../../utils/generate-new-block.util");
const genesis_util_1 = require("../../utils/genesis.util");
const BlockChain = () => {
    let chain = [genesis_util_1.GENESIS];
    const addBlock = (data) => {
        const NEW_BLOCK = (0, generate_new_block_util_1.GENERATE_NEW_BLOCK_HANDLER)({ chain, data });
        chain = [...chain, NEW_BLOCK];
    };
    const getChain = () => {
        return chain;
    };
    return { addBlock, getChain };
};
exports.BlockChain = BlockChain;
