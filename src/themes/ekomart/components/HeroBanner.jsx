import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../styles/HeroBanner.css";

function HeroBanner() {
  return (
    <div className="hero-slider-wrapper">

      <Swiper
        modules={[Navigation, EffectFade]}
        effect="fade"
        loop={true}
        speed={900}
        navigation={{
          nextEl: ".hero-button-next",
          prevEl: ".hero-button-prev",
        }}
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="hero-banner banner-one">
            <div className="hero-overlay" />

            <div className="hero-content">
              <span className="pre">
                Get up to 30% off on your first $150 purchase
              </span>

              <h1>
               Check out our incredible  <br /> deals today
              </h1>

              <p>
                We have prepared special discounts for you on grocery products.
                Don't miss these opportunities...
              </p>

              <a href="/shop" className="hero-btn">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="hero-banner banner-two">
            <div className="hero-overlay" />

            <div className="hero-content">
              <span className="pre">
                Get up to 10% off on your first $250 purchase
              </span>

              <h1>
                Check out our incredible <br /> deals today
              </h1>

              <p>
                We have prepared special discounts for you on grocery products.
                Don't miss these opportunities...
              </p>

              <a href="/shop" className="hero-btn">
                Shop Now <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Arrows */}
      <div className="hero-button-prev">
        <i className="fa-solid fa-arrow-left"></i>
      </div>

      <div className="hero-button-next">
        <i className="fa-solid fa-arrow-right"></i>
      </div>

    </div>
  );
}

export default HeroBanner;