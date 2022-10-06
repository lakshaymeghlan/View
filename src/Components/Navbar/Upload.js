import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";

function Upload() {
  return (
    <div>
      <FaIcons.FaCloudUploadAlt
        className="upload"
        style={{ color: "#f5f5f5" }} //upload video icon
      />
    </div>
  );
}

export default Upload;
