import React from "react";
import { Carousel } from "react-bootstrap";

import "./Slider.scss";

import imageSlider from "../../images/imageSlider.jpg";
import imageSlider2 from "../../images/imageSlider2.jpg";
import imageSlider3 from "../../images/imageSlider3.jpg";

export const Slider = () => {
  return (
    <div className="container">
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-100" src={imageSlider} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageSlider2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageSlider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
