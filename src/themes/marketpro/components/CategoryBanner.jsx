import React from 'react';
import { categories } from '../data/mockData';

function CategoryBanner() {
    return (
        <section className="mp-categories">
            <div className="container">
                <div className="mp-section-header">
                    <div className="mp-section-title">
                        <h2>🗂️ Shop by Category</h2>
                    </div>
                    <a href="#" className="mp-view-all">All Categories →</a>
                </div>
                <div className="mp-cat-grid circular">
                    {categories.map((cat) => (
                        <div key={cat.id} className="mp-cat-card-circular">
                            <div className="icon-box" style={{ background: cat.bg }}>
                                <span className="icon">{cat.icon}</span>
                            </div>
                            <div className="name">{cat.name}</div>
                            <div className="count">({cat.count})</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryBanner;
