import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCodeBranch, FaBars } from "react-icons/fa";
import "../styles/navigation.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
            <FaCodeBranch />
          </Link>
        </h1>
        <div
          className={`menu-toggle ${showMenu ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <FaBars className="fabars" />
        </div>
        <div className="menu-container">
        <ul className={`nav-menu ${showMenu ? "active" : "hidden"}`}>
          <li className="nav-item">
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
