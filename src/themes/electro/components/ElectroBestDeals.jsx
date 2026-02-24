import React, { useState } from 'react';
import '../styles/ElectroBestDeals.css';
import speakerImg from '../assets/images/products/img1.jpg';
import laptopImg from '../assets/images/products/img1.jpg';
import controllerImg from '../assets/images/products/img2.jpg';
import thumb1 from '../assets/images/products/img3.jpg';
import thumb2 from '../assets/images/products/img4.jpg';
import thumb3 from '../assets/images/products/img5.jpg';

const ShoppingCartIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const CompareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 3 21 3 21 8"></polyline>
    <line x1="4" y1="20" x2="21" y2="3"></line>
    <polyline points="21 16 21 21 16 21"></polyline>
    <line x1="15" y1="15" x2="21" y2="21"></line>
    <line x1="4" y1="4" x2="9" y2="9"></line>
  </svg>
);

const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const ElectroBestDeals = () => {
    const [activeTab, setActiveTab] = useState('Best Deals');
    const [hoveredId, setHoveredId] = useState(null);

    const tabs = ['Best Deals', 'TV & Video', 'Cameras', 'Audio', 'Smartphones', 'GPS & Navi', 'Computers', 'Portable Audio', 'Accessories'];

    const sideProducts = [
        { id: 1, cat: 'Speakers', name: 'Wireless Audio System Multiroom 360 degree Full...', price: "685,00", img: speakerImg },
        { id: 2, cat: 'Speakers', name: 'Tablet White EliteBook Revolve 810 G2', price: "685,00", img: laptopImg },
    ];

    const renderSideProduct = (p, uniqueId) => (
        <div 
            key={uniqueId} 
            className={`side-item-card ${hoveredId === uniqueId ? 'is-hovered' : ''}`}
            onMouseEnter={() => setHoveredId(uniqueId)}
            onMouseLeave={() => setHoveredId(null)}
        >
            <span className="item-cat-label">{p.cat}</span>
            <h5 className="item-product-title">{p.name}</h5>
            <div className="item-visual">
                <img src={p.img} alt={p.name} />
            </div>
            <div className="item-footer-row">
                <span className="item-price-text">${p.price}</span>
                <button className="yellow-cart-btn-small" aria-label="Add to cart">
                    <ShoppingCartIcon />
                </button>
            </div>

            {/* Hover Utility Bar */}
            {hoveredId === uniqueId && (
                <div className="item-hover-utility">
                    <span className="hover-action"><CompareIcon /> Compare</span>
                    <span className="hover-action"><HeartIcon /> Add to Wishlist</span>
                </div>
            )}
        </div>
    );

    return (
        <section className="electro-best-deals-section py-40">
            <div className="mp-container">
                
                {/* Horizontal Tab Navigation */}
                <div className="best-deals-tab-nav">
                    {tabs.map(tab => (
                        <button 
                            key={tab}
                            className={`tab-link-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 3-Column Hairline Grid */}
                <div className="best-deals-grid-container">
                    
                    {/* Column 1: Left Side Products */}
                    <div className="grid-side-col">
                        {sideProducts.map(p => renderSideProduct(p, `left-${p.id}`))}
                    </div>

                    {/* Column 2: Large Center Featured Product */}
                    <div className="grid-center-col">
                        <div className="featured-product-detail">
                            <div className="featured-meta">
                                <span className="feat-cat">Game Consoles</span>
                                <h3 className="feat-title">Game Console Controller + USB 3.0 Cable</h3>
                            </div>
                            
                            <div className="feat-main-img">
                                <img src={controllerImg} alt="Large Controller" />
                            </div>

                            <div className="feat-thumbnails">
                                <img src={thumb1} alt="Thumbnail 1" className="t-img" />
                                <img src={thumb2} alt="Thumbnail 2" className="t-img" />
                                <img src={thumb3} alt="Thumbnail 3" className="t-img" />
                            </div>

                            <div className="feat-footer">
                                <span className="feat-price">$685,00</span>
                                <button className="feat-add-cart-pill">
                                    <ShoppingCartIcon size={20} /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Right Side Products */}
                    <div className="grid-side-col">
                        {sideProducts.map(p => renderSideProduct(p, `right-${p.id}`))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ElectroBestDeals;