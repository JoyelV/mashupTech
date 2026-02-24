import React from 'react';
import '../styles/ElectroHero.css';
import heroWatchImg from '../assets/images/hero/img1.png'; 

const categories = [
    { name: 'Value of the Day', hasSub: false, isBold: true },
    { name: 'Top 100 Offers', hasSub: false, isBold: true },
    { name: 'New Arrivals', hasSub: false, isBold: true },
    { name: 'Computers & Accessories', hasSub: true },
    { name: 'Cameras, Audio & Video', hasSub: true },
    { name: 'Mobiles & Tablets', hasSub: true },
    { name: 'Movies, Music & Video Game', hasSub: true },
    { name: 'TV & Audio', hasSub: true },
    { name: 'Watches & Eyewear', hasSub: true },
    { name: 'Car, Motorbike & Industrial', hasSub: true },
    { name: 'Accessories', hasSub: true },
];

function ElectroHero() {
    return (
        <section className="electro-hero-section">
            <div className="mp-container">
                
                {/* Secondary Navbar / Top links */}
                <div className="electro-hero-nav">
                    <div className="nav-left">
                        <a href="#super-deals" className="nav-link highlight">Super Deals <i className="ph ph-caret-down"></i></a>
                        <a href="#brands" className="nav-link">Featured Brands</a>
                        <a href="#styles" className="nav-link">Trending Styles</a>
                        <a href="#gift" className="nav-link">Gift Cards</a>
                    </div>
                    <div className="nav-right">
                        <span className="shipping-text">Free Shipping on Orders $50+</span>
                    </div>
                </div>

                <div className="electro-hero-layout">
                    
                    {/* Left Sidebar: All Departments */}
                    <aside className="electro-category-sidebar">
                        <div className="sidebar-header">
                            <i className="ph ph-list"></i> All Departments
                        </div>
                        <ul className="sidebar-menu">
                            {categories.map((cat, idx) => (
                                <li key={idx} className={cat.isBold ? 'menu-item bold' : 'menu-item'}>
                                    <a href={`#${cat.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                        {cat.name}
                                        {cat.hasSub && <i className="ph ph-caret-right"></i>}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Right Side: Hero Slider Content */}
                    <div className="electro-hero-slider">
                        <div className="slider-content">
                            <h4 className="slider-sub">THE NEW STANDARD</h4>
                            <h1 className="slider-main-title">UNDER FAVORABLE SMARTWATCHES</h1>
                            <div className="slider-price">
                                <span className="from">FROM</span>
                                <span className="currency">$</span>
                                <span className="price-val">749</span>
                                <span className="cents">99</span>
                            </div>
                            <a href="/shop" className="btn-start-buying">Start Buying</a>
                            
                            {/* Slider Pagination Dots */}
                            <div className="slider-dots">
                                <span className="dot active"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>

                        <div className="slider-image">
                            <img src={heroWatchImg} alt="Smartwatches" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ElectroHero;