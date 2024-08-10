import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { links } from "../../../../constants/gameConstants";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li key={index} className="navbar-item">
            <Link to={link.path} className="navbar-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
