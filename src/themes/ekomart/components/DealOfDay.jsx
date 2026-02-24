import React, { useState, useEffect } from 'react';
import { deals } from '../data/mockData';

function DealOfDay() {
    const [timeLeft, setTimeLeft] = useState({ hours: 11, minutes: 34, seconds: 56 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                seconds--;
                if (seconds < 0) { seconds = 59; minutes--; }
                if (minutes < 0) { minutes = 59; hours--; }
                if (hours < 0) { hours = 23; }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const pad = (n) => String(n).padStart(2, '0');

    return (
        <section className="eko-deal-section">
            <div className="container">
                <div className="eko-section-header">
                    <h2 className="section-title">🔥 Deal of the Day</h2>
                    <div className="eko-deal-timer">
                        <span className="eko-timer-label">Ends in:</span>
                        <div className="eko-timer-box">
                            <span className="eko-time-unit">{pad(timeLeft.hours)}</span>
                            <span className="eko-time-sep">:</span>
                            <span className="eko-time-unit">{pad(timeLeft.minutes)}</span>
                            <span className="eko-time-sep">:</span>
                            <span className="eko-time-unit">{pad(timeLeft.seconds)}</span>
                        </div>
                    </div>
                </div>

                <div className="eko-products-grid">
                    {deals.map((deal) => (
                        <div key={deal.id} className="eko-product-card">
                            <div className="eko-product-img">
                                {deal.img}
                                <span className="eko-badge">{deal.discount}% OFF</span>
                            </div>
                            <div className="eko-product-body">
                                <h3 className="eko-product-name">{deal.name}</h3>
                                <div className="eko-stars">⭐⭐⭐⭐⭐ <span>(142)</span></div>
                                <div className="eko-price">
                                    <span className="current">${deal.price.toFixed(2)}</span>
                                    <span className="old">${deal.oldPrice.toFixed(2)}</span>
                                </div>
                                <button className="eko-add-btn">🛒 Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DealOfDay;
