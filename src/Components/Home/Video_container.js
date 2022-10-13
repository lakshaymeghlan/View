import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Avatar from "@mui/material/Avatar";
import moment from "moment";

function Video_container({ id, name, video, date, img, userName }) {
  // const abcd = () => {
  //   console.log("mai chal gaya");
  // };

  const navigate = useNavigate();

  return (
    <div className="card video_contain">
      <iframe className=" card-img-top home_video" src={video}></iframe>
      <div className="card-title">
        <Link to={`/viewvideo/${id}`} style={{ textDecoration: "none" }}>
          <h1
            className="home_name"
            style={{
              fontSize: "1.5rem",
              color: "#f5f5f5",
            }}
          >
            {name}
          </h1>
        </Link>

        <Link to={`/profile/${id}`}>
          <div className="avatar">
            <Avatar alt="L" src={img} />
          </div>
        </Link>
        <div>
          <h6 className="date_format" style={{ marginBottom: "2rem" }}>
            {moment(date).format("lll")} <br />
            by: {userName}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Video_container;
