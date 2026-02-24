import React from 'react';

function TopBar() {
    return (
        <div className="head-top">
            <div className="container-2">
                <div className="head-top-inner">
                    <div className="head-top-left">
                        <div className="free-delivery">
                            <i className="fa-regular fa-truck-fast"></i>
                            FREE delivery &amp; <strong>40% Discount</strong> for next 3 orders! Place your 1st order in.
                        </div>
                    </div>
                    <div className="head-top-right">
                        <span>Need help? Call Us: <strong>+258 3268 21485</strong></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
