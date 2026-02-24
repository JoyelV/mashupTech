import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setSubmitted(true);
    };

    return (
        <section className="eko-newsletter">
            <div className="container">
                <h2>🌿 Subscribe & Save 20%</h2>
                <p>Subscribe to our newsletter and get exclusive deals every week on fresh groceries.</p>
                {submitted ? (
                    <p style={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                        ✅ Thank you for subscribing! Check your email for your 20% discount.
                    </p>
                ) : (
                    <form className="eko-nl-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your email address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Newsletter;
