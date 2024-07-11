import { Express, Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(400).json({ message: "server started" });
});

export default router;
