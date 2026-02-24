import React from 'react';
import '../styles/Newsletter.css';

const PaperPlaneIcon = () => (
  <svg 
    width="28" 
    height="28" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#333e48" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container">
        
        {/* Left Side: Icon and Text */}
        <div className="newsletter-content">
          <div className="newsletter-icon">
            <PaperPlaneIcon />
          </div>
          <div className="newsletter-text">
            <h3 className="newsletter-heading">Sign up to Newsletter</h3>
            <p className="newsletter-subtext">
              ...and receive <strong>$20 coupon</strong> for first shopping.
            </p>
          </div>
        </div>

        {/* Right Side: Input Form */}
         <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
      <div className="input-group input-group-pill">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          required
        />
        <div className="input-group-append">
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>

      </div>
    </div>
  );
}