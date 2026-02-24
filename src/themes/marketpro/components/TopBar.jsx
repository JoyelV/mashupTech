import React, { useState, useEffect } from 'react';
import '../styles/TopBar.css'; 

const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 628,
    hours: 4,
    minutes: 13,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mp-topbar">
      <div className="mp-container mp-topbar-inner">
        
        {/* Left Side: Countdown and Offer */}
        <div className="mp-topbar-left">
          <div className="mp-sale-timer">
            Until the end of the sale: 
            <strong>{timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Sec.</strong>
          </div>
          <div className="mp-promo-text">
             <span className="mp-separator">|</span> Buy one get one free on <span className="mp-highlight">first order</span>
          </div>
        </div>

        {/* Right Side: Preference Links */}
        <div className="mp-topbar-right">
          <ul className="mp-topbar-menu">
            <li><a href="#tracking"><i className="ph ph-truck"></i> Track Your Order</a></li>
            <span className="mp-separator">|</span>
            <li><a href="#tracking">Order Tracking</a></li>
            <li><a href="#about">About Us</a></li>
            <li>
              <select className="mp-dropdown" defaultValue="Eng">
                <option value="Eng">Eng</option>
                <option value="FR">FR</option>
              </select>
            </li>
            <li>
              <select className="mp-dropdown" defaultValue="USD">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default TopBar;