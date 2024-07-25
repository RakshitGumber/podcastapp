import { Router, Request, Response } from "express";
import getUsers from "./getUsers.ts";
import sendVerification from "./sendVerification.ts";
import login from "./loginUser.ts";
import verifyAndSignup from "./verifyAndSignup.ts";

const router = Router();

router.get("/", getUsers);
router.post("/signup", sendVerification);
router.post("/login", login);
router.post("/verify/:token", verifyAndSignup);

export default router;
