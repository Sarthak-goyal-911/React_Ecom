import React from 'react';
import './css/hero.css';
const HeroSection = () => {
  return (
    <div className="hero" style={{ backgroundColor: 'rgba(58, 71, 84, 1)' }}>
      <div className="wrapper">
        <div className="hero-sec">
          <div className="hero-1">
            <div className="ic">
              <i className="fa-solid fa-truck-fast" style={{ color: '#f57905' }}></i>
            </div>
            <div>
              <h3>Free Shipping</h3>
              <p>Free Delivery over $100</p>
            </div>
          </div>
          <div className="hero-1">
            <div className="ic">
              <i className="fa-solid fa-reply" style={{ color: '#f57905' }}></i>
            </div>
            <div>
              <h3>Free Returns</h3>
              <p>Free Delivery over $100</p>
            </div>
          </div>
          <div className="hero-1">
            <div className="ic">
              <i className="fa-solid fa-shield-halved" style={{ color: '#f57905' }}></i>
            </div>
            <div>
              <h3>Secure Shopping</h3>
              <p>Free Delivery over $100</p>
            </div>
          </div>
          <div className="hero-1">
            <div className="ic">
              <i className="fa-solid fa-cube" style={{ color: '#f57905' }}></i>
            </div>
            <div>
              <h3>Unlimited Blocks</h3>
              <p>Free Delivery over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
