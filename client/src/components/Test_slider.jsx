import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/test_slider.css';

function Test_slider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="test-slider">
      <Slider {...settings}>
        <div>
        <div className="test-card">
                <i className="fa-solid fa-quote-left" style={{ color: "#f57905" }}></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae alias recusandae. Repellendus
                  consequatur minus suscipit. Itaque rem distinctio minima, obcaecati deserunt voluptate impedit doloribus
                  alias tenetur soluta nihil possimus.
                </p>
                <div>
                  <h3>- Karan Aujla</h3>
                </div>
              </div>
        </div>
        <div>
        <div className="test-card">
                <i className="fa-solid fa-quote-left" style={{ color: "#f57905" }}></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae alias recusandae. Repellendus
                  consequatur minus suscipit. Itaque rem distinctio minima, obcaecati deserunt voluptate impedit doloribus
                  alias tenetur soluta nihil possimus.
                </p>
                <div>
                  <h3>- Charlie Puth</h3>
                </div>
              </div>
        </div>
        <div>
        <div className="test-card">
                <i className="fa-solid fa-quote-left" style={{ color: "#f57905" }}></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae alias recusandae. Repellendus
                  consequatur minus suscipit. Itaque rem distinctio minima, obcaecati deserunt voluptate impedit doloribus
                  alias tenetur soluta nihil possimus.
                </p>
                <div>
                  <h3>- Bir</h3>
                </div>
              </div>
        </div>
        <div>
        <div className="test-card">
                <i className="fa-solid fa-quote-left" style={{ color: "#f57905" }}></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae alias recusandae. Repellendus
                  consequatur minus suscipit. Itaque rem distinctio minima, obcaecati deserunt voluptate impedit doloribus
                  alias tenetur soluta nihil possimus.
                </p>
                <div>
                  <h3>- Talwinder</h3>
                </div>
              </div>
        </div>
        <div>
        <div className="test-card">
                <i className="fa-solid fa-quote-left" style={{ color: "#f57905" }}></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae alias recusandae. Repellendus
                  consequatur minus suscipit. Itaque rem distinctio minima, obcaecati deserunt voluptate impedit doloribus
                  alias tenetur soluta nihil possimus.
                </p>
                <div>
                  <h3>- Prophec</h3>
                </div>
              </div>
        </div>
        <div>
        <div className="test-card">
                <i className="fa-solid fa-quote-left" style={{ color: "#f57905" }}></i>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse repudiandae alias recusandae. Repellendus
                  consequatur minus suscipit. Itaque rem distinctio minima, obcaecati deserunt voluptate impedit doloribus
                  alias tenetur soluta nihil possimus.
                </p>
                <div>
                  <h3>- Aditya</h3>
                </div>
              </div>
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

export default Test_slider;
