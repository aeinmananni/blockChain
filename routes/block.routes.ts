import { Router } from "express";
import {
  handelAddBlockController,
  handelGetBlocksController,
} from "../controllers/block.controller";
const router = Router();

router.post("/Add", handelAddBlockController);
router.get("/Get/All", handelGetBlocksController);

export default router;
