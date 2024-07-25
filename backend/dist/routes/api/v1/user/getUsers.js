import { getUsers } from "../../../../controller/v1/user/index.js";
export default async (req, res) => {
  try {
    const users = await getUsers(10);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "an error Occured", error });
  }
};
