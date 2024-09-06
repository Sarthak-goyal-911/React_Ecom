import React from 'react';
import './css/header.css';

const Menu = () => {
  return (
    <div className="menu" style={{ backgroundColor: '#0D52D6' }}>
      <div className="wrapper">
        <div className="menu-header">
          <div className="menu-l">
            <ul>
              <li>
                <a href="#" className="highlighted" style={{ color: 'black' }}>
                  <i className="fa-solid fa-bars"></i> ALL Department
                </a>
                <span className="badge">Sale</span>
              </li>
              <li>
                <a href="#">Multi level</a>
              </li>
              <li>
                <a href="#">Mega Menu</a>
                <span className="badge-n">New</span>
              </li>
              <li>
                <a href="#">Full Width</a>
              </li>
            </ul>
          </div>
          <div className="menu-r">
            <ul>
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone-volume"></i> 1800XXXXXX
                </a>
              </li>
              <li>
                <a href="#" className="highlighted" style={{ color: 'black' }}>
                  <i className="fa-solid fa-message"></i> Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
