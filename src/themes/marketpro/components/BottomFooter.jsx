import React from 'react';
import '../styles/BottomFooter.css';

function BottomFooter() {
    return (
        <div className="mp-bottom-footer border-top">
            <div className="mp-container">
                <div className="mp-bottom-inner">
                    
                    {/* Copyright Section */}
                    <div className="mp-copyright">
                        Copyright © <span className="mp-year">2025</span> Ui-drops All Rights Reserved
                    </div>

                    {/* Social Icons & Back to Top */}
                    <div className="mp-social-wrapper">
                        <ul className="mp-social-links">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mp-social-icon">
                                    <i className="ph ph-facebook-logo"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mp-social-icon">
                                    <i className="ph ph-twitter-logo"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mp-social-icon">
                                    <i className="ph ph-instagram-logo"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mp-social-icon">
                                    <i className="ph ph-linkedin-logo"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BottomFooter;