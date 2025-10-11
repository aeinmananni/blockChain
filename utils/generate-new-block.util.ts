import { INITIAL_DIFFICULTY } from "../config/genesis.config";
import { Block } from "../scripts/block";
import { BlockType } from "../scripts/models/script.model";
import { ADJUST_DIFFICULTY } from "./adJustDifficulty.util";
import { CRYPTO_HASH_HANDLER } from "./crypto-hash";
import hex_to_binary from "hex-to-binary";

export const GENERATE_NEW_BLOCK_HANDLER = <T>(value: {
  chain: BlockType[];
  data: T;
}): BlockType => {
  const { chain, data } = value;
  const lastBlock: BlockType = chain[chain.length - 1];
  const lastHash = lastBlock.hash;
  let { difficulty } = lastBlock;

  let nonce = 0;
  let timestamp: number;
  let hash: string;

  const CreatedData: string =
    typeof data === "string" ? data : JSON.stringify(data);

  do {
    nonce++;
    timestamp = Date.now();
    difficulty = ADJUST_DIFFICULTY(lastBlock, timestamp);

    hash = CRYPTO_HASH_HANDLER(
      lastHash,
      CreatedData,
      timestamp,
      difficulty,
      nonce
    );
  } while (
    hex_to_binary(hash).substring(0, difficulty) !== "0".repeat(difficulty)
  );

  const newBlock: BlockType = Block({
    lastHash,
    hash,
    data: CreatedData,
    difficulty,
    nonce,
  });

  return newBlock;
};
