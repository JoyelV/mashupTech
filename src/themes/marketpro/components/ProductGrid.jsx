import React, { useState } from 'react';
import { popularProducts } from '../data/mockData';

const filterTabs = ['All', 'Grocery', 'Fruits', 'Vegetables', 'Meat'];

function ProductGrid() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProducts = activeTab === 'All'
        ? popularProducts
        : popularProducts.filter(p => p.category === activeTab || (activeTab === 'Grocery' && ['Vegetables', 'Fruits', 'Bakery'].includes(p.category)));

    return (
        <section className="mp-recommended">
            <div className="container">
                <div className="mp-section-header">
                    <div className="mp-section-title">
                        <h2>Recommended for you</h2>
                    </div>
                    <div className="mp-filter-tabs">
                        {filterTabs.map(tab => (
                            <button
                                key={tab}
                                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mp-product-grid">
                    {filteredProducts.map((p) => (
                        <div key={p.id} className="mp-product-card-v2">
                            <div className="img-wrap">
                                <span className={`badge ${p.badgeCls}`}>{p.badge}</span>
                                <div className="img">{p.img}</div>
                                <div className="product-actions">
                                    <button className="action-btn"><i className="fa-light fa-heart"></i></button>
                                    <button className="action-btn"><i className="fa-light fa-arrows-rotate"></i></button>
                                    <button className="action-btn"><i className="fa-light fa-eye"></i></button>
                                </div>
                            </div>
                            <div className="content">
                                <span className="cat">{p.category}</span>
                                <h4 className="title">{p.name}</h4>
                                <div className="rating">
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <span className="val">({p.rating})</span>
                                </div>
                                <div className="price-wrap">
                                    <div className="price">
                                        <span className="current">${p.price.toFixed(2)}</span>
                                        <span className="old">${p.oldPrice.toFixed(2)}</span>
                                    </div>
                                    <button className="add-btn">
                                        Add <i className="fa-regular fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;
