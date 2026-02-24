import React from 'react';

const brands = [
    { id: 1, name: 'Brand 1', icon: '🌽' },
    { id: 2, name: 'Brand 2', icon: '🍅' },
    { id: 3, name: 'Brand 3', icon: '🥑' },
    { id: 4, name: 'Brand 4', icon: '🍇' },
    { id: 5, name: 'Brand 5', icon: '🍍' },
    { id: 6, name: 'Brand 6', icon: '🍯' },
];

function ShopByBrands() {
    return (
        <section className="mp-brands">
            <div className="container">
                <div className="mp-section-header">
                    <div className="mp-section-title">
                        <h2>Shop by Brands</h2>
                    </div>
                    <a href="#" className="mp-view-all">View All Deals →</a>
                </div>

                <div className="brands-grid">
                    {brands.map(b => (
                        <div key={b.id} className="brand-card">
                            <div className="icon-box">
                                <span className="icon">{b.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShopByBrands;
