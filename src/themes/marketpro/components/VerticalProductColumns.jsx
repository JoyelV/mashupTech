import React from 'react';
import { popularProducts } from '../data/mockData';

const Column = ({ title, products }) => (
    <div className="product-col">
        <h3 className="col-title">{title}</h3>
        <div className="col-products">
            {products.map(p => (
                <div key={p.id} className="small-product-card">
                    <div className="img-box">{p.img}</div>
                    <div className="info">
                        <span className="cat">{p.category}</span>
                        <h4 className="title">{p.name}</h4>
                        <div className="rating">
                            <i className="fa-solid fa-star"></i>
                            <span className="val">({p.rating})</span>
                        </div>
                        <div className="price">${p.price.toFixed(2)}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

function VerticalProductColumns() {
    const featured = popularProducts.slice(0, 3);
    const topSelling = popularProducts.slice(3, 6);
    const onSale = popularProducts.slice(6, 9);

    return (
        <section className="mp-vertical-columns">
            <div className="container">
                <div className="cols-grid">
                    <Column title="Featured products" products={featured} />
                    <Column title="Top Selling" products={topSelling} />
                    <Column title="On-sale products" products={onSale} />
                </div>
            </div>
        </section>
    );
}

export default VerticalProductColumns;
