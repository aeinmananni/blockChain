"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstancePubSubMthodes = void 0;
const redis_1 = require("redis");
const chanel_1 = require("./chanel");
const blockChain_store_1 = require("../store/blockChain.store");
const PUB_SUB = () => __awaiter(void 0, void 0, void 0, function* () {
    const publisher = (0, redis_1.createClient)();
    const subscriber = (0, redis_1.createClient)();
    yield Promise.all([publisher.connect(), subscriber.connect()]);
    publisher.on("error", (err) => console.error("Publisher Redis Error : ", err));
    subscriber.on("error", (err) => console.error("Subscriber Redis Error : ", err));
    const publisher_handler = (_a) => __awaiter(void 0, [_a], void 0, function* ({ chanel, message, }) {
        try {
            yield publisher.publish(chanel, message);
            console.log(`[Redis][${chanel}] Message published successfully.`);
        }
        catch (err) {
            console.error(`[Redis][${chanel}] Publish failed:`, err);
        }
    });
    for (const chanel of Object.values(chanel_1.CHENELS)) {
        yield subscriber.subscribe(chanel, (chanel_request, message) => {
            if (message === "GET_VALID_CHAIN") {
                try {
                    const PARS_ARRAY = JSON.parse(chanel_request);
                    blockChain_store_1.BLOCK_CHAIN.replaceChain(PARS_ARRAY);
                }
                catch (error) {
                    console.log("Failed to parse chain from Redis:", error);
                }
            }
        });
    }
    console.log("Redis Pub/Sub initialized successfully!");
    return { publisher_handler };
});
const InstancePubSubMthodes = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield PUB_SUB();
});
exports.InstancePubSubMthodes = InstancePubSubMthodes;
