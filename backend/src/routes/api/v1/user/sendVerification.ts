import { Request, Response } from "express";
import { sendTokenEmail } from "../../../../utils/tokenSender";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "please proved email" });

    const token = await sendTokenEmail(email);

    return res.status(200).json({ message: "Verification email sent", token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
