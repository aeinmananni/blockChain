"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockChain_1 = require("../blockChain");
const blockChain = (0, blockChain_1.BlockChain)();
blockChain.addBlock({ id: 1, firstName: "Ayin", lastName: "Mananni" });
let prevTimestamp, nextTimestamp, nextBlock, timeDiff, avrage;
const times = []; //ارایه ای از تایم ماین شدن تمام بلاک ها
for (let i = 0; i < 10000; i++) {
    prevTimestamp =
        blockChain.getChain()[blockChain.getChain().length - 1].timestamp;
    blockChain.addBlock({
        id: 1,
        firstName: `block-first-${i}`,
        lastName: `block-last-${i}`,
    });
    nextBlock = blockChain.getChain()[blockChain.getChain().length - 1];
    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestamp;
    times.push(timeDiff);
    avrage = times.reduce((total, curr) => {
        return (total + curr) / times.length;
    }, 0);
    console.log(`Time to Mine Block: ${timeDiff} ms . Difficulty : ${nextBlock.difficulty}. Avrage Time : ${avrage}ms`);
}
