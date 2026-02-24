import React from 'react';
import { featuredProducts } from '../data/mockData';

function RecentlyViewed() {
    return (
        <section className="el-recently-viewed">
            <div className="container">
                <div className="el-section-header">
                    <h2 className="el-section-title">Recently Viewed</h2>
                    <div className="el-carousel-controls">
                        <button className="el-carousel-btn prev">←</button>
                        <button className="el-carousel-btn next">→</button>
                    </div>
                </div>

                <div className="el-recently-grid">
                    {featuredProducts.map((product, idx) => (
                        <div key={idx} className="el-recent-card">
                            <div className="el-recent-img">
                                <span className="el-recent-emoji">{product.img}</span>
                            </div>
                            <div className="el-recent-info">
                                <p className="el-recent-cat">{product.category}</p>
                                <h4 className="el-recent-name">{product.name}</h4>
                                <p className="el-recent-price">${product.price}</p>
                                <button className="el-recent-btn">🛒</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RecentlyViewed;
