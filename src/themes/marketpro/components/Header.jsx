import React, { useState } from "react";
import logo from "../assets/images/marketpro-logo.png";
import "../styles/Header.css"; 

function Header() {
  const [cartCount] = useState(2);
  const [wishCount] = useState(2);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="mp-header-main border-bottom">
      <div className="mp-container">
        <div className="mp-header-inner">
          
          {/* 1. Logo */}
          <div className="mp-logo">
            <a href="/">
              <img src={logo} alt="MarketPro Logo" />
            </a>
          </div>

          {/* 2. Search Form */}
          <div className="mp-search-wrapper">
            <form onSubmit={handleSubmit} className="mp-search-form">
              
              <div className="mp-category-dropdown">
                <select defaultValue="">
                  <option value="" disabled>All categories</option>
                  <option>Vegetables</option>
                  <option>Milk & Cake</option>
                  <option>Grocery</option>
                  <option>Beauty</option>
                  <option>Fruits</option>
                </select>
              </div>

              <input
                type="text"
                className="mp-search-input"
                placeholder=""
              />

              <button type="submit" className="mp-search-btn">
                <i className="ph ph-magnifying-glass"></i>
              </button>
            </form>
          </div>

          {/* 3. Right Actions */}
          <div className="mp-header-actions">
            
            <a href="/profile" className="mp-action-item">
              <div className="mp-icon-wrapper">
                <i className="ph ph-user"></i>
              </div>
              <span>Profile</span>
            </a>

            <a href="/wishlist" className="mp-action-item">
              <div className="mp-icon-wrapper">
                <i className="ph ph-heart"></i>
                <span className="mp-badge">{wishCount}</span>
              </div>
              <span>Wishlist</span>
            </a>

            <a href="/cart" className="mp-action-item">
              <div className="mp-icon-wrapper">
                <i className="ph ph-shopping-cart-simple"></i>
                <span className="mp-badge">{cartCount}</span>
              </div>
              <span>Cart</span>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;