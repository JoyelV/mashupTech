import React, { useState } from 'react';
import { featuredProducts } from '../data/mockData';

const tabs = ['Featured', 'On Sale', 'Top Rated'];

function FeaturedProducts() {
    const [activeTab, setActiveTab] = useState('Featured');

    return (
        <section className="el-featured-section">
            <div className="container">
                <div className="el-section-header">
                    <h2 className="el-section-title">Featured</h2>
                    <div className="el-tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`el-tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="el-products-grid">
                    {featuredProducts.slice(0, 9).map(product => (
                        <div key={product.id} className="el-product-card-featured">
                            <div className="el-product-img-featured">
                                <span className="el-prod-emoji">{product.img}</span>
                                {product.badge && (
                                    <span className={`el-badge el-badge-${product.badge.toLowerCase()}`}>
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            <div className="el-product-body-featured">
                                <div className="el-product-cat-featured">{product.category}</div>
                                <div className="el-product-name-featured">{product.name}</div>
                                <div className="el-product-price-featured">
                                    <span className="el-price-current">${product.price}</span>
                                    {product.oldPrice && <span className="el-price-old">${product.oldPrice}</span>}
                                </div>
                                <div className="el-rating-stars">
                                    <span className="el-stars">{'⭐'.repeat(Math.floor(product.rating))}</span>
                                    <span className="el-review-count">({product.reviews})</span>
                                </div>
                                <button className="el-add-to-cart-btn">🛒 Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
