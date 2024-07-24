import api from "../axios";

interface Data {
  email: string;
  username: string;
  password: string;
  subscribed: boolean;
}

const verifyAndSignup = (token: string, data: Data) =>
  api.post(`/user/verify/${token}`, data);

export default verifyAndSignup;
