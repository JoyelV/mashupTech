import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) setDone(true);
    };

    return (
        <section className="el-newsletter">
            <div className="container">
                <div className="el-nl-content">
                    <h2>✈️ Sign up to Newsletter</h2>
                    <p>...and receive <strong>$20 coupon</strong> for first shopping.</p>
                </div>
                {done ? (
                    <div className="el-nl-success">
                        ✅ Subscribed! Check your email.
                    </div>
                ) : (
                    <form className="el-nl-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Sign Up</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Newsletter;
