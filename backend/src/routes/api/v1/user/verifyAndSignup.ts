import { Request, Response } from "express";
import { verifyToken } from "../../../../utils/tokenVerification";
import { signupUser } from "../../../../controller/v1/user";

export default async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, email, password, subscribed } = req.body;
    const { token } = req.params;

    const isTokenValid = await verifyToken(token);

    if (!isTokenValid)
      return res.status(400).json({ message: `Token verification failed` });

    const newUser = await signupUser({ username, email, password, subscribed });

    if (newUser.success && newUser.user) {
      return res.status(201).json({
        message: `User created successfully`,
        user: { username: newUser.user.username, email: newUser.user.email },
      });
    } else {
      return res.status(400).json({ message: newUser.message });
    }
  } catch (error) {
    return res.status(500).json({ message: `Server error while signing up` });
  }
};
