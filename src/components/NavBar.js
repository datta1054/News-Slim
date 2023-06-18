import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarData } from "./SidebarData";
import "./NavBar.css";
import {
  faBars,
  faMoon,
  faSun,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { IconContext } from "react-icons";

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#303030" }}>
        <nav
          style={{ position: "fixed", top: 0, width: "100%" }}
          className="navbar navbar-expand-lg navbar-dark"
        >
          <div className="container-fluid ">
            <Link to="#" className="menu-bars" style={{ color: "black" }}>
              <FontAwesomeIcon icon={faBars} onClick={showSidebar} />
            </Link>
            <div className="brand me-auto mb-0 mb-lg-0">
              <Link className="navbar-brand newsTitle" to="/news">
                NewsSlim
              </Link>
            </div>
            <div className="sun text-light">
              <FontAwesomeIcon icon={faSun} />
              <div
                className="form-check form-switch dark-mode-position"
                id="bx"
              >
                <input
                  className="form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.changemode}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="flexSwitchCheckDefault"
                ></label>
                <FontAwesomeIcon icon={faMoon} />
              </div>
            </div>
          </div>
        </nav>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars" style={{ color: "black" }}>
                <FontAwesomeIcon icon={faWindowClose} />
              </Link>
            </li>
            <div className="sidebars">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cname}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="sidebar">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
