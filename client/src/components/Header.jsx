import React from 'react';
import './css/header.css';
const Header = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <nav>
          <ul className="top-header">
            <div className="r">
              <ul className="r-r">
                <li>
                 home
                </li>
                <li>
                  <i className="fa-regular fa-star"></i> About us
                </li>
                <li>
                  <i className="fa-regular fa-envelope"></i> Contact us
                </li>
                <li>
                  <i className="fa-solid fa-question"></i> Faq <i className="fa-solid fa-caret-down"></i>
                </li>
              </ul>
            </div>
            <div className="c">
              <ul className="r-r">
                <li>
                  <i className="fa-solid fa-globe"></i> English <i className="fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <i className="fa-solid fa-dollar-sign"></i> USD <i className="fa-solid fa-caret-down"></i>
                </li>
              </ul>
            </div>
            <div className="l">
              <ul className="r-r">
                <li>
                  <i className="fa-solid fa-id-card"></i> More Menus <i className="fa-solid fa-caret-down"></i>
                </li>
                <li>
                  <i className="fa-solid fa-truck"></i> Delivery
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
      <div className="top-res">
        <div className="l-t">
          <ul>
            <li>
              <i className="fa-solid fa-circle-user" style={{ color: '#F7F7F7' }}></i> LOGIN
            </li>
            <li>
              <i className="fa-solid fa-square-pen"></i> REGISTER
            </li>
          </ul>
        </div>
        <div className="r-t">
          <ul>
            <li>
              <i className="fa-solid fa-globe"></i> English <i className="fa-solid fa-caret-down"></i>
            </li>
            <li>
              <i className="fa-solid fa-dollar-sign"></i> USD <i className="fa-solid fa-caret-down"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
