import React from 'react';
import { brands } from '../data/mockData';

function BrandsBar() {
    return (
        <section className="el-brands">
            <div className="container">
                <div className="el-section-header" style={{ marginBottom: 24 }}>
                    <h2 className="el-section-title">Top Brands</h2>
                </div>
                <div className="el-brands-strip">
                    {brands.map((brand) => (
                        <div key={brand.name} className="el-brand-pill">
                            <span className="brand-emoji">{brand.emoji}</span>
                            <span className="brand-name">{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrandsBar;
