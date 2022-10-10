import React from "react";
import { Link } from "react-router-dom";

function Video_container({ id, name, video }) {
  return (
    <div>
      <Link to={`/viewvideo/${id}`}>
        <h1>{name}</h1>
        <iframe src={video}></iframe>
      </Link>
    </div>
  );
}

export default Video_container;
