import React from 'react';

const sideCards = [
    { title: 'Fresh Quality Meat', desc: 'Up to 50% off deals', emoji: '🥩', bg: '#FDF7EB', color: '#1F1F25' },
    { title: 'Daily Organic Food', desc: 'Free delivery available', emoji: '🥬', bg: '#E6F4F1', color: '#1F1F25' },
];

function HeroBanner() {
    return (
        <section className="mp-hero">
            <div className="container">
                <div className="mp-hero-main">
                    <div className="mp-hero-text">
                        <span className="tag">🔥 Limited Time Deals</span>
                        <h1>Shop from <span>1000+</span><br />Top Vendors & Brands</h1>
                        <p>Discover the best products from verified sellers. Compare prices, read reviews, and shop with confidence on MarketPro.</p>
                        <a href="#" className="mp-btn-primary">
                            Start Shopping <i className="fa-regular fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="mp-hero-sidebar">
                    {sideCards.map((c) => (
                        <div key={c.title} className="mp-hero-side-card" style={{ background: c.bg, color: c.color }}>
                            <div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;
