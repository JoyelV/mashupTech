import React from 'react';

const promos = [
    {
        title: 'Fresh Fruits & Veggies',
        desc: 'Only the best organic produce',
        tag: 'Up to 30% off',
        emoji: '🥗',
        bg: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
        color: '#2e7d32',
    },
    {
        title: 'Weekend Flash Sale',
        desc: 'Limited time deals on staples',
        tag: 'This weekend only',
        emoji: '🛒',
        bg: 'linear-gradient(135deg, #fff8e1, #ffecb3)',
        color: '#f57f17',
    },
    {
        title: 'Fresh Baked Daily',
        desc: 'Artisan breads & pastries',
        tag: 'From $1.99',
        emoji: '🥐',
        bg: 'linear-gradient(135deg, #fce4ec, #f8bbd9)',
        color: '#880e4f',
    },
];

function PromoGrid() {
    return (
        <section className="eko-promo-section">
            <div className="container">
                <div className="eko-promo-grid">
                    {promos.map((p) => (
                        <div
                            key={p.title}
                            className="eko-promo-card"
                            style={{ background: p.bg, color: p.color }}
                            data-emoji={p.emoji}
                        >
                            <div className="promo-tag">{p.tag}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                            <a href="/" className="promo-link" style={{ color: p.color }}>
                                Shop Now →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PromoGrid;
