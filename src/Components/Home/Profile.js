import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div>
      {/* <h1 style={{ color: "#f5f5f5" }}>profile</h1> */}
      <section className="channel-info">
        <div className="container">
          <div className="channel-icon">
            {/* <img
              src="https://images.unsplash.com/photo-1467912681710-2a73a89d88d6?w=80&h=80&fit=crop"
              alt=""
            /> */}
          </div>

          <div className="channel-title">
            <h1>
              Lakshay Meghlan <i className="fas fa-check-circle"></i>
            </h1>
          </div>
        </div>
      </section>

      <nav className="channel-nav">
        <div className="container">
          <ul>
            <li className="nav-item">
              <a href="#" className="current">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#">Videos</a>
            </li>
            <li className="nav-item">
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Profile;
