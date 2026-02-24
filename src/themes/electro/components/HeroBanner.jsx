import React, { useState } from 'react';

const dealSections = [
    { title: 'CATCH BIG DEALS ON THE CAMERAS', icon: '📷', link: '#' },
    { title: 'CATCH BIG DEALS ON THE LAPTOPS', icon: '💻', link: '#' },
    { title: 'CATCH BIG DEALS ON THE MOBILES', icon: '📱', link: '#' },
    { title: 'CATCH BIG DEALS ON THE AUDIO', icon: '🎧', link: '#' },
];

function HeroBanner() {
    const [timeLeft, setTimeLeft] = useState({ hours: 8, mins: 34, secs: 12 });

    return (
        <>
            {/* Main Hero with Deals */}
            <section className="el-hero-deals">
                <div className="container">
                    <div className="el-hero-main">
                        <div className="el-hero-banner">
                            <div className="el-banner-content">
                                <div className="el-offer-tag">✨ THE NEW STANDARD</div>
                                <h1>UNDER FAVORABLE SMARTWATCHES</h1>
                                <p className="el-banner-price">FROM <span>$749.99</span></p>
                                <button className="el-banner-btn">Start Buying</button>
                                <div className="el-banner-dots">
                                    <span className="dot active"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                            </div>
                            <div className="el-banner-image">
                                ⌚⌚
                            </div>
                        </div>

                        {/* Deal Sections */}
                        <div className="el-deals-strip">
                            {dealSections.map((deal, idx) => (
                                <div key={idx} className="el-deal-card">
                                    <div className="el-deal-icon">{deal.icon}</div>
                                    <div className="el-deal-title">{deal.title}</div>
                                    <a href={deal.link} className="el-deal-link">Shop now 🔗</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Special Offer Section */}
            <section className="el-special-offer">
                <div className="container">
                    <div className="el-offer-box">
                        <div className="el-offer-content">
                            <h3>Special Offer</h3>
                            <div className="el-offer-price">
                                <span className="el-save">Save</span>
                                <span className="el-amount">$120</span>
                            </div>
                            <div className="el-offer-product">🎮</div>
                            <h4>Game Console Controller + USB 3.0 Cable</h4>
                            <div className="el-offer-price-detail">
                                <span className="el-old-price">$99.00</span>
                                <span className="el-new-price">$79.00</span>
                            </div>
                            <div className="el-stock-info">
                                <p>Available: <strong>6</strong></p>
                                <p>Already Sold: <strong>28</strong></p>
                                <div className="el-stock-bar">
                                    <div className="el-stock-fill" style={{ width: '82%' }}></div>
                                </div>
                            </div>
                            <div className="el-countdown">
                                <p>Hurry Up! Offer ends in:</p>
                                <div className="el-timer">
                                    <div className="el-time-unit">
                                        <span className="el-time-val">{String(timeLeft.hours).padStart(2, '0')}</span>
                                        <span className="el-time-label">HOURS</span>
                                    </div>
                                    <span className="el-time-sep">:</span>
                                    <div className="el-time-unit">
                                        <span className="el-time-val">{String(timeLeft.mins).padStart(2, '0')}</span>
                                        <span className="el-time-label">MINS</span>
                                    </div>
                                    <span className="el-time-sep">:</span>
                                    <div className="el-time-unit">
                                        <span className="el-time-val">{String(timeLeft.secs).padStart(2, '0')}</span>
                                        <span className="el-time-label">SECS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="el-offer-spacer"></div>
                    </div>

                    {/* Featured Products in Hero */}
                    <div className="el-hero-products">
                        {[
                            { cat: 'Speakers', name: 'Wireless Audio System Multiroom 360 degree Full...', price: '$685.00' },
                            { cat: 'Speakers', name: 'Tablet White EliteBook Revolve 810 G2', price: '$1999.00' },
                            { cat: 'Speakers', name: 'Purple Solo 2 Wireless', price: '$685.00' },
                        ].map((prod, idx) => (
                            <div key={idx} className="el-hero-prod-card">
                                <div className="el-prod-emoji">📦</div>
                                <p className="el-prod-cat">{prod.cat}</p>
                                <p className="el-prod-name">{prod.name}</p>
                                <p className="el-prod-price">{prod.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroBanner;
