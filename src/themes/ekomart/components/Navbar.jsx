import React from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
          {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-flex">
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Vendors</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
            <a href="#">Dashboard</a>
            <a href="#">Contact</a>
          </div>

          <div className="delivery">
  <FontAwesomeIcon icon={faLocationDot} className="delivery-icon" />
  <p>
Delivery: 258 FKD Street, Berlin</p>
</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;