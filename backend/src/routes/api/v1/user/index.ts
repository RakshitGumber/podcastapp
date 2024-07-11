import { Router, Request, Response } from "express";
import getUsers from "./getUsers";
import sendVerification from "./sendVerification";
import login from "./loginUser";
import verifyAndSignup from "./verifyAndSignup";

const router = Router();

router.get("/", getUsers);
router.post("/signup", sendVerification);
router.post("/login", login);
router.post("/verify/:token", verifyAndSignup);

export default router;
