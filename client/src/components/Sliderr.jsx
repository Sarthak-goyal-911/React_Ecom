import React from "react";
import Slider from "react-slick";
import i1 from '../images/demo1.jpg';
import i2 from '../images/demo2.jfif';
import i3 from '../images/demo3.jfif';
import i4 from '../images/demo4.jfif';
import i5 from '../images/demo5.jfif';

function Sliderr() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div className="card">
                <img src={i1} className="d-block w-100" alt="Fashion" />
                <div className="carousel-caption d-none d-md-block">
                  <button className="inn-btn">FASHION</button>
                </div>
              </div>
        </div>
        <div>
        <div className="card">
                <img src={i2} className="d-block w-100" alt="Health & Beauty" />
                <div className="carousel-caption d-none d-md-block">
                  <button className="inn-btn">BAGS</button>
                </div>
              </div>
        </div>
        <div>
        <div className="card">
                <img src={i3} className="d-block w-100" alt="Health & Beauty" />
                <div className="carousel-caption d-none d-md-block">
                  <button className="inn-btn">HEALTH & BEAUTY</button>
                </div>
              </div>
        </div>
        <div>
        <div className="card">
                <img src={i4} className="d-block w-100" alt="Footwear" />
                <div className="carousel-caption d-none d-md-block">
                  <button className="inn-btn">FOOTWEAR</button>
                </div>
              </div>
        </div>
        <div>
        <div className="card">
                <img src={i5} className="d-block w-100" alt="Home Decor" />
                <div className="carousel-caption d-none d-md-block">
                  <button className="inn-btn">HOME DECOR</button>
                </div>
              </div>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Sliderr;
