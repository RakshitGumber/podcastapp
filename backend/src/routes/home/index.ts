import { Express, Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(400).send({ message: "server started" });
});

export default router;
