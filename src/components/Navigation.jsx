import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import "../styles/navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link className="logo" to="/cjtakhar">
            <FaPaperPlane />
          </Link>
        </h1>
        <div className={`menu-toggle ${showMenu ? "active" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="nav-menu-container">
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
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
      </div>
    </nav>
  );
};

export default Navigation;
