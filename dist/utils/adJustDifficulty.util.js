"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADJUST_DIFFICULTY = void 0;
const genesis_config_1 = require("../config/genesis.config");
const ADJUST_DIFFICULTY = (originalBlock, timestamp) => {
    const { difficulty } = originalBlock;
    if (difficulty < 1)
        return 1;
    if (timestamp - originalBlock.timestamp > genesis_config_1.MINE_RATE)
        return difficulty - 1;
    if (timestamp - originalBlock.timestamp < genesis_config_1.MINE_RATE)
        return difficulty + 1;
    return difficulty;
};
exports.ADJUST_DIFFICULTY = ADJUST_DIFFICULTY;
