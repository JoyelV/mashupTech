import React from 'react';
import '../styles/RecentlyViewed.css';
import bannerTablet from '../assets/images/banner-tablet.png';
import item1 from '../assets/images/recent/speaker.jpg';
import item2 from '../assets/images/recent/laptop.jpg';
import item3 from '../assets/images/recent/headphones.jpg';
import item4 from '../assets/images/recent/phone.jpg';
import item5 from '../assets/images/recent/camera.jpg';
import item6 from '../assets/images/recent/printer.jpg';
import item7 from '../assets/images/recent/console.jpg';

const recentProducts = [
  { id: 1, category: 'Speakers', title: 'Wireless Audio System Multiroom...', price: '$685,00', image: item1 },
  { id: 2, category: 'Laptops', title: 'Convertible Touchscreen Laptop...', price: '$685,00', image: item2 },
  { id: 3, category: 'Headphones', title: 'Rose Gold Wireless Headphones...', price: '$685,00', image: item3 },
  { id: 4, category: 'Smartphones', title: 'Gold Smartphone 64GB Unlocked...', price: '$685,00', image: item4 },
  { id: 5, category: 'Cameras', title: 'Digital Compact Camera Light Blue...', price: '$685,00', image: item5 },
  { id: 6, category: 'Printers', title: 'Wireless Laser Printer All-in-One...', price: '$685,00', image: item6 },
  { id: 7, category: 'Gaming', title: 'White Gaming Console 1TB...', price: '$685,00', image: item7 },
];

const ShoppingCartIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const VerticalProductCard = ({ product }) => {
  return (
    <div className="rv-product-card">
      <div className="rv-card-header">
        <span className="rv-category">{product.category}</span>
        <h3 className="rv-title">{product.title}</h3>
      </div>
      <div className="rv-image-container">
        <img src={product.image} alt={product.title} className="rv-image" />
      </div>
      <div className="rv-card-footer">
        <span className="rv-price">{product.price}</span>
        <button className="cart-button" aria-label="Add to cart">
          <ShoppingCartIcon />
        </button>
      </div>
    </div>
  );
};

export default function RecentlyViewed() {
  return (
    <div className="rv-container">
      
      {/* Banner Section */}
      <div className="rv-banner">
        <div className="rv-banner-content">
          <h2 className="rv-banner-text">
            SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS
          </h2>
          <div className="rv-banner-badge">
            <span className="badge-small">STARTING AT</span>
            <span className="badge-large">$79<sup>99</sup></span>
          </div>
        </div>
        <div className="rv-banner-image">
          {/* Replace with your actual banner tablet image */}
          <img src={bannerTablet} alt="Tablets Promotion" />
        </div>
      </div>

      {/* Header Section */}
      <header className="rv-header">
        <div className="rv-header-title-container">
          <h2 className="rv-title-main">Recently Viewed</h2>
        </div>
        <div className="rv-nav-arrows">
          <button className="arrow-btn"><ChevronLeft /></button>
          <button className="arrow-btn"><ChevronRight /></button>
        </div>
      </header>

      {/* Product Grid Section (7 Columns) */}
      <div className="rv-product-grid">
        {recentProducts.map((product) => (
          <VerticalProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination / Slider Indicators */}
      <div className="slider-indicators">
        <span className="indicator active"></span>
        <span className="indicator"></span>
        <span className="indicator"></span>
      </div>

    </div>
  );
}