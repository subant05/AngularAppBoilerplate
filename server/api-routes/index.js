import express from "express";
import dotenv from "dotenv";
import HelloWorld from "./hello-world.js";

dotenv.config({ path: "../.env" });

const childRouter = express.Router();
const parentRouter = express.Router();

childRouter.use("/hello-world", HelloWorld);

export default parentRouter.use("/", childRouter);
