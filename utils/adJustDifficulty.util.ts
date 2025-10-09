import { MINE_RATE } from "../config/genesis.config";
import { BlockType } from "../scripts/models/script.model";

export const ADJUST_DIFFICULTY = (
  originalBlock: BlockType,
  timestamp: number
): number => {
  const { difficulty } = originalBlock;
  if (difficulty < 1) return 1;
  if (timestamp - originalBlock.timestamp > MINE_RATE) return difficulty - 1;
  if (timestamp - originalBlock.timestamp < MINE_RATE) return difficulty + 1;

  return difficulty;
};
