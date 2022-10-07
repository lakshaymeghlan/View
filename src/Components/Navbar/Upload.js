import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <div>
      <Link to="/uploadvideo">
        <FaIcons.FaCloudUploadAlt
          className="upload"
          style={{ color: "#f5f5f5" }} //upload video icon
        />
      </Link>
      {/* </FaIcons.FaCloudUploadAlt> */}
    </div>
  );
}

export default Upload;
