import { Router } from "express";
import user from "./user/index.ts";

const router = Router();

router.use("/user", user);

export default router;
