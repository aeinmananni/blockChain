import { BlockType } from "../models/script.model";

export const Block = (v: {
  lastHash: string;
  hash: string;
  data: string;
}): BlockType => {
  return { timestamp: Date.now(), ...v };
};
