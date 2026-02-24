import React from 'react';
import '../styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="electro-topbar">
      <div className="mp-container electro-topbar-inner">
        
        {/* Left Side: Welcome Message */}
        <div className="electro-topbar-left">
          <span className="welcome-text">Welcome to Worldwide Electronics Store</span>
        </div>

        {/* Right Side: Utility Links */}
        <div className="electro-topbar-right">
          <ul className="electro-topbar-menu">
            <li>
              <a href="#store">
                <i className="ph ph-map-pin"></i> Store Locator
              </a>
            </li>
            <span className="electro-separator">|</span>
            <li>
              <a href="#track">
                <i className="ph ph-truck"></i> Track Your Order
              </a>
            </li>
            <span className="electro-separator">|</span>
            <li>
              <div className="electro-currency-selector">
                <i className="ph ph-currency-dollar"></i>
                <select className="electro-dropdown" defaultValue="USD">
                  <option value="USD">Dollar (US)</option>
                  <option value="EUR">Euro (EU)</option>
                  <option value="GBP">Pound (UK)</option>
                </select>
                <i className="ph ph-caret-down electro-caret"></i>
              </div>
            </li>
            <span className="electro-separator">|</span>
            <li>
              <div className="electro-auth">
                <i className="ph ph-user"></i>
                <a href="#register">Register</a> <span className="auth-or">or</span> <a href="#signin">Sign in</a>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TopBar;