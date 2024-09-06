import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/catelogue.css';
import fashion from '../images/demo1.jpg';
import f1 from '../images/f1.jpg';
import Slide_C from './Slide_C';
import Slider from 'react-slick';

const FeaturedCategory = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="featured-category">
      <div className="about">
        <div>
          <h1>Featured Category</h1>
          <hr style={{ backgroundColor: '#c02121' }} />
        </div>
        <div className="about-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
            recusandae dolorem vel eum impedit maiores sunt reprehenderit tenetur
            delectus nesciunt deleniti! Dicta animi illum, nostrum harum hic
            autem quos quod. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. <a href="#">Learn More</a>
          </p>
        </div>
      </div>
      <div className="wrapper">
        <div className="catelogue">
          <div className="cat-left">
            <div>
              <h1>Fashion</h1>
            </div>
            <div className="card">
              <img src={fashion} className="card-img-top" alt="..." />
              <div className="card-body">
                <ul>
                  <li><a href="#">Accesories</a></li>
                  <li><a href="#">Dresses</a></li>
                  <li><a href="#">Pants</a></li>
                  <li><a href="#">T-shirts</a></li>
                </ul>
              </div>
              <div className="card-body">
                <a href="#" className="card-link">See all in Fashions</a>
              </div>
            </div>
          </div>

          <div className="cat-right">
            <h1>New in Fashion</h1>
            <div className="res-car">
              <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="img-c">
                        <img src="./images/f2.jpg" className="card-img-top" alt="..." />
                      </div>
                      <span className="badge-c">HOT</span>
                      <span className="pre-order-badge">pre-order</span>
                      <div className="det">
                        <div className="title">LG Smart TV</div>
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
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card">
                      <div className="img-c">
                        <img src="./images/f1.jpg" className="card-img-top" alt="..." />
                      </div>
                      <span className="badge-c">HOT</span>
                      <span className="pre-order-badge">pre-order</span>
                      <div className="det">
                        <div className="title">LG Smart TV</div>
                        <div className="price">$999.00</div>
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
                    </div>
                  </div>
                  {/* Add more slides as needed */}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
            <div className="car">
              <div className="cat-sliderr">
                <Slider {...settings} >
                  <div><div className="card">
                        <div className="img-c">
                          <img src={f1} className="card-img-top" alt="..." />
                        </div>
                        <span className="badge-c">HOT</span>
                        <span className="pre-order-badge">pre-order</span>
                        <div className="det">
                          <div className="title">LG Smart TV</div>
                          <div className="price">$999.00</div>
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
                      </div></div>
                      <div><div className="card">
                        <div className="img-c">
                          <img src={f1} className="card-img-top" alt="..." />
                        </div>
                        <span className="badge-c">HOT</span>
                        <span className="pre-order-badge">pre-order</span>
                        <div className="det">
                          <div className="title">LG Smart TV</div>
                          <div className="price">$999.00</div>
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
                      </div></div>
                      <div><div className="card">
                        <div className="img-c">
                          <img src={f1} className="card-img-top" alt="..." />
                        </div>
                        <span className="badge-c">HOT</span>
                        <span className="pre-order-badge">pre-order</span>
                        <div className="det">
                          <div className="title">LG Smart TV</div>
                          <div className="price">$999.00</div>
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
                      </div></div>
                      <div><h2>sas</h2></div>
                      <div><h2>sas</h2></div>
                      <div><h2>sas</h2></div>
                      <div><h2>sas</h2></div>
                      <div><h2>sas</h2></div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;
