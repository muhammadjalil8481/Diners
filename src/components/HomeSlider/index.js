import React, { useState } from "react";
// import Carousel from "react-elastic-carousel";
import images from "../../constants/images";
import Carousel from "react-bootstrap/Carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { grey } from "@mui/material/colors";

const PrevIcon = () => {
  return (
    <span className="carousel-icon-container">
      <ArrowBackIosNewIcon sx={{ fontSize: 40, color: grey[600] }} />
    </span>
  );
};
const NextIcon = () => {
  return (
    <span className="carousel-icon-container">
      <ArrowForwardIosIcon sx={{ fontSize: 40, color: grey[600] }} />
    </span>
  );
};
const HomeSlider = () => {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div className="homeslider">
      <Carousel
        // activeIndex={index}
        // onSelect={handleSelect}
        className="homeslider-slideshow-container"
        fade
        nextIcon={<NextIcon />}
        prevIcon={<PrevIcon />}
      >
        <Carousel.Item>
          <div className="homeslider-video-container">
            <video
              src="//vjs.zencdn.net/v/oceans.mp4"
              autoPlay
              muted
              loop
              className="homeslider-video"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 item"
            src={images.sliderImage1}
            alt="First Img"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.sliderImage2}
            alt="Second Img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.sliderImage3}
            alt="Second Img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.sliderImage4}
            alt="Second Img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.sliderImage5}
            alt="Second Img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.sliderImage6}
            alt="Second Img"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
