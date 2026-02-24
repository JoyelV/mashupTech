import React from 'react';
import '../styles/Bestsellers.css';
import img1 from '../assets/images/best-sellers/img1 (2).jpg';
import img2 from '../assets/images/best-sellers/img2.jpg';
import img3 from '../assets/images/best-sellers/img3.jpg';
import img4 from '../assets/images/best-sellers/img4.jpg';
import img5 from '../assets/images/best-sellers/img5.jpg';
import img7 from '../assets/images/best-sellers/img7.jpg'; 

const products = [
  {
    id: 1,
    category: 'Tablets',
    title: 'Tablet Air 3 WiFi 64GB Gold',
    price: '$629,00',
    image: img1, 
  },
  {
    id: 2,
    category: 'Laptops & Computers',
    title: 'Tablet White EliteBook Revolve 810 G2',
    price: '$1 299,00',
    image: img2,
  },
  {
    id: 3,
    category: 'Accesories', 
    title: 'Pendrive USB 3.0 Flash 64 GB',
    price: '$110,00',
    image: img3,
  },
  {
    id: 4,
    category: 'Headphones',
    title: 'White Solo 2 Wireless',
    price: '$110,00',
    image: img4,
  },
  {
    id: 5,
    category: 'Smartwatches',
    title: 'Smartwatch 2.0 LTE Wifi',
    price: '$110,00',
    image: img5,
  },
  {
    id: 6,
    category: 'Gadgets',
    title: 'External SSD USB 3.1 750 GB',
    price: '$799,00',
    image: img7,
  },
  {
    id: 7,
    category: 'Accesories', 
    title: 'Pendrive USB 3.0 Flash 64 GB',
    price: '$110,00',
    image: img3,
  },
  {
    id: 8,
    category: 'Headphones',
    title: 'White Solo 2 Wireless',
    price: '$110,00',
    image: img4,
  },
];

const ShoppingCartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <div>
          <span className="product-category">{product.category}</span>
          <h3 className="product-title">{product.title}</h3>
        </div>
        <div className="product-bottom">
          <span className="product-price">{product.price}</span>
          <button className="cart-button" aria-label="Add to cart">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Bestsellers() {
  return (
    <div className="bestsellers-container">
      
      {/* Header Section */}
      <header className="bestsellers-header">
        <div className="header-title-container">
          <h2 className="bestsellers-title">Bestsellers</h2>
        </div>
        <nav className="bestsellers-nav">
          <button className="nav-btn active">Top 20</button>
          <button className="nav-btn">Phones & Tablets</button>
          <button className="nav-btn">Laptops & Computers</button>
          <button className="nav-btn">Video Cameras</button>
        </nav>
      </header>

      {/* Product Grid Section */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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