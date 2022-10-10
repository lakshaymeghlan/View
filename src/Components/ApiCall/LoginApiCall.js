import axios from "axios";

const loginApiCall = async () => {
  const loginApiCall = await axios
    .get("http://localhost:8080/auth/register")
    .then((res) => {
      return res;
    });
  return loginApiCall;
};

const registerApiCall = async () => {
  const registerApiCall = await axios
    .get("http://localhost:8080/auth/login-user")
    .then((res) => {
      return res;
    });
  return registerApiCall;
};

const userApiCall = async () => {
  const userApiCall = await axios
    .get("http://localhost:8080/auth/userData")
    .then((res) => {
      return res;
    });
  return userauth;
};

export default loginApiCall;
