import React from "react";
import './css/footer.css';


const Footer = () => {
  return (
    <div className="wrapper">
      <div className="Footer">
        <div className="ab">
          <h1>About Us</h1>
          <hr style={{ backgroundColor: "#c02121" }} />
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Custom Links</a></li>
          </ul>
        </div>
        <div className="ab">
          <h1>Customer Service</h1>
          <hr style={{ backgroundColor: "#c02121" }} />
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Custom Links</a></li>
          </ul>
        </div>
        <div className="ab">
          <h1>My Account</h1>
          <hr style={{ backgroundColor: "#c02121" }} />
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Gift Certificates</a></li>
          </ul>
        </div>
        <div className="ab">
          <h1>Newsletter</h1>
          <hr style={{ backgroundColor: "#c02121" }} />
          <p>
            Stay up to date with news and<br /> promotions by signing up for our newsletter
          </p>
          <input type="text" placeholder="Your Email.." />
          <button className="btn-foot">
            <i className="fa-regular fa-envelope"></i> Send
          </button>
          <br />
          <br />
          <input type="checkbox" id="agree" />
          <p style={{ fontSize: "1.3rem" }}>
            I have read and agree to the{" "}
            <a href="#" style={{ fontSize: "1.2rem" }}>
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
