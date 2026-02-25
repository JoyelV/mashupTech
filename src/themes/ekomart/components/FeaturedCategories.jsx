import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "../styles/FeaturedCategories.css";
import { categories } from "../data/mockData";

function FeaturedCategories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="rts-category-area rts-section-gapTop">
      <div className="container-2">
        {/* Title Row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="title-area-between">
              <h2 className="title-left mb--0">Featured Categories</h2>

              <div className="next-prev-swiper-wrapper">
                <div className="custom-prev" ref={prevRef}>
                  <i className="fa-solid fa-chevron-left"></i>
                </div>

                <div className="custom-next" ref={nextRef}>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="cover-card-main-over">
              <Swiper
                modules={[Navigation]}
                spaceBetween={12}
                slidesPerView={6}
                loop={true}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  600: { slidesPerView: 2 },
                  900: { slidesPerView: 4 },
                  1200: { slidesPerView: 6 },
                }}
              >
                {categories.map((cat) => (
                  <SwiperSlide key={cat.id}>
                    <div className="single-category-one">
                      <a href="/shop">
                        <img src={cat.img} alt={cat.name} />
                        <p>{cat.name}</p>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;
