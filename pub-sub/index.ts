import { createClient, RedisClientType } from "redis";
import { CHENELS } from "./chanel";
import { BLOCK_CHAIN } from "../store/blockChain.store";
type PublisherHandlerType = {
  chanel: string;
  message: string;
};

type RedisClients = {
  publisher_handler: (value: PublisherHandlerType) => void;
};

const PUB_SUB = async (): Promise<RedisClients> => {
  const publisher: RedisClientType = createClient();
  const subscriber: RedisClientType = createClient();

  await Promise.all([publisher.connect(), subscriber.connect()]);

  publisher.on("error", (err) =>
    console.error("Publisher Redis Error : ", err)
  );
  subscriber.on("error", (err) =>
    console.error("Subscriber Redis Error : ", err)
  );

  const publisher_handler = async ({
    chanel,
    message,
  }: PublisherHandlerType) => {
    try {
      await publisher.publish(chanel, message);
      console.log(`[Redis][${chanel}] Message published successfully.`);
    } catch (err) {
      console.error(`[Redis][${chanel}] Publish failed:`, err);
    }
  };

  for (const chanel of Object.values(CHENELS)) {
    await subscriber.subscribe(chanel, (chanel_request, message) => {
      if (message === "GET_VALID_CHAIN") {
        try {
          const PARS_ARRAY = JSON.parse(chanel_request);
          BLOCK_CHAIN.replaceChain(PARS_ARRAY);
        } catch (error) {
          console.log("Failed to parse chain from Redis:", error);
        }
      }
    });
  }
  console.log("Redis Pub/Sub initialized successfully!");
  return { publisher_handler };
};

export const InstancePubSubMthodes = async (): Promise<RedisClients> => {
  return await PUB_SUB();
};
