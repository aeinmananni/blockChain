import { GENERATE_NEW_BLOCK_HANDLER } from '../../utils/generate-new-block.util';
import { GENESIS } from '../../utils/genesis.util';
import { BlockType } from '../models/script.model';
import { CRYPTO_HASH_HANDLER } from '../../utils/crypto-hash';
export const BlockChain = () => {
  let chain: BlockType[] = [GENESIS];

  const addBlock = <T>(data: T): void => {
    const NEW_BLOCK = GENERATE_NEW_BLOCK_HANDLER({ chain, data });
    chain = [...chain, NEW_BLOCK];
  };

  const isValidChain = (chain: BlockType[]) => {
    if (chain[0] !== GENESIS) return false;
    for (let i = 1; i < chain.length; i++) {
      const block = chain[i];
      const actualLastHash = chain[i].hash;
      const { hash, lastHash, timestamp, data } = block;

      if (lastHash !== actualLastHash) return false;
      if (hash !== CRYPTO_HASH_HANDLER(lastHash, data, timestamp)) return false;
    }

    return true;
  };
  const getChain = (): BlockType[] => {
    return chain;
  };

  return { addBlock, getChain, isValidChain };
};
