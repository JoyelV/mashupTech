import React, { useRef } from "react";
import "../styles/RecentlyViewed.css";
import bannerTablet from "../assets/images/banner-tablet.jpg";
import item1 from "../assets/images/recent/img1.jpg";
import item2 from "../assets/images/recent/img2.jpg";
import item3 from "../assets/images/recent/img3.jpg";
import item4 from "../assets/images/recent/img4.jpg";
import item5 from "../assets/images/recent/img5.jpg";
import item6 from "../assets/images/recent/img7.jpg";
import item7 from "../assets/images/recent/img8.jpg";

const recentProducts = [
  {
    id: 1,
    category: "Speakers",
    title: "Wireless Audio System Multiroom...",
    price: "$685,00",
    image: item1,
  },
  {
    id: 2,
    category: "Laptops",
    title: "Convertible Touchscreen Laptop...",
    price: "$685,00",
    image: item2,
  },
  {
    id: 3,
    category: "Headphones",
    title: "Rose Gold Wireless Headphones...",
    price: "$685,00",
    image: item3,
  },
  {
    id: 4,
    category: "Smartphones",
    title: "Gold Smartphone 64GB Unlocked...",
    price: "$685,00",
    image: item4,
  },
  {
    id: 5,
    category: "Cameras",
    title: "Digital Compact Camera Light Blue...",
    price: "$685,00",
    image: item5,
  },
  {
    id: 6,
    category: "Printers",
    title: "Wireless Laser Printer All-in-One...",
    price: "$685,00",
    image: item6,
  },
  {
    id: 7,
    category: "Gaming",
    title: "White Gaming Console 1TB...",
    price: "$685,00",
    image: item7,
  },
  {
    id: 8,
    category: "Speakers",
    title: "Wireless Audio System Multiroom...",
    price: "$685,00",
    image: item1,
  },
  {
    id: 9,
    category: "Laptops",
    title: "Convertible Touchscreen Laptop...",
    price: "$685,00",
    image: item2,
  },
  {
    id: 10,
    category: "Headphones",
    title: "Rose Gold Wireless Headphones...",
    price: "$685,00",
    image: item3,
  },
  {
    id: 11,
    category: "Smartphones",
    title: "Gold Smartphone 64GB Unlocked...",
    price: "$685,00",
    image: item4,
  },
  {
    id: 12,
    category: "Cameras",
    title: "Digital Compact Camera Light Blue...",
    price: "$685,00",
    image: item5,
  },
  {
    id: 13,
    category: "Printers",
    title: "Wireless Laser Printer All-in-One...",
    price: "$685,00",
    image: item6,
  },
  {
    id: 14,
    category: "Gaming",
    title: "White Gaming Console 1TB...",
    price: "$685,00",
    image: item7,
  },
];

const ShoppingCartIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#888"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
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
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="rv-container">
      {/* Banner Section */}
      <div className="rv-banner">
        <div className="rv-banner-inner">
          <h1 className="rv-banner-heading">
            SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS
          </h1>

          <div className="rv-banner-badge">
            <em>STARTING AT</em>
            <div className="price">
              <sup>$</sup>79<sup>99</sup>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="rv-header">
        <div className="rv-header-title-container">
          <h2 className="rv-title-main">Recently Viewed</h2>
        </div>
        <div className="rv-nav-arrows">
          <button className="arrow-btn" onClick={slideLeft}>
            <ChevronLeft />
          </button>
          <button className="arrow-btn" onClick={slideRight}>
            <ChevronRight />
          </button>
        </div>
      </header>

      <div className="rv-product-grid" ref={sliderRef}>
        {recentProducts.map((product) => (
          <VerticalProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="slider-indicators">
        <span className="indicator active"></span>
        <span className="indicator"></span>
        <span className="indicator"></span>
      </div>
    </div>
  );
}
