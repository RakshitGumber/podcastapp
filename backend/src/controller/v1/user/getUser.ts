import { Request, Response } from "express";
import Users from "../../../model/user";

export default async function getUsers(
  num: number
): Promise<{ count: number; data: any[] }> {
  try {
    const users = await Users.find().limit(num);
    return Promise.resolve({
      count: users.length,
      data:
        users.length === 0
          ? [{ message: "No user found" }]
          : users.map(({ username, email }) => {
              return {
                username,
                email,
              };
            }),
    });
  } catch (error) {
    return Promise.reject({
      count: 0,
      data: [{ message: "internal server error" }],
    });
  }
}
