import React from 'react';
import './css/header.css';
import laa from '../assets/j-logo.svg';

const MainHeader = () => {
  return (
    <div className="main" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="wrapper">
        <div className="main-header">
          <div>
            <img src={laa} alt="" />
          </div>
          <div className="search">
            <button
              className="btn-small"
              style={{ borderTopRightRadius: '0px', borderBottomRightRadius: '0px' }}
            >
              All <i className="fa-solid fa-caret-down"></i>
            </button>
            <input
              className="search-bar"
              type="text"
              placeholder="Search here..."
            />
            <button
              className="btn-small"
              style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="head-logo">
            <div className="head-icons">
              <i className="fa-solid fa-circle-user"></i> login
            </div>
            <div className="head-icons">
              <i className="fa-solid fa-pen-to-square"></i> Register
            </div>
            <div className="head-icons">
              <i className="fa-solid fa-heart"></i> Wishlist
            </div>
            <div className="head-icons">
              <i className="fa-solid fa-right-left"></i> Compare
            </div>
          </div>
          <div className="head-cart">
            <p>0 item(s) - 0 $</p>
            <button className="btn-small">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
