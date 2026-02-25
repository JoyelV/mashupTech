import React, { useState } from 'react';
import '../styles/Navbar.css';

const navLinks = [
    { label: 'Home', href: '/', badge: null, badgeColor: null, hasDropdown: true },
    { label: 'Shop', href: '/shop', badge: null, badgeColor: null, hasDropdown: true },
    { label: 'Pages', href: '/pages', badge: 'New', badgeColor: 'peach', hasDropdown: true },
    { label: 'Vendors', href: '/vendors', badge: 'New', badgeColor: 'purple', hasDropdown: true },
    { label: 'Blog', href: '/blog', badge: null, badgeColor: null, hasDropdown: true },
    { label: 'Contact Us', href: '/contact', badge: null, badgeColor: null, hasDropdown: false },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="mp-navbar border-bottom">
                <div className="mp-container">
                    <div className="mp-navbar-inner">

                        {/* Left: Category Button, Hamburger & Main Menu */}
                        <div className="mp-navbar-left">

                            {/* Hamburger Toggle (Mobile Only) */}
                            <button className="mp-hamburger-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                                <i className={`ph ${isMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
                            </button>

                            {/* Browse Categories Button */}
                            <button type="button" className="mp-category-btn">
                                <span className="mp-icon"><i className="ph ph-squares-four"></i></span>
                                <span className="mp-btn-text">Browse Categories</span>
                                <span className="mp-icon-caret"><i className="ph ph-caret-down"></i></span>
                            </button>

                            {/* Main Menu Links (Desktop) */}
                            <ul className={`mp-nav-menu ${isMenuOpen ? 'open' : ''}`}>
                                {navLinks.map((link, index) => (
                                    <li key={index} className="mp-nav-item">
                                        {link.badge && (
                                            <span className={`mp-nav-badge mp-badge-${link.badgeColor}`}>
                                                {link.badge}
                                            </span>
                                        )}
                                        <a href={link.href} className="mp-nav-link">
                                            {link.label}
                                            {link.hasDropdown && (
                                                <i className="ph ph-caret-down mp-dropdown-icon"></i>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Support/Contact Section */}
                        <div className="mp-navbar-right">
                            <div className="mp-support-box">
                                <div className="mp-support-icon">
                                    <i className="ph ph-device-mobile"></i>
                                </div>
                                <div className="mp-support-text">
                                    <span className="mp-support-title">Need any Help! call Us</span>
                                    <a href="tel:+2871382023" className="mp-support-number">
                                        +(2) 871 382 023
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Backdrop */}
            {isMenuOpen && (
                <div className="mp-nav-backdrop" onClick={toggleMenu}></div>
            )}
        </>
    );
}

export default Navbar;
