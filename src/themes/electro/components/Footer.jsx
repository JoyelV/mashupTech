import React from 'react';

function Footer() {
    return (
        <footer className="el-footer">
            <div className="el-footer-top">
                <div className="container">
                    <div className="el-footer-grid">
                        <div className="el-footer-brand">
                            <div className="logo">
                                <span style={{ color: '#00aeef' }}>E</span>lectro
                            </div>
                            <p>Your ultimate electronics destination. We offer the best tech products from top global brands with fast shipping and easy returns.</p>
                            <div className="el-footer-socials">
                                <a href="#">📘</a>
                                <a href="#">🐦</a>
                                <a href="#">📸</a>
                                <a href="#">▶️</a>
                            </div>
                        </div>

                        <div className="el-footer-col">
                            <h4>Products</h4>
                            <ul>
                                {['Laptops & PCs', 'Smartphones', 'Tablets', 'Audio & Headphones', 'Cameras'].map(l => (
                                    <li key={l}><a href="#">{l}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="el-footer-col">
                            <h4>Support</h4>
                            <ul>
                                {['Track My Order', 'Returns & Refunds', 'Warranty Claims', 'Live Chat', 'FAQ'].map(l => (
                                    <li key={l}><a href="#">{l}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="el-footer-col">
                            <h4>Company</h4>
                            <ul>
                                {['About Electro', 'Careers', 'Press Center', 'Privacy Policy', 'Terms of Service'].map(l => (
                                    <li key={l}><a href="#">{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="el-footer-bottom">
                <div className="container">
                    <p>© 2024 Electro Electronics. All rights reserved. | We accept: 💳 Visa • Mastercard • PayPal • Crypto</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
