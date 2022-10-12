import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

function Video_container({ id, name, video }) {
  const userDetails = {
    name: "",
    img: "",
  };

  var user = JSON.parse(localStorage.getItem("user"));
  if (user !== null) {
    userDetails.name = user.name;
    userDetails.img = user.userImage;
  }

  return (
    <div className="card video_contain">
      <iframe className=" card-img-top home_video" src={video}></iframe>
      <Link to={`/viewvideo/${id}`}>
        <div className="card-title">
          <Avatar alt="L" src={userDetails.img} />
          <h1
            className="home_name"
            style={{
              fontSize: "1.5rem",
              color: "#f5f5f5",
              textDecoration: "none",
            }}
          >
            {name}
          </h1>
          {moment(posts.created_at).format("lll")} by : {posts.name}
        </div>
      </Link>
    </div>
  );
}

export default Video_container;
