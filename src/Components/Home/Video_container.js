import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

function Video_container({ id, name, video, date, img, userName }) {
  return (
    <div className="card video_contain">
      <iframe className=" card-img-top home_video" src={video}></iframe>
      <Link to={`/viewvideo/${id}`}>
        <div className="card-title">
          <Avatar alt="L" src={img} />
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
          {moment(date).format("lll")} by: {userName}
        </div>
      </Link>
    </div>
  );
}

export default Video_container;
