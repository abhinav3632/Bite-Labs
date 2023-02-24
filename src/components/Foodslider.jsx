import '../App.css';
import React from 'react'
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import slideimg1 from '../assets/images/trending-food-1.png'
import slideimg2 from '../assets/images/trending-food-2.png'
import slideimg3 from '../assets/images/trending-food-3.png'
import slideimg4 from '../assets/images/trending-food-4.png'
import slideimg5 from '../assets/images/trending-food-5.png'
import slideimg6 from '../assets/images/trending-food-6.png'
import slideimg7 from '../assets/images/trending-food-7.png'

const images = [slideimg1, slideimg2, slideimg3, slideimg4, slideimg5, slideimg6, slideimg7];

function Foodslider(){
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
      const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    
  };
  return (
    <div className="Slide">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Foodslider;