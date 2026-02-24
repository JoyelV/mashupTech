import React, { useState } from 'react';
import '../styles/Newsletter.css';
import img1 from '../assets/images/newsletter/newsletter-img.png';

const basketImg = img1;

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribing email:', email);
    };

    return (
        <section className="mp-newsletter-section py-60">
            <div className="mp-container">
                <div className="mp-newsletter-banner">
                    
                    {/* Left Side: Content & Form */}
                    <div className="mp-newsletter-content">
                        <h2 className="mp-newsletter-title">
                            Stay home & get your daily needs from our shop
                        </h2>
                        
                        <form className="mp-newsletter-form" onSubmit={handleSubscribe}>
                            <input 
                                type="email" 
                                placeholder="Enter your mail" 
                                className="mp-newsletter-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="mp-newsletter-btn">
                                Subscribe now
                            </button>
                        </form>

                        <p className="mp-newsletter-agreement">
                            I agree that my submitted data is being collected and stored.
                        </p>
                    </div>

                    {/* Right Side: Large Graphic */}
                    <div className="mp-newsletter-img-wrap">
                        <img src={basketImg} alt="Fresh Groceries" />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Newsletter;