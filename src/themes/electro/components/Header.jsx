import React from 'react';
import '../styles/ElectroHeader.css';

const ElectroHeader = () => {
  return (
    <header className="electro-header">
      <div className="mp-container electro-header-inner">
        
        {/* Logo & Mobile Menu */}
        <div className="electro-logo-wrap">
          <div className="electro-logo">
            electro<span>.</span>
          </div>
          <button className="electro-mobile-toggle">
            <i className="ph ph-list"></i>
          </button>
        </div>

        {/* Search Bar Section */}
        <div className="electro-search-container">
          <form className="electro-search-form">
            <input 
              type="text" 
              placeholder="Search for Products" 
              className="electro-search-input" 
            />
            <div className="electro-category-select">
              <select defaultValue="all">
                <option value="all">All Categories</option>
                <option value="tech">Electronics</option>
                <option value="home">Home Appliances</option>
              </select>
              <i className="ph ph-caret-down"></i>
            </div>
            <button type="submit" className="electro-search-btn">
              <i className="ph ph-magnifying-glass"></i>
            </button>
          </form>
        </div>

        {/* Action Icons */}
        <div className="electro-actions">
          <a href="#compare" className="electro-action-item">
            <i className="ph ph-arrows-counter-clockwise"></i>
          </a>
          <a href="#wishlist" className="electro-action-item">
            <i className="ph ph-heart"></i>
          </a>
          <a href="#cart" className="electro-cart-item">
            <div className="electro-cart-icon-wrap">
              <i className="ph ph-shopping-bag-open"></i>
              <span className="electro-cart-count">2</span>
            </div>
            <span className="electro-cart-total">$1785.00</span>
          </a>
        </div>

      </div>
    </header>
  );
};

export default ElectroHeader;