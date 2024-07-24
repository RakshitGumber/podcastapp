import api from "../axios";

interface Data {
  email: String;
}

const signupUser = (data: Data) => api.post("/user/signup", data);

export default signupUser;
