import React, { useRef } from 'react';
import '../styles/FlashSale.css';
import img1 from '../assets/images/flash/product-img3.png';
import img2 from '../assets/images/flash/product-img27.png';
import img3 from '../assets/images/flash/product-img29.png';
import img4 from '../assets/images/flash/product-img30.png';

const mockProducts = [
    { id: 1, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1},
    { id: 2, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 3, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 4, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
    { id: 5, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1 },
    { id: 6, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 7, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 8, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
    { id: 9, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1},
    { id: 10, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 11, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 12, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
    { id: 13, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img1},
    { id: 14, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img2 },
    { id: 15, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img3 },
    { id: 16, name: 'Taylor Farms Broccoli Florets...', price: 14.99, oldPrice: 28.99, rating: 4.8, reviews: '17k', sold: 18, total: 35, img: img4 },
];

function FlashSale() {
    const scrollRef = useRef(null);

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
        <section className="mp-flash-section py-60">
            <div className="mp-container">
                
                {/* Section Header */}
                <div className="mp-flash-header">
                    <h2 className="mp-flash-title">Flash Sales Today</h2>
                    
                    <div className="mp-flash-actions">
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

                {/* Products Slider Track */}
                <div className="mp-flash-track" ref={scrollRef}>
                    {mockProducts.map((p) => (
                        <div key={p.id} className="mp-flash-card">
                            
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
        </section>
    );
}

export default FlashSale;