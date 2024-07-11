import { ObjectId } from "mongoose";
import Users from "../../../model/user";
import bcryptjs from "bcryptjs";

interface User {
  username: string;
  email: string;
  password: string;
  subscribed: boolean;
}

interface SignupResponse {
  success: boolean;
  user?: {
    username: string;
    email: string;
  };
  message?: string;
}

export default async function signupUser({
  username,
  email,
  password,
  subscribed,
}: User): Promise<SignupResponse> {
  try {
    const usernameExists = await Users.findOne({ username });
    if (usernameExists)
      return { success: false, message: "username already exists" };

    const emailExists = await Users.findOne({ email });
    if (emailExists) return { success: false, message: "email already exists" };

    const hashedPassword = await hashPassword(password);

    await Users.create({
      username,
      email,
      password: hashedPassword,
      subscribed,
    });

    return {
      success: true,
      user: {
        username,
        email,
      },
    };
  } catch (error) {
    console.error("Error while signing up:", error);
    return {
      success: false,
      message: "Error while signing up",
    };
  }
}

function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    bcryptjs.hash(password, 10, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
}
