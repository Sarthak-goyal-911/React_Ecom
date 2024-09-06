import React from "react";
import Slider from "react-slick";
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import watch from '../images/watch.jpg';
import i5 from '../images/demo5.jfif';
import './css/products.css'

function Product_C() {
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
            <div className="p-card">
            <div className="card">
                    <img src={p1} className="card-img-top" alt="Headphones" />
                    <span className="pre-order-badge">Custom Labels</span>
                    <div className="card-body">
                      <div><p>Ericssion</p></div>
                      <div><p>Model20192</p></div>
                    </div>
                    <div className="det">
                      <div className="title">Headphones</div>
                      <div className="price">$99.00</div>
                      <div className="actions">
                        <div className="quantity">
                          <input type="number" value="1" />
                          <button className="add-to-cart">ADD TO CART</button>
                        </div>
                        <div className="c-icons">
                          <a href="#"><i className="fa-regular fa-heart"></i></a>
                          <a href="#"><i className="fa-solid fa-right-left" style={{ color: '#74C0FC' }}></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="#" className="card-link"><i className="fa-solid fa-dollar-sign fa-flip-both" style={{ color: '#63E6BE' }}></i> Buy Now</a>
                      <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#c02121' }}></i> Question</a>
                    </div>
                  </div>
            </div>
       
        </div>
        <div>
        <div className="card">
                    <img src={p2} className="card-img-top" alt="Headphones" />
                    <span className="pre-order-badge">Custom Labels</span>
                    <div className="card-body">
                      <div><p>Nikon</p></div>
                      <div><p>Model2992</p></div>
                    </div>
                    <div className="det">
                      <div className="title">Camera</div>
                      <div className="price">$299.00</div>
                      <div className="actions">
                        <div className="quantity">
                          <input type="number" value="1" />
                          <button className="add-to-cart">ADD TO CART</button>
                        </div>
                        <div className="c-icons">
                          <a href="#"><i className="fa-regular fa-heart"></i></a>
                          <a href="#"><i className="fa-solid fa-right-left" style={{ color: '#74C0FC' }}></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="#" className="card-link"><i className="fa-solid fa-dollar-sign fa-flip-both" style={{ color: '#63E6BE' }}></i> Buy Now</a>
                      <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#c02121' }}></i> Question</a>
                    </div>
                  </div>
        </div>
        <div>
        <div className="card">
                    <img src={p3} className="card-img-top" alt="Headphones" />
                    <span className="pre-order-badge">Custom Labels</span>
                    <div className="card-body">
                      <div><p>Apple</p></div>
                      <div><p>Model Air002</p></div>
                    </div>
                    <div className="det">
                      <div className="title">I-pad</div>
                      <div className="price">$499.00</div>
                      <div className="actions">
                        <div className="quantity">
                          <input type="number" value="1" />
                          <button className="add-to-cart">ADD TO CART</button>
                        </div>
                        <div className="c-icons">
                          <a href="#"><i className="fa-regular fa-heart"></i></a>
                          <a href="#"><i className="fa-solid fa-right-left" style={{ color: '#74C0FC' }}></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="#" className="card-link"><i className="fa-solid fa-dollar-sign fa-flip-both" style={{ color: '#63E6BE' }}></i> Buy Now</a>
                      <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#c02121' }}></i> Question</a>
                    </div>
                  </div>
        </div>
        <div>
        <div className="card">
                    <img src={watch} className="card-img-top" alt="Headphones" />
                    <span className="pre-order-badge">Custom Labels</span>
                    <div className="card-body">
                      <div><p>Apple watch</p></div>
                      <div><p>Model 007</p></div>
                    </div>
                    <div className="det">
                      <div className="title">I-Watch</div>
                      <div className="price">$249.00</div>
                      <div className="actions">
                        <div className="quantity">
                          <input type="number" value="1" />
                          <button className="add-to-cart">ADD TO CART</button>
                        </div>
                        <div className="c-icons">
                          <a href="#"><i className="fa-regular fa-heart"></i></a>
                          <a href="#"><i className="fa-solid fa-right-left" style={{ color: '#74C0FC' }}></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="#" className="card-link"><i className="fa-solid fa-dollar-sign fa-flip-both" style={{ color: '#63E6BE' }}></i> Buy Now</a>
                      <a href="#" className="card-link"><i className="fa-regular fa-circle-question" style={{ color: '#c02121' }}></i> Question</a>
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

export default Product_C;
