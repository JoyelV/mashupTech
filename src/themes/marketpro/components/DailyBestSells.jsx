import React, { useState, useEffect } from 'react';

const bestSellsProducts = [
    {
        id: 1, name: 'Taylor Farms Broccoli Florets', category: 'Vegetables',
        price: 28.00, oldPrice: 35.00, img: '🥦',
        sold: 20, total: 50, badge: 'Sale 50%',
        endTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 675
    },
    {
        id: 2, name: 'Fresh Organic Carrots', category: 'Vegetables',
        price: 15.00, oldPrice: 20.00, img: '🥕',
        sold: 15, total: 30, badge: 'Sale 50%',
        endTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 675
    },
    {
        id: 3, name: 'Premium Angus Beef', category: 'Meat',
        price: 55.00, oldPrice: 70.00, img: '🥩',
        sold: 45, total: 60, badge: 'Sale 50%',
        endTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 675
    },
];

function Countdown({ endTime }) {
    const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const diff = endTime - now;
            if (diff <= 0) {
                clearInterval(timer);
                return;
            }
            setTimeLeft({
                d: Math.floor(diff / (1000 * 60 * 60 * 24)),
                h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                s: Math.floor((diff % (1000 * 60)) / 1000),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [endTime]);

    return (
        <div className="item-countdown">
            <div className="time">{timeLeft.d} D</div>
            <div className="time">{String(timeLeft.h).padStart(2, '0')} H</div>
            <div className="time">{String(timeLeft.m).padStart(2, '0')} M</div>
            <div className="time">{String(timeLeft.s).padStart(2, '0')} S</div>
        </div>
    );
}

function DailyBestSells() {
    return (
        <section className="mp-daily-best-sells">
            <div className="container">
                <div className="mp-section-header">
                    <div className="mp-section-title">
                        <h2>Daily Best Sells</h2>
                    </div>
                </div>

                <div className="mp-best-sells-grid">
                    {bestSellsProducts.map(p => (
                        <div key={p.id} className="best-sell-card">
                            <span className="badge">{p.badge}</span>
                            <div className="img-box">{p.img}</div>
                            <div className="content">
                                <span className="cat">{p.category}</span>
                                <h4 className="title">{p.name}</h4>
                                <div className="rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <span className="val">(4.8)</span>
                                </div>
                                <div className="price-wrap">
                                    <span className="current">${p.price.toFixed(2)}</span>
                                    <span className="old">${p.oldPrice.toFixed(2)}</span>
                                </div>
                                <div className="sold-info">
                                    <div className="progress">
                                        <div className="bar" style={{ width: `${(p.sold / p.total) * 100}%` }}></div>
                                    </div>
                                    <span className="text">Sold: {p.sold}/{p.total}</span>
                                </div>
                                <div className="deal-end">
                                    <span className="label">Hurry up! Offer ends in:</span>
                                    <Countdown endTime={p.endTime} />
                                </div>
                                <button className="add-btn">
                                    Add to Cart <i className="fa-regular fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DailyBestSells;
