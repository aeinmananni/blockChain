import express from "express";
import compression from "compression";
import cors from "cors";
import BLOCK_ROUTES from "../routes/block.routes";
const app = express();

app.use(express.json());
app.use(compression());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blockChain", BLOCK_ROUTES);

export default app;
