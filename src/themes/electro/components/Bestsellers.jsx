import React, { useState } from 'react';
import { featuredProducts } from '../data/mockData';

const categoryTabs = ['Phones & Tablets', 'Laptops & Computers', 'Video Cameras', 'Accessories'];

function Bestsellers() {
    const [activeTab, setActiveTab] = useState('Phones & Tablets');

    return (
        <section className="el-bestsellers">
            <div className="container">
                <div className="el-section-header">
                    <h2 className="el-section-title">Bestsellers</h2>
                    <div className="el-tabs">
                        <button className="el-tab active">Top 20</button>
                    </div>
                </div>

                <div className="el-category-tabs">
                    {categoryTabs.map(tab => (
                        <button
                            key={tab}
                            className={`el-cat-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="el-bestsellers-grid">
                    {featuredProducts.slice(0, 9).map((product) => (
                        <div key={product.id} className="el-bestseller-card">
                            <div className="el-bs-img">
                                <span className="el-bs-emoji">{product.img}</span>
                            </div>
                            <div className="el-bs-info">
                                <p className="el-bs-cat">{product.category}</p>
                                <h4 className="el-bs-name">{product.name}</h4>
                                <p className="el-bs-price">${product.price}</p>
                                <button className="el-bs-btn">🛒</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Bestsellers;
