import React from "react";
import b1 from '../images/b1.jfif';
import b2 from '../images/b2.jfif';
import b3 from '../images/b3.jfif';
import b4 from '../images/b4.jfif';
import b5 from '../images/b5.jfif';
import b6 from '../images/b6.jfif';
import b7 from '../images/b7.jfif';
import b8 from '../images/b8.jfif';
import b9 from '../images/b9.jfif';
import b10 from '../images/b10.jfif';

const Brands = () => {
  return (
    <div className="wrapper">
      <div className="brands">
        <div className="about">
          <div>
            <h1>Shop by Brands</h1>
            <hr style={{ backgroundColor: "#c02121" }} />
          </div>
        </div>
        <div className="brands-container">
          <div className="slider">
            <div className="slide-track">
              {brandsData.map((brand, index) => (
                <div className="slide" key={index}>
                  <img src={brand.src} alt={brand.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Array to hold the brand image data
const brandsData = [
  { src:b1, alt: "Superbrand" },
  { src:b2 , alt: "Sunglasses" },
  { src:b3 , alt: "Sony" },
  { src:b4, alt: "Sarah Cosmetics" },
  { src:b5, alt: "Sarah Beauty" },
  { src:b6, alt: "Palm" },
  { src:b7, alt: "Palm" },
  { src:b8, alt: "Palm" },
  { src:b9, alt: "Palm" },
  { src:b10, alt: "Palm" },
  { src:b10, alt: "Palm" },
  
];

export default Brands;
