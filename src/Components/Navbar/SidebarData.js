import React from "react";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Liked Video",
    path: "/",
    icons: <AiIcons.AiFillLike />,
    cName: "nav-text",
  },
  {
    title: "Help",
    path: "/",
    icons: <IoIcons.IoIosHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Send feedback",
    path: "/",
    icons: <MdIcons.MdFeedback />,
    cName: "nav-text",
  },
];
