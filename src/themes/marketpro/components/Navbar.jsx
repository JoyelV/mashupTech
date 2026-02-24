import React from 'react';

const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Shop', href: '#' },
    { label: 'Pages', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact Us', href: '#' },
];

function Navbar() {
    return (
        <nav className="mp-nav-bar-area">
            <div className="container">
                <div className="mp-nav-inner">
                    <div className="mp-cat-btn-wrap">
                        <div className="mp-all-cats-btn">
                            <i className="fa-light fa-bars"></i>
                            <span>Browse All Categories</span>
                        </div>
                    </div>

                    <div className="mp-nav-main-links">
                        {navLinks.map((l) => (
                            <a key={l.label} href={l.href} className={l.cls || ''}>
                                {l.label}
                                {l.label === 'Shop' && <span className="nav-badge hot">Hot</span>}
                                {l.label === 'Pages' && <span className="nav-badge new">New</span>}
                            </a>
                        ))}
                    </div>

                    <div className="mp-nav-support">
                        <div className="icon">
                            <i className="fa-light fa-headset"></i>
                        </div>
                        <div className="text">
                            <span className="phone">+2) 871 382 023</span>
                            <span className="label">24/7 Support Center</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
