import { BLOCK_CHAIN } from "../store/blockChain.store";

export const AddBlockRepo = <T>(data: T) => {
  BLOCK_CHAIN.addBlock(data);

  return true;
};

export const GetChainRepo = () => {
  return BLOCK_CHAIN.getChain();
};
