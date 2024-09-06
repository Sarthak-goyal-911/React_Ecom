import React ,{useEffect} from 'react';
import $ from 'jquery'; // Import jQuery
import 'slick-carousel';
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css';
import './css/about.css';
import './css/categories.css';
import './css/shop.css';
import './css/mm.css';
import i1 from '../images/demo1.jpg';
import i2 from '../images/demo2.jfif';
import i3 from '../images/demo3.jfif';
import i4 from '../images/demo4.jfif';
import i5 from '../images/demo5.jfif';
import Sliderr from './Sliderr';


const About = () => {
  
  return (
    <div className="wrapper">
      <div className="s-2">
        <div className="about">
          <div>
            <h1>Why Buy from us?</h1>
            <hr style={{ backgroundColor: '#c02121' }} />
          </div>
          <div className="about-para">
            <p>
              Journal has been the best selling and most loved Opencart theme since first launch in 2013. Tried and
              tested by over 20K people, Journal is the best Opencart theme framework on the market today.{' '}
              <a href="#">Learn More</a>
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="Categories">
          <div className="Categories-nav">
            <nav>
              <ul>
                <li>
                  <a href="#" style={{ backgroundColor: '#0D52D6', color: 'white' }}>
                    Top Categories
                  </a>
                </li>
                <li>
                  <a href="#">Electronics</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
                <li>
                  <a href="#">Fashion</a>
                </li>
                <span className="res-span">
                  <i
                    className="fa-solid fa-caret-down"
                    style={{ color: '#0D52D6', fontSize: '3rem', position: 'relative', right: '328px', top: '40px' }}
                  ></i>
                </span>
                <span className="o-span">
                  <i
                    className="fa-solid fa-caret-down"
                    style={{ color: '#0D52D6', fontSize: '3rem', position: 'relative', right: '328px', top: '40px' }}
                  ></i>
                </span>
              </ul>
            </nav>
          </div>
        </div>

        {/* Shop Section */}
        <div className="shop">
          
          <Sliderr />
        </div>
      </div>
    </div>
  );
};

export default About;
