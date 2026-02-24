import React, { useState, useEffect } from 'react';
import '../styles/PromoCountdownBanners.css';
import img1 from '../assets/images/promo-count-down/flash-sale-bg1.png';
import img2 from '../assets/images/promo-count-down/flash-sale-bg2.png';

const imgPasta = img1;
const bgVegetables = img2;

function PromoCountdownBanners() {
    const [timeLeft, setTimeLeft] = useState({ days: 673, hours: 4, minutes: 30, seconds: 33 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
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

    return (
        <section className="mp-promo-banners-section py-40">
            <div className="mp-container">
                <div className="mp-pb-grid">
                    
                    {/* Left Banner: Pasta */}
                    <div 
                        className="mp-pb-card mp-pb-card-bg" 
                        style={{ backgroundImage: `url(${imgPasta})` }}
                    >
                        <div className="mp-pb-content mp-content-right">
                            <h3 className="mp-pb-title">X-Connect Smart Television</h3>
                            <p className="mp-pb-subtitle">Time remaining until the end of the offer.</p>
                            
                            <div className="mp-pb-timer">
                                <div className="mp-pb-time-box box-white">{timeLeft.days} D</div>
                                <span className="mp-pb-colon">:</span>
                                <div className="mp-pb-time-box box-white">{timeLeft.hours} H</div>
                                <span className="mp-pb-colon">:</span>
                                <div className="mp-pb-time-box box-white">{timeLeft.minutes} M</div>
                                <span className="mp-pb-colon">:</span>
                                <div className="mp-pb-time-box box-white">{timeLeft.seconds} S</div>
                            </div>

                            <a href="/shop" className="mp-pb-btn btn-teal">
                                Shop Now <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Banner: Combo Box */}
                    <div 
                        className="mp-pb-card mp-pb-card-bg" 
                        style={{ backgroundImage: `url(${bgVegetables})` }}
                    >
                        <div className="mp-pb-content mp-content-left">
                            <h3 className="mp-pb-title">Vegetables Combo Box</h3>
                            <p className="mp-pb-subtitle text-dark">Time remaining until the end of the offer.</p>
                            
                            <div className="mp-pb-timer">
                                <div className="mp-pb-time-box box-teal">{timeLeft.days} D</div>
                                <span className="mp-pb-colon">:</span>
                                <div className="mp-pb-time-box box-teal">{timeLeft.hours} H</div>
                                <span className="mp-pb-colon">:</span>
                                <div className="mp-pb-time-box box-teal">{timeLeft.minutes} M</div>
                                <span className="mp-pb-colon">:</span>
                                <div className="mp-pb-time-box box-teal">{timeLeft.seconds} S</div>
                            </div>

                            <a href="/shop" className="mp-pb-btn btn-green">
                                Shop Now <i className="ph ph-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PromoCountdownBanners;