"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChainRepo = exports.AddBlockRepo = void 0;
const blockChain_store_1 = require("../store/blockChain.store");
const pub_sub_1 = require("../pub-sub");
const chanel_1 = require("../pub-sub/chanel");
const AddBlockRepo = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const redis = yield (0, pub_sub_1.InstancePubSubMthodes)();
    yield redis.publisher_handler({
        chanel: chanel_1.CHENELS.CHANEL_ADD_BLOCK,
        message: "Add_Block_Methods",
    });
    yield blockChain_store_1.BLOCK_CHAIN.addBlock(data);
    return true;
});
exports.AddBlockRepo = AddBlockRepo;
const GetChainRepo = () => __awaiter(void 0, void 0, void 0, function* () {
    const redis = yield (0, pub_sub_1.InstancePubSubMthodes)();
    yield redis.publisher_handler({
        chanel: chanel_1.CHENELS.CHANEL_GET_VALID_CHAIN,
        message: JSON.stringify(blockChain_store_1.BLOCK_CHAIN.getChain()),
    });
    console.log("IsValid Chain : ", blockChain_store_1.BLOCK_CHAIN.isValidChain(blockChain_store_1.BLOCK_CHAIN.getChain()));
    return blockChain_store_1.BLOCK_CHAIN.getChain();
});
exports.GetChainRepo = GetChainRepo;
