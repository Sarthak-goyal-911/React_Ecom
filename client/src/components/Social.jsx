import React from "react";
import './css/social.css';

const Social = () => {
  return (
    <div className="socials">
      <div className="wrapper">
        <div className="social-icons">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-skype" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-google-plus" style={{ color: "#0D52D6" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Social;
