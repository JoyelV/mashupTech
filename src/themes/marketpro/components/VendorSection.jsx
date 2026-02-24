import React from 'react';
import { vendors } from '../data/mockData';

function VendorSection() {
    return (
        <section className="mp-vendors">
            <div className="container">
                <div className="mp-section-header">
                    <div className="mp-section-title">
                        <h2>🏪 Featured Vendors</h2>
                    </div>
                    <a href="/vendors" className="mp-view-all">All Vendors →</a>
                </div>
                <div className="mp-vendor-grid">
                    {vendors.map((vendor) => (
                        <div key={vendor.id} className="mp-vendor-card">
                            <div className="mp-vendor-emoji">{vendor.emoji}</div>
                            <div className="mp-vendor-name">{vendor.name}</div>
                            <div className="mp-vendor-meta">📦 {vendor.products} Products</div>
                            <div className="mp-vendor-meta">📍 {vendor.location}</div>
                            <div className="mp-vendor-rating">⭐ {vendor.rating} / 5.0</div>
                            <a href={`/vendors/${vendor.id}`} className="mp-visit-btn">Visit Store</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default VendorSection;
