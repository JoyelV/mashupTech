import React from 'react';
import '../styles/ElectroPromos.css';
import cameraImg from '../assets/images/promos/img1.png';
import laptopImg from '../assets/images/promos/img2.jpg';
import desktopImg from '../assets/images/promos/img3.jpg';
import gearImg from '../assets/images/promos/img4.png';

const promoData = [
    { id: 1, img: cameraImg, text1: "CATCH BIG", text2: "DEALS", text3: "ON THE CAMERAS" },
    { id: 2, img: laptopImg, text1: "CATCH BIG", text2: "DEALS", text3: "ON THE CAMERAS" },
    { id: 3, img: desktopImg, text1: "CATCH BIG", text2: "DEALS", text3: "ON THE CAMERAS" },
    { id: 4, img: gearImg, text1: "CATCH BIG", text2: "DEALS", text3: "ON THE CAMERAS" },
];

function ElectroPromos() {
    return (
        <section className="electro-promos-section py-40">
            <div className="mp-container">
                <div className="electro-promo-grid">
                    {promoData.map((promo) => (
                        <div key={promo.id} className="electro-promo-card">
                            <div className="promo-image">
                                <img src={promo.img} alt="Product Promo" />
                            </div>
                            <div className="promo-content">
                                <p className="promo-text-top">{promo.text1}</p>
                                <h3 className="promo-text-mid">{promo.text2}</h3>
                                <p className="promo-text-bottom">{promo.text3}</p>
                                <a href="/shop" className="promo-shop-link">
                                    Shop now 
                                    <span className="yellow-circle">
                                        <i className="ph ph-caret-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ElectroPromos;