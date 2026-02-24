import React from 'react';
import '../styles/Footer.css';
import logo from '../assets/images/marketpro-logo.png'; 
import qrCode from '../assets/images/footer/qr-code.png'; 
import googlePlay from '../assets/images/footer/google-play.svg'; 
import appleStore from '../assets/images/footer/google-play.svg'; 
import payments from '../assets/images/footer/method.png'; 

function Footer() {
    const footerLinks = [
        {
            title: 'Information',
            links: ['Become a Vendor', 'Affiliate Program', 'Privacy Policy', 'Our Suppliers', 'Extended Plan', 'Community']
        },
        {
            title: 'Customer Support',
            links: ['Help Center', 'Contact Us', 'Report Abuse', 'Submit and Dispute', 'Policies & Rules', 'Online Shopping']
        },
        {
            title: 'My Account',
            links: ['My Account', 'Order History', 'Shoping Cart', 'Compare', 'Help Ticket', 'Wishlist']
        },
        {
            title: 'Daily Groceries',
            links: ['Dairy & Eggs', 'Meat & Seafood', 'Breakfast Food', 'Household Supplies', 'Bread & Bakery', 'Pantry Staples']
        }
    ];

    return (
        <footer className="mp-footer py-80 border-top">
            <div className="mp-container">
                <div className="mp-footer-row">
                    
                    {/* Column 1: Brand Info */}
                    <div className="mp-footer-col mp-col-brand">
                        <div className="mp-footer-logo">
                            <img src={logo} alt="MarketPro Logo" />
                        </div>
                        <p className="mp-brand-desc">
                            We're Grocery Shop, an innovative team of food suppliers.
                        </p>
                        <ul className="mp-contact-list">
                            <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
                            <li><a href="mailto:support@example.com">support@example.com</a></li>
                            <li><a href="tel:+4065550120">+ (406) 555-0120</a></li>
                        </ul>
                    </div>

                    {/* Columns 2, 3, 4, 5: Navigation Links */}
                    {footerLinks.map((section, idx) => (
                        <div key={idx} className="mp-footer-col mp-col-links">
                            <h4 className="mp-footer-title">{section.title}</h4>
                            <ul className="mp-footer-links">
                                {section.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 6: App & Download */}
                    <div className="mp-footer-col mp-col-app">
                        <h4 className="mp-footer-title">Shop on The Go</h4>
                        <p className="mp-app-desc">MarketPro App is available. Get it now</p>
                        
                        <div className="mp-download-wrap">
                            <div className="mp-qr-code">
                                <img src={qrCode} alt="Scan QR" />
                            </div>
                            <div className="mp-app-btns">
                                <a href="https://apple.com" target="_blank" rel="noreferrer">
                                    <img src={appleStore} alt="Apple Store" />
                                </a>
                                <a href="https://play.google.com" target="_blank" rel="noreferrer">
                                    <img src={googlePlay} alt="Google Play" />
                                </a>
                            </div>
                        </div>

                        <div className="mp-payment-icons">
                            <img src={payments} alt="Accepted Payments" />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;