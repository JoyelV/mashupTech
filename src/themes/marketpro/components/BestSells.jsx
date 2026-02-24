import React, { useState, useEffect } from 'react';
import '../styles/DailyBestSells.css';
import img1 from '../assets/images/best-sells/best-sell1.png';
import img2 from '../assets/images/best-sells/best-sell2.png';
import img3 from '../assets/images/best-sells/best-sell3.png';
import img4 from '../assets/images/best-sells/best-sell4.png';
import img5 from '../assets/images/best-sells/special-snacks.png';
import img6 from '../assets/images/best-sells/offer-logo.png';

const products = [
    { id: 1, name: 'Taylor Farms Broccoli Florets Vegetables', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1},
    { id: 2, name: 'Taylor Farms Broccoli Florets Vegetables', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 3, name: 'Taylor Farms Broccoli Florets Vegetables', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 4, name: 'Taylor Farms Broccoli Florets Vegetables', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
];

function DailyBestSells() {
    const [timeLeft, setTimeLeft] = useState({ d: 616, h: 5, m: 43, s: 56 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { d, h, m, s } = prev;
                s--;
                if (s < 0) { s = 59; m--; }
                if (m < 0) { m = 59; h--; }
                if (h < 0) { h = 23; d--; }
                return { d, h, m, s };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="mp-best-sells-section py-60">
            <div className="mp-container">
                <h2 className="mp-best-sells-title">Daily Best Sells</h2>
                
                <div className="mp-best-sells-layout">
                    {/* 2-Column Product Grid */}
                    <div className="mp-best-sells-grid">
                        {products.map((p) => (
                            <div key={p.id} className="mp-best-card">
                                <div className="mp-best-card-top">
                                    <span className="mp-sale-badge">Sale 50%</span>
                                    <div className="mp-best-card-pricing">
                                        <span className="mp-old-price">${p.oldPrice.toFixed(2)}</span>
                                        <span className="mp-current-price">${p.price.toFixed(2)}</span>
                                        <span className="mp-qty-unit">/Qty</span>
                                    </div>
                                </div>

                                <div className="mp-best-card-body">
                                    <div className="mp-best-img-box">
                                        <img src={p.img} alt={p.name} />
                                    </div>
                                    <div className="mp-best-content">
                                        <div className="mp-best-rating">
                                            <span className="mp-rating-val">{p.rating}</span>
                                            <i className="ph-fill ph-star mp-star-icon"></i>
                                            <span className="mp-reviews">({p.reviews})</span>
                                        </div>
                                        <h4 className="mp-best-name">{p.name}</h4>
                                        <div className="mp-best-vendor">
                                            <i className="ph ph-storefront"></i> By Lucky Supermarket
                                        </div>
                                        <div className="mp-best-progress-wrap">
                                            <div className="mp-best-progress-track">
                                                <div className="mp-best-progress-fill" style={{ width: '51%' }}></div>
                                            </div>
                                            <span className="mp-sold-status">Sold: {p.sold}/{p.total}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mp-best-card-footer">
                                    <div className="mp-best-timer">
                                        {timeLeft.d} Days : {timeLeft.h} Hours : {timeLeft.m} Min : {timeLeft.s} Sec
                                    </div>
                                    <button className="mp-best-add-btn">
                                        Add To Cart <i className="ph ph-shopping-cart-simple"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right-side Promo Banner */}
                    <div className="mp-best-promo-banner">
                        <div className="mp-best-promo-content">
                            <div className="mp-brand-logo">
                                <img src={img6} alt="Nature Food" />
                            </div>
                            <h3 className="mp-promo-title">$5 off your first order</h3>
                            <p className="mp-promo-sub">Delivery by 6:15am <span className="mp-promo-expire">Expire Aug 5</span></p>
                            <a href="/shop" className="mp-promo-btn">Shop Now <i className="ph ph-arrow-right"></i></a>
                        </div>
                        <div className="mp-promo-img-container">
                             <img src={img5} alt="Promo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DailyBestSells;