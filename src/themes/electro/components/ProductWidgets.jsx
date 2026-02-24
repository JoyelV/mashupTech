import React, { useRef } from 'react';
import '../styles/ProductWidgets.css';

import brand1 from '../assets/images/brands/img1.png';
import brand2 from '../assets/images/brands/img2.png';
import brand3 from '../assets/images/brands/img3.png';
import brand4 from '../assets/images/brands/img4.png';
import brand5 from '../assets/images/brands/img5.png';

import feat1 from '../assets/images/products/img1.jpg';
import feat2 from '../assets/images/products/img1.jpg';
import feat3 from '../assets/images/products/img2.jpg';

import sale1 from '../assets/images/products/img3.jpg';
import sale2 from '../assets/images/products/img4.jpg';
import sale3 from '../assets/images/products/img5.jpg';

import top1 from '../assets/images/products/img6.jpg';
import top2 from '../assets/images/products/img1.jpg';
import top3 from '../assets/images/products/img2.jpg';

import bannerCam from '../assets/images/brands/brand1.jpg';

const featuredProducts = [
  { id: 1, title: 'Purple Wireless Headphones Solo 2 HD', price: '$1149.00', image: feat1 },
  { id: 2, title: 'Powerbank 1130 mAh Blue', price: '$210.00', image: feat2 },
  { id: 3, title: 'Nerocool EN52377 Dead Silence Gaming Cube Case', price: '$180.00', image: feat3 },
];

const onsaleProducts = [
  { id: 1, title: 'Yellow Earphones Waterproof with Bluetooth', price: '$110.00', oldPrice: '$250.00', image: sale1 },
  { id: 2, title: 'Camera C430W 4k Waterproof', price: '$899.00', oldPrice: '$1200.00', image: sale2 },
  { id: 3, title: 'Smartphone 6S 32GB LTE', price: '$2100.00', oldPrice: '$3299.00', image: sale3 },
];

const topRatedProducts = [
  { id: 1, title: 'Smartwatch 2.0 LTE Wifi Waterproof', price: '$725.00', rating: 5, image: top1 },
  { id: 2, title: '22Mps Camera 6200U with 500GB SDcard', price: '$2999.00', rating: 4, image: top2 },
  { id: 3, title: 'Full Color Laserjet Pro M452dn', price: '$439.00', rating: 5, image: top3 },
];

const StarRating = ({ rating }) => {
  return (
    <div className="pw-stars">
      {[...Array(5)].map((star, index) => {
        return (
          <svg key={index} className={index < rating ? "star-filled" : "star-empty"} width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      })}
    </div>
  );
};

const SmallProductCard = ({ product }) => (
  <div className="pw-small-card">
    <div className="pw-sc-image-box">
      <img src={product.image} alt={product.title} />
    </div>
    <div className="pw-sc-details">
      <h4 className="pw-sc-title">{product.title}</h4>
      {product.rating && <StarRating rating={product.rating} />}
      <div className="pw-sc-price-box">
        <span className="pw-sc-price">{product.price}</span>
        {product.oldPrice && <span className="pw-sc-old-price">{product.oldPrice}</span>}
      </div>
    </div>
  </div>
);

export default function ProductWidgets() {
  const brandsRef = useRef(null);

  const slideLeft = () => {
    if (brandsRef.current) {
      brandsRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (brandsRef.current) {
      brandsRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="pw-container">
      
      {/* Brands Carousel Section */}
      <div className="pw-brands-carousel">
        <button className="pw-arrow-btn" onClick={slideLeft}>&lsaquo;</button>
        <div className="pw-brands-list" ref={brandsRef}>
          <img src={brand1} alt="Themeforest" />
          <img src={brand2} alt="Graphicriver" />
          <img src={brand3} alt="Codecanyon" />
          <img src={brand4} alt="Audiojungle" />
          <img src={brand5} alt="Activeden" />
          <img src={brand1} alt="Themeforest" />
          <img src={brand2} alt="Graphicriver" />
          <img src={brand3} alt="Codecanyon" />
          <img src={brand4} alt="Audiojungle" />
          <img src={brand5} alt="Activeden" />
        </div>
        
        <button className="pw-arrow-btn" onClick={slideRight}>&rsaquo;</button>
      </div>

      <div className="pw-grid">
        <div className="pw-column">
          <h3 className="pw-widget-title">Featured Products</h3>
          <div className="pw-widget-list">
            {featuredProducts.map(product => (
              <SmallProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="pw-column">
          <h3 className="pw-widget-title">Onsale Products</h3>
          <div className="pw-widget-list">
            {onsaleProducts.map(product => (
              <SmallProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="pw-column">
          <h3 className="pw-widget-title">Top Rated Products</h3>
          <div className="pw-widget-list">
            {topRatedProducts.map(product => (
              <SmallProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="pw-column pw-banner-column">
          <div className="pw-promo-banner">
            <img src={bannerCam} alt="Smart G3 Cameras" className="pw-promo-img" />
          </div>
        </div>
      </div>
    </div>
  );
}