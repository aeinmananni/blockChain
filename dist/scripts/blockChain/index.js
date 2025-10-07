"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockChain = void 0;
const generate_new_block_util_1 = require("../../utils/generate-new-block.util");
const genesis_config_1 = require("../../config/genesis.config");
const isValid_chain_1 = require("../../utils/isValid-chain");
const BlockChain = () => {
    let chain = [genesis_config_1.GENESIS];
    const addBlock = (data) => {
        const NEW_BLOCK = (0, generate_new_block_util_1.GENERATE_NEW_BLOCK_HANDLER)({ chain, data });
        chain = [...chain, NEW_BLOCK];
    };
    const isValidChain = (chain) => {
        return (0, isValid_chain_1.ISVALID_CHAIN_HANDLER)(chain, genesis_config_1.GENESIS);
    };
    const replaceChain = (chainInput) => {
        if (chainInput.length <= chain.length)
            return false;
        if (!isValidChain(chainInput))
            return false;
        chain = [...chainInput];
    };
    const getChain = () => {
        return chain;
    };
    return { addBlock, getChain, isValidChain, replaceChain };
};
exports.BlockChain = BlockChain;
