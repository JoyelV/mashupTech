import React, { useState, useEffect } from "react";
import "../styles/ProductWidgets.css";
import img1 from "../assets/images/widgets/short-product-img8.png";
import img2 from "../assets/images/widgets/short-product-img4.png";
import img3 from "../assets/images/widgets/short-product-img5.png";
import img4 from "../assets/images/widgets/short-product-img7.png";
import img10 from "../assets/images/widgets/product-img32.png";

const compactProducts = [
  { id: 1, name: "Taylor Farms Broccoli Floret...", rating: 4.8, reviews: "17k", price: 1500.0, oldPrice: 1500.0, img: img1 },
  { id: 2, name: "Taylor Farms Broccoli Floret...", rating: 4.8, reviews: "17k", price: 1500.0, oldPrice: 1500.0, img: img2 },
  { id: 3, name: "Taylor Farms Broccoli Floret...", rating: 4.8, reviews: "17k", price: 1500.0, oldPrice: 1500.0, img: img3 },
  { id: 4, name: "Taylor Farms Broccoli Floret...", rating: 4.8, reviews: "17k", price: 1500.0, oldPrice: 1500.0, img: img4 }
];

function ProductWidgets() {
  const [timeLeft, setTimeLeft] = useState({ days: 628, hours: 4, minutes: 57, seconds: 10 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderProductList = (title) => (
    <div className="mp-widget-column">
      <div className="mp-widget-title-wrap">
        <h4 className="mp-widget-title">{title}</h4>
      </div>
      <div className="mp-widget-list">
        {compactProducts.map((p, index) => (
          <div key={`${title}-${index}`} className="mp-compact-card">
            <div className="mp-compact-img">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="mp-compact-info">
              <div className="mp-compact-rating">
                <span className="mp-rating-score">{p.rating}</span>
                <i className="ph-fill ph-star mp-star-icon"></i>
                <span className="mp-rating-reviews">({p.reviews})</span>
              </div>
              <h5 className="mp-compact-name">{p.name}</h5>
              <div className="mp-compact-price">
                <span className="mp-current-price">${p.price.toFixed(2)}</span>
                <span className="mp-old-price">${p.oldPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mp-product-widgets-section py-60">
      <div className="mp-container">
        <div className="mp-top-promo-bar">
          <p className="mp-promo-text-left">Super discount for your <span className="mp-text-bold mp-text-underline">first purchase</span></p>
          <button className="mp-promo-code-btn">FREE25BAC <i className="ph ph-copy"></i></button>
          <p className="mp-promo-text-right">Use discount code to get <span className="mp-text-bold">20%</span> discount for any item</p>
        </div>

        <div className="mp-widgets-grid">
          {renderProductList("Featured Products")}
          {renderProductList("Top Selling Products")}
          {renderProductList("On-sale Products")}

          <div className="mp-widget-column mp-deal-column">
            <h4 className="mp-deal-header-title">Deals of the week</h4>
            <div className="mp-deal-timer">
              <div className="mp-deal-time-box">{timeLeft.days} D</div> <span className="mp-deal-colon">:</span>
              <div className="mp-deal-time-box">{timeLeft.hours} H</div> <span className="mp-deal-colon">:</span>
              <div className="mp-deal-time-box">{timeLeft.minutes} M</div> <span className="mp-deal-colon">:</span>
              <div className="mp-deal-time-box">{timeLeft.seconds} S</div>
            </div>
            <p className="mp-deal-subtitle">Don't miss this opportunity at a special</p>
            <div className="mp-deal-img-wrap">
              <img src={img10} alt="Crispy Wings" />
            </div>
            <div className="mp-deal-rating">
              {[...Array(5)].map((_, i) => <i key={i} className="ph-fill ph-star mp-star-icon"></i>)}
              <span className="mp-rating-reviews">(3)</span>
            </div>
            <div className="mp-deal-price-row">
              <span className="mp-deal-price-current">$60.99</span>
              <span className="mp-deal-price-old">$79.99</span>
            </div>
            <h5 className="mp-deal-name">Perfectly Packed Meat Combos for Delicious and Flavorful Meals Every Day</h5>
            <p className="mp-deal-status">This product is about to run out</p>
            <div className="mp-deal-progress-wrap">
              <div className="mp-deal-progress-track">
                <div className="mp-deal-progress-fill" style={{ width: "85%" }}></div>
              </div>
              <span className="mp-deal-available">available only: <span className="mp-text-red">$60.99</span></span>
            </div>
            <button className="mp-deal-add-btn">Add To Cart <i className="ph ph-shopping-cart-simple"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductWidgets;