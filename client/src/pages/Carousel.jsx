// Carousel.jsx
import React, { useState } from "react";
import "./Carousel.scss"; // Import your SCSS file here
import CarouselItem from "./CarouselItem";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    setActiveIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    setActiveIndex(prevIndex);
  };

  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        {items.map((_, index) => (
          <li
            key={index}
            data-target="#demo"
            data-slide-to={index}
            className={index === activeIndex ? "active" : ""}
          ></li>
        ))}
      </ul>
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <CarouselItem {...item} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#demo"
        data-slide="prev"
        onClick={prevSlide}
      >
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#demo"
        data-slide="next"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  );
};

export default Carousel;
