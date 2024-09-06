import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header'
import MainHeader from './components/Mainheader'
import Menu from './components/Menu'
import Banner from './components/Banner.jsx'
import HeroSection from './components/HeroSection.jsx'
import About from './components/About.jsx'
import Featured_P from './components/Featured_P.jsx';
import FeaturedCategory from './components/FeaturedCategory.jsx';
import Brands from './components/Brands.jsx';
import Gallery from './components/Gallery.jsx';
import Blog from './components/Blog.jsx';
import Test from './components/Test.jsx';
import Most from './components/Most.jsx';
import Social from './components/Social.jsx';
import Footer from './components/Footer.jsx';
import Sliderr from './components/Sliderr.jsx';
import Slide_C from './components/Slide_C.jsx';
import Test_slider from './components/Test_slider.jsx';

function App() {

  return (
    <>
      <Header />
      <MainHeader />
      <Menu />
      <Banner />
      <HeroSection />
      <About />
      <Featured_P />
      <FeaturedCategory />
      <Brands />
      <Gallery />
      <Blog />
      <Test />
      <Most />
      <Social />
      <Footer />
    </>
  )
}

export default App
