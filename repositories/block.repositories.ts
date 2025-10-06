import { BLOCK_CHAIN } from "../store/blockChain.store";

export const AddBlockRepo = <T>(data: T) => {
  BLOCK_CHAIN.addBlock(data);

  return true;
};

export const GetChainRepo = () => {
  console.log(
    "IsValid Chain : ",
    BLOCK_CHAIN.isValidChain(BLOCK_CHAIN.getChain())
  );
  return BLOCK_CHAIN.getChain();
};
