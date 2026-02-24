import React from 'react';

function TopBar() {
    return (
        <div className="mp-topbar">
            <div className="container">
                <div className="mp-topbar-left">
                    <div className="tp-item">
                        <a href="/become-vendor">Become a Vendor</a>
                    </div>
                </div>
                <div className="mp-topbar-right">
                    <div className="tp-item">
                        <i className="fa-light fa-location-dot"></i>
                        <span>Order Tracking</span>
                    </div>
                    <div className="tp-item tp-lang-select">
                        <span>English</span>
                        <i className="fa-light fa-angle-down"></i>
                    </div>
                    <div className="tp-item tp-curr-select">
                        <span>USD</span>
                        <i className="fa-light fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
