import { GENERATE_NEW_BLOCK_HANDLER } from '../../utils/generate-new-block.util';
import { GENESIS } from '../../utils/genesis.util';
import { BlockType } from '../models/script.model';
import { CRYPTO_HASH_HANDLER } from '../../utils/crypto-hash';
import { ISVALID_CHAIN_HANDLER } from "../../utils/isValid-chain";
export const BlockChain = () => {
  let chain: BlockType[] = [GENESIS];

  const addBlock = <T>(data: T): void => {
    const NEW_BLOCK = GENERATE_NEW_BLOCK_HANDLER({ chain, data });
    chain = [...chain, NEW_BLOCK];
  };

  const isValidChain = (chain: BlockType[]) => {
    return ISVALID_CHAIN_HANDLER(chain, GENESIS);
  };

  const replaceChain = (chainInput: BlockType[]) => {
    if (chainInput.length <= chain.length) return false;
    if (!isValidChain(chainInput)) return false;

    chain = [...chainInput];
  };
  const getChain = (): BlockType[] => {
    return chain;
  };

  return { addBlock, getChain, isValidChain, replaceChain };
};
