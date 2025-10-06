import { BlockType } from "../scripts/models/script.model";
import { CRYPTO_HASH_HANDLER } from "./crypto-hash";

export const ISVALID_CHAIN_HANDLER = (
  chain: BlockType[],
  genesisi: BlockType
): boolean => {
  if (JSON.stringify(chain[0]) !== JSON.stringify(genesisi)) return false;
  for (let i = 1; i < chain.length; i++) {
    const block = chain[i];
    const actualLastHash = chain[i - 1].hash;
    const { hash, lastHash, timestamp, data } = block;

    if (lastHash !== actualLastHash) return false;
    if (hash !== CRYPTO_HASH_HANDLER(lastHash, data, timestamp)) return false;
  }

  return true;
};
