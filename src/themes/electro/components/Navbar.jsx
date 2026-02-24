import React, { useState } from 'react';

const links = ['Super Deals', 'Featured Brands', 'Trending Styles', 'Gift Cards'];

function Navbar() {
    const [showAllCats, setShowAllCats] = useState(false);

    const categories = [
        'Value of the Day',
        'Top 100 Offers',
        'New Arrivals',
        'Computers & Accessories',
        'Cameras, Audio & Video',
        'Mobiles & Tablets',
        'Movies, Music & Video Game',
        'TV & Audio',
        'Watches & Eyewear',
        'Car, Motorbike & Industrial',
        'Accessories',
    ];

    return (
        <>
            <nav className="el-navbar">
                <div className="container">
                    <div className="el-navbar-left">
                        <button 
                            className="el-all-cats"
                            onClick={() => setShowAllCats(!showAllCats)}
                        >
                            ☰ All Departments
                        </button>
                        <div className="el-nav-links">
                            {links.map((l) => (
                                <a key={l} href="/" className="el-nav-link">{l}</a>
                            ))}
                        </div>
                    </div>
                    <div className="el-navbar-right">
                        <p>Free Shipping on Orders $50+</p>
                    </div>
                </div>
            </nav>

            {showAllCats && (
                <div className="el-mega-menu">
                    <div className="container">
                        <h3>All Categories</h3>
                        <div className="el-mega-menu-grid">
                            {categories.map((cat) => (
                                <a key={cat} href="/" className="el-mega-menu-item">
                                    {cat}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
