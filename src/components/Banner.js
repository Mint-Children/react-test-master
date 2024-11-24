import React, { useState } from "react";
import "../styles/Banner.css"
import bannerImage1 from "../assets/banner.png";
import bannerImage2 from "../assets/banner.png";
import bannerImage3 from "../assets/banner.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [bannerImage1, bannerImage2, bannerImage3];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="banner" style={{ backgroundImage: `url(${slides[currentSlide]})` }}>
      <div className="banner-content">
        <h1>한라대학교 IT소프트웨어학과</h1>
        <p>Department of IT Software</p>
      </div>
      <div className="banner-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;