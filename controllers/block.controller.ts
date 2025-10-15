import { UsersType } from "../models/index.models";
import { AddBlockRepo, GetChainRepo } from "../repositories/block.repositories";
import { BlockType } from "../scripts/models/script.model";
import { asyncHandler } from "../utils/async-handler.util";
import { Request, Response } from "express";

export const handelAddBlockController = asyncHandler(
  async (req: Request, res: Response) => {
    const data = req.body;

    const result: boolean = await AddBlockRepo<UsersType>(data);

    res.status(200).send(result);
  }
);

export const handelGetBlocksController = asyncHandler(
  async (req: Request, res: Response) => {
    const result: BlockType[] = await GetChainRepo();

    res.status(200).send(result);
  }
);
