import React from 'react';
import { electroCategories } from '../data/mockData';

function CategoryBoxes() {
    return (
        <section className="el-categories-section">
            <div className="container">
                <div className="el-section-header">
                    <h2 className="el-section-title">Best Deals</h2>
                    <div className="el-category-filter-tabs">
                        <button className="el-cat-filter-tab active">Best Deals</button>
                        <button className="el-cat-filter-tab">TV & Video</button>
                        <button className="el-cat-filter-tab">Cameras</button>
                        <button className="el-cat-filter-tab">Audio</button>
                        <button className="el-cat-filter-tab">Smartphones</button>
                        <button className="el-cat-filter-tab">GPS & Navi</button>
                        <button className="el-cat-filter-tab">Computers</button>
                        <button className="el-cat-filter-tab">Portable Audio</button>
                        <button className="el-cat-filter-tab">Accessories</button>
                    </div>
                </div>
                <div className="el-cat-grid">
                    {electroCategories.map((cat) => (
                        <div key={cat.id} className="el-cat-card">
                            <div className="el-cat-icon">{cat.icon}</div>
                            <div className="el-cat-name">{cat.name}</div>
                            <div className="el-cat-count">{cat.count} items</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CategoryBoxes;
