import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/images/hot-deals/product-img3.png';
import img2 from '../assets/images/hot-deals/product-img13.png';
import img3 from '../assets/images/hot-deals/product-img28.png';
import img4 from '../assets/images/hot-deals/product-img29.png';
import img5 from '../assets/images/hot-deals/product-img30.png';
import img6 from '../assets/images/hot-deals/basket-img.png';
import '../styles/HotDeals.css';

const hotDealsProducts = [
    { id: 1, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1 },
    { id: 2, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 3, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 4, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
    { id: 5, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img5 },
    { id: 6, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1 },
    { id: 7, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 8, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 9, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
    { id: 10, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img5 },
];

const promoBasketImg = img6;

function HotDeals() {
    const scrollRef = useRef(null);
    
    const [timeLeft, setTimeLeft] = useState({ days: 624, hours: 6, minutes: 5, seconds: 41 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                if (seconds > 0) { seconds--; } 
                else {
                    seconds = 59;
                    if (minutes > 0) { minutes--; } 
                    else {
                        minutes = 59;
                        if (hours > 0) { hours--; } 
                        else {
                            hours = 23;
                            if (days > 0) days--;
                        }
                    }
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 260; 
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="mp-hd-section py-60">
            <div className="mp-container">
                
                {/* Section Header */}
                <div className="mp-hd-header">
                    <h2 className="mp-hd-title">Hot Deals Todays</h2>
                    
                    <div className="mp-hd-actions">
                        <a href="/deals" className="mp-view-all">View All Deals</a>
                        <div className="mp-slider-nav">
                            <button className="mp-nav-btn" onClick={() => handleScroll('left')}>
                                <i className="ph ph-caret-left"></i>
                            </button>
                            <button className="mp-nav-btn" onClick={() => handleScroll('right')}>
                                <i className="ph ph-caret-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="mp-hd-content-wrapper">
                    
                    {/* Left Promotional Timer Card */}
                    <div className="mp-hd-promo-card">
                        <span className="mp-hd-badge">Medical equipment</span>
                        <h3 className="mp-hd-promo-title">Deals of the day</h3>
                        <p className="mp-hd-promo-subtitle">Save up to 50% off on your first order</p>
                        
                        <div className="mp-hd-timer">
                            <div className="mp-hd-time-box">{timeLeft.days} D</div> <span className="mp-hd-colon">:</span>
                            <div className="mp-hd-time-box">{timeLeft.hours} H</div> <span className="mp-hd-colon">:</span>
                            <div className="mp-hd-time-box">{timeLeft.minutes} M</div> <span className="mp-hd-colon">:</span>
                            <div className="mp-hd-time-box">{timeLeft.seconds} S</div>
                        </div>

                        <a href="/shop" className="mp-hd-explore-btn">
                            Explore Shop <i className="ph ph-shopping-cart-simple"></i>
                        </a>

                        <img src={promoBasketImg} alt="Grocery Basket" className="mp-hd-promo-img" />
                    </div>

                    {/* Right Product Slider */}
                    <div className="mp-hd-slider-track" ref={scrollRef}>
                        {hotDealsProducts.map((p) => (
                            <div key={p.id} className="mp-hd-product-card">
                                
                                {/* Top Right Add Button */}
                                <button className="mp-add-btn">
                                    Add <i className="ph ph-shopping-cart-simple"></i>
                                </button>

                                {/* Product Image */}
                                <div className="mp-card-img-wrap">
                                    <img src={p.img} alt={p.name} />
                                </div>

                                {/* Pricing Row */}
                                <div className="mp-card-price-row">
                                    <span className="mp-price-current">${p.price.toFixed(2)}</span>
                                    <span className="mp-price-qty">/Qty</span>
                                    <span className="mp-price-old">${p.oldPrice.toFixed(2)}</span>
                                </div>

                                {/* Rating Row */}
                                <div className="mp-card-rating">
                                    <span className="mp-rating-score">{p.rating}</span>
                                    <i className="ph-fill ph-star mp-star-icon"></i>
                                    <span className="mp-rating-reviews">({p.reviews})</span>
                                </div>

                                {/* Product Title */}
                                <h4 className="mp-card-title">{p.name}</h4>

                                {/* Sold Progress Bar */}
                                <div className="mp-card-progress-wrap">
                                    <div className="mp-progress-track">
                                        <div 
                                            className="mp-progress-fill" 
                                            style={{ width: `${(p.sold / p.total) * 100}%` }}
                                        ></div>
                                    </div>
                                    <span className="mp-sold-text">Sold: {p.sold}/{p.total}</span>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default HotDeals;