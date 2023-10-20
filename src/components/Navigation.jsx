import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane, FaBars } from "react-icons/fa";
import "../styles/navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("body-menu-open");
    } else {
      document.body.classList.remove("body-menu-open");
    }
  }, [showMenu]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link className="logo" to="/cjtakhar">
            <FaPaperPlane />
          </Link>
        </h1>
        <div
          className={`menu-toggle ${showMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <FaBars className="fabars" /> 
        </div>
        <ul className={`nav-menu ${showMenu ? "active" : "hidden"}`}>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
