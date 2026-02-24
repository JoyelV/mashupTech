import React, { useState } from 'react';
import '../styles/ElectroSpecialDeals.css';
import controllerImg from '../assets/images/products/img1.jpg';
import speakerImg from '../assets/images/products/img2.jpg';
import laptopImg from '../assets/images/products/img3.jpg';
import headphonesImg from '../assets/images/products/img4.jpg';
import phoneImg from '../assets/images/products/img5.jpg';
import cameraImg from '../assets/images/products/img6.jpg';
import printerImg from '../assets/images/products/img1 (1).jpg';

const ElectroSpecialDeals = () => {
    const [activeTab, setActiveTab] = useState('Featured');
    const [hoveredId, setHoveredId] = useState(null);

    const products = [
        { id: 1, cat: 'Speakers', name: 'Wireless Audio System Multiroom 360 degree Full...', price: "685,00", img: speakerImg },
        { id: 2, cat: 'Laptops & Computers', name: 'Tablet White EliteBook Revolve 810 G2', price: "1999,00", oldPrice: "2299,00", img: laptopImg },
        { id: 3, cat: 'Headphones', name: 'Purple Solo 2 Wireless', price: "685,00", img: headphonesImg },
        { id: 4, cat: 'Smartphones', name: 'Smartphone 6S 32GB LTE', price: "685,00", img: phoneImg },
        { id: 5, cat: 'Cameras', name: 'Widescreen NX Mini F1 SMART NX', price: "685,00", img: cameraImg },
        { id: 6, cat: 'Printers', name: 'Full Color Laserjet Pro M452dn', price: "685,00", img: printerImg },
    ];

    return (
        <section className="electro-deals-section py-40">
            <div className="mp-container">
                <div className="deals-main-layout">
                    
                    {/* Left Side: Special Offer Countdown Card */}
                    <div className="special-offer-container">
                        <div className="special-offer-card">
                            <div className="offer-header">
                                <h2 className="offer-label">Special Offer</h2>
                                <div className="save-badge">
                                    Save <br/> <strong>$120</strong>
                                </div>
                            </div>

                            <div className="offer-visual">
                                <img src={controllerImg} alt="Game Console Controller" />
                            </div>

                            <div className="offer-body">
                                <h4 className="offer-product-title">Game Console Controller + USB 3.0 Cable</h4>
                                <div className="offer-pricing">
                                    <span className="price-old">$99,00</span>
                                    <span className="price-current">$79,00</span>
                                </div>

                                <div className="offer-stock-status">
                                    <div className="stock-info">
                                        <span>Available: <b>6</b></span>
                                        <span>Already Sold: <b>28</b></span>
                                    </div>
                                    <div className="stock-progress-track">
                                        <div className="stock-progress-fill" style={{ width: '80%' }}></div>
                                    </div>
                                </div>

                                <div className="offer-timer-wrap">
                                    <p className="hurry-text">Hurry Up! Offer ends in:</p>
                                    <div className="countdown-timer">
                                        <div className="timer-box"><span>00</span> <small>HOURS</small></div> :
                                        <div className="timer-box"><span>00</span> <small>MINS</small></div> :
                                        <div className="timer-box"><span>00</span> <small>SECS</small></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Tabbed Products Grid */}
                    <div className="tabbed-products-container">
                        <div className="deals-tabs-nav">
                            {['Featured', 'On Sale', 'Top Rated'].map(tab => (
                                <button 
                                    key={tab}
                                    className={`tab-link-item ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="products-divider-grid">
                            {products.map(p => (
                                <div 
                                    key={p.id} 
                                    className={`product-divider-item ${hoveredId === p.id ? 'is-highlighted' : ''}`}
                                    onMouseEnter={() => setHoveredId(p.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                >
                                    <span className="item-category-tag">{p.cat}</span>
                                    <h5 className="item-product-name">{p.name}</h5>
                                    
                                    <div className="item-image-box">
                                        <img src={p.img} alt={p.name} />
                                    </div>

                                    <div className="item-action-row">
                                        <div className="item-price-block">
                                            {p.oldPrice && <span className="old-val">${p.oldPrice}</span>}
                                            <span className={`current-val ${p.oldPrice ? 'on-sale' : ''}`}>
                                                ${p.price}
                                            </span>
                                        </div>
                                        <button className="yellow-circle-cart">
                                            <i className="ph-fill ph-shopping-cart-simple"></i>
                                        </button>
                                    </div>
                                    
                                    {hoveredId === p.id && (
                                        <div className="hover-utility-bar">
                                            <span className="util-link"><i className="ph ph-arrows-counter-clockwise"></i> Compare</span>
                                            <span className="util-link"><i className="ph ph-heart"></i> Add to Wishlist</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ElectroSpecialDeals;