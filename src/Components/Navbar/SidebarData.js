import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";

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
  {
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
