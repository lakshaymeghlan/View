import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import * as AiIcons from "react-icons/ai";
import "./Profile.css";

function Profile({ img, name }) {
  console.log(img);
  return (
    <>
      <Card sx={{ maxWidth: 2000 }}>
        <CardMedia
          className="profile_card"
          component="img"
          height="140"
          display="flex"
          image="../public/222.png"
          alt="banner"
        />
      </Card>
      <Avatar
        className="profile_avatar"
        style={{ marginLeft: "40rem", width: "10rem", height: "10rem" }}
        alt="L"
        src={img}
      />
      <h1
        className="home_name"
        style={{
          fontSize: "1.5rem",
          color: "#f5f5f5",
        }}
      >
        {name}
      </h1>
      <div className="container">
        <AiIcons.AiOutlineVideoCamera
          style={{
            color: "#376f70",
            width: "4rem",
            height: "4rem",
          }}
        />
        <h1 style={{ color: "#f5f5f5" }}>Videos :</h1>
      </div>
    </>
  );
}

export default Profile;
