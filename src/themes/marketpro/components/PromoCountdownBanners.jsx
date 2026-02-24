import React, { useState, useEffect } from 'react';

function PromoCountdownBanners() {
    const calculateTimeLeft = () => {
        return {
            days: 675,
            hours: 14,
            minutes: 5,
            seconds: 18
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
                if (hours < 0) {
                    hours = 23;
                    days--;
                }
                return { days, hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const banners = [
        {
            id: 1,
            title: 'X-Connect Smart Television',
            subtitle: 'Time remaining until the end of the offer.',
            img: 'https://marketpro-nextjs.vercel.app/assets/images/banner/banner-img1.png', // Fallback to a placeholder if needed
            btnCls: 'btn-teal',
            bg: '#F2F6F9'
        },
        {
            id: 2,
            title: 'Vegetables Combo Box',
            subtitle: 'Time remaining until the end of the offer.',
            img: 'https://marketpro-nextjs.vercel.app/assets/images/banner/banner-img2.png',
            btnCls: 'btn-green',
            bg: '#FDF7EB'
        }
    ];

    return (
        <section className="mp-promo-countdown-area">
            <div className="container">
                <div className="promo-grid">
                    {banners.map(banner => (
                        <div key={banner.id} className="promo-card" style={{ background: banner.bg }}>
                            <div className="promo-content">
                                <h3 className="title">{banner.title}</h3>
                                <p className="subtitle">{banner.subtitle}</p>
                                <div className="countdown-wrap">
                                    <div className="time-box">
                                        <span className="value">{timeLeft.days} D</span>
                                    </div>
                                    <div className="time-box">
                                        <span className="value">{String(timeLeft.hours).padStart(2, '0')} H</span>
                                    </div>
                                    <div className="time-box">
                                        <span className="value">{String(timeLeft.minutes).padStart(2, '0')} M</span>
                                    </div>
                                    <div className="time-box">
                                        <span className="value">{String(timeLeft.seconds).padStart(2, '0')} S</span>
                                    </div>
                                </div>
                                <a href="/shop" className={`rts-btn ${banner.btnCls}`}>
                                    Shop Now <i className="fa-regular fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="promo-img">
                                <img src={banner.img} alt={banner.title} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PromoCountdownBanners;
