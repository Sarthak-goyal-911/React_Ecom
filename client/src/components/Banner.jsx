import React from 'react';
import './css/banner.css'; 
import image1 from '../assets/s3-960x450h.png.png';
import image2 from '../assets/s2-960x450h.png.png';
import image3 from '../images/ss.jpg';
import image4 from '../images/ss2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const MainBanner = () => {
  return (
    <div className="wrapper">
      <div className="main-banner">
        <div className="banner-1">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={image1} alt="First slide" />
                <div className="caption">
                  <div className="carousel-caption d-block d-md-block" style={{ textAlign: 'left' }}>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: '#0D52D6',
                        padding: '4px',
                        fontWeight: 700,
                        color: 'white',
                      }}
                    >
                      Mobile
                    </button>
                    <p style={{ fontSize: '4.5rem', fontWeight: 900, color: 'black' }}>
                      Best mobile options <br /> at any resolution
                    </p>
                    <button
                      className="carousal-btn"
                      style={{
                        padding: '10px',
                        backgroundColor: 'transparent',
                        border: '1px solid black',
                        color: 'rgba(0, 0, 0, 1)',
                      }}
                    >
                      LEARN MORE <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={image2} alt="Second slide" />
                <div className="carousel-caption d-md-block" style={{ textAlign: 'left' }}>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: '#0D52D6',
                      padding: '4px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    Mobile
                  </button>
                  <p style={{ fontSize: '4.5rem', fontWeight: 900, color: 'black' }}>
                    Best mobile options <br /> at any resolution
                  </p>
                  <button
                    className="carousal-btn"
                    style={{
                      padding: '10px',
                      backgroundColor: 'transparent',
                      border: '1px solid black',
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    LEARN MORE <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={image1} alt="Third slide" />
                <div className="carousel-caption d-md-block" style={{ textAlign: 'left' }}>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: '#0D52D6',
                      padding: '4px',
                      fontWeight: 700,
                      color: 'white',
                    }}
                  >
                    Mobile
                  </button>
                  <p style={{ fontSize: '4.5rem', fontWeight: 900, color: 'black' }}>
                    Best mobile options <br /> at any resolution
                  </p>
                  <button
                    className="carousal-btn"
                    style={{
                      padding: '10px',
                      backgroundColor: 'transparent',
                      border: '1px solid black',
                      color: 'rgba(0, 0, 0, 1)',
                    }}
                  >
                    LEARN MORE <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="banner-r">
          <div className="banner-2">
            <img src={image3} alt="Banner 2" />
          </div>
          <div className="banner-3">
            <img src={image4} alt="Banner 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
