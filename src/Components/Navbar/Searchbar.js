import React from "react";
import "./Searchbar.css";
import * as FaIcons from "react-icons/fa";

function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <input
          className="searchbar-inp"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <FaIcons.FaSearch style={{ margin: "6px" }} />
      </div>
    </>
  );
}

export default Searchbar;
