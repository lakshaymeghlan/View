import axios from "axios";

export const mediaCreateApi = async (title, description, video) => {
  console.log("--------->", video);
  const formData = new FormData();

  // const data = {
  //   name: title,
  //   desc: description, // its not going ?? can you tell me why the title and desc are not going in backend????
  //   // Video_file: "",
  // };

  if (video.length > 0) {
    formData.append(`Video_file`, video[0], video[0].name);
  }
  formData.append("name", title);
  formData.append("desc", description);
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
