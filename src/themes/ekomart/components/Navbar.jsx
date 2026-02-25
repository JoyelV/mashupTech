import React from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-flex">
          {/* Hamburger Toggle - Hidden as it's now in Header */}
          <button className="hamburger-toggle" style={{ display: 'none' }} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Shop</a>
            <a href="/">Vendors</a>
            <a href="/">Pages</a>
            <a href="/">Blog</a>
            <a href="/">Dashboard</a>
            <a href="/">Contact</a>
          </div>

          <div className="delivery">
            <FontAwesomeIcon icon={faLocationDot} className="delivery-icon" />
            <p>Delivery: 258 FKD Street, Berlin</p>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {isOpen && <div className="nav-backdrop" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
