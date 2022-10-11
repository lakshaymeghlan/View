import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Video_container({ id, name, video }) {
  return (
    <div>
      <Link to={`/viewvideo/${id}`}>
        <h1 className="home_name" style={{ fontSize: "2rem" }}>
          {name}
        </h1>
        <iframe className="home_video" src={video}></iframe>
      </Link>
    </div>
  );
}

export default Video_container;
