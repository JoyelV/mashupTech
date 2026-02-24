import React, { useRef } from 'react';
import '../styles/ShopByBrands.css';
import img1 from '../assets/images/brands/brand-img1.png';
import img2 from '../assets/images/brands/brand-img5.png';
import img3 from '../assets/images/brands/brand-img3.png';
import img4 from '../assets/images/brands/brand-img6.png';
import img5 from '../assets/images/brands/brand-img7.png';
import img6 from '../assets/images/brands/brand-img8.png';

const ShopByBrands = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 250; 
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const brandImages = [
    { id: 1, src: img1, alt: "Brand 1" },
    { id: 2, src: img2, alt: "Brand 2" },
    { id: 3, src: img3, alt: "Brand 3" },
    { id: 4, src: img4, alt: "Brand 4" },
    { id: 5, src: img5, alt: "Brand 5" },
    { id: 6, src: img6, alt: "Brand 6" },
    { id: 7, src: img3, alt: "Brand 3" },
    { id: 8, src: img4, alt: "Brand 4" },
    { id: 9, src: img5, alt: "Brand 5" },
    { id: 10, src: img6, alt: "Brand 6" },
    { id: 11, src: img3, alt: "Brand 3" },
    { id: 12, src: img4, alt: "Brand 4" },
    { id: 13, src: img5, alt: "Brand 5" },
    { id: 14, src: img6, alt: "Brand 6" },
  ];

  return (
    <div className="brands-section">
      <div className="brands-header">
        <h2 className="brands-title">Shop by Brands</h2>
        
        <div className="brands-actions">
          <a href="/deals" className="view-deals-link">View All Deals</a>
          <div className="brands-nav-buttons">
            <button className="nav-btn" onClick={() => scroll('left')} aria-label="Scroll Left">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="nav-btn" onClick={() => scroll('right')} aria-label="Scroll Right">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="brands-carousel-container" ref={carouselRef}>
        <div className="brands-list">
          {brandImages.map((brand) => (
            <div key={brand.id} className="brand-item">
              <img src={brand.src} alt={brand.alt} className="brand-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByBrands;