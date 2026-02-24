import React, { useState } from "react";
import { popularProducts } from "../data/mockData";
import "../styles/PopularProducts.css";

const tabs = ["Frozen Foods", "Diet Foods", "Healthy Foods", "Vitamin Items"];

function PopularProducts() {
  const [activeTab, setActiveTab] = useState("Frozen Foods");
  const [qtys, setQtys] = useState({});

  const getQty = (id) => qtys[id] || 1;

  const setQty = (id, val) =>
    setQtys((q) => ({
      ...q,
      [id]: Math.max(1, val),
    }));

  return (
    <section className="popular-section">
      <div className="container">

        {/* Header */}
        <div className="header">
          <h2>Popular Products</h2>

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="row">
          {popularProducts.map((product) => {
            const qty = getQty(product.id);

            return (
              <div
                key={product.id}
                className="col-lg-3 col-md-6 col-sm-6 col-12"
              >
                <div className="single-shopping-card-one">

                  {/* Image + Badge */}
                  <div className="image-and-action-area-wrapper">
                    <a
                      href="/"
                      className="thumbnail-preview"
                    >
                      <div className="badge">
                        <span>
                          25% <br /> Off
                        </span>
                        <i className="fa-solid fa-bookmark"></i>
                      </div>

                      <img
                        src={product.img}
                        alt={product.name}
                      />
                    </a>

                    <div className="action-share-option">
                      <div
                        className="single-action openuptip message-show-action"
                        title="Add To Wishlist"
                      >
                        <i className="fa-solid fa-heart"></i>
                      </div>

                      <div
                        className="single-action openuptip"
                        title="Compare"
                      >
                        <i className="fa-solid fa-arrows-retweet"></i>
                      </div>

                      <div
                        className="single-action openuptip cta-quickview product-details-popup-btn"
                        title="Quick View"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="body-content">
                    <a href="/">
                      <h4 className="title">
                        {product.name}
                      </h4>
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

                    {/* Cart Section */}
                    <div className="cart-counter-action">

                      {/* Quantity */}
                      <div className="quantity-edit">
                        <input
                          className="input"
                          type="text"
                          value={qty}
                          readOnly
                        />

                        <div className="button-wrapper-action">
                          <button
                            className="button minus"
                            onClick={() =>
                              setQty(product.id, qty - 1)
                            }
                          >
                            <i className="fa-solid fa-chevron-down"></i>
                          </button>

                          <button
                            className="button plus"
                            onClick={() =>
                              setQty(product.id, qty + 1)
                            }
                          >
                            <i className="fa-solid fa-chevron-up"></i>
                          </button>
                        </div>
                      </div>

                      {/* Add Button */}
                      <button className="rts-btn btn-primary add-to-card radious-sm with-icon">
                        <div className="btn-text">Add</div>
                        <div className="arrow-icon">
                          <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                      </button>

                    </div>
                  </div>

                  <div className="modal-compare-area-start"></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default PopularProducts;