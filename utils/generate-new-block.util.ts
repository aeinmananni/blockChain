import { Block } from "../scripts/block";
import { BlockType } from "../scripts/models/script.model";

export const GENERATE_NEW_BLOCK_HANDLER = <T>(value: {
  chain: BlockType[];
  data: T;
}): BlockType => {
  const { chain, data } = value;
  const lastHash = chain[chain.length - 1].hash;
  const CreatedData = typeof data === "string" ? data : JSON.stringify(data);
  const hash = "Hash " + CreatedData;
  const newBlock: BlockType = Block({ lastHash, hash, data: CreatedData });

  return newBlock;
};
