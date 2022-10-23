import React from "react";
import MiddleHeadingLine from "../MiddleHeadingLine";
import images from "../../constants/images";

const OurBrands = () => {
  return (
    <div className="our-brands">
      <MiddleHeadingLine />
      <div className="ob-images">
        <img src={images.brand1} />
        <img src={images.brand2} />
        <img src={images.brand3} />
        <img src={images.brand4} />
        <img src={images.brand5} />
      </div>
    </div>
  );
};

export default OurBrands;
