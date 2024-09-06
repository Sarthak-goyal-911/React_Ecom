import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/products.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
// import p1 from '../images/p1.jpg';
// import hee from '../images/heels.jpg';
// import watchImg from '../images/watch.jpg';
// import heelImg from './images/heel.jpg';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import watch from '../images/watch.jpg';
import i5 from '../images/demo5.jfif';

const Featured = () => {
  return (
    <div className="featured">
      <div className="wrapper">
        <div className="about">
          <div>
            <h1>Featured Products</h1>
            <hr style={{ backgroundColor: '#c02121' }} />
          </div>
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, recusandae dolorem vel eum impedit maiores sunt reprehenderit tenetur delectus nesciunt deleniti! Dicta animi illum, nostrum harum hic autem quos quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="Categories-nav">
            <nav>
              <ul>
                <li><a href="#" style={{ backgroundColor: '#0D52D6' }}>Featured</a></li>
                <li><a href="#">Latest</a></li>
                <li><a href="#">BestSellers</a></li>
                <li><a href="#">Specials</a></li>
                <span><i className="fa-solid fa-caret-down" style={{ color: '#0D52D6', fontSize: '3rem', position: 'relative', right: '305px', top: '40px' }}></i></span>
              </ul>
            </nav>
          </div>

          {/* Carousel Section */}
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {/* First Carousel Item */}
              <div className="carousel-item active">
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
                  {/* Add other cards here in a similar manner */}
                </div>
              </div>
              {/* Add additional carousel items here */}
              <div className="carousel-item">
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
                  <div className="card">
                    <img src={p2} className="card-img-top" alt="Headphones" />
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
                  {/* Add other cards here in a similar manner */}
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <button className="p-btn">SEE ALL PRODUCTS <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Featured;
