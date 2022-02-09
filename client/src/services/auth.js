import axios from "axios";
import { BASE_URL } from "../constants/globals";

async function login({ email, password }) {
  const res = await axios.get(
    `${BASE_URL}/login/?email=${email}&password=${password}`
  );
  console.log(res.data);
  if (res.data.status !== 200) {
    return undefined;
  }
  return res.data.user;
}

async function register(user) {
  const res = await axios.post(`${BASE_URL}/register/`, user);
  console.log(res.data);
  if (res.data.status !== 200) {
    return res.data.message;
  }
  return "";
}
export { login, register };
