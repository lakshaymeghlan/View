import axios from "axios";

export const mediaCreateApi = async (
  title,
  description,
  video,
  userName,
  email,
  img
) => {
  // console.log("--------->", video);
  const formData = new FormData();
  if (video.length > 0) {
    formData.append(`Video_file`, video[0], video[0].name);
  }
  console.log("-------->", img);
  formData.append("name", title);
  formData.append("desc", description);
  formData.append("userName", userName);
  formData.append("email", email);
  formData.append("img", img);

  const mediaCreateApi = await axios
    .post(`http://localhost:8000/media/create`, formData)
    .then((res) => {
      return res;
    });
  return mediaCreateApi;
};

export const getMediaApi = async () => {
  const getMediaApi = await axios
    .get(`http://localhost:8000/media/all`)
    .then((res) => {
      return res;
    });
  return getMediaApi;
};

export const getSingleApi = async (id) => {
  const getSingleApi = await axios
    .get(`http://localhost:8000/media/get/${id}`)
    .then((res) => {
      console.log(res.data);
    });
  return getSingleApi;
};
