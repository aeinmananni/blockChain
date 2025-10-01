import { Block } from '../scripts/block';
import { BlockType } from '../scripts/models/script.model';
import { CRYPTO_HASH_HANDLER } from './crypto-hash';

export const GENERATE_NEW_BLOCK_HANDLER = <T>(value: {
  chain: BlockType[];
  data: T;
}): BlockType => {
  const { chain, data } = value;
  const lastHash: string = chain[chain.length - 1].hash;
  const timestamp: number = Date.now();
  const CreatedData: string = typeof data === 'string' ? data : JSON.stringify(data);
  const hash = CRYPTO_HASH_HANDLER(lastHash, CreatedData, timestamp);
  const newBlock: BlockType = Block({ lastHash, hash, data: CreatedData });

  return newBlock;
};
