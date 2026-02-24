import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import "../styles/FooterTwo.css";
import icon1 from "../assets/images/footer/11.svg";
import icon2 from "../assets/images/footer/12.svg";
import icon3 from "../assets/images/footer/13.svg";
import paymentIcon from "../assets/images/04.png";

function Footer() {
  const [email, setEmail] = useState("");

  return (
    <>
      {/* ===== FOOTER TOP ===== */}
      <div className="rts-footer-area-two">
        <div className="container-2">
          <div className="footer-two-main-wrapper">

            {/* Column 1 */}
            <div className="footer-single-wized-two start">
              <a href="/" className="logo-area">
                <img src={logo}  alt="Ekomart Logo" className="logo-img" />
              </a>

              <p className="disc">
                What’s inside: New Arrivals, Exclusive Sales, News & Mores
              </p>

              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="rts-btn btn-primary">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </form>

              <div className="social-style-dash">
                <ul>
                  <li><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
                  <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="single-footer-wized mid">
              <h3 className="footer-title">Our Stores</h3>
              <ul>
                <li><a href="/">Delivery Information</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
                <li><a href="/">Support Center</a></li>
                <li><a href="/">Careers</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="single-footer-wized mid">
              <h3 className="footer-title">Shop Categories</h3>
              <ul>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Information</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Nest Stories</a></li>
              </ul>
            </div>

{/* Column 4 */}
<div className="single-footer-wized">
  <h3 className="footer-title">Need Help? / Contact Us</h3>

  <div className="contact-information">

    {/* Address */}
    <div className="single-contact-information-area">
      <div className="icon-area">
      <img src={icon1} alt="icons"/>
      </div>
      <div className="information-area">
        <p className="disc">
          258 Daniel Street, 2589 Phones Line <br />
          Berlin, Germany
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="single-contact-information-area">
      <div className="icon-area">
      <img src={icon2} alt="icons"/>
      </div>
      <div className="information-area">
        <p className="disc">
          Call us between 8:00 AM - 12PM <br />
          <a href="tel:+2589631583228">+25896 3158 3228</a>
        </p>
      </div>
    </div>

    {/* Live Chat */}
    <div className="single-contact-information-area">
      <div className="icon-area">
      <img src={icon3} alt="icons"/>
      </div>
      <div className="information-area">
        <p className="disc">
          Live Chat <br />
          <span>Chat With an Experts</span>
        </p>
      </div>
    </div>

  </div>
</div>

          </div>
        </div>
      </div>

      {/* ===== FOOTER BOTTOM ===== */}
      <div className="rts-copyright-area-two">
        <div className="container-2">
          <div className="copyright-arae-two-wrapper">
              <p>
              Copyright 2025 <a href="/">©Ekomart</a>. All rights reserved.
            </p>

            <div className="payment-processw-area">
              <span>Payment Accepts:</span>
              <img src={paymentIcon} alt="payment" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;