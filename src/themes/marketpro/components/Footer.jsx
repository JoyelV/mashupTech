import React from 'react';

function Footer() {
    return (
        <footer className="mp-footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col brand-col">
                            <div className="logo">
                                <img src="https://marketpro-nextjs.vercel.app/assets/images/logo/logo.png" alt="MarketPro" style={{ height: '35px' }} />
                            </div>
                            <p className="desc">Marketpro is a popular and multifunctional ecommerce theme for any marketplace.</p>
                            <ul className="contact-info">
                                <li><i className="fa-light fa-location-dot"></i> 571 Libery Street, New York, USA</li>
                                <li><i className="fa-light fa-envelope"></i> help@marketpro.com</li>
                                <li><i className="fa-light fa-phone"></i> (+12) 871 382 023</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="title">Information</h4>
                            <ul>
                                <li><a href="#">Company Profile</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Our Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="title">Support</h4>
                            <ul>
                                <li><a href="#">Live Chat</a></li>
                                <li><a href="#">Support Ticket</a></li>
                                <li><a href="#">Service Guideline</a></li>
                                <li><a href="#">Tally Management</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer-col app-col">
                            <h4 className="title">Shop on The Go</h4>
                            <p>Marketpro App is now available on App Store & Google Play. Get it now.</p>
                            <div className="app-qr">
                                <div className="qr">
                                    <img src="https://marketpro-nextjs.vercel.app/assets/images/footer/qr.png" alt="QR" />
                                </div>
                                <div className="app-btns">
                                    <a href="#"><img src="https://marketpro-nextjs.vercel.app/assets/images/footer/app-store.png" alt="App Store" /></a>
                                    <a href="#"><img src="https://marketpro-nextjs.vercel.app/assets/images/footer/play-store.png" alt="Play Store" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-inner">
                        <p className="copyright">Copyright © 2025 MarketPro. All rights reserved.</p>
                        <div className="payment-icons">
                            <img src="https://marketpro-nextjs.vercel.app/assets/images/footer/payment.png" alt="Payments" />
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-circle"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="social-circle"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" className="social-circle"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" className="social-circle"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <i className="fa-light fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
