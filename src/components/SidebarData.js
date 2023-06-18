import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faFilm,
  faFlask,
  faHome,
  faLaptopCode,
  faMoneyBill,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/general",
    icon: <FontAwesomeIcon icon={faHome} />,
    cname: "nav-text",
  },
  {
    title: "Business ",
    path: "/business ",
    icon: <FontAwesomeIcon icon={faBusinessTime} />,
    cname: "nav-text",
  },
  {
    title: "Entertainment ",
    path: "/entertainment ",
    icon: <FontAwesomeIcon icon={faFilm} />,
    cname: "nav-text",
  },
  {
    title: "Science  ",
    path: "/science  ",
    icon: <FontAwesomeIcon icon={faFlask} />,
    cname: "nav-text",
  },

  {
    title: "Health ",
    path: "/health ",
    icon: <FontAwesomeIcon icon={faMoneyBill} />,
    cname: "nav-text",
  },
  {
    title: "Sport ",
    path: "/sports",
    icon: <FontAwesomeIcon icon={faRunning} />,
    cname: "nav-text",
  },
  {
    title: "Technology  ",
    path: "/technology  ",
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    cname: "nav-text",
  },
];
