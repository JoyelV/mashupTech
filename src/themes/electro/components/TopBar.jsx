import React from 'react';

function TopBar() {
    return (
        <div className="el-topbar">
            <div className="el-topbar-left">
                <span>Welcome to Worldwide Electronics Store</span>
            </div>
            <div className="el-topbar-right">
                <a href="#" className="el-topbar-link">📍 Store Locator</a>
                <span className="el-topbar-sep">|</span>
                <a href="#" className="el-topbar-link">📦 Track Your Order</a>
                <span className="el-topbar-sep">|</span>
                <select className="el-topbar-select">
                    <option>$ Dollar (USD)</option>
                    <option>€ Euro</option>
                    <option>£ Pound</option>
                </select>
                <span className="el-topbar-sep">|</span>
                <a href="#" className="el-topbar-link">👤 Register or Sign in</a>
            </div>
        </div>
    );
}

export default TopBar;
