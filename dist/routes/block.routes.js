"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const block_controller_1 = require("../controllers/block.controller");
const router = (0, express_1.Router)();
router.post("/Add", block_controller_1.handelAddBlockController);
router.get("/Get/All", block_controller_1.handelGetBlocksController);
exports.default = router;
