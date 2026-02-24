import React from "react";

function ProductCard({ product }) {
  return (
    <div className="single-shopping-card-one deals-of-day">

      {product.oldPrice && (
        <div className="onsale-offer">
          <span>On sale</span>
        </div>
      )}

      <div className="image-and-action-area-wrapper">
        <a className="thumbnail-preview" href="/">
          <img src={product.img} alt={product.name} />
        </a>
      </div>

      <div className="body-content">

        <div className="start-area-rating">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
        </div>

        <a href="/">
          <h4 className="title">{product.name}</h4>
        </a>

        <span className="availability">
          {product.weight}
        </span>

        <div className="price-area">
          <span className="current">
            ${product.price.toFixed(2)}
          </span>

          {product.oldPrice && (
            <div className="previous">
              ${product.oldPrice.toFixed(2)}
            </div>
          )}
        </div>

        <div className="cart-counter-action">
          <button className="rts-btn btn-primary add-to-card radious-sm with-icon">
            <div className="btn-text">Add</div>
            <div className="arrow-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;