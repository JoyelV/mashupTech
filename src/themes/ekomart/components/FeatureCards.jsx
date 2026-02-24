import React from "react";
import "../styles/FeatureCards.css";

function FeatureCards() {
  return (
    <section className="category-feature-area">
      <div className="container">
        <div className="feature-grid">

          {/* CARD 1 */}
          <div className="single-feature-card ssthree style-three bg_image one">
            <div className="content-area">
<a className="rts-btn btn-primary discount-badge" >Weekend Discount</a>
              <h3 className="title">
                Drink Fresh Corn Juice <br />
                <span>Good Taste</span>
              </h3>

              <a href="/shop" className="shop-now-btn">
                <div className="plus-icon">+</div>
                Shop Now
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="single-feature-card ssthree style-three bg_image two">
            <div className="content-area">
              <span className="discount-badge">Weekend Discount</span>

              <h3 className="title">
                Organic Lemon Flavored <br />
                <span>Banana Chips</span>
              </h3>

              <a href="/shop" className="shop-now-btn">
                <div className="plus-icon">+</div>
                Shop Now
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="single-feature-card ssthree style-three bg_image three">
            <div className="content-area">
              <span className="discount-badge">Weekend Discount</span>

              <h3 className="title">
                Nozes Pecanera Brasil <br />
                <span>Chocolate Snacks</span>
              </h3>

              <a href="/shop" className="shop-now-btn">
                <div className="plus-icon">+</div>
                Shop Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeatureCards;