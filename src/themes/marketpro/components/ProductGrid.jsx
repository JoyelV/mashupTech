import React, { useState } from 'react';
import '../styles/ProductGrid.css';
import img1 from '../assets/images/product/product-img7.png';
import img2 from '../assets/images/product/product-img9.png';
import img3 from '../assets/images/product/product-img10.png';
import img4 from '../assets/images/product/product-img11.png';
import img5 from '../assets/images/product/product-img12.png';
import img6 from '../assets/images/product/product-img14.png';
import img7 from '../assets/images/product/product-img17.png';

const filterTabs = ['All', 'Grocery', 'Fruits', 'Juices', 'Vegetables', 'Snacks', 'Organic Foods'];

const products = [
    {
        id: 1,
        title: 'C-500 Antioxidant Protect Dietary...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img1,
        badge: null,
        badgeColor: null
    },
    {
        id: 2,
        title: 'Marcel\'s Modern Pantry Almond...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img2, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    },
    {
        id: 3,
        title: 'O Organics Milk, Whole, Vitamin D',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img3, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    },
    {
        id: 4,
        title: 'Whole Grains and Seeds Organic Bread',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img4,
        badge: 'Best Sale',
        badgeColor: 'blue'
    },
    {
        id: 5,
        title: 'Lucerne Yogurt, Lowfat, Strawberry',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img5, 
        badge: null,
        badgeColor: null
    },
    {
        id: 6,
        title: 'Nature Valley Whole Grain Oats and...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img6, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    },
    {
        id: 7,
        title: 'Marcel\'s Modern Pantry Almond...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img3, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    },
    {
        id: 8,
        title: 'Marcel\'s Modern Pantry Almond...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img4, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    },
    {
        id: 9,
        title: 'Marcel\'s Modern Pantry Almond...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img5, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    },
    {
        id: 10,
        title: 'Marcel\'s Modern Pantry Almond...',
        vendor: 'Lucky Supermarket',
        price: 14.99,
        oldPrice: 28.99,
        rating: 4.8,
        reviews: '17k',
        img: img6, 
        badge: 'Sale 50%',
        badgeColor: 'red'
    }
];

function ProductGrid() {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <section className="mp-product-section py-60">
            <div className="mp-container">
                
                {/* Section Header with Tabs */}
                <div className="mp-section-header">
                    <h2 className="mp-section-title">Recommended for you</h2>
                    
                    <div className="mp-filter-tabs">
                        {filterTabs.map((tab) => (
                            <button 
                                key={tab}
                                className={`mp-tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Multi-Row Product Grid */}
                <div className="mp-product-grid-wrap">
                    {products.map((product) => (
                        <div key={product.id} className="mp-product-card">
                            
                            {/* Promotional Badge (Conditional) */}
                            {product.badge && (
                                <span className={`mp-badge mp-badge-${product.badgeColor} product-card__badge bg-danger-600 px-8 py-4 text-sm text-white`}>Sale 50% </span>
                            )}

                            {/* Product Image */}
                            <div className="mp-product-img-wrap">
                                <img src={product.img} alt={product.title} />
                            </div>

                            {/* Product Details */}
                            <div className="mp-product-info">
                                <h4 className="mp-product-title">{product.title}</h4>
                                
                                <div className="mp-product-vendor">
                                    <i className="ph ph-storefront"></i> By {product.vendor}
                                </div>
                                
                                <div className="mp-product-price-row">
                                    <span className="mp-price-current">${product.price.toFixed(2)}</span>
                                    <span className="mp-price-qty">/Qty</span>
                                    <span className="mp-price-old">${product.oldPrice.toFixed(2)}</span>
                                </div>
                                
                                <div className="mp-product-rating">
                                    <span className="mp-rating-val">{product.rating}</span>
                                    <i className="ph-fill ph-star mp-star-icon"></i>
                                    <span className="mp-rating-reviews">({product.reviews})</span>
                                </div>

                                {/* Full-width Add to Cart Button */}
                                <button className="mp-add-to-cart-btn">
                                    Add To Cart <i className="ph ph-shopping-cart-simple"></i>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default ProductGrid;