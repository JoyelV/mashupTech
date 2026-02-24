import React, { useState, useEffect } from 'react';
import { flashSaleProducts } from '../data/mockData';

function FlashSale() {
    const [time, setTime] = useState({ h: 5, m: 23, s: 41 });

    useEffect(() => {
        const t = setInterval(() => {
            setTime(prev => {
                let { h, m, s } = prev;
                s--;
                if (s < 0) { s = 59; m--; }
                if (m < 0) { m = 59; h--; }
                if (h < 0) h = 23;
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(t);
    }, []);

    const p = (n) => String(n).padStart(2, '0');

    return (
        <section className="mp-flash">
            <div className="container">
                <div className="mp-section-header">
                    <div className="mp-section-title">
                        <h2>⚡ Flash Sale</h2>
                        <div className="mp-flash-timer">
                            Ends in:
                            <span className="mp-time-box">{p(time.h)}</span>:
                            <span className="mp-time-box">{p(time.m)}</span>:
                            <span className="mp-time-box">{p(time.s)}</span>
                        </div>
                    </div>
                    <a href="#" className="mp-view-all">View All →</a>
                </div>

                <div className="mp-flash-grid">
                    {flashSaleProducts.map((p) => (
                        <div key={p.id} className="mp-product-card">
                            <div className="mp-product-img">
                                {p.img}
                                <span className="mp-discount-badge">{p.discount}% OFF</span>
                            </div>
                            <div className="mp-product-body">
                                <div className="mp-product-name">{p.name}</div>
                                <div className="mp-stars">⭐⭐⭐⭐⭐ ({p.rating})</div>
                                <div className="mp-product-price">
                                    <span className="mp-current">${p.price}</span>
                                    <span className="mp-old">${p.oldPrice}</span>
                                </div>
                                <button className="mp-add-btn">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FlashSale;
