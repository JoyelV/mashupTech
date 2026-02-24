import React from 'react';
import '../styles/DiscountBanners.css';
import img1 from '../assets/images/discount/offer-logo.png';
import img2 from '../assets/images/discount/offer-bg-img1.png';
import img3 from '../assets/images/discount/offer-bg-img2.png';

const logoImg = img1;
const beerImg = img2;
const milkImg = img3;

function DiscountBanners() {
    return (
        <section className="mp-discount-section py-40">
            <div className="mp-container">
                <div className="mp-discount-grid">
                    
                    {/* Left Banner: Craft Beer */}
                    <div className="mp-discount-card mp-card-pink">
                        {/* Absolute Positioned Image */}
                        <img src={beerImg} alt="Craft Beer" className="mp-discount-img mp-img-left" />
                        
                        {/* Right-Aligned Content */}
                        <div className="mp-discount-content mp-content-right">
                            <div className="mp-brand-logo">
                                <img src={logoImg} alt="Nature Food Logo" />
                            </div>
                            <h3 className="mp-discount-title">$5 off your first order</h3>
                            <p className="mp-discount-subtitle">
                                Delivery by 6:15am <span className="mp-text-gray">Expire Aug 5</span>
                            </p>
                            <a href="/shop" className="mp-btn-discount mp-btn-green">
                                Shop Now <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Banner: Fresh Milk */}
                    <div 
                        className="mp-discount-card mp-card-yellow"
                    >
                        {/* Left-Aligned Content */}
                        <div className="mp-discount-content mp-content-left">
                            <div className="mp-brand-logo">
                                <img src={logoImg} alt="Nature Food Logo" />
                            </div>
                            <h3 className="mp-discount-title">$5 off your first order</h3>
                            <p className="mp-discount-subtitle">
                                Delivery by 6:15am <span className="mp-text-green">Expire Aug 5</span>
                            </p>
                            <a href="/shop" className="mp-btn-discount mp-btn-white">
                                Shop Now <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>

                        {/* Absolute Positioned Image */}
                        <img src={milkImg} alt="Fresh Milk" className="mp-discount-img mp-img-right" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default DiscountBanners;