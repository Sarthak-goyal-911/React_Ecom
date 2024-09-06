import React from 'react';
import './css/blog.css'; // Assuming your styles are in a Blog.css file
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import watch from '../images/watch.jpg'
import Slider from 'react-slick';
import Blogcard from './Blogcard';

const Blog = () => {
 

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
    <div className="Blog">
      <div className="wrapper">
        <div className="about">
          <div>
            <h1>From our Blog</h1>
            <hr style={{ backgroundColor: '#c02121' }} />
          </div>
          <div className="about-para">
            <p>Journal comes with its own simple yet powerful blog. With the new advanced typography styles your post page design will be unmatched.</p>
          </div>
        </div>

        <div className="Categories">
          <div className="Categories-nav">
            <nav>
              <ul>
                <li><a href="/" style={{ backgroundColor: '#0D52D6' }}>Latest Post</a></li>
                <li><a href="/">Most Read</a></li>
                <span>
                  <i className="fa-solid fa-caret-down" style={{ color: '#0D52D6', fontSize: '3rem', position: 'relative', right: '162px', top: '40px' }}></i>
                </span>
              </ul>
            </nav>
          </div>
        </div>

        <div className="blog-cards">
       
            
              <div className="blog-slideerr" >
                <Slider {...settings}>
                <div><div class="card">
          <img src={watch} alt="" />
          <h5 class="card-header"><i class="fa-solid fa-user"></i> admin <i class="fa-solid fa-comment"></i> 17 <i class="fa-solid fa-eye"></i> 7341</h5>
          <div class="blog-c-b">
              <h1>Best Smartwatch</h1>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum incidunt. Exercitationem pariatur odio deleniti temporibus nihil minus officia debitis, in ipsam vel a reprehenderit accusamus ea impedit. Ducimus, a..</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div></div>
                <div><div class="card">
          <img src={watch} alt="" />
          <h5 class="card-header"><i class="fa-solid fa-user"></i> admin <i class="fa-solid fa-comment"></i> 17 <i class="fa-solid fa-eye"></i> 7341</h5>
          <div class="blog-c-b">
              <h1>Best I-pad</h1>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum incidunt. Exercitationem pariatur odio deleniti temporibus nihil minus officia debitis, in ipsam vel a reprehenderit accusamus ea impedit. Ducimus, a..</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div></div>
                <div><div class="card">
          <img src={watch} alt="" />
          <h5 class="card-header"><i class="fa-solid fa-user"></i> admin <i class="fa-solid fa-comment"></i> 17 <i class="fa-solid fa-eye"></i> 7341</h5>
          <div class="blog-c-b">
              <h1>Best I-pad</h1>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorum incidunt. Exercitationem pariatur odio deleniti temporibus nihil minus officia debitis, in ipsam vel a reprehenderit accusamus ea impedit. Ducimus, a..</p>
            <a href="#" class="btn btn-primary">Read More</a>
          </div>
        </div></div>
                <div><h3>hhj</h3></div>
                <div><h3>hhj</h3></div>
                <div><h3>hhj</h3></div>
                </Slider>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
