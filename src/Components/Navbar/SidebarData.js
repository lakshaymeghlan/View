import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";

const user = JSON.parse(localStorage.getItem("user"));

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "Liked Video",
  //   path: "/like",
  //   icons: <AiIcons.AiFillLike />,
  //   cName: "nav-text",
  // },
  user
    ? {
        title: `Hi, ${user.name}`,
        path: "/logout",
        icons: <FaIcons.FaUserCheck />,
      }
    : {
        title: "LogIn/Register",
        path: "/login",
        icons: <SiIcons.SiGnuprivacyguard />,
        cName: "nav-text",
      },
  {
    title: "Send feedback",
    path: "/feedback",
    icons: <MdIcons.MdFeedback />,
    cName: "nav-text",
  },
];
