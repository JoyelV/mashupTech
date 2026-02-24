import React from 'react';
import { featuredProducts } from '../data/mockData';

function PromoSections() {
    return (
        <>
            {/* Shop and Save Banner */}
            <section className="el-promo-banner">
                <div className="container">
                    <div className="el-promo-content">
                        <h2>SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</h2>
                        <div className="el-promo-price">
                            <span className="el-promo-tag">STARTING AT</span>
                            <span className="el-promo-amount">$79.99</span>
                        </div>
                        <div className="el-promo-image">📱</div>
                    </div>
                </div>
            </section>

            {/* Featured Products Tabs */}
            <section className="el-featured-tabs-section">
                <div className="container">
                    <div className="el-featured-tabs-header">
                        <div className="el-featured-tab-group">
                            <button className="el-featured-tab active">Featured Products</button>
                            <button className="el-featured-tab">Onsale Products</button>
                            <button className="el-featured-tab">Top Rated Products</button>
                        </div>
                    </div>

                    <div className="el-featured-tabs-grid">
                        {featuredProducts.slice(0, 6).map((product) => (
                            <div key={product.id} className="el-featured-tab-card">
                                <div className="el-featured-tab-img">
                                    <span className="el-featured-tab-emoji">{product.img}</span>
                                </div>
                                <div className="el-featured-tab-info">
                                    <h4 className="el-featured-tab-name">{product.name}</h4>
                                    <p className="el-featured-tab-price">${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default PromoSections;
