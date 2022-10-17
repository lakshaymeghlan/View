import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

function Logout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="container">
        <div className="logout_profile">
          <h1 className="name">
            {" "}
            <FaIcons.FaUserCheck
              style={{ color: "#f5f5f5", marginRight: "2rem" }}
            />{" "}
            Name - {user.name}
          </h1>
          <h1>
            <MdIcons.MdMarkEmailRead
              style={{ color: "#f5f5f5", marginRight: "2rem" }}
            />
            Email - {user.email}
          </h1>
        </div>

        <button
          className="button_rev_out"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
