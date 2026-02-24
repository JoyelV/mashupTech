import React from 'react';
import '../styles/Footer.css';
import img1 from '../assets/images/footer/img1.jpg';
import img2 from '../assets/images/footer/img2.jpg';
import img3 from '../assets/images/footer/img3.jpg';
import img4 from '../assets/images/footer/img4.jpg';
import img5 from '../assets/images/footer/img5.jpg';

const HeadsetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fed700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
    <path d="M19 22H5"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44-3.96 0-7.14-3.23-7.14-7.27s3.18-7.27 7.14-7.27c1.77 0 3.26.65 4.38 1.68l2.2-2.2C17.06 2.5 14.86 1.5 12.18 1.5 6.56 1.5 2 6.2 2 12s4.56 10.5 10.18 10.5c5.35 0 9.4-3.83 9.4-9.6 0-.67-.09-1.25-.23-1.8z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-main">
        
        <div className="footer-col-contact">
          <h2 className="footer-logo">electro<span className="logo-dot">.</span></h2>
          
          <div className="footer-phone-box">
            <HeadsetIcon />
            <div className="footer-phone-text">
              <span className="phone-label">Got questions? Call us 24/7!</span>
              <span className="phone-number">(800) 8001-8588, (0600) 874 548</span>
            </div>
          </div>
          
          <div className="footer-address-box">
            <h4 className="footer-contact-title">Contact info</h4>
            <p className="footer-address">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google"><GoogleIcon /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github"><GithubIcon /></a>
          </div>
        </div>

        <div className="footer-col-links">
          <h3 className="footer-widget-title">Find it Fast</h3>
          <div className="footer-links-split">
            <ul className="footer-nav-list">
              <li><a href="/">Laptops & Computers</a></li>
              <li><a href="/">Cameras & Photography</a></li>
              <li><a href="/">Smart Phones & Tablets</a></li>
              <li><a href="/">Video Games & Consoles</a></li>
              <li><a href="/">TV & Audio</a></li>
              <li><a href="/">Gadgets</a></li>
              <li><a href="/">Car Electronic & GPS</a></li>
            </ul>
            <ul className="footer-nav-list">
              <li><a href="/">Printers & Ink</a></li>
              <li><a href="/">Software</a></li>
              <li><a href="/">Office Supplies</a></li>
              <li><a href="/">Computer Components</a></li>
              <li><a href="/">Accesories</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-col-care">
          <h3 className="footer-widget-title">Customer Care</h3>
          <ul className="footer-nav-list">
            <li><a href="/">My Account</a></li>
            <li><a href="/">Order Tracking</a></li>
            <li><a href="/">Wish List</a></li>
            <li><a href="/">Customer Service</a></li>
            <li><a href="/">Returns / Exchange</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Product Support</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">
            © <strong>Electro</strong> - All rights Reserved
          </p>
          
          <div className="footer-payments">
            <span className="payment-badge"><img src={img1} alt="Visa"/></span>
            <span className="payment-badge"><img src={img2} alt="Mastercard"/></span>
            <span className="payment-badge"><img src={img3} alt="Discover"/></span>
            <span className="payment-badge"><img src={img4} alt="Skrill"/></span>
            <span className="payment-badge"><img src={img5} alt="Paypal"/></span>
          </div>
        </div>
        
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          <ArrowUpIcon />
        </button>
      </div>
    </footer>
  );
}