import axios from "axios";

export const loginApiCall = async (userCredentials) => {
  const loginApiCall = await axios
    .post("http://localhost:8000/auth/login", userCredentials)
    .then((res) => {
      const user = res.data.user;
      const userData = {
        name: user.username,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(userData));
    });
  return loginApiCall;
};

export const registerApiCall = async (userCredentials) => {
  console.log(userCredentials);
  try {
    await axios.post("http://localhost:8000/auth/register", userCredentials);
  } catch (error) {
    console.log(error);
  }
};

// export const userApiCall = async () => {
//   const userApiCall = await axios
//     .get("http://localhost:8080/auth/userData")
//     .then((res) => {
//       return res;
//     });
//   return userApiCall;
// };
