import axios from "axios";

export const mediaCreateApi = async (userId) => {
  const mediaCreateApi = await axios
    .post(`http://localhost:8000/media/create`)
    .then((res) => {
      return res;
    });
  return mediaCreateApi;
};
