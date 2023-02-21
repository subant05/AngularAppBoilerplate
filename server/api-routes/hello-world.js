import express from "express";

const router = express.Router();


router.get("/", async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send({message: "Hello World!"})
})

export default router;