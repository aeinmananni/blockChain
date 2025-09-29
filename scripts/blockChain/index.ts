import { GENERATE_NEW_BLOCK_HANDLER } from "../../utils/generate-new-block.util";
import { GENESIS } from "../../utils/genesis.util";
import { BlockType } from "../models/script.model";

export const BlockChain = () => {
  let chain: BlockType[] = [GENESIS];

  const addBlock = <T>(data: T): void => {
    const NEW_BLOCK = GENERATE_NEW_BLOCK_HANDLER({ chain, data });
    chain = [...chain, NEW_BLOCK];
  };

  const getChain = (): BlockType[] => {
    return chain;
  };

  return { addBlock, getChain };
};
