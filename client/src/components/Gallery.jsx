import React from "react";
import "./css/gallery.css"; // Assuming you have this file for styles
import g1 from '../images/g1.jfif';
import g2 from '../images/g2.png';
import g3 from '../images/g3.jfif';
import g4 from '../images/g4.jfif';
import g5 from '../images/g5.jfif';
import g6 from '../images/g6.jfif';
import g7 from '../images/g7.jfif';
import g8 from '../images/g8.jfif';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="wrapper">
        <div className="about">
          <div>
            <h1>Improved Gallery Module</h1>
            <hr style={{ backgroundColor: "#c02121" }} />
          </div>
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur .impedit maiores sunt
              reprehenderit tenetur delectus nesciunt deleniti! Dicta animi
              illum, nostrum harum hic autem quos quod. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.{" "}
              <a href="/">Learn More</a>
            </p>
          </div>
        </div>
        <div className="img-gallery">
          <div className="imgs">
            {galleryData.map((img, index) => (
              <div className="img-g" key={index}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Image data for dynamic rendering
const galleryData = [
  { src: g1, alt: "Image 1" },
  { src: g2, alt: "Image 1" },
  { src: g3, alt: "Image 1" },
  { src: g4, alt: "Image 1" },
  { src: g5, alt: "Image 1" },
  { src: g6, alt: "Image 1" },
  { src: g7, alt: "Image 1" },
  { src: g8, alt: "Image 1" }
  
];

export default Gallery;
