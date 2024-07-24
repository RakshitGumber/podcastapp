import { Request, Response } from "express";
import { sendTokenEmail } from "../../../../utils/tokenSender";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;

    if (!email)
      if (!emailRegex.test(email))
        return res
          .status(400)
          .json({ status: "warn", message: "Email String Error" });

    const token = await sendTokenEmail(email);

    return res
      .status(200)
      .json({ status: "success", message: "Verification email sent", token });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: "Internal server error", error });
  }
};
