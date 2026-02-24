import React, { useState } from 'react';

function Header() {
    const [cartCount] = useState(5);
    const [wishCount] = useState(2);

    return (
        <header className="mp-header">
            <div className="container">
                <div className="mp-logo">
                    <img src="https://marketpro-nextjs.vercel.app/assets/images/logo/logo.png" alt="MarketPro" style={{ height: '35px' }}
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                    <div style={{ display: 'none' }}>
                        <span className="market">Market</span><span className="pro">Pro</span>
                    </div>
                </div>

                <form className="mp-search" onSubmit={(e) => e.preventDefault()}>
                    <div className="search-cat-select">
                        <select>
                            <option>All Categories</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                            <option>Home</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Search products, brands, vendors..." />
                    <button type="submit">
                        <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                </form>

                <div className="mp-header-actions">
                    <div className="mp-action-item">
                        <i className="fa-light fa-arrows-rotate"></i>
                    </div>
                    <div className="mp-action-item">
                        <i className="fa-light fa-heart"></i>
                        <span className="mp-badge">{wishCount}</span>
                    </div>
                    <div className="mp-action-item">
                        <i className="fa-light fa-user"></i>
                    </div>
                    <div className="mp-action-item mp-cart-btn">
                        <div className="cart-icon-wrap">
                            <i className="fa-light fa-cart-shopping"></i>
                            <span className="mp-badge">{cartCount}</span>
                        </div>
                        <div className="cart-text">
                            <span className="label">Your Cart</span>
                            <span className="value">$280.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
