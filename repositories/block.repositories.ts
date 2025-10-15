import { BLOCK_CHAIN } from "../store/blockChain.store";
import { InstancePubSubMthodes } from "../pub-sub";
import { CHENELS } from "../pub-sub/chanel";
export const AddBlockRepo = async <T>(data: T): Promise<boolean> => {
  const redis = await InstancePubSubMthodes();
  await redis.publisher_handler({
    chanel: CHENELS.CHANEL_ADD_BLOCK,
    message: "Add_Block_Methods",
  });

  await BLOCK_CHAIN.addBlock(data);
  return true;
};

export const GetChainRepo = async () => {
  const redis = await InstancePubSubMthodes();
  await redis.publisher_handler({
    chanel: CHENELS.CHANEL_GET_VALID_CHAIN,
    message: JSON.stringify(BLOCK_CHAIN.getChain()),
  });
  console.log(
    "IsValid Chain : ",
    BLOCK_CHAIN.isValidChain(BLOCK_CHAIN.getChain())
  );
  return BLOCK_CHAIN.getChain();
};
