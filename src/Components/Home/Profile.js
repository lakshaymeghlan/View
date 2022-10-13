import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import * as AiIcons from "react-icons/ai";
import "./Profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import imagebanner from "./222.png";
import Video_container from "./Video_container";

function Profile() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:8000/media/getByUser/${params.id}`
      );
      setUserImage(response.data.userImage);
      setData(response.data.data);
    };
    getData();
  }, []);
  console.log(data);

  return (
    <>
      <Card sx={{ maxWidth: 2000 }}>
        <CardMedia
          className="profile_card"
          component="img"
          height="140"
          display="flex"
          image={imagebanner}
          alt="banner"
        />
      </Card>
      <Avatar
        className="profile_avatar"
        style={{ marginLeft: "40rem", width: "10rem", height: "10rem" }}
        alt="L"
        src={userImage}
      />
      {/* <h1
        className="home_name"
        style={{
          fontSize: "1.5rem",
          color: "#f5f5f5",
        }}
      >
      
      </h1> */}
      <div className="container">
        <AiIcons.AiOutlineVideoCamera
          style={{
            color: "#376f70",
            width: "4rem",
            height: "4rem",
          }}
        />
        <h1 style={{ color: "#f5f5f5" }}>Videos :</h1>
        <hr />
        {data.map((video) => {
          return (
            <>
              <Video_container
                key={video._id}
                id={video._id}
                name={video.name}
                date={video.createdAt}
                img={video.img}
                video={video.videos[0]}
                userName={video.userName}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Profile;
