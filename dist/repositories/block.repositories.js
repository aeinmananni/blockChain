"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChainRepo = exports.AddBlockRepo = void 0;
const blockChain_store_1 = require("../store/blockChain.store");
const AddBlockRepo = (data) => {
    blockChain_store_1.BLOCK_CHAIN.addBlock(data);
    return true;
};
exports.AddBlockRepo = AddBlockRepo;
const GetChainRepo = () => {
    console.log("IsValid Chain : ", blockChain_store_1.BLOCK_CHAIN.isValidChain(blockChain_store_1.BLOCK_CHAIN.getChain()));
    return blockChain_store_1.BLOCK_CHAIN.getChain();
};
exports.GetChainRepo = GetChainRepo;
