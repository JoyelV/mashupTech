import React, { useState, useEffect } from 'react';
import '../styles/HeroBanner.css'; 
import img1 from '../assets/images/banner/banner-img1.png';
import img2 from '../assets/images/banner/banner-img3.png';

const bannerSlides = [
    {
        id: 1,
        subtitle: "Save Up To 50% Off On Your First Order",
        titleLine1: "Daily Grocery Order and",
        highlight: "Express",
        titleLine2: "Delivery",
        price: "$60.99",
        image: img1,
        hasSpecialBadge: true 
    },
    {
        id: 2,
        subtitle: "Save Up To 50% Off On Your First Order",
        titleLine1: "Daily Grocery Order and",
        highlight: "Express",
        titleLine2: "Delivery",
        price: "$60.99",
        image: img2, 
        hasSpecialBadge: false 
    }
];

function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); 
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="mp-hero-section border-bottom">
            <div className="mp-container">
                <div className="mp-banner-wrapper">
                    
                    {/* Background Pattern */}
                    <div 
                        className="mp-banner-bg-pattern" 
                        style={{ backgroundImage: `url('../assets/images/banner/banner-bg.png')` }}
                    ></div>

                    {/* Slider Navigation Arrows with onClick events */}
                    <button className="mp-slider-arrow mp-arrow-left" onClick={prevSlide}>
                        <i className="ph ph-caret-left"></i>
                    </button>
                    <button className="mp-slider-arrow mp-arrow-right" onClick={nextSlide}>
                        <i className="ph ph-caret-right"></i>
                    </button>

                    {/* 4. Map over the slides to render them dynamically */}
                    {bannerSlides.map((slide, index) => (
                        <div 
                            key={slide.id} 
                            className={`mp-banner-content ${index === currentSlide ? 'active' : 'inactive'}`}
                        >
                            
                            {/* Left Column: Text & CTA */}
                            <div className="mp-banner-text-col">
                                <span className="mp-banner-subtitle">
                                    {slide.subtitle}
                                </span>
                                
                                <h1 className="mp-banner-title">
                                    {slide.titleLine1} <br />
                                    Get <span className="mp-text-teal">{slide.highlight}</span> {slide.titleLine2}
                                </h1>
                                
                                <div className="mp-banner-actions">
                                    <a href="/shop" className="mp-btn-explore">
                                        Explore Shop <i className="ph ph-shopping-cart-simple"></i>
                                    </a>
                                    <div className="mp-price-info">
                                        <span className="mp-price-label">Starting at</span>
                                        <span className="mp-price-value">{slide.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Image & Badge */}
                            <div className="mp-banner-image-col">
                                <img
                                    src={slide.image}
                                    alt="Grocery Selection"
                                    className="mp-main-image"
                                />
                                
                                {/* 5. Conditionally Render Red Promotional Sticker */}
                                {slide.hasSpecialBadge && (
                                    <div className="mp-special-badge">
                                        <span className="mp-badge-tiny">LIMITED QUANTITIES</span>
                                        <span className="mp-badge-main">SPECIAL<br/>OFFER</span>
                                        <span className="mp-badge-tiny">SHOP NOW</span>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}

                   {/* The Smooth Bottom Curve */}
                    <div className="mp-banner-curve-wrapper">
                        <svg viewBox="0 0 150 40" preserveAspectRatio="none">
                            <path d="M0,0 C40,0 50,40 75,40 C100,40 110,0 150,0 Z" fill="#eafcf6" />
                        </svg>
                    </div>

                    {/* Bottom Center Scroll Arrow */}
                    <a href="#categories" className="mp-bottom-scroll-arrow">
                        <i className="ph ph-caret-double-down"></i>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default HeroBanner;