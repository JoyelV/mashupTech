import React from 'react';
import '../styles/SmallBanners.css';
import img1 from '../assets/images/banner/promotional-banner-img1.png';
import img2 from '../assets/images/banner/promotional-banner-img2.png';
import img3 from '../assets/images/banner/promotional-banner-img3.png';
import img4 from '../assets/images/banner/promotional-banner-img4.png';

const bannerData = [
    {
        id: 1,
        title: 'Everyday Fresh Meat',
        price: '60.99',
        img: img1,
    },
    {
        id: 2,
        title: 'Daily Fresh Vegetables',
        price: '60.99',
        img: img2,
    },
    {
        id: 3,
        title: 'Everyday Fresh Milk',
        price: '60.99',
        img: img3,
    },
    {
        id: 4,
        title: 'Everyday Fresh Fruits',
        price: '60.99',
        img: img4,
    }
];

function SmallBanners() {
    return (
        <section className="mp-promotional-banner-section py-80">
            <div className="mp-container">
                <div className="mp-promo-row">
                    {bannerData.map((banner) => (
                        <div key={banner.id} className="mp-promo-col">
                            
                            <div className="mp-promo-banner-item">
                                {/* Full Background Image */}
                                <img 
                                    src={banner.img} 
                                    alt={banner.title} 
                                    className="mp-promo-bg-img" 
                                />
                                
                                {/* Overlay Content */}
                                <div className="mp-promo-content">
                                    <h6 className="mp-promo-title">{banner.title}</h6>
                                    
                                    <div className="mp-promo-price-row">
                                        <span className="mp-promo-starting">Starting at</span>
                                        <h6 className="mp-promo-price">${banner.price}</h6>
                                    </div>
                                    
                                    <a href="/shop" className="mp-btn-main">
                                        Shop Now 
                                        <span className="mp-btn-icon">
                                            <i className="ph ph-arrow-right"></i>
                                        </span> 
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SmallBanners;