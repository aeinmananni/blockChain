import { BlockType } from "../scripts/models/script.model";

/**
 * محافظت از Genesis Block:

بهتره Genesis همیشه ثابت باشه (با Object.freeze یا ساختار readonly) تا کسی نتونه تغییرش بده.
 * 
 * 
 */

export const INITIAL_DIFFICULTY = 3;

export const GENESIS: Readonly<BlockType> = {
  timestamp: Date.now(),
  lastHash: "Gen-lastHash",
  hash: "Gen-hash",
  data: "Gen-data",
  difficulty: INITIAL_DIFFICULTY,
  nonce: 0,
};
