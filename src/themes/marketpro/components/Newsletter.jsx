import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setDone(true);
    };

    return (
        <section className="mp-newsletter-banner">
            <div className="container">
                <div className="newsletter-wrap">
                    <div className="newsletter-content">
                        <h2 className="title">Stay home & get your daily <br />needs from our shop</h2>
                        <p className="subtitle">Start You'r Daily Shopping with <span>MarketPro</span></p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="input-group">
                                <i className="fa-light fa-paper-plane"></i>
                                <input type="email" placeholder="Your Email Address" />
                                <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="newsletter-img">
                        <img src="https://marketpro-nextjs.vercel.app/assets/images/banner/banner-img4.png" alt="Delivery" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
